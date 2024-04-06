// two curveVertexes mirrored with sliders

let ang;
let slider1, slider2, slider3;
let x1 = 30;
let y1 = 0;
let x4 = 480;
let y4 = 0;
let x2, y2, x3, y3;

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(random(100,200));
  translate(0, 250); // 
  x2 = random(100,250);
  y2 = random(50,200);
  x3 = random(300,460);
  y3 = random(50,200);
  frameRate(2);

  //noFill();
  strokeWeight(1);
  noStroke();
  fill(0, random(255), 30);

  beginShape();
  curveVertex(x1, y1);
  curveVertex(x1, y1);
  curveVertex(x2, y2);
  curveVertex(x3, y3);
  curveVertex(x4, y4);
  curveVertex(x4, y4);
  endShape();

  beginShape();
  curveVertex(x1, y1);
  curveVertex(x1, y1);
  curveVertex(x2, -y2);
  curveVertex(x3, -y3);
  curveVertex(x4, y4);
  curveVertex(x4, y4);
  endShape();

}
