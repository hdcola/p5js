let flowerX = 150;
let flowerY = 0;
let Xspeed = 10;
let Yspeed = 10;

function setup() {
  createCanvas(400, 400);
  background(0, 200, 0);
}

function draw() {
  fill(255, 128, 0);
  if (mouseIsPressed) {
    circle(mouseX, mouseY, 20);
  }
}
