let words = ['a', 'b', 'c', 'd','e','f','g'];
let word = "";
let boom = {};

function setup() {
  createCanvas(windowWidth, windowHeight);
  word = random(words);
  boom[word]=[random(10,width-10),20];
  word = random(words);
  boom[word]=[random(10,width-10),20];
}

function draw() {
  background(color(0, 0, 255));
  fill(255,255,255);
  textSize(16);
  for(let w in boom){
    if (boom[w][1] < height){
      boom[w][1] += 5 ;
    }
    text(w, boom[w][0], boom[w][1]);  
  }
}


function keyPressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}