function preload() {
    table = loadTable("colors.csv", "csv", "header");
}
  
function setup() {
    createCanvas(500,500);
    background(150);
    colorMode(HSB,360,100,100);
    palette = floor(random(5));
    noStroke();

    // draw random squares in a grid using colors from the color palette
    for (x = 0; x < width; x += random(30)) {
        for (y = 0; y < height; y += random(30)) {
            getColor(floor(random(5)));
            fill(h,s,b);
            rect(x, y, 50)
        }
    }

    filter(BLUR, 3)
}

function getColor(col1) {
    h = int(table.get(palette, col1 * 3));
    s = int(table.get(palette, col1 * 3 + 1));
    b = int(table.get(palette, col1 * 3 + 2));
}