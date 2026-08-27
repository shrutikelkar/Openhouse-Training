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
  }
];
