function setup() {
  createCanvas(windowWidth, windowHeight);
}


function windowResized() {
 resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background(0);
  fill("orange");
  textAlign(CENTER, CENTER);
  textSize(width/6);
  let Hour = hour();
  let min = minute();
  let secs = second();
  let noon = Hour >= 12? " PM" : " AM";
  if(min < 10)
    min = "0"+min;
  if(secs < 10)
    secs = "0"+secs;
  Hour %= 12;
  text(Hour+":"+min+":"+secs+noon, width/2, height/2); 
}
