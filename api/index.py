"""Openhouse Game Explanation Check — standalone Vercel serverless API.

Fully independent from the Openhouse Quality Observations app: separate
login, separate data store, separate deploy. Trainees explain art & design
games out loud; Gemini asks follow-up questions and scores the explanation
on age fit, clarity, gameplay accuracy, challenge-adjustment accuracy, and
whether it was genuine or read verbatim from the reference material.

Two roles:
  staff    — signs in with STAFF_EMAIL/STAFF_PASSWORD, reaches the dashboard
             (view every trainee's responses, add new trainees).
  trainee  — signs in with phone + name + a 4-digit PIN the admin set when
             adding them, reaches only the recording tool, scoped to their
             own category and their own saved records.

Accounts (env vars set in the Vercel dashboard — defaults below are
placeholders, replace them before relying on this for anything real):
  STAFF_EMAIL / STAFF_PASSWORD               — admin login
  APP_SECRET                                  — any long random string (signs tokens)
  KV_REST_API_URL / KV_REST_API_TOKEN         (Vercel KV)   — OR
  UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN  (Upstash)
  GEMINI_API_KEY                              — Google AI Studio key (free tier)
  GEMINI_MODEL                                — defaults to gemini-flash-lite-latest
  SMTP_EMAIL / SMTP_APP_PASSWORD              — optional: sends a welcome email with
             login credentials when a trainee is added, if they have an email on file.
             Use a Gmail/Workspace address with an App Password (needs 2-Step
             Verification enabled) — free, no third-party service. If unset, trainee
             creation still works, it just skips the email.

Trainees are stored in Redis (admin-managed at runtime, not in env vars).
Their PIN is stored as-is (not hashed) — this is a low-stakes internal
training tool, not a system holding sensitive personal data, so a 4-digit
PIN is meant as friction against casual misuse, not real security.
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
import io
import smtplib
from email.mime.text import MIMEText
from typing import Optional

from fastapi import FastAPI, Request, HTTPException, Header
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
from docx import Document
from docx.shared import Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH

SECRET = os.environ.get("APP_SECRET", "change-me-before-deploy")
STAFF_EMAIL = os.environ.get("STAFF_EMAIL", "staff@openhouse").strip().lower()
STAFF_PASSWORD = os.environ.get("STAFF_PASSWORD", "oh.explaincheck")

REDIS_URL = os.environ.get("KV_REST_API_URL") or os.environ.get("UPSTASH_REDIS_REST_URL")
REDIS_TOKEN = os.environ.get("KV_REST_API_TOKEN") or os.environ.get("UPSTASH_REDIS_REST_TOKEN")
EXPLAIN_LIST_KEY = "explanations"
TRAINEES_KEY = "trainees"  # redis hash: phone -> json trainee record

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
GEMINI_MODEL = os.environ.get("GEMINI_MODEL", "gemini-flash-lite-latest")
EXPLAIN_MIN_TURNS = 2
EXPLAIN_MAX_TURNS = 5

SMTP_EMAIL = os.environ.get("SMTP_EMAIL")
SMTP_APP_PASSWORD = os.environ.get("SMTP_APP_PASSWORD")
SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))

CATEGORIES = ["art-design", "public-speaking", "robotics", "music", "chess"]

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])


def _sign(payload: str) -> str:
    return hmac.new(SECRET.encode(), payload.encode(), hashlib.sha256).hexdigest()


def _make_token(role: str, sub: str = "") -> str:
    payload = f"{role}:{sub}"
    return base64.urlsafe_b64encode(f"{payload}.{_sign(payload)}".encode()).decode()


def _decode_token(authorization: Optional[str]) -> tuple:
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(401, "login required")
    try:
        raw = base64.urlsafe_b64decode(authorization.split(" ", 1)[1].encode()).decode()
        payload, sig = raw.rsplit(".", 1)
        role, sub = payload.split(":", 1)
    except Exception:
        raise HTTPException(401, "login required")
    if not hmac.compare_digest(sig, _sign(payload)):
        raise HTTPException(401, "login required")
    return role, sub


def _check(authorization: Optional[str], allowed_roles: Optional[set] = None) -> tuple:
    role, sub = _decode_token(authorization)
    if allowed_roles is not None and role not in allowed_roles:
        raise HTTPException(403, "not allowed for this login")
    return role, sub


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


def _get_trainee(phone: str) -> Optional[dict]:
    res = _redis("HGET", TRAINEES_KEY, phone)
    val = res.get("result")
    return json.loads(val) if val else None


def _list_trainees() -> list:
    res = _redis("HGETALL", TRAINEES_KEY)
    flat = res.get("result") or []
    out = []
    for i in range(1, len(flat), 2):
        try:
            out.append(json.loads(flat[i]))
        except ValueError:
            continue
    return out


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


# ---------- auth ----------

@app.post("/api/login")
async def login(req: Request):
    """Staff (admin) login."""
    b = await req.json()
    email = (b.get("email") or "").strip().lower()
    password = b.get("password") or ""
    if email != STAFF_EMAIL or not hmac.compare_digest(password, STAFF_PASSWORD):
        raise HTTPException(401, "wrong email or password")
    return {"token": _make_token("staff")}


@app.post("/api/trainee/login")
async def trainee_login(req: Request):
    b = await req.json()
    phone = (b.get("phone") or "").strip()
    name = (b.get("name") or "").strip()
    pin = (b.get("pin") or "").strip()
    if not phone or not name or not pin:
        raise HTTPException(400, "phone, name and pin are all required")
    trainee = _get_trainee(phone)
    if not trainee or trainee.get("name", "").strip().lower() != name.lower() or not hmac.compare_digest(str(trainee.get("pin", "")), pin):
        raise HTTPException(401, "no match for that phone number, name and PIN")
    return {
        "token": _make_token("trainee", phone),
        "name": trainee.get("name"),
        "phone": phone,
        "category": trainee.get("category"),
        "cohort": trainee.get("cohort"),
        "approved": bool(trainee.get("approved")),
    }


@app.get("/api/trainee/status")
async def trainee_status(authorization: Optional[str] = Header(None)):
    """Fresh approval/category/cohort status for the current trainee — used
    to reflect an admin approving them without requiring a fresh login."""
    role, sub = _check(authorization, {"trainee"})
    trainee = _get_trainee(sub)
    if not trainee:
        raise HTTPException(404, "trainee record not found")
    return {
        "name": trainee.get("name"),
        "category": trainee.get("category"),
        "cohort": trainee.get("cohort"),
        "approved": bool(trainee.get("approved")),
    }


# ---------- admin: trainee management ----------

def _send_welcome_email(to_email: str, trainee: dict, site_url: str) -> bool:
    """Best-effort welcome email with login credentials. Returns False (never
    raises) if SMTP isn't configured or sending fails — trainee creation must
    never be blocked by an email problem."""
    if not SMTP_EMAIL or not SMTP_APP_PASSWORD or not to_email:
        return False
    body = (
        f"Hi {trainee['name']},\n\n"
        f"You've been added to the Openhouse game explanation check"
        f"{' (' + trainee['category'] + ')' if trainee.get('category') else ''}.\n\n"
        f"Sign in here: {site_url}\n"
        f"Phone number: {trainee['phone']}\n"
        f"PIN: {trainee['pin']}\n\n"
        "— Housie"
    )
    msg = MIMEText(body)
    msg["Subject"] = "Your Openhouse game explanation check login"
    msg["From"] = SMTP_EMAIL
    msg["To"] = to_email
    try:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=10) as server:
            server.starttls()
            server.login(SMTP_EMAIL, SMTP_APP_PASSWORD)
            server.send_message(msg)
        return True
    except Exception:
        return False


@app.post("/api/admin/trainees")
async def add_trainee(req: Request, authorization: Optional[str] = Header(None)):
    _check(authorization, {"staff"})
    b = await req.json()
    phone = (b.get("phone") or "").strip()
    name = (b.get("name") or "").strip()
    pin = (b.get("pin") or "").strip()
    category = (b.get("category") or "").strip()
    cohort = (b.get("cohort") or "").strip()
    email = (b.get("email") or "").strip()
    if not phone or not name or not pin:
        raise HTTPException(400, "phone, name and pin are required")
    if category not in CATEGORIES:
        raise HTTPException(400, f"category must be one of {CATEGORIES}")
    rec = {
        "phone": phone, "name": name, "pin": pin,
        "category": category, "cohort": cohort, "email": email,
        "approved": False,
        "added_at": time.strftime("%Y-%m-%d %H:%M"),
    }
    _redis("HSET", TRAINEES_KEY, phone, json.dumps(rec, ensure_ascii=False))
    email_sent = False
    if email:
        site_url = str(req.base_url).rstrip("/")
        email_sent = _send_welcome_email(email, rec, site_url)
    return {"ok": True, "trainee": rec, "email_sent": email_sent}


@app.post("/api/admin/trainees/approve")
async def approve_trainee(req: Request, authorization: Optional[str] = Header(None)):
    """Marks a trainee's assessment as approved, unlocking their download.
    Toggleable — pass approved:false to revoke."""
    _check(authorization, {"staff"})
    b = await req.json()
    phone = (b.get("phone") or "").strip()
    approved = bool(b.get("approved", True))
    trainee = _get_trainee(phone)
    if not trainee:
        raise HTTPException(404, "trainee not found")
    trainee["approved"] = approved
    _redis("HSET", TRAINEES_KEY, phone, json.dumps(trainee, ensure_ascii=False))
    return {"ok": True, "trainee": trainee}


@app.get("/api/admin/trainees")
async def list_trainees(authorization: Optional[str] = Header(None)):
    _check(authorization, {"staff"})
    return _list_trainees()


@app.get("/api/admin/categories")
async def get_categories(authorization: Optional[str] = Header(None)):
    _check(authorization, {"staff"})
    return CATEGORIES


# ---------- explanation quiz ----------

@app.post("/api/explain/turn")
async def explain_turn(req: Request, authorization: Optional[str] = Header(None)):
    """One turn of the game-explanation quiz. The client sends the full game
    reference data (from games-data.js) plus the conversation so far; this
    returns either another follow-up question or the final 5-point score.
    """
    _check(authorization)
    b = await req.json()
    game = b.get("game") or {}
    game_name = game.get("name") or "the game"
    age_band = b.get("age_band") or "unknown"
    history = b.get("history") or []
    trainee_turns = sum(1 for h in history if h.get("role") == "trainee")
    prior_questions = [h.get("text", "") for h in history if h.get("role") == "ai"]

    if age_band in ("5–8", "5-8"):
        age_example_rule = (
            "Since the age band here is 5-8, they must ALSO give at least one concrete worked "
            "example (e.g. \"like if you pick a red bead, you put it on the red square\") — for "
            "young children, listing abstract rules without a concrete example is NOT enough, score 0."
        )
    else:
        age_example_rule = (
            "For this 8-12 band, a concrete example is a plus but not mandatory, as long as the "
            "direct-address register is right."
        )

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
        "- When finalizing, score five criteria as 1 (met) or 0 (not met):\n"
        "  1. age_appropriateness — this is NOT just about materials/pacing. The trainee must have "
        "actually pitched the explanation AS IF speaking directly to the children themselves (simple, "
        "direct, concrete language — 'you pick a bead and...') — not described the game mechanically "
        "to an adult colleague or trainer ('the children pick a bead and...' read like a briefing is "
        "a fail even if every fact is correct). "
        + age_example_rule + "\n"
        "  2. clarity — was the explanation easy to follow, steps in a sensible order.\n"
        "  3. gameplay_accuracy — did the core mechanics match the reference: goal, steps, and materials.\n"
        "  4. challenge_accuracy — did they give a correct easier/harder difficulty-adjustment answer "
        "(scored separately from gameplay_accuracy — a trainee can get the game right but the "
        "difficulty adjustment wrong, or vice versa). This counts as correct (1) if it matches the "
        "reference 'easier'/'harder'/'difficulty_levels' fields, OR if they propose a different but "
        "genuinely sound, sensible, age-appropriate way to adjust difficulty — do not penalize a good "
        "idea just because it isn't the documented one.\n"
        "  5. genuine — 1 if this reads as their own understanding in their own words, 0 if it reads "
        "as reading directly from the reference script (use the genuineness signal above as evidence).\n\n"
        "Additionally, when finalizing: if the trainee's easier/harder answer included a genuinely NEW "
        "idea for adjusting difficulty — one that is NOT already described in the reference 'easier'/"
        "'harder'/'difficulty_levels'/'variations' fields, and is a sensible, usable suggestion — "
        "capture it in a \"new_idea\" field (a short, cleaned-up sentence describing the idea). If there "
        "was no new idea (they just repeated or paraphrased the documented answer, or gave nothing "
        "usable), set \"new_idea\" to null. Only include \"new_idea\" in the final action, not in ask.\n\n"
        "Also when finalizing, include a \"suggestion\" field: one short, concrete, actionable sentence. "
        "If any criterion scored 0, target the single most important miss with a specific fix (e.g. "
        "'Next time, speak directly to the children — try starting with \"you pick a bead...\" instead "
        "of describing what they do'). If all five criteria scored 1, make it a brief, genuine "
        "encouragement, not a fix (e.g. 'Great work — this was clear, accurate, and in your own words').\n\n"
        "Respond with ONLY one JSON object, no other text, no markdown fences, in one of "
        "these two shapes:\n"
        '{"action":"ask","question":"..."}\n'
        'or\n'
        '{"action":"final","scores":{"age_appropriateness":0,"clarity":0,"gameplay_accuracy":0,"challenge_accuracy":0,"genuine":0},"reasoning":"...","new_idea":null,"suggestion":"..."}'
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
                    "scores": {"age_appropriateness": 1, "clarity": 1, "gameplay_accuracy": 1, "challenge_accuracy": 1, "genuine": 1},
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
            "scores": {"age_appropriateness": 0, "clarity": 0, "gameplay_accuracy": 0, "challenge_accuracy": 0, "genuine": 0},
            "reasoning": "Reached the maximum number of follow-up questions without a clear finalization from the model.",
        }
    if result.get("action") == "final":
        result.setdefault("scores", {}).setdefault("genuine", 0)
        result.setdefault("new_idea", None)
        result.setdefault("suggestion", "")
    return result


@app.post("/api/explain/save")
async def explain_save(req: Request, authorization: Optional[str] = Header(None)):
    role, sub = _check(authorization)
    b = await req.json()
    trainee_phone = sub if role == "trainee" else (b.get("trainee_phone") or "")
    category = b.get("category") or ""
    cohort = b.get("cohort") or ""
    if role == "trainee":
        # trust the server-side trainee record for category/cohort, not the client
        t = _get_trainee(sub)
        if t:
            category = t.get("category") or category
            cohort = t.get("cohort") or cohort
    rec = {
        "id": base64.urlsafe_b64encode(os.urandom(6)).decode().rstrip("="),
        "received_at": time.strftime("%Y-%m-%d %H:%M"),
        "game_id": b.get("game_id"),
        "game_name": b.get("game_name"),
        "age_band": b.get("age_band"),
        "trainee_name": (b.get("trainee_name") or "").strip(),
        "trainee_phone": trainee_phone,
        "category": category,
        "cohort": cohort,
        "history": b.get("history") or [],
        "scores": b.get("scores") or {},
        "reasoning": b.get("reasoning") or "",
        "new_idea": b.get("new_idea") or None,
        "suggestion": b.get("suggestion") or "",
    }
    _redis("LPUSH", EXPLAIN_LIST_KEY, json.dumps(rec, ensure_ascii=False))
    return {"ok": True, "id": rec["id"]}


@app.get("/api/explanations")
async def list_explanations(authorization: Optional[str] = Header(None)):
    _check(authorization, {"staff"})
    res = _redis("LRANGE", EXPLAIN_LIST_KEY, "0", "999")
    rows = res.get("result") or []
    return [json.loads(x) for x in rows]


@app.get("/api/my-explanations")
async def my_explanations(authorization: Optional[str] = Header(None)):
    role, sub = _check(authorization, {"trainee"})
    res = _redis("LRANGE", EXPLAIN_LIST_KEY, "0", "999")
    rows = res.get("result") or []
    all_recs = [json.loads(x) for x in rows]
    return [r for r in all_recs if r.get("trainee_phone") == sub]


CRITERIA_LABELS = [
    ("age_appropriateness", "Age fit"),
    ("clarity", "Clarity"),
    ("gameplay_accuracy", "Gameplay accuracy"),
    ("challenge_accuracy", "Challenge accuracy"),
    ("genuine", "Genuine (own words, not read)"),
]

BRAND_CORAL = RGBColor(0xCE, 0x45, 0x20)
BRAND_TEAL = RGBColor(0x0E, 0x8F, 0xA3)
BRAND_INK = RGBColor(0x2C, 0x2B, 0x28)
BRAND_MUTED = RGBColor(0x6B, 0x67, 0x5F)


@app.get("/api/my-assessment.docx")
async def my_assessment_docx(authorization: Optional[str] = Header(None)):
    role, sub = _check(authorization, {"trainee"})
    trainee = _get_trainee(sub)
    if not trainee:
        raise HTTPException(404, "trainee record not found")
    if not trainee.get("approved"):
        raise HTTPException(403, "your assessment hasn't been approved for download yet — check with your admin")

    res = _redis("LRANGE", EXPLAIN_LIST_KEY, "0", "999")
    rows = res.get("result") or []
    all_recs = [json.loads(x) for x in rows]
    mine = [r for r in all_recs if r.get("trainee_phone") == sub]
    latest = {}
    for r in mine:
        if r.get("game_id") not in latest:
            latest[r["game_id"]] = r
    done = list(latest.values())
    done.sort(key=lambda r: r.get("received_at", ""))

    def score_total(scores):
        return sum(1 for k, _ in CRITERIA_LABELS if scores.get(k))

    grand = sum(score_total(r.get("scores") or {}) for r in done)

    doc = Document()
    title = doc.add_heading("Game Explanation Assessment", level=0)
    title.runs[0].font.color.rgb = BRAND_CORAL

    sub_p = doc.add_paragraph()
    sub_run = sub_p.add_run(f"{trainee.get('name')} — {trainee.get('category')}" + (f" — {trainee.get('cohort')}" if trainee.get("cohort") else ""))
    sub_run.bold = True
    sub_run.font.size = Pt(13)
    doc.add_paragraph(time.strftime("%d %B %Y"), style=None)

    overall = doc.add_paragraph()
    overall_run = overall.add_run(f"Overall: {grand} / {len(done) * 5}  ({len(done)} games completed)")
    overall_run.bold = True
    overall_run.font.size = Pt(12)
    overall_run.font.color.rgb = BRAND_TEAL

    # cross-game pattern summary
    misses = {}
    for r in done:
        scores = r.get("scores") or {}
        for k, label in CRITERIA_LABELS:
            if not scores.get(k):
                misses[label] = misses.get(label, 0) + 1
    doc.add_heading("Areas to work on", level=1).runs[0].font.color.rgb = BRAND_TEAL
    if misses:
        for label, count in sorted(misses.items(), key=lambda x: -x[1]):
            p = doc.add_paragraph(style="List Bullet")
            p.add_run(f"{label} — missed in {count} of {len(done)} games")
    else:
        doc.add_paragraph("No repeated weak spots — strong across the board.")

    doc.add_heading("Game by game", level=1).runs[0].font.color.rgb = BRAND_TEAL
    for r in done:
        scores = r.get("scores") or {}
        total = score_total(scores)
        h = doc.add_heading(f"{r.get('game_name')} (ages {r.get('age_band')}) — {total}/5", level=2)
        h.runs[0].font.color.rgb = BRAND_INK
        for k, label in CRITERIA_LABELS:
            p = doc.add_paragraph(style="List Bullet")
            mark = "✓" if scores.get(k) else "✗"
            run = p.add_run(f"{mark} {label}")
            run.font.color.rgb = BRAND_TEAL if scores.get(k) else RGBColor(0xC0, 0x49, 0x2F)
        if r.get("reasoning"):
            p = doc.add_paragraph()
            p.add_run("Notes: ").bold = True
            p.add_run(r["reasoning"])
        if r.get("suggestion"):
            p = doc.add_paragraph()
            p.add_run("Suggestion: ").bold = True
            run = p.add_run(r["suggestion"])
            run.italic = True
        if r.get("new_idea"):
            p = doc.add_paragraph()
            p.add_run("💡 Idea suggested: ").bold = True
            p.add_run(r["new_idea"])

    closing = doc.add_paragraph()
    closing_run = closing.add_run("— Housie")
    closing_run.italic = True
    closing_run.font.color.rgb = BRAND_MUTED

    buf = io.BytesIO()
    doc.save(buf)
    buf.seek(0)
    filename = re.sub(r"[^a-z0-9]+", "-", trainee.get("name", "assessment").lower()) + "-assessment.docx"
    return Response(
        content=buf.getvalue(),
        media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )
