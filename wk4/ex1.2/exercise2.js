let theBox = {
    width: 100,
    height: 100,
    x: 300,
    y: 350
}
let mouseClicks = 0;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background('lightblue');
    drawShape();
    theBox.y--;
    if(theBox.y < -theBox.height) { // my square is moving up, so I used the distance of the height, i.e. negative height 
        noLoop();
        text('your score was ' + mouseClicks, 230, 240);
    }
}

function mousePressed() {
    // console.log("mouse x", mouseX);
    // console.log("mouse y", mouseY);
     if( // check if mouse click is inside the box
        (mouseX >= theBox.x && mouseX <= theBox.x + theBox.width) && (mouseY >= theBox.y && mouseY <= theBox.y + theBox.height)
    ) {
        mouseClicks++;
        console.log('you hit the box!', mouseClicks);
    } 
}

function drawShape() {
    fill('blue');
    rect(theBox.x, theBox.y, theBox.width, theBox.height);
}


// After you have that working, create a variable to be used for either the shape's x or y. Increment this in the draw function so the shape appears to be moving. This should still detecting mouse clicks (i.e. parameterize your coordinates/inputs).

// After you have this working, create a conditional in your draw function to detect if the shape is off the canvas. When this occurs, call 'noLoop' to stop the draw function from repeating. Display the number of clicks the user has done.

// Feel free to make this interesting with adding color and description text.