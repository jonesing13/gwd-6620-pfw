function preload() {
    table = loadTable("colors.csv", "csv", "header");
}
  
function setup() {
    createCanvas(500,500);
    background(150);
    colorMode(HSB,360,100,100);
    palette = floor(random(5));

    // draw 100 random sized rectangles using colors from the color palette
    for (i = 0; i < 1000; i++) {
        getColor(floor(random(5)));
        fill(h,s,b);
        noStroke();
        rect(random(width),random(height),random(50,width / 5))
    }

    // blend the squares on the page
    filter(BLUR, 12);
    //filter(POSTERIZE, 3)
}

function getColor(col1) {
    h = int(table.get(palette, col1 * 3));
    s = int(table.get(palette, col1 * 3 + 1));
    b = int(table.get(palette, col1 * 3 + 2));
}