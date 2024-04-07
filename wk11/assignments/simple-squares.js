function preload() {
    table = loadTable("colors.csv", "csv", "header");
}
  
function setup() {
    createCanvas(500,500);
    background("white");
    colorMode(HSB,360,100,100,100);//enable  HSB (due to attached files) and opacity for later blending
    palette = floor(random(5));
    iterations = random(250,500);
    

}

// you can do amazing things with squares
function draw() {

    // draw random sized rectangles using colors from the color palette
    for (i = 0; i < iterations; i++) {
        opacity = random(50,75);

        getColor(floor(random(5)));
        fill(h,s,b, opacity);
        noStroke();

        rect(random(-width * 0.1, width), random(-height * 0.1, height),random(50,width / 5),random(50,width / 5))

        //rotate(random(30));
    }

    noLoop();

    // blend the squares on the page
    filter(BLUR, 13);
}

function getColor(col1) {
    h = int(table.get(palette, col1 * 3));
    s = int(table.get(palette, col1 * 3 + 1));
    b = int(table.get(palette, col1 * 3 + 2));
}

function keyTyped() {
    if(key == "s") {
        save("simple-squares.png")
    }
}