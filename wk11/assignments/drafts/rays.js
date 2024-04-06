function setup() {
    createCanvas(500,500)
    background(220);

    rectMode(CENTER);
    angleMode(DEGREES);
    colorMode(HSB, 100, 100, 100);

    
}

function draw() {
    push();
    translate(x, y);
    
    numLines = floor(random(15, 20));
    step = 360 / numLines;
    size1 = (width - frame * 2) / numAcross;
    size2 = size1 * 0.75;
    hgt1 = size1 * random(0.1, 0.25);
    hgt2 = size1 * random(0.1, 0.2);

    for(i = 0; i < 360; i += step) {
        rotate(step);
        len = size1 * random(0.3, 0.45);
        stroke(0);
        strokeWeight(width * 0.005);
        line(0, hgt1, len, hgt1);
        stroke(random(100), random(100), random(100));
        strokeWeight(width * 0.0025);
        line(0, hgt1, len, hgt1);
    }
    pop();

}
