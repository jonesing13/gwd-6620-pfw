function setup() {
    createCanvas(400, 400, WEBGL);
    angleMode(DEGREES);
}

function draw() {
    background(30);

    noFill();
    stroke(255);

    rotateX(frameCount);
    rotateY(frameCount / 2);
    rotateZ(frameCount * 2);

    for (var i = 0; i < 360 ;i++) {
        push();

        var r = map(sin(i + frameCount), -1, 1, 200, 50);
        rotateY(i / 2);
        var g = map(sin(i + frameCount / 3), -1, 1, 50, 200);
        rotateY(i / 2);
        var b = map(cos(i + frameCount / 7), -1, 1, 50, 200);

        stroke(r, g, b);
        rotateY(i / 2);

        ellipse(0, 0, 200);
        pop();
    }


}