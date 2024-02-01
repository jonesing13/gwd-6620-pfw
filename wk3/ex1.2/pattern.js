function setup() {
    createCanvas(600, 600);
}

function createTile(originX, originY, primaryColor, secondaryColor, tertiaryColor, sunPrimaryColor, sunSecondaryColor) {
    translate(originX, originY);
    stroke(primaryColor) // outline
    strokeWeight(5);
    fill(primaryColor); // canvas color 
    rect(0, 0, 200, 200);
    noStroke();
    fill(secondaryColor); // edge rectangles-biggest
    rect(0, 0, 20, 80); // upper left
    rect(180, 0, 20, 80); // upper right
    rect(0, 120, 20, 80); // lower left
    rect(180, 120, 20, 80); // lower right
    fill(sunSecondaryColor); // edge rectangles-2nd biggest
    rect(20, 0, 20, 60); // upper left
    rect(160, 0, 20, 60); // upper right
    rect(20, 140, 20, 60); // lower left
    rect(160, 140, 20, 60); // lower right
    fill(sunPrimaryColor); // edge rectangles-2nd smallest
    rect(40, 0, 20, 40); // upper left
    rect(140, 0, 20, 40); // upper right
    rect(40, 160, 20, 40); // lower left
    rect(140, 160, 20, 40); // lower right
    fill(tertiaryColor); // edge rectangles-smallest
    rect(60, 0, 20, 20); // upper left
    rect(120, 0, 20, 20); // upper right
    rect(60, 180, 20, 20); // lower left
    rect(120, 180, 20, 20); // lower right
    // backmost center figure
    rect(85, 20, 30, 160);
    rect(20, 85, 160, 30);
    rect(55, 55, 90, 90);
    // square overtop center figure
    fill(secondaryColor);
    rect(62.5, 62.5, 75, 75);
    // small rectangles overtop center figure
    fill(sunSecondaryColor);
    rect(25, 90, 70, 20); // 9 oclock
    rect(90, 25, 20, 70); // 12 oclock
    rect(105, 90, 70, 20); // 3 oclock
    rect(90, 105, 20, 70); // 12 oclock
    // topmost circle
    fill(sunPrimaryColor);
    circle(100, 100, 60, 60);
}

// yellow #e29d44
// orange #d27930
// teal #3ba0a1
// dark teal #206d6c
// light tan #f5e5b8

function draw() {
    createTile(0, 0, "#f5e5b8", "#206d6c", "#3ba0a1" , "#e29d44", "#d27930");
    createTile(0, 200, "#d27930", "#f5e5b8", "#206d6c", "#3ba0a1" , "#e29d44");
    createTile(0, 200, "#e29d44", "#d27930", "#f5e5b8", "#206d6c", "#3ba0a1");
    createTile(200, -400, "#3ba0a1", "#e29d44", "#d27930", "#f5e5b8", "#206d6c");
    createTile(0, 200, "#206d6c", "#3ba0a1", "#e29d44", "#d27930", "#f5e5b8");
    createTile(0, 200, "#f5e5b8", "#206d6c", "#3ba0a1", "#e29d44", "#d27930");
    createTile(200, -400, "#d27930", "#f5e5b8", "#206d6c", "#3ba0a1" , "#e29d44");
    createTile(0, 200, "#e29d44", "#d27930", "#f5e5b8", "#206d6c", "#3ba0a1");
    createTile(0, 200, "#3ba0a1", "#e29d44", "#d27930", "#f5e5b8", "#206d6c");
}