function preload() {
    table = loadTable("neon.csv", "csv", "header");
}
  
function setup() {
    createCanvas(500,500);
    background(150);
    colorMode(HSB,360,100,100);
    palette = floor(random(5));
    getColor(floor(random(5)))
    fill(h,s,b);
    firstX = width * 0.33 * floor(random(1,3)); // multiply by either 1 0r 2
    firstY = height * 0.33 * floor(random(1,3)); // multiply by either 1 0r 2;
    circle(firstX, firstY, 200);

    getColor(floor(random(5)))
    fill(h,s,b);
    circle(width - firstX, height - firstY, 100); // put another circle opposite (thirds position) the first one
}

function getColor(col1) {
    h = int(table.get(palette, col1 * 3));
    s = int(table.get(palette, col1 * 3 + 1));
    b = int(table.get(palette, col1 * 3 + 2));
}