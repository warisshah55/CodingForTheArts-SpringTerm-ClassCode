// INITIALISE  VARIABLES

//Black and White Librarian Object
let bwLibrarian = {
  sprite: null, // Hold the objects sprite
  posX: 150, // x axis position
  posY: 150, // y axis position 

  display: function() {
    image(this.sprite, this.posX, this.posY);
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
  background(999); // White canvas
  displayDensity(); // Handles all content to display function
}

//MY FUNCTIONS
function display() {
  image(bwLibrarian.sprite, bwLibrarian.posX, bwLibrarian.posY) // Displays object based on data inside object 

}

