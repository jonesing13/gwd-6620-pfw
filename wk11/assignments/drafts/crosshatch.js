function preload() {
    table = loadTable("neon.csv", "csv", "header");
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    noFill();
    background(250);
    colorMode(HSB,360,100,100);
    size = random(windowWidth * 0.09, windowHeight * 0.1);
    stroke(0,10);

    for (i = 0; i < windowWidth * 10 ; i++) {
        /* trying to do random color for the outline
        getColor(floor(random(5)));
        stroke(h,s,b);
        */

        // random placed square
        rect(random(-width * 0.1, width), random(-height * 0.1, height), size)
        
    }

    filter(INVERT,2);
    //filter(BLUR,1);
}

function crosshatch() {
    noFill();
    size = random(windowWidth * 0.09, windowHeight * 0.1);
    stroke(0,10);

    for (i = 0; i < windowWidth * 10 ; i++) {
        // random placed square
        rect(random(-width * 0.1, width), random(-height * 0.1, height), size)
        
    }

    filter(INVERT,2);
    //filter(BLUR,1);
}

function getColor(col1) {
    h = int(table.get(palette, col1 * 3));
    s = int(table.get(palette, col1 * 3 + 1));
    b = int(table.get(palette, col1 * 3 + 2));
}