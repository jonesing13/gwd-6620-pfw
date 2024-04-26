// you can do amazing things with squares

// load color file
function preload() {
    table = loadTable("assets/colors.csv", "csv", "header");
} 

function setup() {
    background(250);
    createCanvas(windowWidth,windowHeight);
    colorMode(HSB,360,100,100);
    translate(width / 2, height / 2);
    palette = floor(random(5));
    // use random count each generation
    numAcross = random(15,30);
    sizeShape = width / (numAcross * 0.5)
}

function draw() {
    overlaySquares();
}

// draw random square outlines in the color pallette in the grid
// parameterizing :-) 
function overlaySquares() {
    frameRate(numAcross/2);
    for (x = 0; x < width * 1.5; x += sizeShape) {
        for (y = 0; y < height * 1.5; y += sizeShape) {
            // outline of square in upper left quad (so we can see below it)
            noFill();
            getColor(floor(random(5)));
            stroke(h,s,b);
            strokeWeight(random(7));
            
            // squares
            rect(x+random(-20,20), y+(-5,5), random(sizeShape))
        }
    }
}

function getColor(col1) {
    h = int(table.get(palette, col1 * 3));
    s = int(table.get(palette, col1 * 3 + 1));
    b = int(table.get(palette, col1 * 3 + 2));
}

function keyTyped() {
    if(key == "s") {
        save(palette + "_repeating_circles.png")
    }
}