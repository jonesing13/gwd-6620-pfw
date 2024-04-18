function setup() {
    createCanvas(400, 400);
    background(150);
    strokeWeight(4);

}

function draw() {
    frameRate(5);
    fill(0,0,random(255));
    // call function
    sineCircle();
    rotate(PI);
}

function sineCircle() {
    xStart = width / 2;
    yStart = height / 2;
    rad = 100;
    x = cos(0) * rad + xStart;
    y = sin(0) * rad + yStart;
    amp = random(100);
    freq = random(50);
    beginShape();
    for (ang = 0; ang < PI * 2; ang += 0.1) {
        x = cos(ang) * rad + xStart;
        y = sin(ang) * rad + yStart;
        curveVertex(x,y);
        rad += sin(freq * ang) * amp;
    }

    endShape(CLOSE);
}