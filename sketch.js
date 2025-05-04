//INITIALISE VARIABLES

//Black and White Librarian Object

let bwLibrarian = {
  posX: 150, //The position on the x axis
  posY:150, //The position on the y axis
  hitPoints: 10,
  textPaddingX: 50, //Moves textPadding on X axis to the right slightly + removes magic number in "text" below
  textPaddingY: -25, //Moves textPadding on Y axis up slightly + removes magic number in "text" below

  display: function() {
    image(this.sprite, this.posX, this.posY);
    
    textSize(20);
    text(this.hitPoints, this.posX + this.textPaddingX, this.posY + this.textPaddingY) //HITPOINTS FUNCTION
    //   1st parameter       2nd parameter                3rd parameter 
  }
}

//BASE p5 FUNCTIONS
function preload() {
  bwLibrarian.sprite = loadImage("librarian-bw.png") //Loads up sprite image file
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  bwLibrarian.display(); //Function that handles content to display
}




