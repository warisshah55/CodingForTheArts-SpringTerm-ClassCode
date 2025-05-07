//INITIALISE VARIABLES

//Data for the tiles
let tileMap = []; //This is an empty array that will store the tiles in 
let tilesX = 10; //How many tiles there will be on the x axis (horizontally)
let tilesY = 10; //How many tiles there will be on the y axis (vertically)
let tileSize = 50; //How many pixels across each tile will be.
let textures = []; //This is an empty array that will store the textures in

let graphicsMap = [
//              Y VALUES
//   0  1  2  3  4  5  6  7  8  9
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], // 2
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 4    X VALUES
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  // 9
]

   




function setup() {
    createCanvas(500,500); //Creates a canvas that is 500x500 pixels

    let tileID = 0 //Gives unique ID for each tile
    for (let tileX = 0; tileX < tilesX; tileX++) { 
        tileMap[tileX] = []; //Sub arrays for each column
        for (let tileY = 0; tileY < tilesY; tileY++) {
            tileMap[tileX][tileY] = new Tile(tileX, tileY, tileSize, tileID); //Creates a new tile at each coordinate with given ID and size
            tileID++;
        }
    }

}


function draw() {
    background(0) //Gives the canvas a black background
    //Loops through each tile in the grid + draws the debugging information
    for (let tileX = 0; tileX < tilesX; tileX++) { 
        for (let tileY = 0; tileY < tilesY; tileY++) {
            tileMap[tileX][tileY].debugGrid();
        }
    }

    tileMap[5][6].displayMessage() //Display message on coordinates 5,6 on tileMap
    tileMap[0][8].displayMessage() //Display message on coordinates 0,8 on tileMap
    tileMap[3][4].displayMessage() //Display message on coordinates 3,4 on tileMap
    tileMap[3][0].displayMessage() //Display message on coordinates 3,0 on tileMap
}


//CLASSES
class Tile {
    constructor(tileX, tileY, tileSize, tileID) {
        this.tileX = tileX; //x position of tile in tileMap grid
        this.tileY = tileY; //y position of tile in tileMap grid
        this.xPos = tileX * tileSize; //Refers to the pixel position in relation to the canvas
        this.yPos = tileY * tileSize; //Refers to the pixel position in relation to the canvas
        this.tileSize = tileSize; //Size of tile
        this.tileID = tileID; //Tile ID for recognition
    }
    debugGrid() {

        let xPadding = 2; //Pads text so it displays within the box (x axis)
        let yCoordinatePadding = 8; //Pads coordinate text so it displays within the box (y axis) but above ID text
        let yIDPadding = 18; //Pads ID text so it displays within the box (y axis) and below the coordinate text

        //ALL Text Settings
        strokeWeight(1) //Sets thickness of line
        stroke("black") //Sets outline colour
        fill("yellow")  //Sets fill colour

        //Displays X and Y coordinate Text
        textSize(8) //Sets Size of the text
        text("X: " + this.tileX + ", Y: " + this.tileY, this.xPos + xPadding, this.yPos + yCoordinatePadding)

        //Displays tileID text
        textSize(10) //Sets Size of the text
        text("ID: " + this.tileID, this.xPos + xPadding, this.yPos + yIDPadding)

        //Create rect around title
        noFill();
        stroke('yellow'); //Sets outline colour
        rect(this.xPos, this.yPos, this.tileSize, this.tileSize)
    }

    //DISPLAY text settings for the "Accessed" tiles
  displayMessage() {
    let xPadding = 2; //Padding for message text on x axis (Horizontally)
    let yPadding = 40; //Padding for message text on y axis (Vertically)


    strokeWeight(1) //Sets thickness of line
    stroke("black") //Sets outline colour
    fill("white") //Sets fill colour
    textSize(10) //Sets Size of the text

    text("Accessed", this.xPos + xPadding, this.yPos + yPadding) //Sets the text to say "Accessed"
    
    
  }
    
}