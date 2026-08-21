// Openhouse art & design games library — reference data used to score trainee explanations.
// To add a game later: append an object here in the same shape.
window.GAMES = [
  {
    id: "match-me",
    category: "art-design",
    name: "Match Me",
    group_size: "3–8 children · 1 educator",
    duration: "25 min",
    goal: "the child picks a bead without looking and places it on the matching square of their 9-grid.",
    steps: [
      "give each child a 9-grid template card. put all the coloured beads in a bowl in the centre.",
      "the first child picks one bead from the bowl without looking.",
      "the child compares the bead to their grid. if it matches a square, they place it there. if not, the bead goes back in the bowl.",
      "the next child takes a turn. keep going around the circle.",
      "the first child to finish a row or the whole grid wins."
    ],
    ends_when: "the first child finishes a row or the whole grid.",
    easier: "match colours only — with beads or picture cards.",
    harder: "children play bingo without your cues — each child takes a turn to call out a colour and pattern.",
    variations: [
      { name: "Picture matching", text: "Child draws a picture card from a deck and places it on the matching colour grid. If no match, discard. First to finish a row or grid wins." },
      { name: "Pattern Bingo", text: "Educator calls out a colour + pattern combination (e.g. \"yellow straight lines\"). Children mark if present. First to finish a row or grid wins." }
    ],
    difficulty_levels: {
      easy: "match colours only — with beads or picture cards.",
      medium: "Pattern Bingo — educator calls out a colour + pattern combination and children mark if present.",
      hard: "children play Bingo without educator's cues — each child takes a turn to call out a colour + pattern."
    },
    materials: ["9-grid template card", "Coloured beads in a bowl or box", "Coloured object cards", "Timer", "Dry-erase markers (optional)"],
    skills: ["C&P", "L&T", "I&C"]
  },
  {
    id: "colour-flip",
    category: "art-design",
    name: "Colour Flip",
    group_size: "3–8 children · 1 educator",
    duration: "25 min",
    goal: "the child flips two face-down colour cards and keeps the pair if the colours match.",
    steps: [
      "shuffle the 56 colour cards and lay them all out face down.",
      "the first child flips two cards for the whole group to see.",
      "if both cards show the same colour, the child keeps the pair. if not, they flip both cards back over.",
      "the next child takes a turn. keep going until all pairs are found.",
      "count each child's pairs. the child with the most pairs wins."
    ],
    ends_when: "all pairs have been found and no cards remain face down.",
    easier: "colour matching only.",
    harder: "use the difficult mixing cards and a timer to limit each turn.",
    variations: [
      { name: "Colour matching", text: "Each player flips two Colour Cards on their turn. If both cards are the same colour, they keep the pair. If not, they flip the cards back. The player with the most pairs at the end wins." },
      { name: "Colour Mixing cards", text: "Each player starts with an Easy Mixing Card. On their turn, flip two Colour Cards from the grid. If the flipped colours match the formula on the Mixing Card, they keep the cards — if not, they place them back." },
      { name: "Missing mixing card", text: "The educator gives a Medium or Difficult Mixing Card with either 1 or 2 colours missing. Children find the matching pair by flipping 2 cards." }
    ],
    difficulty_levels: {
      easy: "Colour matching only.",
      medium: "Easy and Medium Mixing Cards.",
      hard: "Difficult Mixing Cards. Timer can be used to limit time."
    },
    materials: ["56 Colour Cards", "Easy Mixing Cards (14)", "Medium Mixing Cards (14)", "Difficult Mixing Cards (28)"],
    skills: ["C&P", "I&C"]
  },
  {
    id: "shape-stitch",
    category: "art-design",
    name: "Shape Stitch",
    group_size: "3–8 children · 1 educator",
    duration: "25 min",
    goal: "the child sews through a template with a shoelace using the chosen stitch type.",
    steps: [
      "give each child a sewing template and a shoelace.",
      "show the stitch for the day — running stitch, backstitch, whip stitch, or pattern stitching.",
      "the child threads the shoelace through the holes in the template following the stitch.",
      "walk around and help children keep the shoelace from tangling and the stitch even.",
      "when the child finishes their template, they show it to the group."
    ],
    ends_when: "every child has finished stitching their template.",
    easier: "running stitch and whip stitch.",
    harder: "pattern stitching — combine stitch types in a design of the child's choosing.",
    variations: [],
    difficulty_levels: {
      easy: "Running Stitch and Whip stitch.",
      medium: "Backstitch.",
      hard: "Pattern stitching."
    },
    materials: ["Sewing templates (numbers, alphabets, and object outlines)", "Shoelaces"],
    skills: ["L&T", "S&F", "I&C"]
  },
  {
    id: "shape-fusion",
    category: "art-design",
    name: "Shape Fusion",
    group_size: "3–8 children · 1 educator",
    duration: "25 min",
    goal: "the child builds a subject from transparent geometric pieces without speaking, while others guess what it is.",
    steps: [
      "put the transparent geometric pieces in the centre. show one shape card to a builder so no one else sees it.",
      "the builder starts arranging the pieces silently to make the subject on the card.",
      "the other children watch and call out guesses as the shape forms.",
      "the round ends when a child guesses correctly or the builder finishes.",
      "pass the turn to the next child with a new shape card."
    ],
    ends_when: "every child has had a turn as the builder.",
    easier: "use b1 cards and you name the category before the child starts building.",
    harder: "use b2 cards in a relay — teams race to finish the most cards.",
    variations: [
      { name: "Child's choice", text: "The child picks which subject they want to create from the Shape Card and the other children guess." },
      { name: "Relay / race", text: "The group splits into teams and the teams compete to make the most subjects — whichever team finishes a card, or a set number of cards, first wins." }
    ],
    difficulty_levels: {
      easy: "B1 cards, educator names category.",
      medium: "B1 or B2, no hints.",
      hard: "B2 cards, relay format."
    },
    materials: ["Two sets of 60 transparent geometric pieces", "Shape Cards B1 and B2"],
    skills: ["S&F", "I&C", "B&C"]
  },
  {
    id: "cue-cards",
    category: "art-design",
    name: "Cue Cards",
    group_size: "3–8 children · 1 educator",
    duration: "25 min",
    goal: "the child follows step-by-step drawing instructions on a cue card and completes the extension challenge.",
    steps: [
      "place one cue card in the centre where every child can see it.",
      "give each child a drawing sheet and a fine-line marker or pencil.",
      "children follow the steps on the card simultaneously, one step at a time.",
      "when everyone has finished the card, give the extension challenge.",
      "children add the extension to their drawing."
    ],
    ends_when: "every child has completed the card and the extension challenge.",
    easier: "use b1 cards, keep them visible throughout, no timer.",
    harder: "show a b2 card for one minute then remove it — the child draws from memory.",
    variations: [],
    difficulty_levels: {
      easy: "B1 cards, visible throughout, no timer.",
      medium: "B1 or B2, educator names one thing to observe.",
      hard: "B2 card shown for a minute then removed, drawn from memory."
    },
    materials: ["Cue Card sets B1 and B2", "Drawing paper", "Fine-line markers or pencils"],
    skills: ["S&F", "L&T", "B&C"]
  },
  {
    id: "artventure",
    category: "art-design",
    name: "Artventure",
    group_size: "3–8 children · 1 educator",
    duration: "25 min",
    goal: "the child rolls the dice, lands on an art zone, and completes a challenge card within the time limit.",
    steps: [
      "set up the board with tokens on start and the four zone card decks nearby — sketch, colour, build, and mixed media.",
      "the first child rolls the dice and moves their token that many spaces.",
      "the child draws a challenge card from the deck that matches the zone they landed on.",
      "start the timer. the child completes the challenge before time runs out.",
      "pass the dice to the next child and repeat."
    ],
    ends_when: "every child has had a turn or the group reaches the end of the board.",
    easier: "use b1 challenges from the challenge cards.",
    harder: "use b2 challenges with limited time.",
    variations: [
      { name: "Cooperative variation", text: "The whole group plays as a team. Each child takes a turn rolling the dice, and all the children do the same challenge as on the card drawn by that child. Then the next player rolls." }
    ],
    difficulty_levels: {
      easy: "B1 challenges from challenge cards.",
      medium: "B2 challenges from challenge cards.",
      hard: "B2 challenges with limited time."
    },
    art_zones: [
      "Sketch zone (Yellow tile/card) — children complete a simple sketch activity.",
      "Colour zone (Teal tile/card) — children complete a colouring activity on given sheets.",
      "Build zone (Pink tile/card) — children build a structure using blocks or pipe cleaners.",
      "Mixed media zone (Light blue tile/card) — children complete the given activity using mixed mediums."
    ],
    materials: ["Game board", "Player tokens", "Dice", "Timer", "Challenge card decks per zone", "Pencils or crayons", "Clay", "Blocks or pipe cleaners", "Colour sheets"],
    skills: ["S&F", "C&P", "I&C"]
  },
  {
    id: "imagine-that",
    category: "art-design",
    name: "Imagine That",
    group_size: "3–8 children · 1 educator",
    duration: "25 min",
    goal: "the child describes a card image without naming it while the others draw what they hear.",
    steps: [
      "pick one child to be the describer. show them a card from the animals or objects deck without letting anyone else see.",
      "give every other child a drawing sheet and a pencil or marker.",
      "the describer describes the subject on the card without naming it.",
      "the other children draw what they hear.",
      "when everyone is done, the describer picks the drawing that best matches what they had in mind."
    ],
    ends_when: "every child has had a turn as the describer.",
    easier: "use easy cards — the drawing children can ask the describer two questions.",
    harder: "use difficult cards — no questions and no clues allowed.",
    variations: [],
    difficulty_levels: {
      easy: "easy cards — the guessing audience can ask the describer 2 questions.",
      medium: "easy cards — no questions allowed.",
      hard: "difficult cards — no clues allowed."
    },
    materials: ["Physical card decks — Animals and Objects", "Drawing paper", "Colour pencils or markers"],
    skills: ["I&C", "S&F", "B&C"]
  },
  {
    id: "doodle-dash",
    category: "art-design",
    name: "Doodle Dash",
    group_size: "3–8 children · 1 educator",
    duration: "25 min",
    goal: "the child draws a prompt fast and scores a point if their drawing is unique to the group.",
    steps: [
      "give every child a drawing sheet or whiteboard and a pencil or marker.",
      "read one prompt to the group, for example — something that starts with the letter c.",
      "all children draw at the same time within the set time on the timer.",
      "when time is up, everyone reveals their drawing.",
      "duplicates score zero. a unique drawing scores a point. give bonus points for the funniest or most artistic, voted by the group."
    ],
    ends_when: "the group has finished the set number of prompts and tallied scores.",
    easier: "no time limit — take as long as you need.",
    harder: "rapid sketching — a set number of prompts in a limited time, team or individual, every drawing done before time is up.",
    variations: [],
    difficulty_levels: {
      easy: "no time limit — take as long as you need.",
      medium: "a set time per prompt — draw before the timer runs out.",
      hard: "rapid sketching — a set number of prompts in a limited time, team or individual. must complete every drawing before time is up."
    },
    materials: ["Drawing prompts — https://wordwall.net/resource/86438051/sketch-it-up-deck-2", "Drawing paper or whiteboards", "Pencils or markers", "Timer"],
    skills: ["I&C", "S&F", "B&C"]
  },
  {
    id: "art-gym-book",
    category: "art-design",
    name: "Art Gym Book",
    group_size: null,
    duration: null,
    setup_line: "each child works in their own laminated art gym book at their own pace. 1–3 pages per session, then a free replication on a sketch sheet.",
    goal: null,
    steps: [
      "Children open the laminated art gym book to their next page and complete 1–3 pages with thread, clay, sequins, or erasable markers.",
      "Pages progress in order — page 1 to last — challenge increases page by page.",
      "Once the page is done, the child copies the same line / shape / pattern freely on a sketch sheet using a material of choice (crayon, colour pencil, brush pen, yarn + glue).",
      "No extension-day follow-on — the page and the sketch happen in the same slot."
    ],
    ends_when: null,
    easier: null,
    harder: null,
    variations: [],
    difficulty_levels: {
      easy: "1 page from the book — child traces and replicates with the simplest material.",
      medium: "2 pages — child picks from two materials and combines them on the sketch sheet.",
      hard: "3 pages — child invents an extension on the sketch sheet (an object built from the practised line type)."
    },
    materials: ["Laminated Art Gym Book (book 3 for 5-8, book 4 alternates)", "Erasable markers, thread, clay, sequins", "A4 sketch sheet", "Crayons, colour pencils, brush pens, yarn + glue (child's pick)"],
    skills: []
  }
];
