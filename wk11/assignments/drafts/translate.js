
function setup() {
    createCanvas(windowWidth,windowHeight)
    background(220);
    rectMode(CENTER);
    angleMode(DEGREES);
    colorMode(HSB, 100, 100, 100);
    size = 1;
    frameRate(10);
}

// stretch your OWN brain

function draw() {
    fill(random(100),random(100),random(100))
    strokeWeight(random(10));
    stroke(random(100),random(100),random(100));
    for (i = 0; i < windowWidth/2; i += size) {
        push();
        translate(windowWidth/2,windowHeight/2);
        rotate(size);
        rect(0,0, size)
        pop();
        
        size++;
    }
    
}
