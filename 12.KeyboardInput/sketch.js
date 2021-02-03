let circleX = 150;
let circleY = 150;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  if (keyIsPressed) {
    if (key == 'r') {
      background(255, 0, 0);
    } else if (key == 'g') {
      background(0, 255, 0);
    } else if (key == 'b') {
      background(0, 0, 255);
    }
    fill(255);
    textSize(144);
    text(key,110,180);
  }else {
    background(32);
  }
}