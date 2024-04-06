function setup() {
    createCanvas(500, 500);
    background(150);
    colorMode(HSB, 360, 100, 100, 255);
    rectMode(CENTER);
    angleMode(DEGREES);
    palette = floor(random(5));
    frame = 50;
    numAcross = 6;
    size1 = (width - frame * 2) / numAcross;
    size2 = size1 * 0.9;
  
    /*
    for (x = frame; x < width - frame + 1; x += size1) {
      for (y = frame; y < height - frame + 1; y += size1) {
        col = floor(random(5));
        getColor(col);
        fill(h, s, b);
        makeTile();
      }
    }
    */
  }


function rotateLines() {
    // rotated lines
    push();
    translate(x, y);
    numLines = floor(random(15, 20));
    step = 360 / numLines;
    hgt1 = size1 * random(0.1, 0.25);
    hgt2 = size1 * random(0.1, 0.2);
    for (i = 0; i < 360; i += step) {
        rotate(step);
        len = size1 * random(0.3, 0.45);
        stroke(0);
        strokeWeight(width * 0.005);
        line(0, hgt1, len, hgt1);
        stroke(h, s, b);
        strokeWeight(width * 0.0025);
        line(0, hgt1, len, hgt1);
    }
    pop();
}

function makeFlower() {
    // flower
    push();
    translate(x, y);
    numPetals = floor(random(5, 10)) * 2;
    step = 360 / numPetals;
    for (i = 0; i < 360; i += step) {
        rotate(step);
        beginShape();
        curveVertex(0, 0);
        curveVertex(0, 0);
        curveVertex(size2 * 0.17, -size2 * 0.05);
        curveVertex(size2 * 0.33, -size2 * 0.05);
        curveVertex(size2 * 0.45, 0);
        curveVertex(size2 * 0.33, size2 * 0.05);
        curveVertex(size2 * 0.17, size2 * 0.05);
        curveVertex(0, 0);
        curveVertex(0, 0);
        endShape();
        circle(0, 0, size2 * 0.2);
    }
    pop();
}
  
function makeLeaf() {
    stroke(0);
    push();
    translate(x, y);
    rotate(45 * floor(random(8)));
    x2 = -size2 * random(0.15, 0.3);
    y2 = -size2 * random(0.08, 0.3);
    x3 = size2 * random(0.15, 0.3);
    y3 = -size2 * random(0.08, 0.3);
  
    beginShape();
    curveVertex(-size2 * 0.4, 0);
    curveVertex(-size2 * 0.4, 0);
    curveVertex(x2, y2);
    curveVertex(x3, y3);
    curveVertex(size2 * 0.4, 0);
    curveVertex(size2 * 0.4, 0);
    endShape();
  
    beginShape();
    curveVertex(-size2 * 0.4, 0);
    curveVertex(-size2 * 0.4, 0);
    curveVertex(x2, -y2);
    curveVertex(x3, -y3);
    curveVertex(size2 * 0.4, 0);
    curveVertex(size2 * 0.4, 0);
    endShape();
  
    line(-size2 * 0.45, 0, size2 * 0.4, 0);
  
    pop();
}