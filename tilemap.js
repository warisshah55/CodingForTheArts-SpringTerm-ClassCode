


//INITIALISE PLAYER VARIABLES
let player;
let playerSprite;
let playerSpeed = 5;

//INITIALISE TILEMAP VARIABLES
let tileMap = []; //This is an empty array that will store the tiles in 
let tilesX = 10; //How many tiles there will be on the x axis (horizontally)
let tilesY = 10; //How many tiles there will be on the y axis (vertically)
let tileSize = 50; //How many pixels across each tile will be.
let textures = []; //This is an empty array that will store the textures in


let graphicsMap = [
//              Y VALUES
//   0  1  2  3  4  5  6  7  8  9
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], // 0
    [0, 1, 0, 0, 1, 1, 1, 1, 0, 0], // 1
    [0, 1, 1, 1, 0, 0, 0, 0, 1, 0], // 2
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 4    X VALUES
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0], // 5
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // 6
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // 7
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // 8
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]  // 9

]

let tilesRules = [
//          Y VALUES
//   0  1  2  3  4  5  6  7  8  9
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0], // 0
[0, 1, 0, 0, 1, 1, 1, 1, 0, 0], // 1
[0, 1, 1, 1, 0, 0, 0, 0, 1, 0], // 2
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 4    X VALUES
[1, 1, 1, 1, 1, 1, 1, 1, 0, 0], // 5
[0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // 6
[0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // 7
[0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // 8
[0, 0, 0, 0, 0, 0, 0, 1, 0, 0]  // 9

]

console.log(graphicsMap[2][3]);

function preload() {
    textures[0] = loadImage("grassblock.png")
    textures[1] = loadImage("lava.png")


    playerSprite = loadImage("heatblast.png")
}



   


function setup() {
    createCanvas(500,500); //Creates a canvas that is 500x500 pixels

    //Creates all tiles
    let tileID = 0 //Gives unique ID for each tile
    for (let tileX = 0; tileX < tilesX; tileX++) {  //Starts for loop
        tileMap[tileX] = []; //Sub arrays for each column
        for (let tileY = 0; tileY < tilesY; tileY++) { //Starts second FOR loop 

            let texture = graphicsMap[tileY][tileX]; //Written in reverse order compared to the setup() and draw() function
           
            tileMap[tileX][tileY] = new Tile(textures[texture], tileX, tileY, tileSize, tileID); //Creates a new tile at each coordinate with given ID and size
           
            tileID++;
        }
    }
    //Create Player
    player = new Player(playerSprite, 3, 3, tileSize, tilesRules);

}



function draw() {
    background(0) //Gives the canvas a black background
    //Loops through each tile in the grid + draws the debugging information
    for (let tileX = 0; tileX < tilesX; tileX++) { 
        for (let tileY = 0; tileY < tilesY; tileY++) {
        
            tileMap[tileX][tileY].display();
           
            
        }
    }

    player.display("heatblast.png");

    tileMap[5][6].displayMessage() //Display message on coordinates 5,6 on tileMap
    tileMap[0][8].displayMessage() //Display message on coordinates 0,8 on tileMap
    tileMap[3][4].displayMessage() //Display message on coordinates 3,4 on tileMap
    tileMap[3][0].displayMessage() //Display message on coordinates 3,0 on tileMap
}




//CLASSES
class Tile {
    constructor(texture, tileX, tileY, tileSize, tileID) {
        this.texture = texture; //Added texture to class
        this.tileX = tileX; //x position of tile in tileMap grid
        this.tileY = tileY; //y position of tile in tileMap grid
        this.xPos = tileX * tileSize; //Refers to the pixel position in relation to the canvas
        this.yPos = tileY * tileSize; //Refers to the pixel position in relation to the canvas
        this.tileSize = tileSize; //Size of tile
        this.tileID = tileID; //Tile ID for recognition
    }

    display() {
        image(this.texture, this.xPos, this.yPos, this.tileSize, this.tileSize)
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

  
    
}

class Player{
    constructor(sprite, startX, startY, tileSize, tileRules) {
        //PLAYER SPRITES
        this.sprite = sprite;

        //TILE POSITION DATA
        this.tileX = startX,
        this.tileY = startY,

        //PIXEL POSITION DATA
        this.xPos = startX * tileSize;
        this.yPos = startY * tileSize;

        //DIRECTION PLAYER WANTS TO MOVE
        this.dirX = 0;
        this.dirY = 0;

        //PLAYER'S TARGET PIXEL POSITION
        this.tx = this.xPos;
        this.ty = this.yPos;

        //MOVEMENT
        this.isMoving = false;
        this.speed = 5;

        //TILE DATA
        this.tileSize = tileSize;
        this.tilesRules = tileRules;
    }

    display(){
        image(this.sprite, this.xPos, this.yPos, this.tileSize, this.tileSize);
    }


    setDirection() {
        let up = 87; //W
        let down = 83 //S
        let left = 65; //A
        let right = 68; //D

        if (!this.isMoving) { //CHECKS IF PLAYER IS MOVING, IF NOT, CODE BELOW RUNS.

            if (keyIsDown(up)) {
                this.dirX = 0;
                this.dirY = -1;
            }

            if(keyIsDown(down)) {
                this.dirX = 0;
                this.dirY = 1;
            }

            if(keyIsDown(left)) {
                this.dirX = -1;
                this.dirY = 0;
            }

            if(keyIsDown(right)) {
                this.dirX = 1;
                this.dirY = 0;
            }

            this.checkTargetTile()

        }
    }

    checkTargetTile() {
        //Calculate tile position of current tile
        this.tileX = Math.floor(this.xPos / this.tileSize);
        this.tileY = Math.floor(this.yPos / this.tileSize);

        //Calculates the tile coordinates of the next tile
        let nextTileX = this.tileX + this.dirX;
        let nextTileY = this.tileY + this.dirY;


        if (nextTileX >= 0 &&  //Left side of the map
            nextTileX < tilesX &&  //Right side of the map
            nextTileY >= 0 &&  //Top of the map
            nextTileY < tilesY) {  //Bottom of the map

                //Checks if next tile is walkable
                if (tilesRules[nextTileY][nextTileX] != 1) {  //!= means its not walkable

                    //If walkable, set tx and 
                    this.tx = nextTileX * tileSize;
                    this.ty = nextTileY * tileSize;


                    this.isMoving = true;
                }
            }
    }

    move() {  //Move function created within the player class

        if (this.isMoving) {

            this.xPos += this.speed * this.dirX;
            this.yPos += this.speed * this.dirY;


            if (this.xPos === this.tx && this.yPos === this.ty) {

                this.isMoving = false;
                this.dirX = 0;
                this.dirY = 0;
            }
        }
    }

    

  
}