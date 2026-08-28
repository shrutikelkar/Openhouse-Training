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
    goal: "a quick warm-up for fine motor skills and imagination, working through the child's own laminated ArtGym book.",
    steps: [
      "Offer the child a choice of wipeable material for the page — erasable markers, clay, or yarn are the norm. The books are reusable and laminated, so only materials that wipe off are ever used — never paint or anything that stains.",
      "Use only the resources prescribed for that page — don't substitute in something else.",
      "The child works through their ArtGym book in linear order, page 1 to the last — the challenge increases page by page.",
      "The child completes 1–2 pages for the day.",
      "ArtGym Book and Scribble Book alternate day to day — do one on one day, the other the next."
    ],
    ends_when: "the child completes their 1–2 pages for the day.",
    easier: null,
    harder: null,
    variations: [],
    materials: ["ArtGym Book — Level 1 (every child starts here)", "ArtGym Book — Level 2 (moved to once Level 1 is complete)", "Erasable markers, clay, yarn — wipeable materials only, never paint or anything that stains"],
    skills: []
  },
  {
    id: "art-gym-book-3-5",
    category: "art-3-5",
    age_bands: ["3–5"],
    name: "Art Gym Book",
    group_size: null,
    duration: null,
    goal: "a quick warm-up for fine motor skills and imagination, working through the child's own laminated ArtGym book.",
    steps: [
      "Offer the child a choice of wipeable material for the page — erasable markers, clay, or yarn are the norm. The books are reusable and laminated, so only materials that wipe off are ever used — never paint or anything that stains.",
      "Use only the resources prescribed for that page — don't substitute in something else.",
      "The child works through their ArtGym book in linear order, page 1 to the last — the challenge increases page by page.",
      "The child completes 1–2 pages for the day.",
      "ArtGym Book and Scribble Book alternate day to day — do one on one day, the other the next."
    ],
    ends_when: "the child completes their 1–2 pages for the day.",
    easier: null,
    harder: null,
    variations: [],
    materials: ["ArtGym Book — Level 1 (every child starts here)", "ArtGym Book — Level 2 (moved to once Level 1 is complete)", "Erasable markers, clay, yarn — wipeable materials only, never paint or anything that stains"],
    skills: []
  },
  {
    id: "whats-that-sound",
    category: "public-speaking",
    section: "playground",
    name: "What's That Sound",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child makes the sound of the ticked object on their card using only voice and body while the group guesses.",
    steps: [
      "one child picks a card from the deck without showing it.",
      "the child makes the sound of the ticked object using only voice and body.",
      "the other children listen and call out their guesses.",
      "the first correct guess picks the next card.",
      "keep going until every child has had a turn."
    ],
    ends_when: "every child has had a turn picking and making a sound.",
    easier: "you name the object out loud with the child first, then they make the sound.",
    harder: "shuffle and deal 4 cards to each player and play as quartets — ask other players for a series by acting out or making its sound, and collect full sets of 4.",
    variations: [
      { name: "Quartets", text: "Shuffle and deal 4 cards to each player. Place the rest face down in the centre. Goal: make sets of 4 matching cards of the same series (quartets). On your turn, ask any player for a series (e.g. nature, animals, vehicles) you need — if they have it, ask for the card by acting out or saying its sound. If you get the card, continue your turn. If not, draw one card from the centre and your turn ends. The first player to collect 1 or 2 full quartets wins." }
    ],
    difficulty_levels: {
      easy: "you name the object out loud with the child first, then they make the sound.",
      medium: "the child makes the sound of the ticked object using only voice and body while the group guesses.",
      hard: "shuffle and deal 4 cards to each player and play as quartets — ask other players for a series by acting out or making its sound, and collect full sets of 4."
    },
    materials: ["What's That Sound card deck (objects with a ticked sound on each)"],
    skills: ["VS"],
    debrief: [
      "What were some sounds that were difficult to make?",
      "Are there different ways to make the sound for a specific prompt?",
      "Was any prompt confusing?",
      "Is there any room for improvement?"
    ]
  },
  {
    id: "every-body-says",
    category: "public-speaking",
    section: "roll-call",
    name: "Every Body Says",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child works with their team to form an object using only their bodies, silently.",
    steps: [
      "divide the children into teams of 3–4.",
      "one child flips an object image card so all teams can see it.",
      "every team immediately forms the object using their bodies, no speaking.",
      "you pick the team whose version is most convincing.",
      "that team flips the next card and play continues."
    ],
    ends_when: "the cards run out or every team has flipped at least one card.",
    easier: "the child forms the object solo or with a partner using the action prompt on the card.",
    harder: "each child draws one card and walks around forming their object — they must find their matching pair and lock in first to win.",
    variations: [
      { name: "Formation guide", text: "The back of each card shows an illustration of how to form the object as a pair or a group. Teams try to match the illustrated formation." },
      { name: "Find your pair", text: "Cards come in matching pairs (table + chair, bowl + spoon, pen + paper). Each child draws one card without showing others. On the signal, everyone walks around forming their object using their body. When they find their matching pair, they link up. First pair to lock in wins." }
    ],
    difficulty_levels: {
      easy: "Solo / partner action on the card.",
      medium: "Additional group or pair tasks — extra prompts layered on top of the base formation (e.g. \"chimney appears,\" \"two arches meet,\" \"flying in formation\").",
      hard: "Find your pair."
    },
    materials: ["Every Body Says object image cards (30 cards · 15 pairs)"],
    skills: ["BL"],
    debrief: [
      "How easy or difficult was it to form these images?",
      "Was it easy or difficult to work as a team? Could they have formed these images alone?",
      "Which image would they like to try making again?",
      "What did they do when they were stuck?",
      "Were there any specific challenges they faced? How did they overcome it?",
      "Is there anything they could have done differently or better?",
      "Was there ever a time when they could have collaborated better?",
      "Was there any shape created by another team that they liked?",
      "Did they ever have moments where they felt excited, apprehensive, or frustrated?"
    ]
  },
  {
    id: "sentence-chain",
    category: "public-speaking",
    section: "roll-call",
    name: "Sentence Chain",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child opens a sentence with the last word of the previous child's sentence, building a chain around the circle.",
    steps: [
      "sit the children in a circle.",
      "read one opening sentence out loud. the last word is the starter word.",
      "the next child begins a new sentence with that starter word.",
      "the chain continues around the circle, each child using the last word of the previous sentence.",
      "if a child cannot continue within 5 seconds, they say \"pass\" and the next child goes."
    ],
    ends_when: "every child has had a turn in the chain.",
    easier: "you help the child by naming the starter word out loud before they begin.",
    harder: "the child must make their sentence continue the same story, not just start with the starter word.",
    variations: [
      { name: "Group play", text: "Play individually, in pairs, or in groups." },
      { name: "Word swap", text: "Each child chooses a word from their sentence for the next child to include anywhere in a new sentence." },
      { name: "Last letter chain", text: "Continue using the last letter instead of the last word." }
    ],
    difficulty_levels: {
      easy: "you help the child by naming the starter word out loud before they begin.",
      medium: "the child begins a new sentence with the starter word from the previous sentence.",
      hard: "the child must make their sentence continue the same story, not just start with the starter word."
    },
    materials: ["Opening-sentence prompt deck"],
    skills: ["C&S", "VS"]
  },
  {
    id: "voice-toss",
    category: "public-speaking",
    section: "roll-call",
    name: "Voice Toss",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child says a word at the exact volume called by the thrower before passing the ball on.",
    steps: [
      "stand or sit the children in a circle.",
      "the thrower calls one of three volume levels — loud, medium, or whisper.",
      "the thrower throws the soft ball to someone in the circle.",
      "the catcher says any word at exactly that volume.",
      "the catcher becomes the new thrower, calls a different level, and throws to someone new."
    ],
    ends_when: "every child has been a catcher at least once.",
    easier: "the thrower calls a mode — sing, laugh, or cry — and the catcher says any word in that mode.",
    harder: "the circle moves up or down the volume scale — each catcher speaks one notch louder or quieter than the last, and you reset the cycle every 3 children.",
    variations: [
      { name: "Sing / Laugh / Cry and Speak", text: "Before the throw, the thrower calls one of three modes — sing, laugh, or cry. The catcher says any word in that mode: sung to any tune, while laughing, or as if about to cry." },
      { name: "Volume Toss Circle", text: "The circle gradually moves up or down the volume scale — each catcher speaks one notch louder or one notch quieter than the last. After every 3 children, the educator resets the cycle and the circle starts again from the beginning of the scale." }
    ],
    difficulty_levels: {
      easy: "the thrower calls a mode — sing, laugh, or cry — and the catcher says any word in that mode.",
      medium: "the catcher says any word at exactly the volume the thrower calls.",
      hard: "the circle moves up or down the volume scale — each catcher speaks one notch louder or quieter than the last, and you reset the cycle every 3 children."
    },
    materials: ["Soft ball"],
    skills: ["VS"]
  },
  {
    id: "eye-contact-tag",
    category: "public-speaking",
    section: "roll-call",
    name: "Eye Contact Tag",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child locks eyes with a nearby child when the music stops and holds it.",
    steps: [
      "start the music and let the children walk around the space.",
      "stop the music suddenly.",
      "each child finds someone nearby and makes eye contact.",
      "both children hold eye contact according to today's variation.",
      "start the music again and repeat for several rounds."
    ],
    ends_when: "several rounds have been played and every child has locked eyes with a partner.",
    easier: "both children just hold eye contact until the music starts again — if a child looks away first, they sit out for one round.",
    harder: "after locking eyes, the two children try to make each other smile or laugh without touching or speaking.",
    variations: [
      { name: "Hold it", text: "Both children hold eye contact until the music starts again. If a child looks away first, they sit out for one round." },
      { name: "Walk toward each other", text: "Two children who lock eyes walk toward each other — eyes must stay on each other for the entire walk." },
      { name: "Who blinks first", text: "After locking eyes, both children try not to blink. First to blink sits out for one round." },
      { name: "Make them laugh", text: "After locking eyes, children try to make the other person smile or laugh without touching them or speaking." }
    ],
    difficulty_levels: {
      easy: "both children just hold eye contact until the music starts again — if a child looks away first, they sit out for one round.",
      medium: "both children hold eye contact for a set duration.",
      hard: "after locking eyes, the two children try to make each other smile or laugh without touching or speaking."
    },
    materials: ["Portable Bluetooth speaker", "Curated music playlist — https://www.youtube.com/watch?v=-oO7Vk3lNXM&list=RDEMm-K3475YJ1af4D0F6JvchA&start_radio=1"],
    skills: ["BL"],
    debrief: [
      "Reflect on the experience — how did maintaining eye contact affect your interactions? How might you use this in public speaking?"
    ]
  },
  {
    id: "copycat",
    category: "public-speaking",
    section: "roll-call",
    name: "Copycat",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child copies a small gesture and sound exactly and passes it around the circle.",
    steps: [
      "stand the children in a circle.",
      "one child makes a small gesture with a small sound.",
      "their neighbour copies the gesture and sound exactly.",
      "the copy passes around the circle, each child watching for small unplanned sounds too.",
      "when the gesture returns to the starter, discuss what subtly changed."
    ],
    ends_when: "the gesture has made a full loop around the circle.",
    easier: "you name the gesture and sound out loud for the child before they pass it on.",
    harder: "the child adds one tiny new sound or movement of their own before passing it on.",
    variations: [],
    difficulty_levels: {
      easy: "you name the gesture and sound out loud for the child before they pass it on.",
      medium: "the child copies the gesture and sound exactly.",
      hard: "the child adds one tiny new sound or movement of their own before passing it on."
    },
    materials: [],
    skills: ["BL", "VS"]
  },
  {
    id: "script-flip",
    category: "public-speaking",
    section: "playground",
    name: "Script Flip",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child fills in the blanks of a script template and narrates their completed script out loud.",
    steps: [
      "hand every child a laminated script flip card and an erasable marker.",
      "the child fills in the blanks of the story template.",
      "for children who cannot yet write, scribe for them — they say the word, you write it in.",
      "once all blanks are filled, each child narrates their completed script to the group.",
      "listen for tone and word choice in the narration."
    ],
    ends_when: "every child has narrated their completed script.",
    easier: "the child uses b1 cards.",
    harder: "the child uses b2 cards and also uses tone prompts to write and perform the script.",
    variations: [
      { name: "Write & perform — individual or as a team", text: "Children fill and perform their script solo, or work in small teams — one card shared, blanks filled together, each team member delivers a section of the narration." }
    ],
    difficulty_levels: {
      easy: "Use B1 cards.",
      medium: "Use B2 cards.",
      hard: "Also use tone prompts to write the script and to perform."
    },
    materials: ["Laminated Script Flip cards — B1 set (1 per child, reusable)", "Laminated Script Flip cards — B2 set", "Erasable markers", "Tone prompts — https://wordwall.net/resource/84260671/script-flip-digital-tones"],
    skills: ["C&S", "VS"],
    debrief: [
      "Did the chosen words match the assigned tone (e.g. silly, spooky)?",
      "How did sticking to the tone make the story more engaging or challenging?",
      "What was your favourite word or phrase that you added?",
      "Did thinking about the tone make you more creative with your word selection?",
      "How did using the tone while speaking bring the story to life?",
      "What did you enjoy most about performing your story in the assigned tone?",
      "What was your favourite story or performance by another player?",
      "How did their tone and word choice make the story memorable?",
      "How can using tones and expressive words help in real-life situations, like storytelling or presentations?",
      "What would you do differently next time to make your story even better?"
    ]
  },
  {
    id: "tale-trail",
    category: "public-speaking",
    section: "playground",
    name: "Tale Trail",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child adds one card to the shared story mat and continues the story from where the previous child left off.",
    steps: [
      "place the story mat in the centre and stack the story cards in four piles — character, object, event, emotion.",
      "the first child picks one card, places it on the mat, and begins the story.",
      "the next child picks a card from any pile, places it on the mat, and continues the story from where the previous child left off.",
      "the tale builds card by card around the circle.",
      "the child placing the last card ends the story, or you end it."
    ],
    ends_when: "the child placing the last card ends the story or you close it.",
    easier: "you provide an opening sentence to start the story.",
    harder: "children draw a random card from a single face-down pile instead of choosing which category to pick from.",
    variations: [
      { name: "Mixed cards", text: "Educator places all category cards in a single pile faced down. The player draws cards turn by turn, randomly." }
    ],
    difficulty_levels: {
      easy: "Educator provides an opening sentence.",
      medium: "Variation 1 — children or educator can choose a theme card for a child.",
      hard: "Variation 2 — child draws a random card from the deck."
    },
    materials: ["Story Mat", "Story Cards (Object 15, Character 15, Emotion 12, Event 15)"],
    skills: ["C&S"]
  },
  {
    id: "shuffle",
    category: "public-speaking",
    section: "playground",
    name: "Shuffle",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child builds and performs a story using 6 cards in order, then answers questions from the questioning team.",
    steps: [
      "divide the children into a performing team and a questioning team.",
      "the performing team draws one story of 6 cards and lays them face-up in printed order.",
      "give the performing team time to build a story using the cards in that order.",
      "the performing team roleplays and narrates the story within set time.",
      "the questioning team asks questions using their question bands. one player summarises in 2–3 sentences, then roles rotate."
    ],
    ends_when: "both teams have taken a turn as performers and questioners.",
    easier: "the performing team is untimed and takes as long as they need to prepare.",
    harder: "preparation is timed and the questioning team can ask follow-up questions beyond the normal round, digging deeper into any answer.",
    variations: [
      { name: "Twist the story", text: "The educator can repeat the same story by swapping a few sequence cards and asking children to create and perform their own version. They can also remove the ending card and invite children to imagine and perform a new ending for the story." },
      { name: "Story switch", text: "The educator or the observing team challenges the performing team to change a character, setting, or theme, and then retell and perform the story with those changes." },
      { name: "Mix & match story", text: "Pick sequence cards from different stories to create a brand-new story. The observing team then asks questions about the new story, and the performing team explains their ideas." }
    ],
    difficulty_levels: {
      easy: "Untimed; original gameplay.",
      medium: "Twist the story; Story switch.",
      hard: "Mix & match story; time restriction."
    },
    materials: ["Story Combination Cards — 10 stories × 6 cards = 60 A5 cards", "Question Bands (Who, What, When, Where, Why, How)", "Timer"],
    skills: ["C&S", "BL", "VS"]
  },
  {
    id: "body-talk",
    category: "public-speaking",
    section: "playground",
    name: "Body Talk",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child draws expression and gesture cards and uses each one in a sentence they speak.",
    steps: [
      "shuffle the expression and gesture cards into one deck.",
      "each child draws one card on their turn.",
      "the child chooses to keep or discard the card — if they keep it, they use that expression or gesture in a sentence they speak.",
      "the group watches and calls out the feeling or meaning they see.",
      "the round continues until every child has completed their set — 4 expressions and 4 gestures each."
    ],
    ends_when: "every child has completed a set of 4 expressions and 4 gestures.",
    easier: "the child says just 1 sentence using the expression or gesture on the card.",
    harder: "the group changes the topic mid-sentence and the child continues speaking on the new topic while holding the same gesture or expression.",
    variations: [
      { name: "Individual play", text: "Each child completes their own set of 4 expressions + 4 gestures on their own turns." },
      { name: "Team play", text: "Children play in teams. For each card, every member of the team says a different line using that same gesture or expression — a group performance of the same feeling." }
    ],
    difficulty_levels: {
      easy: "Child says 1 sentence using the expression or gesture on the card.",
      medium: "Child says 3–4 sentences using the expression or gesture on the card.",
      hard: "The other group or person changes the topic mid-sentence and the player speaks accordingly — incorporating the new topic into the same gesture or expression."
    },
    materials: ["Body Talk expression and gesture card deck"],
    skills: ["BL", "C&S"],
    debrief: [
      "What were some faces that were difficult to make?"
    ]
  },
  {
    id: "watch-your-step",
    category: "public-speaking",
    section: "playground",
    name: "Watch Your Step",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child speaks on a prompt for as long as they can to move their piece up the gameboard toward the top.",
    steps: [
      "set all pieces at the bottom of the gameboard. keep the time board visible.",
      "read out a prompt from the digital deck for the child on turn.",
      "start the timer and let the child speak on the prompt.",
      "if the child hesitates, repeats, or goes off-topic, stop the timer and move their piece by the steps the time board allows.",
      "if they land on a slippery step, move back. on a risk step, they attempt a risk card challenge to earn a reward card."
    ],
    ends_when: "the first individual or team reaches the top of the board.",
    easier: "the timer is visible to the speaker.",
    harder: "the opposing player gives the speaker 3 words to incorporate into their speech before the turn begins, and the timer is not visible.",
    variations: [
      { name: "Individual play", text: "Each player plays with their own piece. Their turn, their topic, their time." },
      { name: "Team play", text: "Teams share one piece on the board but turns are taken by team members — each member speaking on a different topic. Every member must take at least one turn before the team piece reaches the top." }
    ],
    difficulty_levels: {
      easy: "Timer visible to the speaker.",
      medium: "Timer not visible to the speaker.",
      hard: "Use of 3-word incorporation — the opposing player gives the speaker 3 words to incorporate into their speech before the turn begins."
    },
    materials: ["Gameboard", "Time board (speaking-time to steps reference)", "Player pieces", "Risk Cards", "Reward Cards", "Digital prompts — https://wordwall.net/resource/84074464", "Digital prompts — https://wordwall.net/resource/84114001", "Timer"],
    skills: ["C&S", "VS"],
    debrief: [
      "What was the most enjoyable part of the game for you?",
      "Which Risk or Reward card made you laugh or feel excited?",
      "What was the hardest part of the game (e.g. speaking on time, Risk cards)?",
      "How did you overcome it, or what would you do differently next time?",
      "How well did your team work together?",
      "What could you or your teammates improve for better collaboration?",
      "What did you learn about speaking (e.g. staying on topic, avoiding hesitation)?",
      "How did you feel while speaking — nervous, excited, or confident?",
      "What are you most proud of from the game today?"
    ]
  },
  {
    id: "train-of-thoughts",
    category: "public-speaking",
    section: "playground",
    name: "Train of Thoughts",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child draws cards, completes each task, and collects three complete compartment sets — one each in red, green, and blue.",
    steps: [
      "shuffle all the cards and place them face-down in the centre as a draw pile.",
      "on each turn, a child draws one card from the draw pile.",
      "question card: answer the question aloud and place the card in front of you.",
      "action card: complete the action immediately and keep the card.",
      "wild card: complete the task and use the card as part of any compartment.",
      "the first child to collect three complete compartment sets — one each in red, green, and blue, each with three matching symbols — wins."
    ],
    ends_when: "a child collects three complete compartment sets — one each in red, green, and blue.",
    easier: "create sets by matching colours instead of symbols.",
    harder: "increase the number of complete compartment sets required to win.",
    variations: [
      { name: "Longest train", text: "At the end of the session, the child with the longest train — most cards completed in sequence — wins." }
    ],
    difficulty_levels: {
      easy: "Create sets by matching colours instead of symbols.",
      medium: "Original gameplay; longest train variation.",
      hard: "Increase the number of complete compartment sets required to win."
    },
    materials: ["Coloured Question Cards — with 6 compartments (Package, Suitcase, Food, Beverage, Pet, Passenger)", "Wild cards and action cards"],
    skills: ["C&S", "VS"]
  },
  {
    id: "guess-me",
    category: "public-speaking",
    section: "playground",
    name: "Guess Me",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child guesses what is on the card held to their forehead based on the group's enactment.",
    steps: [
      "one child picks a card and holds it to their forehead without looking at it.",
      "the rest of the group looks at the card and starts acting it out.",
      "the child watches the group and calls out their guesses.",
      "when they guess correctly, the next child takes a turn.",
      "keep going until every child has had a turn guessing."
    ],
    ends_when: "every child has had a turn as the guesser.",
    easier: "use only the easier cards from the deck.",
    harder: "the child has to guess within a set time on the timer.",
    variations: [
      { name: "Body and face only", text: "No sounds, no words." },
      { name: "Body, face, and sounds", text: "Group can add sounds but not say the word." }
    ],
    difficulty_levels: {
      easy: "Easier cards to be used.",
      medium: "All cards can be used.",
      hard: "Child has to guess within set time."
    },
    materials: ["Guess Me Cards", "Timer (optional)"],
    skills: ["BL", "C&S"]
  },
  {
    id: "psychiatrist",
    category: "public-speaking",
    section: "playground",
    name: "Psychiatrist",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the questioner asks questions and figures out the hidden rule the group is secretly following.",
    steps: [
      "the questioner steps outside or turns away.",
      "the group secretly agrees on a hidden rule that will govern all their answers.",
      "the questioner returns and asks each player a question in turn.",
      "after one full round, the questioner states their theory. the group responds warm or cold.",
      "keep going until the questioner correctly identifies the rule."
    ],
    ends_when: "the questioner correctly identifies the hidden rule.",
    easier: "the questioner has unlimited rounds to ask questions and identify the rule.",
    harder: "one group member secretly gets a different hidden rule via a chit draw — the questioner has to identify both the group's rule and the imposter.",
    variations: [
      { name: "Imposter", text: "Before the questioner returns, one group member secretly receives a different hidden rule (decided by a simple chit draw from a bag). That person is the imposter. The questioner must identify both the group's rule and the imposter." }
    ],
    difficulty_levels: {
      easy: "Unlimited rounds — questioner can ask as many rounds as they need to identify the rule.",
      medium: "Limited rounds — questioner has a set number of rounds to identify the rule.",
      hard: "Imposter variation — one group member secretly has a different hidden rule. Questioner must identify both the group's rule and the imposter."
    },
    materials: ["Simple chits (for imposter variation — two types: Rule and Imposter)"],
    skills: ["C&S"]
  },
  {
    id: "reverse-gear",
    category: "public-speaking",
    section: "playground",
    name: "Reverse Gear",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child continues a sentence and swaps a word to its opposite when another player calls \"reverse gear\".",
    steps: [
      "give the child a sentence prompt to speak.",
      "the child starts speaking on the prompt.",
      "another player calls \"reverse gear\" on a specific word in the sentence.",
      "the child says the opposite of that word or swaps it for a different word, continuing from that point.",
      "play passes to the next child with a new prompt."
    ],
    ends_when: "every child has had a turn as the speaker.",
    easier: "reverse gear can only be called once, and only within one sentence.",
    harder: "after the child says the reversed sentence, they add 2–3 lines of their own continuing that sentence.",
    variations: [],
    difficulty_levels: {
      easy: "One reverse gear, one sentence — the reverse gear call can only be made once and only within one sentence.",
      medium: "Reverse gear can be called up to 2 times within a sentence.",
      hard: "After the player says the reversed sentence, they add 2–3 lines of their own, continuing that sentence."
    },
    materials: ["Reverse Gear prompt deck (app)"],
    skills: ["C&S", "VS"]
  },
  {
    id: "whacky-news-reporter",
    category: "public-speaking",
    section: "showtime",
    name: "Whacky News Reporter",
    group_size: "3–8 children · 1 educator",
    duration: "15 min",
    goal: "the child delivers a news report on a whacky headline with a clear opening, middle, and closing, and answers one question from each peer.",
    steps: [
      "read out a whacky news prompt from the app.",
      "give the child a set time to prepare.",
      "the child stands in front of the class and delivers the report — opening, middle, closing.",
      "each other child asks the reporter one question. the reporter answers each in one sentence.",
      "a new child takes the next prompt."
    ],
    ends_when: "every child has delivered a report and answered questions.",
    easier: "you help the child with points to speak on.",
    harder: "no preparation time — the child delivers the report on the spot.",
    variations: [],
    difficulty_levels: {
      easy: "Educator helps with points to speak.",
      medium: "Limited preparation time.",
      hard: "No preparation time."
    },
    materials: ["App for prompt cards (digital)"],
    skills: ["C&S", "VS"]
  },
  {
    id: "mad-ad",
    category: "public-speaking",
    section: "showtime",
    name: "Mad Ad",
    group_size: "3–8 children · 1 educator",
    duration: "15 min",
    goal: "the child invents a product on the topic and pitches it to the class with a hook, product name, one reason, and a big ask.",
    steps: [
      "give one child today's topic from the app.",
      "the child invents a product connected to that topic and prepares for a set time.",
      "the child stands and pitches the product — hook, product name, one amazing reason, the big ask.",
      "the class asks questions about the product. the child answers in character.",
      "the class votes — buying or not buying."
    ],
    ends_when: "every child has delivered a pitch and the class has voted.",
    easier: "you help the child with the opening sentence and the structure.",
    harder: "no preparation time, and the child must include at least two deliberate changes of volume or energy in their pitch.",
    variations: [],
    difficulty_levels: {
      easy: "Educator helps with the opening sentence and structure.",
      medium: "Standard gameplay — limited preparation time, child structures independently.",
      hard: "No preparation time given — child must include at least two deliberate changes of volume or energy."
    },
    materials: ["Topic prompts — https://wordwall.net/resource/77103607"],
    skills: ["C&S", "VS", "BL"]
  },
  {
    id: "experience-share-circle",
    category: "public-speaking",
    section: "showtime",
    name: "Experience Share Circle",
    group_size: "3–8 children · 1 educator",
    duration: "15 min",
    goal: "the child shares one real experience connected to the theme with a beginning, main event, and conclusion, then answers two peer questions.",
    steps: [
      "give the group today's theme from the prompt bank.",
      "each child takes 30 seconds to think.",
      "children share in turn — beginning (when and where), main event (what happened), conclusion (how it ended).",
      "after each child shares, two peers each ask one genuine question connected to what was actually said.",
      "the child answers, then the next child shares."
    ],
    ends_when: "every child has shared their experience and answered two peer questions.",
    easier: "use familiar themes and model with your own experience first.",
    harder: "use abstract or challenging themes and give no preparation time.",
    variations: [],
    difficulty_levels: {
      easy: "Familiar themes, educator models with their own experience first.",
      medium: "Standard themes, no model.",
      hard: "Abstract or challenging themes, no preparation time."
    },
    materials: ["App for theme prompts"],
    skills: ["C&S", "VS"]
  },
  {
    id: "magic-box-narratives",
    category: "public-speaking",
    section: "showtime",
    name: "Magic Box Narratives",
    group_size: "3–8 children · 1 educator",
    duration: "15 min",
    goal: "the child draws one object from the magic box and builds a story around it with a beginning, middle, and end.",
    steps: [
      "place the decorated magic box in front of the group.",
      "each child reaches in without looking and draws one object.",
      "give a moment of think time.",
      "the child builds and tells a story around the drawn object — beginning, middle, end.",
      "play passes to the next child."
    ],
    ends_when: "every child has drawn an object and told a story.",
    easier: "you provide a sentence frame — \"one day, [object] was...\" — for the child to begin with.",
    harder: "the child draws two objects and both must appear at named points in the story.",
    variations: [],
    difficulty_levels: {
      easy: "Educator provides a sentence frame: \"One day, [object] was...\"",
      medium: "No frame, child begins independently.",
      hard: "Child draws two objects — both must appear at named points in the story."
    },
    materials: ["Magic Box (decorated)", "30 small objects — 10 animals, 10 vehicles, 10 everyday objects"],
    skills: ["C&S", "VS"]
  },
  {
    id: "story-spine",
    category: "public-speaking",
    section: "showtime",
    name: "Story Spine",
    group_size: "3–8 children · 1 educator",
    duration: "15 min",
    goal: "the child works with their group to build and perform a story using one word from each of five anchor categories.",
    steps: [
      "form the children into groups of 3–4.",
      "hand each group the prompt sheet with five anchor categories.",
      "each group picks one word from each category — character, setting, problem, action, ending.",
      "the group builds a short story using all five words.",
      "each group performs their story to the rest of the class, applying today's chosen challenge."
    ],
    ends_when: "every group has performed their story.",
    easier: "the group must show a feeling in the story — happy, scared, angry, or excited.",
    harder: "the group adds a plot twist — something unexpected happens, someone changes, or a new problem appears.",
    variations: [],
    difficulty_levels: {
      easy: "Add an Emotion — Children must show a feeling in the story — happy, scared, angry, or excited.",
      medium: "Add an Opponent — Add someone or something that creates difficulty — a villain, animal, obstacle, or other person.",
      hard: "Add a Plot Twist — Something unexpected happens — it fails again, someone changes, or a new problem appears."
    },
    materials: ["Story Spine prompt sheet — 5 anchor categories (character · setting · problem · action · ending) with example words under each"],
    skills: ["C&S", "BL", "VS"]
  },
  {
    id: "superhero-sales-pitch",
    category: "public-speaking",
    section: "showtime",
    name: "Superhero Sales Pitch",
    group_size: "3–8 children · 1 educator",
    duration: "15 min",
    goal: "the child pitches their assigned superpower to the class, then handles a challenge question from a peer.",
    steps: [
      "give the child a superpower prompt from the app.",
      "the child gets 30 seconds to prepare.",
      "the child stands and pitches the superpower to the class — what it is and why it is the best.",
      "the group votes — useful or useless.",
      "the child answers one challenge question from the group."
    ],
    ends_when: "every child has pitched a superpower and taken a challenge question.",
    easier: "give 1 minute prep and the opening line — \"my superpower is...\" — for the child to build on.",
    harder: "no prep, and the child must handle at least two challenge questions from the group.",
    variations: [],
    difficulty_levels: {
      easy: "1 minute prep, educator provides the opening: \"My superpower is...\"",
      medium: "30 seconds prep, child structures independently.",
      hard: "No prep, child must handle at least two challenge questions from the group."
    },
    materials: ["App for superpower prompts"],
    skills: ["C&S", "VS", "BL"]
  },
  {
    id: "spaggle",
    category: "public-speaking",
    section: "playground",
    age_bands: ["8–12"],
    name: "Spaggle",
    group_size: "3–8 children · 1 educator",
    duration: "25 min",
    goal: "the child assembles a speech puzzle board — topic, opening, argument, evidence, conclusion — and delivers their speech in that order.",
    steps: [
      "each child notes their topic from the digital topic deck on their topic card.",
      "children pick any 5 puzzle cards from the shuffled face-down deck; educator hands out 2 action cards each.",
      "on each turn, a child places one puzzle card on their board in the order topic → opening → argument → evidence → conclusion.",
      "during play, children use action cards to swap, steal, or stop each other's placements.",
      "once the board is full, the child delivers their speech using the cards placed — one token per card successfully used in a sentence."
    ],
    ends_when: "every child has filled their board and delivered their speech.",
    easier: "the educator helps the child deliver their speech.",
    harder: "the conclusion must connect back to the opening.",
    variations: [
      { name: "Ability lanyard", text: "Educator assigns a lanyard of a specific ability to the player, which the child focuses on while delivering their speech. The child earns bonus tokens for correctly using the assigned ability." }
    ],
    difficulty_levels: {
      easy: "Educator helps the child deliver their speech.",
      medium: "Child delivers independently — standard gameplay.",
      hard: "Conclusion must connect back to the opening."
    },
    materials: ["Speech Puzzle Board (1 per child)", "Topic Cards", "Speech Puzzle Cards", "Action Cards (Swap / Steal / Stop)", "Player Tokens and Tracker", "Digital prompts — https://wordwall.net/resource/84114197", "Digital prompts — https://wordwall.net/resource/84261693"],
    skills: ["C&S", "VS"],
    debrief: [
      "Each player shares one challenge they faced during the game. Example: \"It was hard to think quickly when my card was swapped.\"",
      "Encourage quick follow-up questions or ideas from others: \"How did you handle it?\" · \"What could you try next time?\"",
      "Players take turns nominating someone as a \"Champion\" for something they did well. Example: \"I nominate Mia for her creative argument about space travel!\"",
      "End by setting a group challenge for the next session, such as: \"Let's focus on making our openings more exciting next time!\""
    ]
  },
  {
    id: "pitch-perfect",
    category: "public-speaking",
    section: "playground",
    age_bands: ["8–12"],
    name: "Pitch Perfect",
    group_size: "3–8 children · 1 educator",
    duration: "25 min",
    goal: "the child pitches a solution card that matches the investors' problem card and wins tokens for structure and conviction.",
    steps: [
      "choose one pair to start as the investors — this role rotates each round.",
      "form the rest of the children into teams of 2–3.",
      "investors draw a problem card; each team receives 3 solution cards.",
      "each team picks the solution card that best matches the problem and prepares their pitch.",
      "teams pitch to the investors, investors ask questions, then award tokens for structure and conviction."
    ],
    ends_when: "every pair has rotated through the investor role.",
    easier: "twist card not used — teams focus only on matching the solution to the problem.",
    harder: "a twist card is drawn — teams must balance completing the twist with creating a pitch that appeals to the investors.",
    variations: [],
    difficulty_levels: {
      easy: "Twist card not used.",
      medium: "Twist card optional.",
      hard: "Use a Twist card — teams must balance completing the twist with creating a pitch that appeals to the Investors."
    },
    materials: ["Problem Cards", "Solution Cards", "Investor tokens", "Twist cards"],
    skills: ["C&S", "VS"],
    debrief: [
      "\"I learned that good pitches need…\"",
      "\"Next time, I'll try to…\"",
      "\"What I enjoyed most was…\""
    ]
  },
  {
    id: "speech-a-palooza",
    category: "public-speaking",
    section: "playground",
    age_bands: ["8–12"],
    name: "Speech-a-Palooza",
    group_size: "3–8 children · 1 educator",
    duration: "25 min",
    goal: "the child rolls the dice, moves their meeple, and completes the challenge or action on the block they land on to earn tokens.",
    steps: [
      "hand each child a meeple and a starting set of tokens.",
      "on their turn, the child rolls the dice and moves their meeple.",
      "they read the action on the block they land on.",
      "they draw a level-based challenge card, a fortune card, or perform the simple action shown.",
      "they earn tokens for completing the challenge or action, then play passes to the next child."
    ],
    ends_when: "a child reaches the end of the board or the segment time is up.",
    easier: "use only easy challenge cards.",
    harder: "use only difficult challenge cards.",
    variations: [],
    difficulty_levels: {
      easy: "Easy challenge cards.",
      medium: "Medium challenge cards.",
      hard: "Difficult challenge cards."
    },
    materials: ["Board", "Meeples (one per player)", "Dice", "Level-based Challenge cards (easy / medium / hard)", "Fortune cards", "Tokens"],
    skills: ["C&S", "VS"],
    debrief: [
      "Ask students what tasks they found fun, weird, or particularly challenging.",
      "Ask how they overcame the challenging tasks.",
      "What did they think were the most fun moments of the game?"
    ]
  },
  {
    id: "improv-survival",
    category: "public-speaking",
    section: "playground",
    age_bands: ["8–12"],
    name: "Improv Survival",
    group_size: "3–8 children · 1 educator",
    duration: "25 min",
    goal: "the child performs a scene and switches to a new challenge each time the audience moves them to a different quadrant.",
    steps: [
      "set up four quadrant mats — each with a slate showing a different challenge.",
      "two performers start a scene in one quadrant; the rest hold number cards for the four quadrants.",
      "at any point, an audience member raises a card to move a performer to that quadrant.",
      "the performer immediately switches to that quadrant's challenge while staying in character.",
      "each performer can play one block token to reject a move; breaking a quadrant rule earns a penalty token."
    ],
    ends_when: "the scene time runs out, then the audience names the smoothest transition.",
    easier: "performers refer to the script book while performing.",
    harder: "no script book — performers must rotate through all 4 quadrants during a single performance while still keeping the scene flowing.",
    variations: [
      { name: "Variation 2", text: "Performers must rotate through all 4 quadrants during a single performance while still keeping the scene flowing." }
    ],
    difficulty_levels: {
      easy: "Refer Script Book — performers refer to the script book while performing.",
      medium: "Normal gameplay without the script book.",
      hard: "Without the Script Book and Variation 2 — performers rotate through all 4 quadrants without the script book."
    },
    materials: ["Quadrant Mats (4)", "Slates with stands (4)", "Scenario prompts", "Improv Survival Topics — https://docs.google.com/presentation/d/1TWcBf9YU3XrrPi5YrBoRvi94AZMS-sZTGxs5PoPbD1M/preview?usp=sharing", "Number Cards (1 per audience member)", "Block Tokens (1 per performer)", "Penalty Tokens", "Script Book", "Timer"],
    skills: ["VS", "BL", "C&S"],
    debrief: [
      "What was the most fun or surprising part of the game for you?",
      "Did any audience-directed movements or scenarios make you laugh or think creatively?",
      "Which quadrant was the hardest to adapt to (Emotion, Accent, or Setting)? Why?",
      "How did you manage to stay in character during difficult moments?",
      "How did you and your partner support each other during the performance?",
      "What strategies helped your team maintain the flow of the improv?",
      "What did you learn about communication or adaptability from this game?",
      "How can these skills help in real-life situations, like teamwork or public speaking?",
      "For the audience: what was the most impressive performance or adaptation you observed?",
      "How did it feel to participate in directing the performers?"
    ]
  },
  {
    id: "debate-duel",
    category: "public-speaking",
    section: "showtime",
    age_bands: ["8–12"],
    name: "Debate Duel",
    group_size: "3–8 children · 1 educator",
    duration: "15 min",
    goal: "the child argues for or against a topic and handles a challenge card constraint through the debate.",
    steps: [
      "arrange the children in a circle and select a moderator.",
      "the moderator draws a topic card and picks two debaters, who draw for or against chits.",
      "each debater draws a challenge card with a constraint to incorporate, then gets 1 minute of prep.",
      "for and against speak in turn within the set time, then non-debating players ask questions.",
      "the losing debater takes a strike card — two strikes and they become the next moderator."
    ],
    ends_when: "only one debater is left without two strikes — the last debater standing wins.",
    easier: "use b1 topics with 1-minute prep, and challenge cards are optional.",
    harder: "use b2 topics and challenge cards are required.",
    variations: [],
    difficulty_levels: {
      easy: "B1 topics, 1-min prep, Challenge Cards optional.",
      medium: "B1, Challenge Cards required.",
      hard: "B2, Challenge Cards required."
    },
    materials: ["Debate Duel Topic Cards (B1 + B2)", "Challenge Cards", "Moderator Card", "Strike Cards (10)", "For & Against Cards (2)"],
    skills: ["C&S", "VS", "BL"],
    debrief: [
      "Who did you think handled their challenge card well? Why?",
      "What clues can we find that show someone was confident?",
      "Did anyone hear a speaker who used great body language?",
      "Did someone answer a tough question well?"
    ]
  },
  {
    id: "skill-lanyards",
    category: "public-speaking",
    section: "lanyards",
    age_bands: ["5–8", "8–12"],
    name: "Skill Lanyards",
    group_size: "whole class · 1 educator",
    duration: null,
    goal: "each child wears a skill lanyard that names the one focus area they're working on that session, so both the child and the educator can pay deliberate attention to that skill during every game.",
    steps: [
      "before the session starts, the educator reviews each child's focus areas and picks one lanyard per child for that day.",
      "the educator hands out the lanyards at the start of the session, telling each child which skill they're focusing on and why.",
      "through the session's games, the educator watches for and nudges that specific skill for each child, alongside normal play.",
      "at the end of each game or at the end of the session, the educator debriefs one-on-one with the child about their focused skill — what they noticed, what went well, what to try next time."
    ],
    ends_when: "the session ends — lanyards are collected back after the closing debrief, ready to be reassigned next session.",
    variations: [],
    materials: ["Vocal Skills lanyard set (5 cards — volume, mimicry, clarity, tone, emphasis)", "Body Language lanyard set (4 cards — gestures & expressions, eye contact, movement, posture)", "Content & Structure lanyard set (6 cards — structure, comprehension, vocabulary, inquiry, interaction, engagement)"],
    skills: ["VS", "BL", "C&S"],
    lanyard_skills: [
      { skill: "VS", name: "Volume", description: "speaking loudly and clearly enough for the whole group to hear, without shouting." },
      { skill: "VS", name: "Mimicry", description: "copying a sound, voice, accent, or way of speaking — used to build vocal flexibility and confidence trying different voices." },
      { skill: "VS", name: "Clarity", description: "pronouncing words distinctly so listeners don't have to guess what was said." },
      { skill: "VS", name: "Tone", description: "using the voice's pitch and warmth to match the feeling of what's being said." },
      { skill: "VS", name: "Emphasis", description: "stressing the right words in a sentence to bring out its meaning." },
      { skill: "BL", name: "Gestures & Expressions", description: "using hands, face, and body movement to support and add meaning to what's being said." },
      { skill: "BL", name: "Eye Contact", description: "looking at listeners while speaking, to build connection and confidence." },
      { skill: "BL", name: "Movement", description: "using purposeful movement around a space rather than standing frozen or fidgeting." },
      { skill: "BL", name: "Posture", description: "standing or sitting in a way that looks confident and open." },
      { skill: "C&S", name: "Structure", description: "organizing what's said with a clear beginning, middle, and end." },
      { skill: "C&S", name: "Comprehension", description: "understanding what's being asked or discussed well enough to respond on-topic." },
      { skill: "C&S", name: "Vocabulary", description: "choosing accurate, varied words to express an idea." },
      { skill: "C&S", name: "Inquiry", description: "asking thoughtful questions to explore or clarify a topic." },
      { skill: "C&S", name: "Interaction", description: "engaging back and forth with other speakers rather than talking at them." },
      { skill: "C&S", name: "Engagement", description: "holding the listener's interest and attention throughout." }
    ],
    scenarios: [
      { scenario: "A child rushes through their turn and mumbles so quietly that the group keeps asking them to repeat themselves.", lanyard: "Volume", why: "the core gap is that they aren't projecting loud enough to be heard, which is exactly what the Volume lanyard targets." },
      { scenario: "A child tells a story well but stands rigidly with their arms crossed the whole time and never looks up.", lanyard: "Eye Contact", why: "the words are fine — the gap is connecting with listeners by looking at them, which the Eye Contact lanyard targets." },
      { scenario: "A child's explanation of a game jumps around — the ending gets mentioned before the setup, and the group gets confused about the order of events.", lanyard: "Structure", why: "the content is all there, but it isn't organized into a clear beginning, middle, and end." },
      { scenario: "A child is asked to imitate an angry pirate's voice for a game and just uses their normal speaking voice instead.", lanyard: "Mimicry", why: "the ask is specifically to take on a different voice or way of speaking, which is what the Mimicry lanyard builds." },
      { scenario: "During a group discussion, a child answers every question fully but never asks anything back or responds to what a peer just said.", lanyard: "Interaction", why: "the child communicates one-way; the gap is engaging back and forth with other speakers." }
    ],
    facts: [
      "Lanyards are used in every session — there is no circumstance in which it's okay to skip using them.",
      "Not every child gets the same lanyard. Multiple children can share a lanyard if it suits both of them, but a lanyard is assigned based on each child's own focus area, so not everyone in the group will have the same one."
    ],
    debrief: [
      "How would you open a debrief with a child about the specific skill on their lanyard today?",
      "A child wore the 'Eye Contact' lanyard today but you didn't see much improvement — how would you debrief that honestly but encouragingly?",
      "How do you make sure the debrief feels like a genuine conversation with the child, not a test or a lecture?"
    ],
    criteria_labels: { gameplay_accuracy: "accuracy of explanation", challenge_accuracy: "accuracy of debrief" }
  },
  {
    id: "scribble-book",
    category: "art-3-5",
    age_bands: ["3–5"],
    name: "Scribble Book",
    group_size: null,
    duration: null,
    goal: "a book of imagination — every page is a unique open-ended story the child scribbles freely from their own imagination.",
    steps: [
      "the educator prompts the children about what the scene sets, without giving the solution.",
      "the child scribbles freely from their imagination onto the page.",
      "use the book in linear order — first page to last — the challenge increases page by page.",
      "only 1 artwork a day in the Scribble Book — it rotates day to day with the ArtGym Book."
    ],
    ends_when: "the child completes their one scribble for the day.",
    easier: null,
    harder: null,
    variations: [],
    materials: ["Scribble Book (not laminated — dry mediums only)", "Crayons, yarn, glue", "no paint or clay"],
    skills: []
  },
  {
    id: "shape-stitch-3-5",
    category: "art-3-5",
    age_bands: ["3–5"],
    name: "Shape Stitch",
    group_size: "3–8 children · 1 educator",
    duration: "25 min",
    goal: "the child sews through a template with a shoelace using one chosen stitch.",
    steps: [
      "give each child a sewing template and a shoelace.",
      "show the stitch for the round — running stitch, backstitch, or whip stitch.",
      "the child threads the shoelace through the holes to make the stitch.",
      "when they finish one template, they pick another and try the next stitch.",
      "at the end, each child shows the stitches they made."
    ],
    ends_when: "every child has completed at least one stitched template.",
    easier: "the child does running stitch or whip stitch on a large-hole template.",
    harder: "the child combines stitch types in a pattern of their own choosing.",
    variations: [],
    difficulty_levels: {
      easy: "Running Stitch and Whip stitch.",
      medium: "Backstitch.",
      hard: "Pattern stitching."
    },
    materials: ["Sewing templates (numbers, alphabets, and object outlines)", "Shoelaces"],
    reference_links: [
      { label: "Running stitch (Jennifer's Sewing Board tutorial)", url: "https://openhouse-at-apartment-ekiv.vercel.app/library#running-stitch" },
      { label: "Whip stitch", url: "https://youtube.com/shorts/4Z0qfHVjWQw?si=dC3Ib0D3rmSl7o9d" },
      { label: "Back stitch (Jennifer's Sewing Board tutorial)", url: "https://openhouse-at-apartment-ekiv.vercel.app/library#back-stitch" }
    ],
    skills: ["FM"]
  },
  {
    id: "shape-art-3-5",
    category: "art-3-5",
    age_bands: ["3–5"],
    name: "Shape Art",
    group_size: "3–8 children · 1 educator",
    duration: "25 min",
    goal: "the child matches shapes to their outlines and colours on the mat.",
    steps: [
      "lay the mat where all children can see it.",
      "place the shape pieces in a central pile.",
      "children take turns picking a piece and matching it to its outline and colour on the mat.",
      "continue until every space on the mat is filled."
    ],
    ends_when: "every space on the mat is matched with the correct shape.",
    easier: "the educator calls out colour or shape one at a time and helps children spot the right piece.",
    harder: "introduce the shape puzzle variation with whole, half, and quarter pieces.",
    variations: [
      { name: "Mat Match Makers", text: "Lay the mat on the floor and place all the shape pieces in a central pile. The educator calls out a colour, a shape, or a shape-and-colour combination. Children search through the pile, find the matching piece, and place it in the correct position on the mat." },
      { name: "Shape Focus", text: "Choose one shape mat from the set of four (Circle, Square, Rectangle, or Triangle). Assign 2–3 children to each mat. Children search the central pile for the required shapes and place them in the correct spaces on their mat." },
      { name: "Shape Puzzle", text: "Once children are familiar with matching shapes and colours on the Medium mat, introduce whole, half, and quarter shapes. Encourage children to complete each shape by finding and placing the correct matching pieces." }
    ],
    materials: ["Shape mats (Circle, Square, Rectangle, Triangle)", "Shape pieces (whole, half, and quarter)"],
    skills: ["FM", "CE"]
  },
  {
    id: "mix-it-up-3-5",
    category: "art-3-5",
    age_bands: ["3–5"],
    name: "Mix It Up",
    group_size: "3–8 children · 1 educator",
    duration: "25 min",
    goal: "the child matches, mixes, or names colours through one chosen variation.",
    steps: [
      "pick one variation for the round (colour flip, match the colour, colour set, mix and match, or colour detective).",
      "lay out the cards needed for that variation.",
      "explain the rule of the variation to the children.",
      "children take turns playing the round.",
      "when the round ends, pick another variation and go again."
    ],
    ends_when: "the round of the chosen variation is over (all cards flipped, set number of rounds done, or target colour mixed).",
    easier: "play match the colour or colour set using easy object cards.",
    harder: "play mix and match using complex object cards, or play colour detective with colour-formula questions.",
    variations: [
      { name: "Colour flip", text: "Educator places pairs of colour cards facing down. Children take turns to flip any 2 cards. If they match, they keep it and name the colour. If they do not match, they place them back. The game ends when all the cards have been flipped and played." },
      { name: "Match the colour", text: "Educator picks and places an object card. The child picks the colour card/cards matching the object and places them near it. Educator places the next object card and the next child continues. The same can be repeated with educator placing colour card/cards and children picking up the object cards matching it and placing them near. The game ends after a set number of rounds." },
      { name: "Colour set", text: "Educator gives each child a set number of object cards. Each child then takes turns picking up the matching colours from the pile. The game ends once each child has had a turn." },
      { name: "Mix and match", text: "Educator gives each child a secondary colour card (orange, purple, green) and asks them to mix 2 colours to obtain the colour on their card. Children choose the 2 colours and try it out; the educator can suggest two colours to try and match with the card. The game ends once the children have mixed the colours to create the target colour. Extension: the educator adds a colour paint and asks children to add white or black and check if the colour is lighter or darker than the colour card." },
      { name: "Colour detective", text: "Educator makes a colour-formula question using a connector and colour cards (for example, red card + blue card = ?). The child places the resultant colour card in place of the question mark, and can also place an object of the resultant colour. The game ends after a set number of rounds." }
    ],
    difficulty_levels: {
      easy: "Match the colour and Colour set variations — easy object cards.",
      medium: "Colour flip; use of medium object cards.",
      hard: "Mix and match variation; use of complex object cards; Colour detective."
    },
    materials: ["Colour cards — 12, 2 of each (24 total)", "Connector cards", "Simple object cards & complex object cards"],
    skills: ["CO"]
  },
  {
    id: "colour-friends-3-5",
    category: "art-3-5",
    age_bands: ["3–5"],
    name: "Colour Friends",
    group_size: "3–8 children · 1 educator",
    duration: "25 min",
    goal: "the child completes an artwork using the colour and tool they picked.",
    steps: [
      "spread the colour friend cards and tool cards face down.",
      "each child picks one colour card and one tool card.",
      "hand each child their worksheet along with the matching material and tool.",
      "the children start their artwork using only the chosen colour and tool.",
      "when everyone finishes, look at the finished pieces together."
    ],
    ends_when: "the children complete the artwork using the chosen tool and colour.",
    easier: "the child uses just one colour and one tool on a familiar worksheet.",
    harder: "the child picks more than one colour and more than one tool on the same worksheet, or picks the colours, tools, and challenges for another child.",
    variations: [
      { name: "Multiple colours and tools", text: "Children pick more than one colour and more than one tool to use on the same worksheet." },
      { name: "Children choose for each other", text: "Children pick the colours, tools, and challenges for each other instead of for themselves." }
    ],
    materials: ["Colour Friend cards", "Tool cards", "Colour Wild cards", "Colour Friend worksheets", "Colour wheel poster — 2", "General art supplies (A4 paper, pencil, paint, crayons, cotton, etc.)"],
    wild_cards: "Wild Cards introduce concepts of colour schemes. Initially, the educator introduces each concept one at a time and guides children through it. As children become familiar, they can choose and apply them independently. The colour wheel can be used as a reference for this.",
    educator_notes: [
      "The educator can place the colour wheel on the table for the children to observe.",
      "This gameplay doesn't depend on the worksheets — the educator can also swap in cards from other games (e.g. I Shop Texture, DIY sheets) to trace or directly work on."
    ],
    skills: ["CO", "CE"]
  },
  {
    id: "i-shop-texture-3-5",
    category: "art-3-5",
    age_bands: ["3–5"],
    name: "I Shop Texture",
    group_size: "3–8 children · 1 educator",
    duration: "25 min",
    goal: "the child buys an object and a texture and then creates that texture on the object.",
    steps: [
      "write a price on each object card and each texture card in erasable marker.",
      "give each child a limited number of tokens.",
      "the child spends their tokens to buy one object card and one texture card of their choice.",
      "the child creates the chosen texture on the object card using clay or erasable marker.",
      "when everyone finishes, look at each child's textured object together."
    ],
    ends_when: "all the children finish the task/artwork or the set time is up.",
    easier: "the child works directly on the card with clay or erasable marker.",
    harder: "the child recreates the textured object on an A4 sheet with more art materials, and adds a background and colour — or works against a timer.",
    variations: [
      { name: "Draw and add texture", text: "Instead of working directly on the card, children trace/draw the object on a paper and then add the chosen texture." },
      { name: "Recreate", text: "Children buy a card, then recreate it on an A4 sheet and add details to the image (background, colour)." },
      { name: "Timed challenges", text: "Set a timer for the buy-and-create round to add pace." }
    ],
    materials: ["Texture cards", "Object cards — mall, cafe, garden", "Tokens", "Erasable marker (to write prices and to draw textures)", "Clay (to create textures by hand)"],
    skills: ["FM", "CO", "CE"]
  },
  {
    id: "mini-artventure-3-5",
    category: "art-3-5",
    age_bands: ["3–5"],
    name: "Mini Artventure",
    group_size: "3–8 children · 1 educator",
    duration: "25 min",
    goal: "the child rolls the dice, lands on a zone, and completes an art task from that zone.",
    steps: [
      "put the board on a play mat. sort challenge cards by zone colour and set up the material tray for each zone.",
      "each child picks a meeple and starts at the start space.",
      "on their turn, the child rolls the dice, moves forward, and picks a challenge card from the zone they land on (draw, colour, mould, or build).",
      "the child heads to the matching zone tray and completes the task before the 2-minute timer runs out. on success, they collect a reward token.",
      "after all the rounds, count the tokens together and celebrate everyone."
    ],
    ends_when: "the set number of rounds (6–8) is over.",
    easier: "the educator helps the child pick a simpler challenge card from the same zone.",
    harder: "play the team task — one player rolls and moves the meeple, and the whole group completes the designated task together.",
    variations: [
      { name: "Team task", text: "One player from each team rolls the dice and moves the meeple, and the group completes the designated task." }
    ],
    art_zones: [
      "Draw zone — A5 paper, pencils, erasers, sharpeners",
      "Colour zone — wax crayons only (no pastels)",
      "Mould zone — playdough or clay, rollers, shape cutters",
      "Build zone — 2D wooden shapes (triangle, square, circle) and plastic connectors"
    ],
    materials: ["Game board with 4 colour-coded zones (Draw · Colour · Mould · Build) and Fortune squares", "Player tokens (chunky animal or shape tokens, easy to grip)", "Challenge cards — Draw · Colour · Mould · Build (15 each, 60 total)", "Fortune cards — toddler-friendly surprises (extra turn · skip · help a friend)", "6-sided die", "Reward tokens", "2-minute timer"],
    skills: ["FM", "CO", "CE"]
  },
  {
    id: "whats-that-sound-3-5",
    category: "storytelling-3-5",
    section: "playground",
    age_bands: ["3–5"],
    name: "What's That Sound",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child picks a sound card and makes that sound so friends can guess what's on it.",
    steps: [
      "sit the children in a circle. keep the sound cards face-down in a pile in the middle.",
      "the first child picks the top card and looks at it — others should not see.",
      "the child makes the sound of what's on the card (e.g. dog → woof woof).",
      "the other children guess what it is.",
      "if the guess is right, the child keeps the card. if not, the next child plays."
    ],
    ends_when: "you reach a set time or every child has had a turn.",
    easier: "you make the sound first; the children repeat it, then guess together. use only animal and body cards.",
    harder: "the child makes the sound AND acts the thing out with their body. use every category and add a timer.",
    variations: [
      { name: "Sound + act", text: "Child makes the sound and acts the thing out." },
      { name: "Educator leads", text: "Educator makes the sound and children guess. Children can also repeat the sound after the educator to learn the sounds." },
      { name: "One category", text: "Use only one category at a time — animals, vehicles, instruments. The educator can name the category before the play." }
    ],
    difficulty_levels: {
      easy: "Educator-led variation; use Animal and Body sound cards.",
      medium: "Sound + act and one-category variation; use Daily objects and vehicle cards.",
      hard: "Use all the cards with time constraints."
    },
    materials: ["Sound cards — Animal cards", "Vehicle cards", "Daily objects", "Musical instruments cards", "Body cards", "Nature cards"],
    skills: ["LI", "SP", "VO"]
  },
  {
    id: "rhyme-house-3-5",
    category: "storytelling-3-5",
    section: "playground",
    age_bands: ["3–5"],
    name: "Rhyme House",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child opens two windows on the house and finds a rhyming pair.",
    steps: [
      "place all the window cards face-down on the house mat. sit the children around it.",
      "on the first child's turn, they pick any 2 windows and open them.",
      "the child says both words out loud.",
      "if the two words rhyme, they keep both windows and get another turn.",
      "if not, close the windows. the next child plays."
    ],
    ends_when: "every rhyming pair on the mat has been found.",
    easier: "you say both words for the child. they repeat them and tell you if they rhyme.",
    harder: "the child opens one window, says the word, and then names a rhyming word of their own.",
    variations: [
      { name: "Whole class", text: "The whole class says the two words together." },
      { name: "Rhyme Pair Hunt", text: "Place one deck on the windows of the Rhyme House mat and keep the matching rhyming-word cards face up in a separate pile. Children take turns opening a window card and finding its rhyming pair from the pile." },
      { name: "Say the Rhyme", text: "On their turn, the child opens a window card and says the word. They then say its rhyming word. If correct, they keep the window card; if not, the card stays on the mat. The game ends when all window cards have been played." }
    ],
    difficulty_levels: {
      easy: "Educator says both words and introduces rhyming pairs by asking children to repeat them.",
      medium: "Original gameplay; Rhyme Pair Hunt variation.",
      hard: "Say the Rhyme variation; children name 2 rhyming words of their own."
    },
    materials: ["House mat", "Window cards"],
    skills: ["LI", "RE", "SP"]
  },
  {
    id: "story-cube-3-5",
    category: "storytelling-3-5",
    section: "playground",
    age_bands: ["3–5"],
    name: "Story Cube",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child rolls a picture die and adds one sentence to a shared story.",
    steps: [
      "sit the children in a circle. place all 6 picture dice in the middle.",
      "the first child picks one die and rolls it. they say one sentence using the picture that lands on top.",
      "the next child picks a different die and rolls it. they add one sentence that continues the same story.",
      "keep going around the circle. every child rolls once and adds a sentence.",
      "when everyone has had a turn, ask the group to give the story a name."
    ],
    ends_when: "every child has rolled a die and added a sentence to the story.",
    easier: "the child points to the picture; you say the sentence they meant, then they repeat it back.",
    harder: "one child rolls all six dice and tells the whole story alone, using every picture in order.",
    variations: [
      { name: "Story Chain", text: "One child rolls a die and starts the story with a sentence based on the picture. The next child rolls another die and adds a new sentence to continue the story. Continue taking turns until every child has rolled a die and contributed. Extension: the educator can divide the children into 2 groups, and each group questions the opposite group after their story is complete. Story levels — Level 1: add a simple sentence · Level 2: add details to the sentence · Level 3: connect the sentence to previous events in the story." },
      { name: "Story Maker", text: "A child rolls the chosen dice, looks at the pictures shown, and tells a story using them. Other children act as audience and ask questions to the story maker. The game ends after all children contribute and complete a story. Levels — Level 1: use 1–2 story dice · Level 2: use 3–4 story dice · Level 3: use all 6 story dice." },
      { name: "Story Shuffle", text: "Children take turns rolling the dice. Each child places their dice in sequence and says a sentence using that word, building a story step by step as turns progress. After the story is told, the educator asks the children to shuffle the dice or rearrange their order and create a new version of the story. The educator can also ask children to come up with a title for the story." }
    ],
    difficulty_levels: {
      easy: "Story Chain variation; educator helps or prompts the children with cues. Story Maker Level 1.",
      medium: "Story Chain variation; children build sentences on their own. Story Maker Level 2.",
      hard: "Story Maker variation; Story Shuffle. Story Maker Level 3."
    },
    materials: ["6 dice, each category stuck on a wooden dice (action, setting, object, character, problem, emotion)"],
    skills: ["SP", "VO", "LI"]
  },
  {
    id: "language-wheel-3-5",
    category: "storytelling-3-5",
    section: "playground",
    age_bands: ["3–5"],
    name: "Language Wheel",
    group_size: "3–6 children · 1 educator",
    duration: "10 min",
    goal: "the child rolls the dice, moves on the wheel, and does the language task where they land.",
    steps: [
      "place the wheel mat in the middle. keep the challenge cards next to it.",
      "give every child a meeple. on their turn, the child rolls the dice.",
      "the child moves their meeple that many spots along the wheel.",
      "they pick the challenge card for the spot they land on and do the task.",
      "if the task is done, the child keeps a token."
    ],
    ends_when: "you reach the set number of rounds or every child has completed a task.",
    easier: "sit next to the child and help them read the card. use the easy-level task.",
    harder: "use the difficult-level task and set a timer for it.",
    variations: [],
    difficulty_levels: {
      easy: "educator supports children with tasks; easy-level task from the card.",
      medium: "Medium-level task from the card.",
      hard: "Difficult-level task from the card; timed challenge."
    },
    materials: ["Dice", "Meeples", "Challenge cards (reading, writing, listening, speaking)", "Fortune cards", "Language wheel mat", "Swat it Snap it cards / DIY prompt sheets"],
    skills: ["RE", "WR", "SP", "LI"]
  },
  {
    id: "guess-me-3-5",
    category: "storytelling-3-5",
    section: "playground",
    age_bands: ["3–5"],
    name: "Guess Me",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child figures out what's on their card from what other children act out or describe.",
    steps: [
      "shuffle the Guess Me cards. sit the children in a circle.",
      "the first child picks a card and holds it on their forehead without looking at it.",
      "the other children act out or make sounds for the picture — no naming it out loud.",
      "the child in the middle guesses what it is.",
      "if the guess is right, the child keeps the card. next child plays."
    ],
    ends_when: "you reach a set time or every child has had a turn.",
    easier: "children act out the picture without speaking. you can give a category cue if the guesser is stuck.",
    harder: "children give spoken clues instead of acting — no naming the thing. the guesser uses the word in a sentence when they get it.",
    variations: [
      { name: "Act it out", text: "A child picks a card and holds it on their head without looking at it. The other children act out or make sounds of the picture without saying its name. The child guesses what is on the card; if correct, they keep the card. Take turns and continue until a set time or set number of rounds." },
      { name: "Guess from Clues", text: "The educator gives clues about a picked card — \"I am yellow with black stripes and I make honey\" — and children guess." }
    ],
    difficulty_levels: {
      easy: "Act it out variation.",
      medium: "Guess from Clues variation; educator names the category before describing.",
      hard: "Guess from Clues — children give clues instead of the educator; the child makes a sentence with the guessed word."
    },
    materials: ["Guess Me cards — 7 categories (Actions, Objects, Emotions, Professions, Animals, Food, Vehicles)"],
    skills: ["SP", "LI", "VO"]
  },
  {
    id: "swat-it-snap-it-3-5",
    category: "storytelling-3-5",
    section: "playground",
    age_bands: ["3–5"],
    name: "Swat It Snap It",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child hears a target and races to find the matching card and swat it.",
    steps: [
      "spread the letter or word cards face-up around the swat-it box.",
      "hand each child a swatter.",
      "call out a target — a letter, a word, or a missing word from a sentence.",
      "children look, find the matching card, swat it, and snap it into the box.",
      "the child who snapped it reads the card out loud."
    ],
    ends_when: "every child has found and read at least one target.",
    easier: "use only the letter cards. call one letter at a time.",
    harder: "use the sentence-maker cards. children swat the word that completes the sentence.",
    variations: [
      { name: "Solo", text: "Each child plays at their own pace as the educator calls targets." },
      { name: "Team", text: "Children play in teams; team scores points together." }
    ],
    difficulty_levels: {
      easy: "Letter — swat the matching letter card.",
      medium: "Word — swat the matching word card.",
      hard: "Sentence — swat the card that completes the sentence."
    },
    materials: ["Box", "Swatters", "Letters cards", "Blend and digraph Words cards", "Punctuation marks + long-vowel Words cards", "Rhyming Words cards", "Sight Words cards", "Sentence Maker cards"],
    skills: ["RE", "LI", "VO"]
  },
  {
    id: "i-spy-3-5",
    category: "storytelling-3-5",
    section: "playground",
    age_bands: ["3–5"],
    name: "I Spy",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child hears the clue, finds the object on the mat, and says its name in a sentence.",
    steps: [
      "place the i spy mat in the middle. sit the children around it.",
      "show a card from the easy deck. name or describe what's on it.",
      "the children look at the mat and find the matching object.",
      "one child points to it and says its name.",
      "the same child uses the name in a short sentence."
    ],
    ends_when: "every card in the day's deck has been found.",
    easier: "use only the easy cards. give the children extra time to look.",
    harder: "use the difficult cards. set a short timer for each find.",
    variations: [
      { name: "Timed", text: "Set a short timer for each find." },
      { name: "Turn-based", text: "Each child takes a turn to find one object." },
      { name: "Team", text: "Two teams race to find first." }
    ],
    difficulty_levels: {
      easy: "Easy cards.",
      medium: "Medium cards.",
      hard: "Difficult cards; timed challenge."
    },
    materials: ["I Spy mat", "3 decks of cards (easy, medium, difficult)"],
    skills: ["LI", "VO", "SP"]
  },
  {
    id: "every-body-says-3-5",
    category: "storytelling-3-5",
    section: "playground",
    age_bands: ["3–5"],
    name: "Every Body Says",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child uses their body — alone or with friends — to make the thing shown on the card.",
    steps: [
      "keep the everybody-says cards face-up so all children can see.",
      "the first child flips the top card.",
      "all the children use their bodies — alone, in pairs, or as a group — to form the thing on the card.",
      "name out loud what the children have made.",
      "the next child flips the next card."
    ],
    ends_when: "the pile of cards is finished.",
    easier: "children form the thing alone or in pairs — no group shapes yet.",
    harder: "children come up with their own way of forming the thing — every child a different version.",
    variations: [
      { name: "Solo", text: "Each child forms the object on their own." },
      { name: "Pair", text: "Two children form the object together." },
      { name: "Group", text: "The whole group forms one shared object." }
    ],
    difficulty_levels: {
      easy: "Children form the object as a pair or individually.",
      medium: "Children form the object and also do the action, solo or in a pair, as instructed on the card.",
      hard: "Children, as a group or individually, come up with their own versions of forming the object with their bodies."
    },
    materials: ["Everybody says cards"],
    skills: ["LI", "VO", "SP"]
  },
  {
    id: "story-construction",
    category: "storytelling-3-5",
    section: "playground",
    age_bands: ["3–5"],
    name: "Story Construction",
    group_size: "3–8 children · 1 educator",
    duration: "10 min",
    goal: "the child helps arrange the picture cards in the right order and tells the story from them.",
    steps: [
      "shuffle the 8 story cards and place them face-up in the middle.",
      "the children look at the pictures together and decide what comes first.",
      "they arrange the cards in the correct order from left to right.",
      "one child at a time describes the picture on their card in one sentence.",
      "the group reads the story out loud from start to end."
    ],
    ends_when: "the cards are in order and the group has told the full story.",
    easier: "you guide the children by asking 'what happens first? what happens next?' after each card.",
    harder: "children rearrange the cards in a brand-new order to invent a different story, and act it out.",
    variations: [
      { name: "Story Trail", text: "Children/educators follow the story card by card, describing what is happening in each picture and linking it to the next one to narrate the story." },
      { name: "Story Squad", text: "Divide children into three teams: Story Makers — arrange the cards in the correct order · Story Stars — act out the story · Story Questioners — ask questions about the story and characters to the other two teams." },
      { name: "Story Twist", text: "Children, as groups or individuals, rearrange the cards in a different order to create a brand-new story. They then narrate or act out their new version. (Can be combined with Story Squad.)" }
    ],
    difficulty_levels: {
      easy: "Story Trail variation.",
      medium: "Original gameplay.",
      hard: "Story Squad; Story Twist variation."
    },
    materials: ["8 story cards deck"],
    skills: ["RE", "SP", "LI"]
  },
  {
    id: "candy-sort",
    category: "stem-3-5",
    section: "logic-lab",
    age_bands: ["3–5"],
    name: "Candy Sort",
    group_size: "6–9 children · 1 educator",
    duration: "20 min",
    goal: "the child groups, identifies, or predicts candies by colour, shape, or pattern.",
    steps: [
      "pick one gameplay area for the session — Sort, Pattern, or Match/Find.",
      "pick one game inside that area and gather the candy cards needed.",
      "explain the rule of the game to the children before starting.",
      "children take turns following the rule — sorting, matching, or predicting candies.",
      "when the round finishes, choose the next game in the area or move to a new area next session."
    ],
    ends_when: "the round of the chosen game is over.",
    easier: "the educator demonstrates first and assists whenever required.",
    harder: "children take on the level-up version — a second sorting rule, two dice, child-given clues, or a time limit.",
    variations: [
      { name: "Sort · Venn Sort", text: "Divide the class into 2–3 groups. Give each group a pile of candy cards and place it in the centre. The educator shows one sorting rule, such as: colour (red candies), shape (round candies), or pattern (striped candies). The educator first picks and sorts 3–4 candies that follow the rule. Children look through the pile and take turns picking one candy at a time. Each child checks if their candy matches the sorting rule. If the candy matches the rule, the child places it in the correct group. Continue until all children have had a turn or the pile is sorted." },
      { name: "Sort · Candy Sort", text: "Divide the class into small groups of 2–3 children. Give each group a pile of candy cards and place it in the centre. The educator gives each child or group one sorting rule — colour (red / blue / yellow), shape (round / wavy / umbrella), or pattern (striped / dotted / plain). Children look through their pile and find all the candies that match their rule. Once sorting is complete, each child or group counts how many matching candies they found. The educator can also ask children to count the candies that do not match their rule. If a group finds candies that belong to another group's rule, they can exchange them with that group. To make it harder, the educator adds a second rule within the sorted set — e.g. \"from your blue candies, now find only the wavy blue candies.\" Start with simple sorting by colour, then move to shape, and finally introduce patterns." },
      { name: "Sort · Secret Rule", text: "Divide the class into small groups of 2–3 children. Place a small group of candy cards in front of each group. Make sure all the candies follow one secret rule — colour (all red), shape (all round), or pattern (all striped). Ask children to look carefully at the candy cards. Children try to guess what is the same about all the candies. Each child takes a turn to share their idea. Children name the rule aloud, such as \"the rule is red candies.\" Educator can guide by asking: \"What do you notice? What is the same?\"" },
      { name: "Sort · Odd Candy Out", text: "Divide the class into small groups of 2–3 children. Place a small group of candy cards in a row in front of each group. Most candies should share one trait — colour, shape, or pattern. Add one candy that is different from the rest. Ask children to look carefully at all the candy cards. Children find the candy that does not belong. Each child takes a turn to point to the odd candy. Children can say why it is different, such as \"this one is not round\" or \"this one is a different colour.\"" },
      { name: "Pattern · What's Next?", text: "Divide the class into small groups of 2–3 children. Place a few candy cards in a simple pattern in front of each group. Start with an easy pattern — colour (red, blue, red, blue) or shape (round, wavy, round, wavy). Ask children to observe the pattern carefully. Children guess what candy should come next. Each child takes a turn to pick one candy card and add it to the pattern chain. Continue until every child gets a turn or the pattern is complete. Start with colour patterns, then shape, then pattern-based sequences." },
      { name: "Match / Find · Roll & Hunt", text: "Divide the class into small groups of 2–3 children. Give each group a pile of candy cards and place it in the centre. Each child takes a turn to roll the die. The child picks candies from the pile based on the number shown on the die. For a challenge, children can roll two dice. Children pick candies based on the dice result, up to a maximum of 6 candies. Continue until every child gets a turn." },
      { name: "Match / Find · Sweet Relay", text: "Divide the class into small groups of 2–3 children. Give each group a pile of candy cards and place it in the centre. One child picks any candy from the pile. The next child picks another candy that has one matching trait. The child says the matching trait aloud, such as \"my candy is red too.\" Continue the relay until no more matching candies are left. Educator can start a new relay with a different candy and trait." },
      { name: "Match / Find · I Spy Candy", text: "Divide the class into small groups of 2–3 children. Place all candy cards where everyone can see them. Educator or one child secretly chooses one candy. They give a clue, such as \"I spy a candy that is shaped like an umbrella.\" Other children look carefully and try to find the matching candy. Children take turns guessing the candy. Continue with a new candy and a new clue." }
    ],
    difficulty_levels: {
      easy: "Educator demonstrates first and assists whenever required.",
      medium: "Children play the game independently.",
      hard: "Children take on the level-up version of the game — e.g. a second sorting rule, two dice, child-given clues, or a time limit."
    },
    materials: ["Candy cards — colour, shape, and pattern varieties", "Two dice (for Roll & Hunt)", "Sorting plates or team trays", "Timer (optional)"],
    educator_notes: [
      "Each gameplay area (Sort, Pattern, Match/Find) contains several games that progress in the order listed — work through them in sequence. Within any one game, the educator sets the support level (Easy / Medium / Hard) to match the child. So a child might be at \"Easy\" on a new Pattern game while already at \"Hard\" on a familiar Sort game."
    ],
    skills: ["LO", "PR", "NS"]
  },
  {
    id: "stitch-me",
    category: "stem-3-5",
    section: "logic-lab",
    age_bands: ["3–5"],
    name: "Stitch Me",
    group_size: "3–6 children · 1 educator",
    duration: "20 min",
    goal: "the child laces beads onto the base by following the pattern on the card.",
    steps: [
      "give each child one base template card (start with Level Easy), a shoelace, and beads.",
      "the child laces the beads onto the base following the pattern shown on the card.",
      "when the child completes the card, move them up to the next level.",
      "all children start from Level Easy and gradually progress to Level Hard."
    ],
    ends_when: "every child has completed at least one Level Easy card and progressed to their next level.",
    easier: "the educator sits with the child and points to the next bead on the card each time.",
    harder: "the child laces from a verbal riddle instead of a card — see Variation 3 below.",
    variations: [
      { name: "Free pattern", text: "The educator can increase the difficulty level. In the difficulty the kids are free to make their own pattern." },
      { name: "Verbal prompt scavenger", text: "The educator will give a verbal prompt including colour and number and the kids will find them in the scavenger bin (box). Example: \"Blue 2, yellow 1…\"." },
      { name: "Riddle relay", text: "The whole class is divided into two groups. Each group has their own lace. The educator reads a riddle. The child from both groups races and picks the matching bead or number, and laces it. Examples: \"I'm the same colour as a strawberry\" → red bead. \"I'm what comes after 2 and before 5\" → number 3 or 4." }
    ],
    materials: ["Stitch me pattern cards (easy, medium, difficult)", "Sewing bases (beads, numbers)", "Shoelaces"],
    educator_notes: [
      "Since there is only one set of number cards, the educator's riddles should allow for multiple possible answers."
    ],
    skills: ["LO", "PR", "NS"]
  },
  {
    id: "dot-grid",
    category: "stem-3-5",
    section: "logic-lab",
    age_bands: ["3–5"],
    name: "Dot Grid",
    group_size: "2–4 children · 1 educator",
    duration: "20 min",
    goal: "the child picks a card, follows its puzzle type, and places disks on the mat to solve it.",
    steps: [
      "place the play mat in the centre with the four colour disks beside it.",
      "sort the cards by level.",
      "one child picks a card. observe the puzzle type and follow the instructions.",
      "children take turns placing the colour disks on the mat to solve the puzzle.",
      "after completing the card, try the bonus challenge on the other side of the card as an added task."
    ],
    ends_when: "every child has completed at least one card and its bonus challenge.",
    easier: "use the easy cards — the child builds exactly what they see on the card.",
    harder: "use the hard cards with the team challenge variation.",
    variations: [
      { name: "Team Challenge", text: "One team creates a pattern on their mat. The other team observes it and recreates or completes the pattern on their own mat. This variation can be used with all gameplays except Copy the Pattern. For example, one team can build half of a mirror pattern and the other team completes the reflection. Similarly, one team can create the beginning of a What Comes Next? pattern, and the other team finishes the sequence." },
      { name: "Create & Challenge", text: "A child creates a pattern or arrangement on the grid. Their partner then solves the puzzle. This variation can be used with card types — Mirror It Across, How Many?, Finish the Pattern, or What Comes Next?" }
    ],
    difficulty_levels: {
      easy: "Easy cards.",
      medium: "Medium cards; Variation 2 (Create & Challenge).",
      hard: "Hard cards; Variation 1 (Team Challenge)."
    },
    materials: ["Dot grid mat", "See and predict cards — 16", "See and match cards — 16", "Coloured disks"],
    game_types: [
      "Copy — Direct visual replication. Children build exactly what they see on the card.",
      "Finish the Pattern — Pattern recognition + completion. Children continue an existing pattern into the next row or column.",
      "Mirror It Across — Spatial reflection (left → right). Children build the mirror image on the next half, matching the first half.",
      "Count How Many? — Counting and comparison (more/less). Children arrange the dot pattern on the mat and count to answer \"how many?\"",
      "What Comes Next? — Identifying rules and predicting. Children look at a sequence and place disks to show what comes next in a given cell."
    ],
    educator_notes: [
      "The bonus round prompts are provided as examples. Educators may create similar prompts based on the children's learning level and interests to extend gameplay."
    ],
    skills: ["LO", "NS", "PR"]
  },
  {
    id: "logical-road-builder",
    category: "stem-3-5",
    section: "logic-lab",
    age_bands: ["3–5"],
    name: "Logical Road Builder",
    group_size: "1–2 children · 1 educator",
    duration: "20 min",
    goal: "the child builds a connected road from the starting point to the end point using straight and curved tiles.",
    steps: [
      "place the base board(s) in front of the child. mark a starting point and an end point.",
      "spread the straight and curved tiles beside the board.",
      "the child places one tile at a time to make the road flow from start to end.",
      "when a tile doesn't fit, swap it for a curved or straight one so the road connects without gaps.",
      "when the road connects start to end, add another base board or a timer to raise the challenge."
    ],
    ends_when: "the child has connected the road from start to end without gaps.",
    easier: "start with a single base board and a short path so the child feels the connection quickly.",
    harder: "add a timer and use two or more base boards with multiple destinations.",
    variations: [
      { name: "Limited tiles", text: "The educator can give the child a limited number of tiles (example: 6 straight, 4 straight and 1 curved) and the child has to build the road using the given pieces only." },
      { name: "Multiple destinations", text: "Educators can give more than 2 final points and the child has to build a path where they reach destination 1 then travel to destination 2." },
      { name: "Relay race", text: "Educators can ask two kids to start from opposite ends of the board and have one final destination, and both kids race to reach the destination first in a relay race." }
    ],
    materials: ["Logic Road Builder game board", "Road tiles"],
    skills: ["LO", "PR"]
  },
  {
    id: "magna-tiles",
    category: "stem-3-5",
    section: "logic-lab",
    age_bands: ["3–5"],
    name: "Magna Tiles",
    group_size: "3–8 children · 1 educator",
    duration: "20 min",
    goal: "the child looks at a flashcard prompt and builds the matching shape with magna-tiles.",
    steps: [
      "spread the magna-tiles out where every child can reach them.",
      "show one prompt flashcard and read the level's instruction aloud.",
      "let the child count the tiles shown and pick that many from the pile.",
      "children can play individually or as a group, depending on the child's level of understanding.",
      "once built, show the next flashcard or move up a level."
    ],
    ends_when: "the child's build matches the flashcard prompt for the current level.",
    easier: "start at level 1 — show a 3d prompt like a tower or bridge and help the child build it vertically with support to balance.",
    harder: "run level 5 open-ended — give a tile limit or design challenge with no fixed picture, and let the child experiment freely and describe their build.",
    variations: [
      { name: "Free Play", text: "Children use the Magna-Tiles to explore, create, and build freely — their own shapes, structures, objects, or designs — following their imagination, with no set rules." }
    ],
    difficulty_levels: {
      easy: "Level 1 cards; free play.",
      medium: "Level 2 and Level 3 cards.",
      hard: "Level 4 and Level 5 cards."
    },
    materials: ["Magna-Tiles set", "Prompt cards (level 1 to 5)"],
    skills: ["PR", "LO", "NS"]
  },
    {
    id: "train-time",
    category: "stem-3-5",
    section: "imagine-playground",
    age_bands: ["3–5"],
    name: "Train Time",
    skills: ["NS", "PR"],
    materials: ["Track pieces", "Train cars"],
    group_size: "Whole group intro → 2 groups build",
    goal: "the group builds a train and track together, joining pieces and counting them as they go.",
    steps: [
      "gather all children. Say: \"Today we are going to build a train and a train track.\" Ask: \"What does a train look like?\", \"What sound does a train make?\", \"What does a train do?\" and let a few children answer.",
      "show one track piece and explain that track pieces join together to make the path for the train. join two pieces slowly.",
      "show the engine and explain it pulls the train forward. join a train car to it and place them on the track.",
      "each group builds its own track, with every child adding one piece in turn. let children try first and help only if needed. ask how many pieces they've used, which piece comes next, and whether the track is getting longer.",
      "join both groups' tracks together and count the total pieces together.",
      "move the train around the track, passing it from child to child — when it reaches the last child, that child turns it around and sends it back. ask who gets it next and who will be the driver after 2 more passes.",
      "introduce a problem: remove one piece (a broken track) and ask what they can do since the train can only move on tracks; or turn one piece the wrong way (a turned track) and ask why the train stopped and how to fix it."
    ],
    ends_when: "both groups' tracks are joined, counted together, and the train has completed passes around the full track.",
    easier: "count the track pieces in order.",
    harder: "ask how many pieces there are now, what happens if 2 more are added, and how many pieces each group added altogether.",
    debrief: [
      "If a track piece is missing or incomplete, what happens to the train?",
      "How many pieces from each group make up this longer track?"
    ],
    variations: [
      { name: "Elaborate — Easy", text: "Build a track connecting one point to another (e.g. from you to a friend) — focus on joining pieces into a continuous path." },
      { name: "Elaborate — Hard", text: "Build a track connecting two points using only a set number of pieces — plan how to position them to reach the destination within that limit." }
    ],
    common_mistakes: ["don't call the track and car the same thing", "don't let one child do everything", "don't skip counting aloud"]
  },
  {
    id: "first-trip",
    category: "stem-3-5",
    section: "imagine-playground",
    age_bands: ["3–5"],
    name: "First Trip",
    skills: ["LO"],
    materials: ["Train set", "DIY red and green flags (for the engage game)", "Coloured blocks — red and green (for the build)", "Masking tape"],
    group_size: "Whole group for intro and movement game; 2–3 groups to build",
    goal: "the group builds a track with a masking-tape path and uses red and green blocks to control where the train stops and starts.",
    steps: [
      "gather the children and talk about trains. ask if they've travelled by train and where. introduce the Choo Choo Train game — children line up with hands on the shoulders of the child in front. show a green flag to move and a red flag to stop, and practice stopping and starting 2–3 times.",
      "create a masking tape path with a start, curves, and an end. divide children into groups to build different parts of the track, helping only if needed.",
      "once the track is complete, move the train along it. introduce the red and green blocks — children use the red block to stop the train and the green block to start it again.",
      "ask how the train moves on the curves, where it should stop, and how the track pieces connect."
    ],
    ends_when: "the train has run the full tape-marked path, stopping and starting at the blocks the children placed.",
    easier: "place one red block at an educator-chosen spot to stop the train.",
    harder: "children decide where to place the red and green blocks so the train stops and starts at different points, then test and adjust.",
    debrief: [
      "What happens when the red block is used? The green?",
      "Where did the train stop?",
      "Did our track follow the tape trail? Where did it curve? What happens to the train at a curve?",
      "If the train doesn't stop at the red block, what can we try? If it falls off the track, what should we check first?"
    ],
    variations: [
      { name: "Elaborate — Easy/Medium", text: "Add one station in the middle of the track. Move the train from start to destination and notice what happens at the station — does every train stop at every station? Should ours? Children decide and practice stopping/starting there." },
      { name: "Elaborate — Hard", text: "Add a station with a stop/go signal just before it. As the train nears the station, change the signal (if it started green, switch to red, or vice versa) — children must watch and react in the moment." }
    ],
    common_mistakes: ["let children use the blocks themselves, don't just show them", "don't stop the train for them every time", "always ask \"where did it stop?\"", "don't let one child control the train the whole time"]
  },
  {
    id: "load-the-train",
    category: "stem-3-5",
    section: "imagine-playground",
    age_bands: ["3–5"],
    name: "Load the Train",
    skills: ["NS", "LO", "CU"],
    materials: ["Train cars", "Small blocks for loading (a few colours)", "Masking tape"],
    group_size: "Whole group intro; pairs or groups of 2–3",
    goal: "the child loads a freight train with the correct number and colour of blocks, counting to check the load.",
    steps: [
      "gather the children and introduce the freight train — explain that freight trains carry objects and materials, and should be loaded with the correct amount. demonstrate by loading a freight car with 3 blocks, counting aloud, then checking the count together.",
      "children first sort the blocks by colour.",
      "give each group a loading instruction and let them load the car, counting as they go.",
      "ask what their load order is, how many they'll load, and whether they think it's too many, too few, or correct. count together to check, then compare different groups' combinations."
    ],
    ends_when: "each group has loaded their car to the instructed amount and the count has been checked together.",
    easier: "load a given number of blocks of one colour (e.g., 3 red blocks). count while loading, then check if the amount is correct.",
    harder: "load a fixed total using multiple colours (e.g., 10 blocks using 3 colours). children decide how many of each colour to use.",
    debrief: [
      "How many objects did you load? Let's count and check.",
      "Why is it important to carry the correct amount?",
      "If I remove 2 blocks, will it be more or less? How many are left?",
      "You loaded 3 red and 4 blue — how many altogether? Could you make 10 a different way? Tell me one."
    ],
    variations: [
      { name: "Elaborate — Easy", text: "Give a new load order with a different number and colour — child loads and re-checks by counting." },
      { name: "Elaborate — Hard", text: "Give an unload order instead — \"Take away 2 red blocks from your car.\" Children count what's left and compare to what they started with: \"How many did you start with? How many now? How many did you remove?\"" }
    ],
    common_mistakes: ["don't let children randomly fill the train", "don't skip counting aloud", "don't just ask \"is it correct?\" — have them count and check", "keep numbers small for younger children"]
  },
  {
    id: "longest-track",
    category: "stem-3-5",
    section: "imagine-playground",
    age_bands: ["3–5"],
    name: "Longest Track",
    skills: ["NS"],
    materials: ["Track pieces", "Measuring tape", "Same-sized blocks", "Pencils/books"],
    group_size: "Whole group intro; track building in 2 groups",
    goal: "the group builds the longest track they can and measures it using a standard unit instead of guessing.",
    steps: [
      "measure a book using hand spans, then let children try and compare their answers. explain that hands are different sizes, so we need a standard way to measure. measure the book and a pencil using equal-sized blocks, then with a measuring tape. ask which object is longer and whether both methods gave the same result.",
      "children build a track that reaches as far across the room as possible, with each child adding one piece in turn."
    ],
    ends_when: "the group has built and measured their longest track, comparing the result to their prediction.",
    easier: "build along a masking tape path marked by the educator, then measure the distance in footsteps.",
    harder: "plan and build a track using the same number of pieces, then measure it with a measuring tape. rebuild to see if the track can reach farther.",
    debrief: [
      "Easy: How did we measure?",
      "Hard: After rebuilding, did your track reach farther — what did you change? If we built with no curves at all, would it reach more or less? Why?"
    ],
    variations: [
      { name: "Elaborate — Easy", text: "Build a track that reaches a specific target distance the educator names (e.g. \"reach exactly 10 footsteps\") — add or remove pieces until it matches." },
      { name: "Elaborate — Hard", text: "Build two short tracks starting from two different walls and try to get them as close to meeting in the middle as possible — measure the gap between them." }
    ],
    common_mistakes: ["let them measure, don't just guess", "don't measure curve-by-curve if measuring total reach", "don't let children argue without checking", "don't skip recording results"]
  },
  {
    id: "train-sound",
    category: "stem-3-5",
    section: "imagine-playground",
    age_bands: ["3–5"],
    name: "Train Sound",
    skills: ["PR", "LO"],
    materials: ["Train", "Track pieces", "Coloured blocks (yellow, blue, white, red, green)", "DIY tunnel", "Pre-built picnic set and fuel station"],
    group_size: "Whole group",
    goal: "the child places instruction blocks along the track so the train reacts correctly — blowing its horn or stopping to refuel — before reaching each landmark.",
    steps: [
      "gather the children and talk about train stations. ask how people know a train is coming, and explain that trains use a horn to warn people and also stop for fuel during long journeys.",
      "play the Choo Choo Train game — children line up with hands on the shoulders. yellow means blow the horn (\"choo choo\") while walking slowly, and blue means stop to refuel (\"bloop bloop\"). repeat 2–3 rounds. if children are ready, also include red (stop) and green (go).",
      "build the train track together and place a picnic area and a fuel station along the route. introduce the yellow and blue blocks as instruction blocks for the train.",
      "children decide where each block should go so the train blows its horn before reaching the picnic area and stops to refuel before reaching the fuel station. test the train by moving it along the track."
    ],
    ends_when: "the train has run the full route, correctly reacting to each block before its matching landmark.",
    easier: "the educator places the picnic area and fuel station. children place the matching yellow and blue blocks before each stop.",
    harder: "children decide where to place both the stops and the matching blocks, then test and adjust their plan.",
    debrief: [
      "Why should the yellow block come before the picnic area?",
      "What happened first, next, and last?",
      "What would happen if we changed the order?"
    ],
    variations: [
      { name: "Elaborate — Easy/Medium", text: "Ask about going through a dark tunnel or room — introduce the white block (\"turns on the lights before a tunnel\"). Kids run the train through and narrate what each block does as they go." },
      { name: "Elaborate — Hard", text: "The educator rearranges the fuel station and picnic area into a new layout and gives a new spoken order (\"warn some children, then refuel, then turn on the light for a tunnel\"). Kids first say the plan in order (yellow → blue → white), then place the blocks to match, then run the train to check." }
    ],
    common_mistakes: ["connect each colour to its action, don't just name it", "don't skip the journey narration", "don't place all the blocks yourself", "don't rush the tunnel observation"]
  },
  {
    id: "o-shaped-track-looping",
    category: "stem-3-5",
    section: "imagine-playground",
    age_bands: ["3–5"],
    name: "O-Shaped Track — Looping",
    skills: ["LO", "CU"],
    materials: ["Curved track pieces", "Train", "Coloured blocks", "LEGO blocks for destinations"],
    group_size: "Whole group for the movement loop and discussion; 2–3 groups for destinations",
    goal: "the group builds a round, O-shaped track and discovers that a loop lets the train repeat the same journey.",
    steps: [
      "gather children and ask what they do many times every day or every week (brushing, eating, sleeping etc). explain that when we do something again and again, we are repeating it.",
      "model a short sequence (hop, clap, spin) and have the children copy and repeat it at least twice. explain this is like a loop — we do it again and again.",
      "build an O-shaped (round, loop-like) train track together using curved pieces, then build two or three destinations to visit.",
      "move the train around the loop, using coloured blocks so it can stop at each place."
    ],
    ends_when: "the train has completed a full loop, stopping at the destinations the group built.",
    easier: "the educator gives one simple destination story (\"the passengers want a picnic in the forest — help them get there\") and one stop.",
    harder: "children build 2–3 destinations and decide the story/order themselves, adding a blue block wherever they decide the train needs fuel or water.",
    debrief: [
      "Can the train take the same trip again? How?",
      "Which blocks did you use? Why?"
    ],
    variations: [
      { name: "Elaborate — Easy", text: "Build a short double-ended track next to the loop and run the train on both, noticing the double-ended one stops at the end." },
      { name: "Elaborate — Hard", text: "Compare directly — what's different about these two tracks? Can the train repeat the same journey on the double-ended one? Why or why not?" }
    ],
    common_mistakes: ["don't say \"loop\" without showing repetition first", "don't skip the movement game", "don't skip comparing to the double-ended track", "don't build the track for them"]
  },
  {
    id: "y-shaped-track-conditional-statements",
    category: "stem-3-5",
    section: "imagine-playground",
    age_bands: ["3–5"],
    name: "Y-Shaped Track — Conditional Statements",
    skills: ["LO"],
    materials: ["Y-shaped track", "Train", "Coloured tokens as tickets (DIY tokens if not available)", "Coloured blocks for stops", "Building pieces for stops"],
    group_size: "Whole group for the ticket game and building; educator/child is the conductor",
    goal: "the child uses a Y-shaped track and coloured tickets to practise if/then rules — sending the train to the stop that matches each ticket.",
    steps: [
      "play the Coloured Tickets game — set up 3 or more train stops with different coloured tokens (e.g. playground, park, zoo). give each child a coloured ticket and say, \"If you have a red ticket, then go to the playground.\" children move to the matching stop. repeat with different colours using \"If... then...\".",
      "show the Y-track and explain it gives the train two choices — it can go this way or that way. build the Y-track together with at least two stops in matching colours.",
      "hand out tickets and have children send the train to the matching stop using the coloured blocks. test the train."
    ],
    ends_when: "every ticket has been matched to its stop and the train has visited each one.",
    easier: "the educator is the conductor, hands a ticket to each child, and states the if/then rule aloud each time.",
    harder: "one child is the conductor and decides the if/then rule themselves, handing out tickets and explaining where each ticket should send the train.",
    debrief: [
      "The coloured ticket was a signal — it told us where the passenger wanted to go. Recap which ticket, which stop, and why."
    ],
    variations: [
      { name: "Elaborate — Easy", text: "Add a third stop with a new colour and a new ticket — practise the if/then rule with the added option." },
      { name: "Elaborate — Hard", text: "Use both Y-shaped tracks to build a track with more destinations (three-ended or Q-shaped). Ask how to signal now that there are more choices, and how the train can go back and visit other stops using the green block." }
    ],
    common_mistakes: ["don't skip the classroom ticket game", "repeat if/then clearly, more than once", "don't move the switch for children every time", "don't let children build stops without matching colours"]
  },
  {
    id: "journey-trouble-on-the-road",
    category: "stem-3-5",
    section: "imagine-playground",
    age_bands: ["3–5"],
    name: "Journey — Trouble on the Road",
    skills: ["LO", "PR"],
    materials: ["Y-tracks", "Coloured blocks", "Traffic light", "LEGO blocks"],
    group_size: "Whole group for discussion and movement game; small groups to build; turns to drive",
    goal: "the child connects a problem on the track to the traffic sign (coloured block) that solves it.",
    steps: [
      "ask what traffic rules the children know and why we need them. show the traffic light and let children guess what each colour means. then pretend each child is driving a train — an educator or child acts as the traffic controller, choosing the lights while children move, slow down, or stop by following the signals.",
      "small groups each pick a building destination and build it. build a shared Y-track together and place the destinations beside it.",
      "place coloured blocks along the track as problems. after each block, ask what happened after the train passed or reached it."
    ],
    ends_when: "the group has driven past every block and connected each problem to the sign that solves it.",
    easier: "the educator places 2–3 coloured blocks in clear, sensible spots (e.g. near a destination), so the connection between block and problem is easy to spot.",
    harder: "the educator scatters blocks randomly along the track — kids take turns driving and observe what happens after each one, without being told in advance what it does.",
    debrief: [
      "What problem did you see? Which traffic sign do we need to solve it?",
      "Children choose signs (coloured blocks) and explain — connecting problem → sign → solution."
    ],
    variations: [
      { name: "Elaborate — Easy", text: "Let kids choose one sign (coloured block) to design for a problem already seen on the track." },
      { name: "Elaborate — Hard", text: "Kids create their own new traffic signs or use coloured blocks for problems not yet solved, place them along the track, and explain to the group why each sign goes where it does." }
    ],
    common_mistakes: ["don't tell the sign's meaning immediately, let them guess", "don't skip the pretend traffic-driving game", "keep block placement varied so problems emerge naturally", "always ask \"which sign solves this?\""]
  },
  {
    id: "ramps",
    category: "stem-3-5",
    section: "imagine-playground",
    age_bands: ["3–5"],
    name: "Ramps",
    skills: ["NS", "CU"],
    materials: ["DIY track — 2", "2 ramps", "Cars/rolling objects", "Number markers", "Paper for graphs", "Magnatiles"],
    group_size: "Whole group for building; taking turns to test/roll",
    goal: "the child predicts and measures how far a car rolls down ramps of different lengths, and records the results.",
    steps: [
      "ask what it's like to go down a slide and how you move from the top to the bottom. explain simply that gravity is a force that pulls things toward the earth, and that today they'll use ramps and see how far cars roll.",
      "tape or glue the track template together to make one long track. mark the numbers along the track. position the ramp at one end and roll the car down the ramp onto the track. mark where and at which number it stops, then record the results on a simple graph.",
      "since there are 2 small ramps, each group first uses one small ramp to test and observe how far the car rolls. after everyone has tried, join the two small ramps together to make one longer ramp. children then repeat the activity and compare how far the car rolls on the longer ramp. discuss how changing the ramp length affects the distance travelled."
    ],
    ends_when: "the group has tested both the single and joined ramp, recorded both results, and compared them.",
    easier: "before rolling, ask how far they think it will go — the child guesses a number, rolls the car, and the educator marks where it stops. then roll on the joined ramp and mark it too.",
    harder: "compare the single small ramp and the joined longer ramp, predicting and marking each, then compare when it rolled farther — try to make the car roll past a target number on the track, adjusting and retesting.",
    debrief: [
      "How far did you think it would roll? Was your guess right? (\"I thought 5, but it stopped at 7.\")",
      "Which ramp made it roll farther — was it a small or big ramp?"
    ],
    variations: [
      { name: "Elaborate", text: "Repeat the same activity by building ramps with magnatiles or using different objects." }
    ],
    common_mistakes: ["always predict before rolling", "always mark where it stops", "don't skip the graph", "keep the gravity explanation simple"]
  },
  {
    id: "chain-reaction",
    category: "stem-3-5",
    section: "imagine-playground",
    age_bands: ["3–5"],
    name: "Chain Reaction",
    skills: ["LO", "PR", "CU"],
    materials: ["Building pieces", "Objects that move/fall/push/trigger"],
    group_size: "Whole group for the story; pairs build; whole group combines at the end",
    goal: "the child builds a small chain reaction where one triggered event causes the next.",
    steps: [
      "read the Aarav and Anaya free-fall story aloud (a ride drops, lands, and triggers a lever that raises a flag). ask what caused the platform to drop and what happened next. explain that the first trigger was the lever releasing the rope, which caused the platform to drop, and when it landed, that caused the flag to go up — this is called a chain reaction, one event causes another.",
      "pairs build their own chain reaction where one event should cause another to happen.",
      "while they build, ask what will happen first, what that will make happen next, and what they think will happen at the end. if it fails, suggest trying to change one part rather than fixing it for them."
    ],
    ends_when: "every pair has built and tested a chain reaction that runs from trigger to final event.",
    easier: "the pair builds a simple 2-step reaction (one trigger → one event) with educator help positioning pieces.",
    harder: "the pair builds a 3-step reaction (trigger → event → second event) on their own, testing and adjusting without the educator placing pieces for them.",
    debrief: [
      "What was the first cause? The first event? The last event?",
      "Did it happen the way you predicted? Why or why not?"
    ],
    variations: [
      { name: "Elaborate", text: "Combine every pair's reaction into one long class chain reaction in a shared space, test it, and if it stops midway, ask where it stopped and what can be changed — adjust and retry together." }
    ],
    common_mistakes: ["don't build it for children", "don't skip the story explanation", "don't skip naming first/next event", "treat failure as part of testing, not as wrong"]
  },
  {
    id: "probability",
    category: "stem-3-5",
    section: "imagine-playground",
    age_bands: ["3–5"],
    name: "Probability",
    skills: ["NS", "LO", "CU"],
    materials: ["Red/yellow/blue bricks", "Spinner wheel", "Crayons", "Story figures"],
    group_size: "Whole group for intro/story; spinning turn by turn with all predicting/recording",
    goal: "the child predicts the outcome of a spin and learns that some outcomes have a better chance without being guaranteed.",
    steps: [
      "play a guessing game: \"I am thinking of a colour\" — give clues for red (round fruit, fire engine colour), let kids guess, and ask how they knew. then place three bricks (red/yellow/blue) and say \"I'm thinking of one of these — guess which,\" then ask whether this was easier or harder than the first game, since this time there were only three colours but no clues.",
      "read the Riya and Kabir Spin to Win story aloud, where Riya guesses red because it's her favourite and Kabir guesses blue because there are more blue spaces — the wheel lands on red. explain that Kabir had the better chance, but Riya still won this time — that's what 'chance' means, it's not a guarantee.",
      "show the wheel and its pointer and explain this is a game of chance — you can guess, but you can't be completely sure. each child predicts a colour, spins, and the group checks the actual result together, marking it down.",
      "after a few spins, ask children to also count how many times each colour has come up so far, and use that to inform their next guess."
    ],
    ends_when: "the group has completed several spins, recorded the actual results, and discussed which colour had the better chance.",
    easier: "each child predicts a colour, spins, and the group checks the actual result together, one colour at a time.",
    harder: "after a few spins, children also count how many times each colour has come up so far, and use that to inform their next guess.",
    debrief: [
      "How many times did it land on red / yellow / blue?",
      "Which colour do you predict next? Why?",
      "There are more blue spaces, so it has a better chance — but it's still not guaranteed."
    ],
    variations: [
      { name: "Elaborate — Easy", text: "Spin the wheel a few more times; each time, children pick a block matching the result and start collecting pieces." },
      { name: "Elaborate — Hard", text: "After 5 spins, children use their collected pieces to build a small \"prize,\" then discuss which colour they got the most of and whether that matches which colour has the most wheel spaces." }
    ],
    common_mistakes: ["don't skip explaining \"probability\" through the game itself", "don't let children mark their guess instead of the real result", "never promise blue will definitely win — say \"better chance\""]
  },
    {
    id: "sort-and-guess",
    category: "stem-3-5",
    section: "wonderworld",
    age_bands: ["3–5"],
    name: "Little Kitchen: Sort & Guess",
    skills: [],
    materials: ["Food cards (start with half the deck, fruits + vegetables only)", "2 hoops (or 2 marked floor areas)", "A chalk line for above/below"],
    group_size: null,
    goal: "the child sorts, matches, or guesses food cards using colour, category, or growth-location rules, building up through Sort, Flip, and Guess.",
    steps: [
      "Type 1 — Sort: run these in order over several sessions with the same setup, the rule just gets harder. Colour: assign one colour to each hoop; the teacher sorts 3–4 cards to show how, then children sort the rest themselves. Category: two areas = fruit / vegetable; the teacher fixes the rule before starting and keeps it fixed (if tomato is a fruit today, it stays a fruit). Above/below ground: draw a line; cards go above or below by where the food grows — once secure, add a third zone: on the ground.",
      "Individual variation: each child gets a set number of cards and takes turns sorting them into the categories. Group variation: the teacher assigns a category to each group and they sort their cards into it.",
      "Type 2 — Flip (memory + match): lay all cards face-up for 20–30 seconds, let children look, then flip all face-down. Each child turns one card, hunts for its match, keeps the pair if it matches, returns it if not. The match rule rises with level: same colour → same category → same colour and category → the exact same food card.",
      "Type 3 — Guess (only after Sort is learned): one child picks a mystery food and keeps it secret. Others ask yes/no questions (\"is it a fruit?\", \"does it grow underground?\") — children can ask only 3 yes/no questions. After each answer, remove the cards the question rules out. Once guessed, the finder explains \"because…\" — how the clues led to the answer."
    ],
    ends_when: "the group has worked through the Sort, Flip, and Guess stages at their current rule level.",
    easier: "children sort on the basis of a single rule (e.g. fruit/vegetable); in the Guess variation there's no limit on questions/guesses; the teacher supports if needed.",
    harder: "the teacher gives a combination of traits (colour + category, or colour + above/below ground, or category + above/below ground — e.g. red fruit, yellow vegetable that grows above ground) and children sort by that combined rule; in the Guess variation the teacher assigns a limited number of questions/guesses and children play independently or add a time constraint.",
    educator_notes: [
      "Progress from colour recognition to category sorting, then to understanding above/below ground, and finally to guessing. Ensure each skill is independently and consistently demonstrated before moving on.",
      "If a child sorts wrong, place their card beside the correct one and ask \"why did you sort this here?\" / \"does this match the rule you chose?\" — let them notice, don't tell."
    ]
  },
  {
    id: "cooking",
    category: "stem-3-5",
    section: "wonderworld",
    age_bands: ["3–5"],
    name: "Little Kitchen: Cooking",
    skills: [],
    materials: ["Recipe cards (easy / medium / hard — same recipe)", "Fruit/vegetable cards as ingredients", "Action cards (cut · mix · mould · pour · blend · heat · cool · scoop)", "Cooking mat (work-plate with ½/¼ lines — mat A)", "Play-dough + clay tools", "Action station set around the room and a timer/clock (Heat · Cool/Freeze · Blend · Scoop — handled by the teacher at the station)"],
    group_size: null,
    goal: "the child follows a recipe's action and ingredient cards in order, cooking the dish at the mat and the action stations.",
    steps: [
      "the teacher dictates the recipe instructions to match the child's level — e.g. an easier instruction with 3–4 steps, and a harder variation with extra steps prompted separately to that group, even when both work from the same mat and recipe.",
      "following the instructions, children lay the action cards and ingredient cards in order on the mat to show the cooking steps.",
      "children collect play-dough of the specific colour from the teacher matching their ingredients — the teacher can portion out each colour and ask kids to collect it.",
      "children follow the steps on the mat: cut, pour, mix, mould are performed directly on their mat; scoop, freeze, heat, blend require carrying the mat to that station, doing the action, running the station timer if needed and counting the cook time, then bringing it back.",
      "finish by plating on the work-plate/glass, then check and serve.",
      "teachers can assign roles — one child reads the recipe and counts portions, the other walks the stations and cooks."
    ],
    ends_when: "the dish is plated on the work-plate/glass, checked, and served.",
    easier: "easy/medium recipe cards, type 1 gameplay.",
    harder: "difficult recipe cards, type 2 gameplay.",
    variations: [
      { name: "Fractions & Adding", text: "After the dish is made, add the ½ / ¼ concept: halve a portion on the ½ line, quarter it on the ¼ line." }
    ],
    educator_notes: [
      "Progression: counting comes before adding; adding before halving.",
      "Let a child notice a wrong step (for example: \"the soup has no water\") and fix it — that noticing-and-fixing is the problem-solving skill, not the finished dish."
    ]
  },
  {
    id: "restaurant",
    category: "stem-3-5",
    section: "wonderworld",
    age_bands: ["3–5"],
    name: "Little Kitchen: Restaurant",
    skills: [],
    materials: ["Two areas: a kitchen (the cooking mat) and a restaurant counter", "One menu card (teacher sets the prices)", "Pretend money — tokens", "The cooked dishes"],
    group_size: null,
    goal: "the child plays customer, chef, or cashier — ordering, cooking, billing, and paying for dishes from the menu.",
    steps: [
      "pre-game setup: the teacher places the recipe cards on the menu card (max 5) and sets their prices as a number of tokens, then gives a set number of tokens to the customer. teachers can divide children into groups and assign roles as customers and chef+cashier. play 2 rounds and swap roles for the 2nd round.",
      "Stage 1 — Order & Cook: the customer orders from the menu by pointing. one child/group is both chef and cashier — the chef takes the order and places the recipe card on the invoice side of the card, cooks the dish on the kitchen mat, and discusses the recipe requirements with the customer, who can be asked to choose the required ingredients (fruit, vegetable, toppings, etc.).",
      "Extension (harder): the chef offers add-ons — \"extra cheese? butter? a vegetable?\" — and tells the customer the prices; the customer chooses add-ons based on tokens left. add-ons cost ₹1–₹4 extra, so the bill must be re-totalled on the invoice.",
      "Stage 2 — Bill & Pay: the cashier totals the bill (adding any add-on prices) on the invoice, the customer pays the total, and the cashier gives change."
    ],
    ends_when: "the customer has been billed correctly, paid, and received change, across both rounds with roles swapped.",
    easier: "customers and chefs work with a single recipe.",
    harder: "chefs handle multiple food items and must cook to specified portions (example: ½ portion sandwich and ½ portion vegetable salad and 1 glass of orange juice).",
    educator_notes: [
      "Don't add money until counting and serving are smooth: paying → making change → re-totalling for add-ons."
    ]
  }
];
