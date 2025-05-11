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

function drawDialogueBox() {
    if (dialogueActive) {
        fill(0, 0, 0, 200);
        rect(0, height - 100, width, 100);

        fill(255);
        textSize(16);
        textAlign(LEFT, TOP);
        text(dialogueLines[currentDialogueIndex], 20, height - 30);
    }
}




