function preload() {
    table = loadTable("colors.csv", "csv", "header");
}
  
function setup() {
    createCanvas(500,500);
    colorMode(HSB,360,100,100);
    background(220,100,100);
    rectMode(CENTER);
    palette = floor(random(5));
    noStroke();
    frame = 50
    numAcross = 20
    sizeShape = width / numAcross
    count = 0
    newCol = 0;

    // draw random squares in a grid using colors from the color palette
    for (x = frame; x < width - frame + 1 ; x += sizeShape * 2) {
        for (y = frame; y < height - frame + 1 ; y += sizeShape * 2) {
            col = floor(random(5)); // get random integer, 0-4
            getColor(col); // select a color for rectangle, and we know the # (col)
            fill(h,s,b);
            randPicker = random(3)
            if (randPicker < 1) {
                rect(x, y, random(sizeShape))
            } else if (randPicker < 2) {
                circle(x, y, random(sizeShape))
            } else {
                triangle(x, y - sizeShape / 2, x - sizeShape / 2, y + sizeShape / 2, x + sizeShape / 2, y + sizeShape /2)
            }
        }
    }

}

function getColor(col1) {
    h = int(table.get(palette, col1 * 3));
    s = int(table.get(palette, col1 * 3 + 1));
    b = int(table.get(palette, col1 * 3 + 2));
}