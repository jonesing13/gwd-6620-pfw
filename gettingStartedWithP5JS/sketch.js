function setup() {
    createCanvas(480, 480);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}

/* generic rules for "setup()" function
function setup() {
    // put setup code here
        // set the size of your graphics canvas
        // set the weight of your stroke, or the speed of your program
}
*/

/* generic rules for "draw()" function
function draw() {
    // put drawing code here
        // set the background color, draw a shape/text/image
}
*/

/* example 1: draw a single white circle
function draw() {
    background(204);
    ellipse(50, 50, 80, 80);
}
*/