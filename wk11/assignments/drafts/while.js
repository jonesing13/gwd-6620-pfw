function preload() {
    table = loadTable("colors.csv", "csv", "header");
}
  
function setup() {
    createCanvas(500,500);
    colorMode(HSB,360,100,100);
    background(220,100,100);
    rectMode(CENTER);
    palette = floor(random(5));
    frame = 50
    numAcross = 20
    sizeShape = (width - frame * 2) / numAcross
    count = 0
    //noStroke();
    /*
    while(count < 100) {
        getColor(floor(random(5)));
        fill(h,s,b, 255);
        rect(random(-width * 0.1, width), random(-height * 0.1, height), 45)
        count++
    }
    */

    newCol = 0;

    // draw random squares in a grid using colors from the color palette
    for (x = frame; x < width - frame + 1 ; x += sizeShape * 2) {
        for (y = frame; y < height - frame + 1 ; y += sizeShape * 2) {
            col = floor(random(5)); // get random integer, 0-4
            getColor(col); // select a color for rectangle, and we know the # (col)
            fill(h,s,b);
            rect(x, y, random(sizeShape, sizeShape * 2))
            // if new color is the same as current, continue trying to get a new color
            while(col == newCol) {
                newCol = floor(random(5));
            }
            // draw a circle on top of each rectangle
            getColor(newCol);
            fill(h,s,b);
            circle(x, y, random(sizeShape));
        }
    }

}

function getColor(col1) {
    h = int(table.get(palette, col1 * 3));
    s = int(table.get(palette, col1 * 3 + 1));
    b = int(table.get(palette, col1 * 3 + 2));
}