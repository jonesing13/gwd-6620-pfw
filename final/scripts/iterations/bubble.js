let dim;

function setup() {
  createCanvas(710, 400);
  dim = width / 2;
  background(0);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(1);
}

function draw() {
  background(0);
    drawGradient(width/2, height / 2);
}

function drawGradient(x, y) {
  let radius = dim / 2;
  let h = random(180, 330); // random hue from aqua/blue/purple/pink ranges
  for (let r = radius; r > 0; --r) {
    fill(h, 20, 100);
    ellipse(x, y, r, r);
    h = (h + 1) % 360;
  }
}