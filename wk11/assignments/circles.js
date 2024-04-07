// load color file
function preload() {
    table = loadTable("colors.csv", "csv", "header");
} 

// stretch your OWN brain

function setup() {
    createCanvas(800,800);
    colorMode(HSB,360,100,100);
    background(250);
    palette = floor(random(5));
    noStroke();
    // use random count each generation
    numAcross = random(15,30);
    sizeShape = width / (numAcross * 0.5)
    newCol = 0;

    crosshatch();

    // draw random circles in a grid using colors from the color palette
    // let pattern spread off page
    for (x = 0; x < width * 1.5; x += sizeShape) {
        for (y = 0; y < height * 1.5; y += sizeShape) {
            // get random integer, 0-4
            col = floor(random(5)); 

            // draw circles
            getColor(floor(random(5)));
            fill(h,s,b);
            circle(x, y, random(sizeShape));

            // make sure outline and shape fill aren't the same
            while(col == newCol) {
                newCol = floor(random(5));
            }

            // draw offset outlines
            noFill();
            stroke(h,s,b);
            strokeWeight(random(5));
            circle(x + random(-5,5), y + (-5,5), random(sizeShape))
        } 
    }

    filter(BLUR,2)

    // overlaySquares()
}

// you can do amazing things with squares

// square outlines
// parameterizing :-) 
function overlaySquares() {
    for (x = 0; x < width * 1.5; x += sizeShape) {
        for (y = 0; y < height * 1.5; y += sizeShape) {
            // outline of square in upper left quad (so we can see below it)
            noFill();
            getColor(floor(random(5)));
            stroke(h,s,b);
            strokeWeight(random(5));
            
            // sqaures
            rect(x+random(-20,20), y+(-5,5), random(sizeShape))
        }
    }
}

// crosshatch of square outlines
function crosshatch() {
    noFill();
    size = random(windowWidth * 0.07, windowHeight * 0.08);
    stroke(0,10);

    for (i = 0; i < windowWidth * 10 ; i++) {
        // random placed square
        rect(random(-width * 0.1, width), random(-height * 0.1, height), size)    
    }
    
    filter(INVERT)
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