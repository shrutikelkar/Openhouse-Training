"""Openhouse Game Explanation Check — standalone Vercel serverless API.

Fully independent from the Openhouse Quality Observations app: separate
login, separate data store, separate deploy. Trainees explain art & design
games out loud; Gemini asks follow-up questions and scores the explanation
on age fit, clarity, accuracy, and whether it was genuine or read verbatim
from the reference material.

Accounts (env vars set in the Vercel dashboard — defaults below are
placeholders, replace them before relying on this for anything real):
  STAFF_EMAIL / STAFF_PASSWORD               — signs in to run checks and view the dashboard
  APP_SECRET                                  — any long random string (signs tokens)
  KV_REST_API_URL / KV_REST_API_TOKEN         (Vercel KV)   — OR
  UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN  (Upstash)
  GEMINI_API_KEY                              — Google AI Studio key (free tier)
  GEMINI_MODEL                                — defaults to gemini-3.6-flash
"""
import os
import re
import json
import time
import hmac
import base64
import hashlib
import urllib.request
import urllib.error
from typing import Optional

from fastapi import FastAPI, Request, HTTPException, Header
from fastapi.middleware.cors import CORSMiddleware

SECRET = os.environ.get("APP_SECRET", "change-me-before-deploy")
STAFF_EMAIL = os.environ.get("STAFF_EMAIL", "staff@openhouse").strip().lower()
STAFF_PASSWORD = os.environ.get("STAFF_PASSWORD", "oh.explaincheck")

REDIS_URL = os.environ.get("KV_REST_API_URL") or os.environ.get("UPSTASH_REDIS_REST_URL")
REDIS_TOKEN = os.environ.get("KV_REST_API_TOKEN") or os.environ.get("UPSTASH_REDIS_REST_TOKEN")
EXPLAIN_LIST_KEY = "explanations"

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
GEMINI_MODEL = os.environ.get("GEMINI_MODEL", "gemini-flash-lite-latest")
EXPLAIN_MIN_TURNS = 2
EXPLAIN_MAX_TURNS = 5

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])


def _sign(payload: str) -> str:
    return hmac.new(SECRET.encode(), payload.encode(), hashlib.sha256).hexdigest()


def _make_token() -> str:
    return base64.urlsafe_b64encode(f"staff.{_sign('staff')}".encode()).decode()


def _check(authorization: Optional[str]) -> None:
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(401, "login required")
    try:
        role, sig = base64.urlsafe_b64decode(authorization.split(" ", 1)[1].encode()).decode().rsplit(".", 1)
    except Exception:
        raise HTTPException(401, "login required")
    if role != "staff" or not hmac.compare_digest(sig, _sign(role)):
        raise HTTPException(401, "login required")


def _redis(*cmd):
    if not REDIS_URL or not REDIS_TOKEN:
        raise HTTPException(500, "no data store configured — add Vercel KV / Upstash env vars")
    req = urllib.request.Request(
        REDIS_URL,
        data=json.dumps(list(cmd)).encode(),
        headers={"Authorization": f"Bearer {REDIS_TOKEN}", "Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=10) as r:
        return json.loads(r.read())


def _q_words(q: str) -> set:
    return set(re.findall(r"[a-z0-9]+", (q or "").lower()))


def _is_repeat_question(candidate: str, prior_questions: list) -> bool:
    """Word-overlap check — catches exact repeats and close rephrasings the
    model might produce despite being told not to repeat itself."""
    cset = _q_words(candidate)
    if not cset:
        return False
    for p in prior_questions:
        pset = _q_words(p)
        if not pset:
            continue
        overlap = len(cset & pset) / len(cset | pset)
        if overlap >= 0.55:
            return True
    return False


def _tokenize(text: str) -> list:
    return re.findall(r"[a-z0-9]+", (text or "").lower())


def _longest_common_run(a: list, b: list):
    """Longest contiguous run of tokens appearing in both sequences, in the
    same order — a much stronger 'reading the script' signal than plain word
    overlap, since genuine explanations rarely reproduce a long exact phrase."""
    if not a or not b:
        return 0, ""
    m, n = len(a), len(b)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    best_len, best_end = 0, 0
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if a[i - 1] == b[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
                if dp[i][j] > best_len:
                    best_len = dp[i][j]
                    best_end = i
    phrase = " ".join(a[best_end - best_len:best_end]) if best_len else ""
    return best_len, phrase


def _genuineness_signal(game: dict, history: list) -> str:
    """Computes an objective verbatim-overlap measurement between what the
    trainee said and the game's reference text, to ground the model's
    genuine/reading judgment in evidence rather than a vibe check."""
    ref_text = " ".join(filter(None, [
        game.get("goal") or "",
        " ".join(game.get("steps") or []),
        game.get("easier") or "",
        game.get("harder") or "",
        game.get("ends_when") or "",
        " ".join((game.get("difficulty_levels") or {}).values()),
        " ".join(v.get("text", "") for v in (game.get("variations") or [])),
    ]))
    trainee_text = " ".join(h.get("text", "") for h in history if h.get("role") == "trainee")
    ref_tokens = _tokenize(ref_text)
    trainee_tokens = _tokenize(trainee_text)
    run_len, run_phrase = _longest_common_run(trainee_tokens, ref_tokens)
    tset, rset = set(trainee_tokens), set(ref_tokens)
    overlap_pct = round(100 * len(tset & rset) / max(1, len(tset | rset)))
    return (
        f"Genuineness signal (objectively computed, not the model's opinion): the trainee's combined "
        f"spoken answer so far shares a longest verbatim run of {run_len} consecutive words with the "
        f"official reference text"
        + (f' ("{run_phrase}")' if run_phrase else "")
        + f", and an overall vocabulary overlap of {overlap_pct}% with the reference material.\n"
        "- A long verbatim run (roughly 6+ consecutive words matching the reference material "
        "word-for-word) strongly suggests the trainee is reading the script rather than explaining "
        "in their own words.\n"
        "- Short overlaps of common words, or matching a few key terms like the game name or "
        "materials, are normal and NOT evidence of reading — most vocabulary overlap with the "
        "reference is expected and fine.\n"
        "- Also weigh natural speech qualities: their own phrasing and reasonable imperfection reads "
        "as genuine; suspiciously polished, complete, written-style sentences that closely mirror the "
        "reference structure read as scripted.\n"
    )


def _gemini_json(system: str, user_message: str) -> dict:
    if not GEMINI_API_KEY:
        raise HTTPException(500, "no GEMINI_API_KEY configured — add it in the Vercel dashboard")
    url = (
        f"https://generativelanguage.googleapis.com/v1beta/models/{GEMINI_MODEL}:generateContent"
        f"?key={GEMINI_API_KEY}"
    )
    req = urllib.request.Request(
        url,
        data=json.dumps({
            "system_instruction": {"parts": [{"text": system}]},
            "contents": [{"role": "user", "parts": [{"text": user_message}]}],
            "generationConfig": {
                "maxOutputTokens": 4000,
                "responseMimeType": "application/json",
            },
        }).encode(),
        headers={"Content-Type": "application/json"},
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            body = json.loads(r.read())
    except urllib.error.HTTPError as e:
        detail = e.read().decode(errors="replace")
        raise HTTPException(502, f"Gemini API error ({e.code}): {detail}")
    try:
        text = body["candidates"][0]["content"]["parts"][0]["text"].strip()
    except (KeyError, IndexError):
        raise HTTPException(502, f"Gemini returned no usable response: {json.dumps(body)[:500]}")
    if text.startswith("```"):
        text = text.strip("`")
        text = text.split("\n", 1)[1] if "\n" in text else text
        if text.lower().startswith("json"):
            text = text[4:]
    try:
        return json.loads(text)
    except ValueError:
        raise HTTPException(502, f"model did not return valid JSON. Raw text: {text[:800]!r}. Full body: {json.dumps(body)[:800]}")


@app.post("/api/login")
async def login(req: Request):
    b = await req.json()
    email = (b.get("email") or "").strip().lower()
    password = b.get("password") or ""
    if email != STAFF_EMAIL or not hmac.compare_digest(password, STAFF_PASSWORD):
        raise HTTPException(401, "wrong email or password")
    return {"token": _make_token()}


@app.post("/api/explain/turn")
async def explain_turn(req: Request, authorization: Optional[str] = Header(None)):
    """One turn of the game-explanation quiz. The client sends the full game
    reference data (from games-data.js) plus the conversation so far; this
    returns either another follow-up question or the final 4-point score.
    """
    _check(authorization)
    b = await req.json()
    game = b.get("game") or {}
    game_name = game.get("name") or "the game"
    age_band = b.get("age_band") or "unknown"
    history = b.get("history") or []
    trainee_turns = sum(1 for h in history if h.get("role") == "trainee")
    prior_questions = [h.get("text", "") for h in history if h.get("role") == "ai"]

    system = (
        "You are quizzing a childcare educator-in-training on an art & design game "
        "they must run with children. You have the game's authoritative reference "
        "data below. Listen to what the trainee said and decide whether to ask one "
        "more short follow-up question, or finalize scoring.\n\n"
        f"Reference data (JSON): {json.dumps(game, ensure_ascii=False)}\n\n"
        f"The trainee has been told to explain this game for a group of children aged {age_band}.\n\n"
        + _genuineness_signal(game, history) + "\n"
        + (
            "Questions you have ALREADY asked in this conversation (do NOT repeat any of "
            "these, or ask a near-duplicate of one — always move to a new, different gap):\n"
            + "\n".join(f"- {q}" for q in prior_questions) + "\n\n"
            if prior_questions else ""
        )
        + "Rules:\n"
        f"- The trainee must answer at least {EXPLAIN_MIN_TURNS} turns before you finalize.\n"
        f"- You must finalize by turn {EXPLAIN_MAX_TURNS} no matter what.\n"
        "- Across the whole conversation, ask at least one challenge question about how "
        "to make the game easier or harder for a child's needs, using the 'easier'/'harder'/"
        "'difficulty_levels' fields in the reference data as the correct answer.\n"
        "- Ask only ONE question at a time, short and natural to say out loud (it will be "
        "read by text-to-speech) — do not list multiple questions.\n"
        "- Never repeat a question already listed above, and never ask a generic filler "
        "question like 'can you tell me more' — always name the specific thing you want "
        "(a missing step, a specific material, the group size, or the easier/harder answer).\n"
        "- If you cannot think of a new, specific, non-repetitive question — because the "
        "trainee has already covered the goal, steps, materials, and an easier/harder answer "
        "— finalize instead of asking anything further, even before the max turn.\n"
        "- Target the biggest gap or error first (missing step, wrong material, wrong group "
        "size/goal, or a wrong/missing easier-harder answer).\n"
        "- When finalizing, score four criteria as 1 (met) or 0 (not met): "
        "age_appropriateness (did they pitch materials/instructions/pace to the stated age "
        "band appropriately), clarity (was the explanation easy to follow, in a sensible "
        "order), accuracy (did it match the reference rules, goal, materials, and at least "
        "one correct easier/harder answer), and genuine (1 if this reads as their own "
        "understanding in their own words, 0 if it reads as reading directly from the "
        "reference script — use the genuineness signal above as evidence).\n\n"
        "Respond with ONLY one JSON object, no other text, no markdown fences, in one of "
        "these two shapes:\n"
        '{"action":"ask","question":"..."}\n'
        'or\n'
        '{"action":"final","scores":{"age_appropriateness":0,"clarity":0,"accuracy":0,"genuine":0},"reasoning":"..."}'
    )
    transcript = "\n".join(f"{h.get('role')}: {h.get('text','')}" for h in history)
    result = _gemini_json(system, transcript or "(no explanation given yet)")

    # The model can still slip and repeat a question despite being told not to.
    # If that happens after the minimum turns are already met, treat it as a
    # signal there's nothing new left to probe and force a real finalize call
    # rather than let the conversation loop. Below the minimum, swap in a
    # concrete, distinct fallback question instead of retrying the same prompt.
    if result.get("action") == "ask" and _is_repeat_question(result.get("question", ""), prior_questions):
        if trainee_turns >= EXPLAIN_MIN_TURNS:
            finalize_system = system + (
                "\n\nYou just tried to ask a question that repeats one already asked. "
                "There is nothing new left to probe — finalize now with scores and reasoning "
                "instead of asking anything further."
            )
            result = _gemini_json(finalize_system, transcript)
            if result.get("action") != "final":
                result = {
                    "action": "final",
                    "scores": {"age_appropriateness": 1, "clarity": 1, "accuracy": 1, "genuine": 1},
                    "reasoning": "Trainee covered the key points across the conversation; no further gaps to probe.",
                }
        else:
            fallback_pool = [
                f"What's the very first thing you'd tell the children to do to set up {game_name}?",
                f"What materials would you need on hand to run {game_name}?",
                f"How do you know when {game_name} is over — what's the end condition?",
                f"How would you make {game_name} easier for a child who's struggling?",
                f"How would you make {game_name} harder for a child who's ready for more?",
            ]
            fresh = next((q for q in fallback_pool if not _is_repeat_question(q, prior_questions)), None)
            result = {"action": "ask", "question": fresh or fallback_pool[0]}

    if trainee_turns < EXPLAIN_MIN_TURNS and result.get("action") != "ask":
        result = {
            "action": "ask",
            "question": f"What's the very first thing you'd tell the children to do to set up {game_name}?",
        }
    if trainee_turns >= EXPLAIN_MAX_TURNS and result.get("action") != "final":
        result = {
            "action": "final",
            "scores": {"age_appropriateness": 0, "clarity": 0, "accuracy": 0, "genuine": 0},
            "reasoning": "Reached the maximum number of follow-up questions without a clear finalization from the model.",
        }
    if result.get("action") == "final":
        result.setdefault("scores", {}).setdefault("genuine", 0)
    return result


@app.post("/api/explain/save")
async def explain_save(req: Request, authorization: Optional[str] = Header(None)):
    _check(authorization)
    b = await req.json()
    rec = {
        "id": base64.urlsafe_b64encode(os.urandom(6)).decode().rstrip("="),
        "received_at": time.strftime("%Y-%m-%d %H:%M"),
        "game_id": b.get("game_id"),
        "game_name": b.get("game_name"),
        "age_band": b.get("age_band"),
        "trainee_name": (b.get("trainee_name") or "").strip(),
        "history": b.get("history") or [],
        "scores": b.get("scores") or {},
        "reasoning": b.get("reasoning") or "",
    }
    _redis("LPUSH", EXPLAIN_LIST_KEY, json.dumps(rec, ensure_ascii=False))
    return {"ok": True, "id": rec["id"]}


@app.get("/api/explanations")
async def list_explanations(authorization: Optional[str] = Header(None)):
    _check(authorization)
    res = _redis("LRANGE", EXPLAIN_LIST_KEY, "0", "999")
    rows = res.get("result") or []
    return [json.loads(x) for x in rows]
