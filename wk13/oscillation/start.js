var pos;

function setup() {
    createCanvas(500, 500);
    background(200);
    angleMode(DEGREES);

    // set initial x pos
    pos = 0.0;
    inc = 3.0 // an angle; determines freq of sine value
}

function draw() {
    clear(); // clears background each instance
    // oscillating variable 
    var mySineVal = sin(pos);
    amplified = mySineVal * 50;

    ellipse(amplified + 250, height / 2, 50, mySineVal * 20);

    pos += inc;
}