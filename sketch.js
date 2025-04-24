// Defines player speed, positioning and size
let player = {
  x: 250, y: 350, size: 50, speed: 7 // Circle player moved to bottom middle area
};

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(999); // white canvas
  // Draw the player
  fill(55); // Dark gray circular player
  noStroke();
  circle(player.x, player.y, player.size,);

}
