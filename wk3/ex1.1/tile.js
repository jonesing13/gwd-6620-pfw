function setup() {
    createCanvas(200, 200);
}

// yellow #e29d44
// orange #d27930
// teal #3ba0a1
// dark teal #206d6c
// light tan #f5e5b8


/*
draft 1
video example

function createTile() {
    translate(0, 0);
    fill("#f5e5b8");
    rect(0, 0, 200, 200);
    stroke("#d27930");
    strokeWeight(5);
    line(25, 25, 175, 175);
    line(175, 25, 25, 175);
    noStroke();
    fill("#e29d44");
    ellipse(100, 25, 15, 45);
    ellipse(175, 100, 45, 15);
    ellipse(100, 175, 15, 45);
    ellipse(25, 100, 45, 15);
    fill("#e29d44");
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    fill("#3ba0a1");
    stroke("#f5e5b8");
    strokeWeight(5);
    circle(100, 100, 110);
    fill("#206d6c");
    noStroke();
    ellipse(100, 100, 90, 30);
    ellipse(100, 100, 30, 90);
}
*/

function createTile() {
    translate(0, 0);
    stroke("#f5e5b8") // light tan outline
    strokeWeight(5);
    fill("#f5e5b8"); // canvas color
    rect(0, 0, 200, 200);
    noStroke();
    fill("#206d6c"); // dark teal rectangles
    rect(0, 0, 20, 80); // upper left
    rect(180, 0, 20, 80); // upper right
    rect(0, 120, 20, 80); // lower left
    rect(180, 120, 20, 80); // lower right
    fill("#d27930"); // orange edge rectangles
    rect(20, 0, 20, 60); // upper left
    rect(160, 0, 20, 60); // upper right
    rect(20, 140, 20, 60); // lower left
    rect(160, 140, 20, 60); // lower right
    fill("#e29d44"); // yellow edge rectangles
    rect(40, 0, 20, 40); // upper left
    rect(140, 0, 20, 40); // upper right
    rect(40, 160, 20, 40); // lower left
    rect(140, 160, 20, 40); // lower right
    fill("#3ba0a1"); // teal edge rectangles
    rect(60, 0, 20, 20); // upper left
    rect(120, 0, 20, 20); // upper right
    rect(60, 180, 20, 20); // lower left
    rect(120, 180, 20, 20); // lower right
    // backmost center figure (teal)
    rect(85, 20, 30, 160);
    rect(20, 85, 160, 30);
    rect(55, 55, 90, 90);
    // square overtop center figure
    fill("#206d6c"); // dark teal
    rect(62.5, 62.5, 75, 75);
    // small rectangles overtop center figure
    fill("#d27930"); // orange
    rect(25, 90, 70, 20); // 9 oclock
    rect(90, 25, 20, 70); // 12 oclock
    rect(105, 90, 70, 20); // 3 oclock
    rect(90, 105, 20, 70); // 12 oclock
    // topmost circle
    fill("#e29d44"); // yellow
    circle(100, 100, 60, 60);
}

function draw() {
    createTile(0, 0, 10, 40);
}