function preload() {
    table = loadTable("colors.csv", "csv", "header");
}
  
function setup() {
    createCanvas(windowWidth,windowHeight);
    colorMode(HSB,360,100,100);
    rectMode(CENTER);
    palette = floor(random(5));
    noStroke();
    numAcross = 50
    sizeShape = width / numAcross
    count = 0
    newCol = 0;
}

function draw() {
    background(220,100,100);
    frameRate(4);

    // draw random squares in a grid using colors from the color palette
    for (x = numAcross; x < width - numAcross + 1 ; x += sizeShape) {
        for (y = numAcross; y < height - numAcross + 1 ; y += sizeShape) {
            col = floor(random(5)); // get random integer, 0-4
            getColor(col); // select a color for rectangle, and we know the # (col)
            fill(h,s,b);
            randPicker = random(3)
            if (randPicker < 1) {
                rect(x, y, sizeShape * random(5))
            } else if (randPicker < 2) {
                circle(x, y, sizeShape * random(7))
            } else {
                triangle(x, y - random(sizeShape), x - random(sizeShape), y + random(sizeShape), x + random(sizeShape), y + random(sizeShape))
                rotate(sizeShape);
            }
        }
    }

    filter(INVERT);
}

function getColor(col1) {
    h = int(table.get(palette, col1 * 3));
    s = int(table.get(palette, col1 * 3 + 1));
    b = int(table.get(palette, col1 * 3 + 2));
}