
//Data for the tiles
let tileMap = []; //This is an array that will store the tiles in later
let tilesX = 10; //How many tiles there will be on the x axis (horizontally)
let tilesY = 10; //How many tiles there will be on the y axis (vertically)
let tileSize = 50; //How many pixels across each tile will be.





function setup() {
    createCanvas(500,500)
}


function draw() {
    background(0)
}


//CLASSES
class Tile {
    constructor(tileX, tileY, tileSize, tileID) {
        this.tileX = tileX; //x position of tile
        this.tileY = tileY; //y position of tile
        this.tileSize = tileSize; //Size of tile
        this.tileID = tileID; //Tile ID for recognition
    }
    
}