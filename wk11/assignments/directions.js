function preload() {
    table = loadTable("neon.csv", "csv", "header");
}
  
function setup() {
    createCanvas(800,500);
    colorMode(HSB,360,100,100);
    background(220,100,100);
    palette = floor(random(5));
    x = 0;
    y = 50;
    dirX = 5;
    dirY = 2;
    pause = 1;
    diameter = 75; // this one's just to keep the below rules easier to read
}

function draw() {
    // a moving circle
    circle(x, y, diameter);
    x += dirX;
    y += dirY;

    if (x > width || x < 0) {
        // contain in canvas (switch direction)
        dirX ++; // tweak trajectory
        dirX *= -1;
    }
    if (y > height || y < 0) {
        // contain in canvas (switch direction)
        dirY += 2; // tweak trajectory
        dirY *= -1;
    }
    // change fill when drawing in lower right quad
    if ( x >= width * 0.5 && y >= height * 0.5 ) {
        stroke(220,100,100);
        fill(299,100,100);
    } else if ( x < width * 0.5 && y < height * 0.5 ) { // random color fill in upper left quad
        stroke(220,100,100)
        getColor(floor(random(5)));
        fill(h,s,b);
    } else if ( x >= width * 0.5 && y <= height * 0.5) { // invert color upper right quad
        stroke(0);
        fill(220,100,100);
    }else {
        stroke(220,100,100);
        fill(0);
    }
}

function getColor(col1) {
    h = int(table.get(palette, col1 * 3));
    s = int(table.get(palette, col1 * 3 + 1));
    b = int(table.get(palette, col1 * 3 + 2));
}

function keyTyped() {
    // stops circle if "b" is typed
    if(key == "p") {
        pause *= 1;
    }
    // stop draw loop 
    if(pause == -1) {
        noLoop();
    // (re)start draw loop
    } else {
        loop();
    }

    if(key == "s") {
        save("jones_moving_ball.png")
    }
}