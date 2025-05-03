//INITIAL VARIABLES

//Data for both characters
let bwLibrarian; // contains object
let bwLibrarianSprite; // contains sprite 
let bwLibrarianXpos = 50; //position on X axis 
let bwLibrarianYpos = 100; // position on Y axis
let bwLibrarianHitPoints = 10; // variable for hitpoints 

let pinkLibrarian // contains object
let pinkLibrarianSprite // contains sprite
let pinkLibrarianXpos = 200; // position on X axis
let pinkLibrarianYpos = 100; // position on Y axis
let pinkLibrarianHitPoints = 5; // variable for hitpoints 

let textPaddingX = 50; // same applies to both characters
let textPaddingY = -25; // same applies to both characters

//p5 FUNCTIONS
function preload() {
    bwLibrarianSprite = loadImage("librarian-bw.png"); //loads b&w sprite
    pinkLibrarianSprite = loadImage("librarian-pink.png") //loads pink sprite 
}

function setup () {
    createCanvas(400, 400);  

    //Initiate Objects from Character Class
    bwLibrarian = new Character(bwLibrarianSprite,
                                bwLibrarianXpos,
                                bwLibrarianYpos,
                                bwLibrarianHitPoints,
                                textPaddingX,
                                textPaddingY);
    
 
    pinkLibrarian = new Character(pinkLibrarianSprite,
                                  pinkLibrarianXpos,
                                  pinkLibrarianYpos,
                                  pinkLibrarianHitPoints,
                                  textPaddingX,
                                  textPaddingY);



}

function draw() {
    background(220);

    bwLibrarian.display();
    pinkLibrarian.display();
}

//CLASSES


