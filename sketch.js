//INITIAL VARIABLES

//Data for Characters
let HeatBlast; //Variable to contain object
let HeatBlastSprite; //Variable to contain sprite
let HeatBlastXpos = 5; //Variable for position on x axis
let HeatBlastYpos = 80; //Variable for position on y axis
let HeatBlastHitPoints = 10; //Variable for hitPoints

let SlimeBall //Variable to contain object
let SlimeBallSprite //Variable to contain sprite
let SlimeBallXpos = 270; //Variable for position on x axis
let SlimeBallYpos = 100; //Variable for position on y axis
let SlimeBallHitPoints = 5; //Variable for hitPoints

let textPaddingX = 50; //Same for both characters
let textPaddingY = -25; //Same for both characters


//p5 FUNCTIONS

function preload() {
  HeatBlastSprite = loadImage("heatblast.png"); //Load HeatBlast sprite
  SlimeBallSprite = loadImage("slimeball.png"); //Load SlimeBall sprite
}

function setup() {
  createCanvas(600, 600);

  //Instantiate objects from character class
  HeatBlast = new Character(HeatBlastSprite,
                            HeatBlastXpos,
                            HeatBlastYpos,
                            HeatBlastHitPoints,
                            textPaddingX,
                            textPaddingY);

  SlimeBall = new Character(SlimeBallSprite,
                            SlimeBallXpos,
                            SlimeBallYpos,
                            SlimeBallHitPoints,
                            textPaddingX,
                            textPaddingY);                          
}

function draw() {
  background(220);

  HeatBlast.display();
  SlimeBall.display();
}

function mouseClicked(){
  HeatBlast.damage(2);
  SlimeBall.damage(1);
}


//CLASSES
class Character {
  constructor(sprite, xPos, yPos, hitPoints, textPaddingX, textPaddingY) {
    this.sprite = sprite; //Artwork
    this.xPos = xPos; //x position
    this.yPos = yPos; //y position
    this.hitPoints = hitPoints; //Objects hitpoints
    this.textPaddingX = textPaddingX; //Padding for hitpoints text on x axis
    this.textPaddingY = textPaddingY; //Padding for hitpoints text on y axis
 
   }

   display() {
    //Displays sprite
    image(this.sprite, this.xPos, this.yPos, 110, 110);

    //Displays HitPoints
    textSize(20);
    text(this.hitPoints, this.xPos + this.textPaddingX, this.yPos + this.textPaddingY);
   }

   damage(damage) {
    this.hitPoints -= damage; //Takes away the value of damage from the character's hitPoints
   }
}
