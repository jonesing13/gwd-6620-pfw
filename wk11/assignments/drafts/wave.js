// adding a wavy band through the whole canvas

function setup() {
    createCanvas(windowWidth, windowHeight);
    background("orange");
    fill("red")
    x1 = -width * 0.1;
    y1 = height * 0.5;
    x2 = width * 0.33;
    y2 = random(height * 0.3, height * 0.7); //vary
    x3 = width * 0.67;
    y3 = random(height * 0.3, height * 0.7); // vary
    x4 = width * 1.1;
    y4 = height * 0.5;
    x5 = width * 1.1;
    y5 = y4 + random(height * 0.1, height * 0.2);
    x6 = width * 0.67;
    y6 = y3 + random(height * 0.1, height * 0.2);
    x7 = width * 0.33;
    y7 = y2 + random(height * 0.1, height * 0.2);
    x8 = -width * 0.1;
    y8 = y1 + random(height * 0.1, height * 0.2);

    beginShape();
    curveVertex(x1, y1);
    curveVertex(x1, y1);
    curveVertex(x2, y2);
    curveVertex(x3, y3);
    curveVertex(x4, y4);
    curveVertex(x5, y5);
    curveVertex(x6, y6);
    curveVertex(x7, y7);
    curveVertex(x8, y8);
    endShape(CLOSE);
  
    stroke(255, 0, 0);
    strokeWeight(15);
    
    // point(x2, y2);
    // point(x3, y3);
    // point(x6, y6);
    // point(x7, y7);
  }
  