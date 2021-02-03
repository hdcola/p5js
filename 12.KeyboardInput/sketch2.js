let message = '';

function setup() {
  createCanvas(300, 300);
  textSize(36);
}

function draw() {
  background(50);
  fill(255);
  text(message, 25, 150);
}

function keyTyped() {
  message += key;
}