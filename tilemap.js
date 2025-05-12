//INITIALISE PLAYER VARIABLES
let player;
let playerSprite;
let playerSpeed = 1;

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
//               Y VALUES
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
    textures[0] = loadImage("grassblock.png") //Loads "grassblock.png" tile
    textures[1] = loadImage("lava.png") //Loads "lava.png", the obstruction

    playerSprite = loadImage("heatblast.png") //Loads the "heatblast.png" sprite
    SlimeBallSprite = loadImage("slimeball.png"); //Loads "slimeball.png" sprite

   
    
}

function setup() {
    createCanvas(500,500); //Creates a canvas that is 500x500 pixels#

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
    
    player = new Player(playerSprite, 0, 0, tileSize, tilesRules); //Creates the player
    SlimeBall = new NPC(SlimeBallSprite, 6, 3, tileSize, tilesRules); //Creates NPC

    
    
}

function draw() {
    background(0) //Gives the canvas a black background

    for (let tileX = 0; tileX < tilesX; tileX++) { 
        for (let tileY = 0; tileY < tilesY; tileY++) {
            tileMap[tileX][tileY].display();
        }
    }

    
    
    if (!dialogueActive) {
        player.setDirection(); //Set direction based on WASD keys
        player.move(); //Moves player where allowed
    }
   
    
    
    player.display(); //Displays the sprite
    SlimeBall.display(); //Displays slimeball npc

    if (player.tileX === SlimeBall.tileX &&
        player.tileY === SlimeBall.tileY) {
            alert("YOU MELTED! GAME OVER!");
            location.reload();
        }

    drawDialogueBox(); //Creates the dialogue box

}

//CLASSES
class Tile {
    constructor(texture, tileX, tileY, tileSize, tileID) {
        this.texture = texture; //The texture to be used for the tiles
        this.tileX = tileX; //Horizontal index of tile on the grid
        this.tileY = tileY; //Vertical index of tile on the grid
        this.xPos = tileX * tileSize; //X positions of tiles on screen
        this.yPos = tileY * tileSize; //Y position of tiles on screen
        this.tileSize = tileSize; //Width and height of the tile
        this.tileID = tileID; //Unique ID for tile (to distinguish)
    }

    display() {
        image(this.texture, this.xPos, this.yPos, this.tileSize, this.tileSize); //Displays heatblast sprite
    }

    debugGrid() {

        let xPadding = 2; //Pads text so it displays within the box (x axis)
        let yCoordinatePadding = 8; //Y coordinate padding so it displays within box but above ID text
        let yIDPadding = 18; //Pads ID text so it displays within the box (y axis) and below coordinate text

        //Text settings
        strokeWeight(1);
        stroke("black");
        fill("yellow");

        //Display X and Y coordinate text
        textSize(8);
        text("X: " + this.tileX + ", Y: " + this.tileY, this.xPos + xPadding, this.yPos + yCoordinatePadding);

        //Display tileID text
        textSize(10);
        text("ID: " + this.tileID, this.xPos + xPadding, this.yPos + yIDPadding);

        //Create rect around tile
        noFill();
        stroke('yellow');
        rect(this.xPos, this.yPos, this.tileSize, this.tileSize);
    }

    displayMessage() {
        
    }
}

class Player {
    constructor(sprite, startX, startY, tileSize, tileRules) {
        this.sprite = sprite; //PLAYER SPRITE
        this.tileX = startX; //TILE POSITION DATA
        this.tileY = startY; //TILE POSITION DATA
        this.xPos = startX * tileSize; //PIXEL POSITION DATA
        this.yPos = startY * tileSize; //PIXEL POSITION DATA
        this.dirX = 0; //DIRECTION PLAYER WANTS TO MOVE
        this.dirY = 0; //DIRECTION PLAYER WANTS TO MOVE
        this.tx = this.xPos; //PLAYER'S TARGET PIXEL POSITION
        this.ty = this.yPos; //PLAYER'S TARGET PIXEL POSITION
        this.isMoving = false; //MOVEMENT
        this.speed = 5; //MOVEMENT
        this.tileSize = tileSize; //TILE SIZE DATA
        this.tilesRules = tileRules; //TILE RULES DATA
    }

    setDirection() {
        //Variables for the keycode for keyIsDown
        let up = 87;    // W
        let down = 83;  // S
        let left = 65;  // A
        let right = 68; // D

        if (!this.isMoving && !dialogueActive) {  //Checks if player is currently moving and if the dialogue is active
            
            if (keyIsDown(up)) { //If player is not moving this code runs
                this.dirX = 0;
                this.dirY = -1;
            } if (keyIsDown(down)) { //If player is not moving this code runs
                this.dirX = 0;
                this.dirY = 1;
            } if (keyIsDown(left)) {   //If player is not moving this code runs
                this.dirX = -1;
                this.dirY = 0;
            } if (keyIsDown(right)) { //If player is not moving this code runs
                this.dirX = 1;
                this.dirY = 0;
            }
            this.checkTargetTile(); //Checks if player can move to the next tile, based on direction and tileRules
        }
    }

    checkTargetTile() {
        this.tileX = Math.floor(this.xPos / this.tileSize); //Calculates tile position of currentTile
        this.tileY = Math.floor(this.yPos / this.tileSize); //Calculates tile position of currentTile

        let nextTileX = this.tileX + this.dirX; //Calculates tile coordinates of next Tile
        let nextTileY = this.tileY + this.dirY; //Calculates tile coordinates of next Tile

        //Checks if nextTileX and nextTileY are both inbounds
        if (nextTileX >= 0 &&      //Left side of map
            nextTileX < tilesX &&  //Right side of map
            nextTileY >= 0 &&      //Top of map
            nextTileY < tilesY) {  //Bottom of map
            
                if (this.tilesRules[nextTileY][nextTileX] != 1) { //Checks if next tile is walkable (!= means NOT EQUIVALENT TO)
                this.tx = nextTileX * this.tileSize; //If walkable set tx and ty (pixel positions)
                this.ty = nextTileY * this.tileSize; //If walkable set tx and ty (pixel positions)
                
                this.isMoving = true; //If isMoving is true, start movement
            }
        }
    }

    move() {
        if (this.isMoving) {
            this.xPos += this.speed * this.dirX; //This code will only activate when this.isMoving = true, otherwise nothing happens
            this.yPos += this.speed * this.dirY; //This code will only activate when this.isMoving = true, otherwise nothing happens

            //This checks if player has reached target
            if (this.xPos === this.tx && this.yPos === this.ty) { //=== means true EQUIVALANCE
                this.isMoving = false;
                this.dirX = 0;
                this.dirY = 0;

                let playerTileX = this.xPos / this.tileSize;
                let playerTileY = this.yPos / this.tileSize;

                if (playerTileX === 0 &&
                    playerTileY === 3 &&
                    !dialogueTriggered) {
                        startDialogue();
                }
            }
        }
    }

    display() {
        image(this.sprite, this.xPos, this.yPos, this.tileSize, this.tileSize); //Displays the sprite on the screen

    
    }
}

class NPC {
    constructor(sprite, startX, startY, tileSize, tileRules) {
        this.sprite = sprite; //NPC SPRITE
        this.tileX = startX; //TILE POSITION DATA
        this.tileY = startY; //TILE POSITION DATA
        this.xPos = startX * tileSize; //PIXEL POSITION DATA
        this.yPos = startY * tileSize; //PIXEL POSITION DATA
        this.tileSize = tileSize; //TILE SIZE DATA
        this.tileRules = tileRules; //TILE RULES DATA

        setInterval(() => this.moveRandom(), 1000)


        
    }

    moveRandom() {
        const directions = [
            { dx: 0, dy: -1 },
            { dx: 0, dy: 1 },
            { dx: -1, dy: 0 },
            { dx: 1, dy: 0 }
        ];

        const move = random(directions);
        const newX = this.tileX + move.dx;
        const newY = this.tileY + move.dy;

        if (newX >= 0 &&
            newX < tilesX &&
            newY >= 0 &&
            newY < tilesY &&
            this.tileRules[newY][newX] !== 1) {

                this.tileX = newX;
                this.tileY = newY;
                this.xPos = newX * this.tileSize;
                this.yPos = newY * this.tileSize;
        }
    }



    display() {
        image(this.sprite, this.xPos, this.yPos, this.tileSize, this.tileSize); //Displays slimeBall NPC
    }
}