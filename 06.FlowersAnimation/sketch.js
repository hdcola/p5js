function setup() {
  createCanvas(300, 300);
  frameRate(1);
}

function draw() {

  let flowerX = random(0, width);
  let flowerY = random(0, height);
  let petalSize = random(25, 150);
  let petalDistance = petalSize / 2;

  background(0, 200, 0);

  fill(255, 128, 0);

  // upper-left petal
  circle(flowerX - petalDistance, flowerY - petalDistance, petalSize);

  // upper-right petal
  circle(flowerX + petalDistance, flowerY - petalDistance, petalSize);

  // lower-left petal
  circle(flowerX - petalDistance, flowerY + petalDistance, petalSize);

  // lower-right petal
  circle(flowerX + petalDistance, flowerY + petalDistance, petalSize);

  // center petal
  fill(255, 0, 0);
  circle(flowerX, flowerY, petalSize);
}