function preload() {
    table = loadTable("colors.csv", "csv", "header");
}
  
function setup() {
    createCanvas(500,500);
    background(150);
    colorMode(HSB,360,100,100);
    palette = floor(random(5));
    frame = 50
    numAcross = 20
    sizeShape = (width - frame * 2) / numAcross
    noStroke();

    // draw random squares in a grid using colors from the color palette
    for (x = frame; x < width - frame ; x += sizeShape) {
        for (y = frame; y < height - frame ; y += sizeShape) {
            getColor(floor(random(5)));
            fill(h,s,b);
            rect(x, y, random(sizeShape))
        }
    }

}

function getColor(col1) {
    h = int(table.get(palette, col1 * 3));
    s = int(table.get(palette, col1 * 3 + 1));
    b = int(table.get(palette, col1 * 3 + 2));
}