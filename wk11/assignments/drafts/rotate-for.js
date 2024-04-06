function setup() {
    createCanvas(windowWidth,windowHeight)
    background(220);
    

    rectMode(CENTER);
    angleMode(DEGREES);
    colorMode(HSB, 100, 100, 100);

    step = 10;
}

function draw() {
    frameRate(2);
    push();
    translate(windowWidth * 0.5,windowHeight * 0.5);
    for(i = 0; i < 360; i += step) {
        rotate(step);
        line(0,50,width * random(0.1, 0.5), 100) // draw a straight line
    }
    pop();

}
