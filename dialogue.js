//INITIALISE DIALOGUE VARIABLES
let dialogueActive = false; 
let dialogueTriggered = false;
let currentDialogueIndex = 0;

let dialogueLines = [ //Array holding every line of dialogue in sequence
    "Slimeball: WHO DARES to step on my sacred tile!?  press SPACE to continue...", //Dialogue 1
    "HeatBlast: Just passing through you Goo Ball!!  *press SPACEBAR*", //Dialogue 2
    "Slimeball: That's not my name, have fun getting past me!  *press SPACEBAR*", //Dialogue 3
    "CHALLENGE- **PASS SLIMEBALL AND FIND THE SECRET EXIT**" //Dialogue 4 (Alert message)
];

function startDialogue() {
    dialogueActive = true;
    dialogueTriggered = true; //Makes sure dialogue doesn't trigger again
    currentDialogueIndex = 0; //Makes sure dialogue happens in order of sequence
}

function drawDialogueBox() {
    if (dialogueActive) {
        fill(0); //Black text box for dialogue
        rect(0, height - 100, width); //Position of dialogue box (bottom of screen)

        fill(139, 0, 0); //Maroon red text
        textSize(13); //Size of text
        textAlign(LEFT, TOP); //Position of dialogue
        text(dialogueLines[currentDialogueIndex], 20, height - 30);
    }
}


function keyPressed() {
    if (dialogueActive && //Only run function when dialogue is showing
        key === ' ') { //& if spacebar is being pressed
            currentDialogueIndex++; //Goes to next line of dialogue
            if (currentDialogueIndex >= dialogueLines.length) {
                dialogueActive = false; //If dialogue is done remove dialogue box

        }
    }
}


