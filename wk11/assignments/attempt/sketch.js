function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0)
    fill(random(100,250), random(100,250), random(100,250))
    frameRate(25);

    push()
    translate(mouseX, mouseY)
    rotate(frameCount / 20)
    polygon(0, 0, 80, 5)
    pop()
}

function polygon(x, y, radius, nSides) {
    let angle = TWO_PI / nSides
    beginShape()
    for (let a = 0; a < TWO_PI; a += angle) {
        let nextX = x + cos(a) * radius
        let nextY = y + sin(a) * radius
        vertex(nextX, nextY)
    }
    endShape(CLOSE)
}