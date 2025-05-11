// dialogue.js

let dialogueActive = false;
let dialogueTriggered = false;
let currentDialogueIndex = 0;

let dialogueLines = [
    "Slimeball: WHO DARES to step on my sacred tile!?",
    "HeatBlast: Just passing through you Goo Ball",
    "Slimeball: That's not my name, have fun getting past me!",
    "CHALLENGE- **PASS SLIMEBALL AND FIND THE SECRET EXIT**"
];

function startDialogue() {
    dialogueActive = true;
    dialogueTriggered = true;
    currentDialogueIndex = 0;
}

