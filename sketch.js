// creates canvas for game
function setup() {
  createCanvas (500,500)
}

// sets background colour and creates circular player
function draw() {
  background(240);
  circle(50, 50, 50)  
}

// creates positioning, size and speed of player when moved
let player = {
  x: 150, y: 150, size: 50, speed: 7
};

  // Draw the player
  circle(50, 50, 50)
  fill(204);
  noStroke();
  ellipse(player.x, player.y, player.size);



