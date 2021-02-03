let circleX = 150;
let circleY = 150;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(50);

  if (keyIsPressed) {
    if (keyCode == UP_ARROW) {
      circleY--;
    } else if (keyCode == DOWN_ARROW) {
      circleY++;
    } else if(keyCode == LEFT_ARROW){
      circleX--;
    }else if(keyCode == RIGHT_ARROW){
     circleX++; 
    }
  } 
  
  circle(circleX, circleY, 50);
}