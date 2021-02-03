let circleX = 150;
let circleY = 150;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(50);  

  if (keyIsDown(UP_ARROW)) {
    circleY--;
  }
  if (keyIsDown(DOWN_ARROW)) {
    circleY++;
  }
  if (keyIsDown(LEFT_ARROW)) {
    circleX--;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    circleX++;
  }

  circle(circleX, circleY, 50);
}