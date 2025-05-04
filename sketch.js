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

  //Instantiate objects from character class
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

function mouseClicked(){
  pinkLibrarian.damage(1); //Calls damage function for pinkLibrarian and tells it to take away 2 hitPoints
  bwLibrarian.damage(2);
}

//CLASSES
class Character {
  constructor(sprite, xPos, yPos, hitPoints, textPaddingX, textPaddingY) {
    
    this.sprite = sprite; //Artwork
    this.xPos = xPos; //x position
    this.yPos = yPos; //y position
    this.hitPoints = hitPoints; //Object hitPoints
    this.textPaddingX = textPaddingX; //Padding for hitPoints text on x axis
    this.textPaddingY = textPaddingY; //Padding for hitPoints text on y axis
  }

  display() {
    //Display sprite
    image(this.sprite, this.xPos, this.yPos);

    //Display hitPoints
    textSize(20);
    text(this.hitPoints, this.xPos + this.textPaddingX, this.yPos + this.textPaddingY);
  }

  damage(damage) {
    this.hitPoints -= damage; //Takes away the value of damage from the characters hitPoints

  }
}



