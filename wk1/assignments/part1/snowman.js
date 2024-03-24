let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case", "gray");
let stroke2 = prompt("enter another basic color name in lower case", "purple");

function setup() {
    createCanvas(1000,800);
    background("#ccc");
    grid = loadImage("100px_grid.png")
}

function draw() {
    // background(grid);
    // snowman legs
    fill("#f1f1f1");
    /* commenting out original color to enable prompt1 color!   
    stroke(100, 250, 100);
    */
   stroke(stroke1);
    strokeWeight(20);
    // left
    ellipse(350, 650, 200);
    // right
    ellipse(650, 650, 200);
    // body
    ellipse(500, 450, 350, 400);
    // head
    ellipse(500, 200, 200);
    // hat brim
    /* commenting out original color to enable prompt2 color!
    stroke(100, 100, 255);
    */
    stroke(stroke2);
    strokeWeight(40);
    line(400, 120, 600, 120);
    // hat top
    quad(425, 50, 575, 50, 550, 120, 450, 120);
    // eyes
    stroke(0);
    strokeWeight(50);
    point(440, 190);
    point(560, 190);
    // mouth
    noFill();
    strokeWeight(10);
    arc(475, 240, 100, 30, 0, HALF_PI);
}