function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(200);
    downWave();
    //upwardWave();

    wave();
    frameRate(5);
}

// randomized wave across canvas
function wave() {
    stroke(random(255),random(255),random(255));
    strokeWeight(15,30);
    fill(random(255),random(255),random(255));
    x1 = -width * 0.1;
    y1 = height * 0.5;
    x2 = width * 0.2;
    y2 = height * random(0.3, 0.7); //vary
    x3 = width * 0.67;
    y3 = height * random(0.3, 0.7); // vary
    x4 = width * 1.1;
    y4 = height * 0.7;
    x5 = width * 1.1;
    y5 = y4 + height * random(0.1, 0.2);
    x6 = width * 0.7;
    y6 = y3 + height * random(0.1, 0.2);
    x7 = width * 0.15;
    y7 = y2 + height * random(0.1, 0.2);
    x8 = -width * 0.1;
    y8 = y1 + height * random(0.1, 0.2);

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

}

function downWave() {
    stroke(random(255),random(255),random(255));
    strokeWeight(15);
    fill(random(255),random(255),random(255));
    x1 = -width * 0.1;
    y1 = height * 0.1;
    x2 = width * 0.2;
    y2 = height * random(0.1, 0.2); //vary
    x3 = width * 0.67;
    y3 = height * random(0.3, 0.7); // vary
    x4 = width * 1.1;
    y4 = height * 0.7;
    x5 = width * 1.1;
    y5 = y4 + height * random(0.3, 0.7);
    x6 = width * 0.7;
    y6 = y3 + height * random(0.3, 0.7);
    x7 = width * 0.5;
    y7 = y2 + height * random(0.3, 0.7);
    x8 = -width * 0.1;
    y8 = y1 + height * random(0.3, 0.7);

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
}

function upwardWave() {
    stroke(random(255),random(255),random(255));
    strokeWeight(15);
    fill(random(255),random(255),random(255));
    x1 = -width * 0.1;
    y1 = height * 1.1;
    x2 = width * 0.5;
    y2 = height * random(0.1, 0.3); //vary
    x3 = width * 0.33;
    y3 = height * random(0.3, 0.5); // vary
    x4 = width * 1.1;
    y4 = height * 0.1;
    x5 = width * 0.5;
    y5 = y4 + height * random(0.1, 0.3);
    x6 = width * 0.33;
    y6 = y3 + height * random(0.1, 0.3);
    x7 = width * 0.25;
    y7 = y2 + height * random(0.1, 0.3);
    x8 = -width// * 1.1;
    y8 = y1 + height * random(0.3, 0.6);

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
}

function keyTyped() {
    if(key == "s") {
        save("waves.png")
    }
}