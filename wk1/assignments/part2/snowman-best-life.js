let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case for the scarf!", "teal");
let stroke2 = prompt("enter another basic color name in lower case for the hat!", "black");

function setup() {
    createCanvas(1000,800);
    background("#dcf3ff");
    grid = loadImage("../images/100px_grid.png");
}

function draw() {
    // background(grid);

    // snow coloring (for snowman AND ground)
    fill("#f1f1f1");
    stroke("#d1d8e2");
    strokeWeight(20);
    ellipse(500, 900, 1500, 500);

    // snowman
    // snowman legs
    // left side
    ellipse(380, 640, 130);
    // right side
    ellipse(620, 640, 130);
    // body
    ellipse(500, 450, 350, 400);
    // scarf
    stroke(stroke1);
    fill(stroke1);
    /* commenting out original color to enable prompt1 input/color
    fill("#70a297");
    stroke("#70a297");
    */
    ellipse(500, 290, 235, 90);
    quad(350, 420, 450, 300, 475, 300, 400, 475);
    quad(450, 300, 475, 300, 590, 490, 500, 550);
    // head
    stroke("#d1d8e2");
    fill("#f1f1f1");
    ellipse(500, 200, 200);
    // hat brim
    /* commenting out original color to enable prompt2 color!
    stroke("#323c4f");
    fill("#323c4f");*/
    stroke(stroke2);
    fill(stroke2);
    strokeWeight(50);
    line(400, 140, 600, 110);
    // hat top
    quad(410, 55, 550, 30, 550, 110, 445, 120);
    // eyes
    stroke("#161a22");
    strokeWeight(33);
    point(475, 190);
    point(545, 190);
    // mouth
    noFill();
    strokeWeight(10);
    point(468, 245);
    point(482, 254);
    point(497, 257);
    point(513, 256);
    point(527, 252);
    // nose
    stroke("#df8142");
    strokeWeight(10);
    triangle(510, 230, 515, 220, 560, 235);
    // arms
    stroke("#6c3b1c");
    strokeWeight(20);
    // right side
    line(620, 370, 810, 230);
    line(750, 270, 760, 220);
    // left side
    line(160, 490, 360, 360);
    line(200, 450, 180, 430);
    line(220, 450, 190, 500);
    // pipe
    stroke("#92664a");
    strokeWeight(15);
    line(400, 260, 475, 250);
    ellipse(395, 245, 15, 33);

    // rudolph
    // antlers
    stroke("#323c4f");
    ellipse(720, 470, 2, 6);
    ellipse(725, 466, 2, 6);
    // eye
    stroke("#161a22");
    point(730, 500);
    // head
    fill("#92664a");
    stroke("#92664a");
    triangle(660, 520, 750, 470, 750, 540);
    // eye
    stroke("white");
    strokeWeight(20);
    point(722, 498);
    stroke("#323c4f");
    strokeWeight(15);
    point(720, 500);
    // body
    fill("#92664a");
    stroke("#92664a");
    ellipse(830, 570, 170, 90);
    // leg front 1
    line(730, 710, 770, 550);
    // eg front 2
    line(760, 710, 790, 550);
    // eg back 1
    triangle(840, 610, 865, 600, 865, 650);
    line(870, 655, 850, 710);
    // leg back 2
    triangle(900, 650, 820, 550, 900, 550);
    line(900, 660, 890, 710);
    // red nose
    stroke("#e02d2d");
    ellipse(640, 510, 5, 15);
    // tail
    fill("#92664a");
    stroke("#92664a");
    triangle(910, 540, 920, 510, 900, 520);
    stroke("white");
    fill("white");
    strokeWeight(5);
    triangle(920, 540, 930, 530, 930, 510);
}