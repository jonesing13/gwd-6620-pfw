
function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    background(10, 20, 30);
}

function draw() {
    background(200);

    translate(width / 2, height);
    branch(100);
}

function branch(len) {
    // add new branches if len is a certain amt
    push();
    if (len > 10) {
        strokeWeight(map(len, 10, 100, 1, 15)); //vary width based on len
        stroke('brown');
        line(0, 0, 0, -len);
        translate(0, -len);
        rotate(30);
        branch(len * random(0.7, 0.9));
        rotate(-60);
        branch(len * random(0.7, 0.9));
    }
    pop();
}