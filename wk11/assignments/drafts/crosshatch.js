 
function setup() {
    createCanvas(400,400);
    noFill();
    background(200);
    colorMode(HSB,360,100,100);
    stroke(0,10);

    for (i = 0; i < 2000; i++) {
        rect(random(-width * 0.1, width), random(-height * 0.1, height), 30)
    }

}
