//INITIALISE VARIABLES

//Data for CHARACTERS
let bwLibrarian; //Variable to contain object
let bwLibrarianSprite; //Variable to contain sprite
let bwLibrarianXpos = 50; //Variable for position on x axis
let bwLibrarianYpos = 100; //Variable for position on y axis
let bwLibrarianHitPoints = 10 //Variable for hitPoints

let pinkLibrarian //Variable to contain object
let pinkLibrarianSprite //Variable to contain sprite
let pinkLibrarianXpos = 200; //Variable for position on x axis
let pinkLibrarianYpos = 100; //Variable for position on y axis
let pinkLibrarianHitPoints = 5; //Variable for hitPoints

let textPaddingX = 50; //Same for both characters
let textPaddingY = -25; //Same for both characters

//p5 FUNCTIONS

function preload() {
  bwLibrarianSprite = loadImage("librarian-bw.png") //Loads b&w sprite
  pinkLibrarianSprite = loadImage("librarian-pink.png") //Loads pink sprite
}

function setup() {
  createCanvas (400,400);
}

function draw() {
  background(220);
}




