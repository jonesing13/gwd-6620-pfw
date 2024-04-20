var points = [];

var r1
var r2
var g1
var g2
var b1
var b2

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(10, 20, 30);
    angleMode(DEGREES);
    noiseDetail(1);

    var density = random(70, 100);
    var gap = width / density;

    //create starting points
    for (var x = 0; x < width; x += gap) {
        for (var y = 0; y < innerHeight; y += gap) {
            // use random variation to make the grid less obvious
            var p = createVector(x + random(-10, 10), y + random(-10, 10));
            points.push(p);
        }
    }

    // to randomize the lines (that are drawn one-by-one), shuffle the point array
    shuffle(points, true);

    r1 = random(10);
    r2 = random(10);
    g1 = random(10);
    g2 = random(10);
    b1 = random(10);
    b2 = random(10);

    rate = random(0.005, 0.01); // use with noise method

}

function draw() {
    noStroke();
    //fill(255);

    // to draw the lines one at a time, set a "max" (or *n at a time)
    if(frameCount * 5 <= points.length) {
        var max = frameCount * 5;
    } else {
        var max = points.length;
    }

    // swap points.length to max for the loop
    for(var i = 0; i < max; i++) {
        var r = map(points[i].x, 0, width, r1, r2);
        var g = map(points[i].y, 0, height, g1, g2);
        var b = map(points[i].x, 0, width, b1, b2);
        var alpha = map(dist(width / 2, height / 2, points[i].x, points[i].y), 0, 350, 255, 0); // fade close to edge
        fill(r, g, b, alpha);

        // angle that each point will move
        var angle = map(noise(points[i].x * rate, points[i].y * rate), 0, 1, 0, 720);
        // add vector to each point based on angle
        points[i].add(createVector(cos(angle), sin(angle)));

        // draw a point at each part of the grid
        ellipse(points[i].x, points[i].y, 1);
        // contain to a specific space/area
        // if(dist(width / 2, height / 2, points[i].x, points[i].y) < 300) {
        //     ellipse(points[i].x, points[i].y, 1);
        // }
        
    }
}