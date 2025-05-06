
//Data for the tiles
let tileMap = []; //This is an array that will store the tiles in later
let tilesX = 10; //How many tiles there will be on the x axis (horizontally)
let tilesY = 10; //How many tiles there will be on the y axis (vertically)
let tileSize = 50; //How many pixels across each tile will be.





function setup() {
    createCanvas(500,500);

    let tileID = 0
    for (let tileX = 0; tileX < tilesX; tileX++) {
        tileMap[tileX] = [];
        for (let tileY = 0; tileY < tilesY; tileY++) {
            tileMap[tileX][tileY] = new Tile(tileX, tileY, tileSize, tileID);
            tileID++;
        }
    }

}


function draw() {
    background(0)
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
        strokeWeight(1)
        stroke("black")
        fill("yellow")

        //Displays X and Y coordinate Text
        textSize(8)
        text("X: " + this.tileX + ", Y: " + this.tileY, this.xPos + xPadding, this.yPos + yCoordinatePadding)

        //Displays tileID text
        textSize(10)
        text("ID: " + this.tileID, this.xPos + xPadding, this.yPos + yIDPadding)

        //Create rect around title
        noFill();
        stroke('yellow');
        rect(this.xPos, this.yPos, this.tileSize, this.tileSize)
    }
    
}