// INITIALISE  VARIABLES

//Black and White Librarian Object
let bwLibrarian = {
  sprite: null, // Hold the objects sprite
  posX: 150, // x axis position
  posY: 150, // y axis position 
  hitPoints: 10,
  textPaddingX: 50, // textpadding on x axis (moves text to the right slightly)
  textPaddingY: -25, // textpadding on y axis (moves it above player slightly)

  display: function() {
    image(this.sprite, this.posX, this.posY);

    textSize(20);
    text(this.hitPoints, this.posX + 50, this.posY - 25)
    //   1st parameter   2nd parameter    3rd parameter
  }, 

  //Damage bwLibrarian
  damage: function(damage) {
    healthPoints -= damage; // healthPoints = healthPoints - damage
  }
  
};

// Base loading player
function preload() {
  bwLibrarian.sprite = loadImage("librarian-bw.png"); // Code to access the value of sprite in the bwLibrarian object
}

function setup() {
  createCanvas(500, 500); // Creates a canvas with a size of 500x500
}

function draw() {
  background(255); // White canvas
  bwLibrarian.display(); // Handles all content to display function
}

//MY FUNCTIONS
function display() {
  image(bwLibrarian.sprite, bwLibrarian.posX, bwLibrarian.posY) // Displays object based on data inside object 

}

function mouseClicked() {
  bwLibrarian.damage(2); // Magic number 
}

