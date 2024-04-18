var slider;
var slider2;
var pos;

function setup() {
    createCanvas(500, 500);
    background(200);
    angleMode(DEGREES);
    slider = createSlider(4, 10, 0);
    slider2 = createSlider(2, 10, 0);

    // set initial x pos
    pos = 0.0;
    inc = 3.0; // an angle; determines freq of sine value

    pos2 = 0.0;
    inc2 = 5.0;
}

function draw() {
    clear(); // clears background each instance
    translate(width / 2, height / 2); // start from middle of canvas
    // oscillating variable 
    var mySineVal = sin(pos);
    var mySineVal2 = sin(pos2);

    amplified = mySineVal * 50;
    amplified2 = mySineVal2 * 50;

    for(x = 0; x <= 360; x += 2) {
        //ellipse(0, 50, 5, 5);
        //curve(0, 10, 50, 20, 10, 10, 10, 10)
        curve(0, 10, 200, amplified2, amplified, 10, 20, 20)
        rotate(x);
    }

    pos += slider.value();
    pos2 += slider2.value();
}