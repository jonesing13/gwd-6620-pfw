let theBox = {
    width: 100,
    height: 100,
    x: 300,
    y: 350
}
let mouseClicks = 0;
const colors = ['cornflowerblue', 'tomato', 'purple', 'teal', 'blue', 'orange', 'yellow', 'red', 'green', 'magenta', 'olive', 'maroon', 'aqua', 'limegreen'];
let colorIndex = 0;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background('lightblue');
    fill('black');
    textSize(18);
    text('click the box to score points!', 40, 100);
    drawShape(); 
    theBox.y--; // since draw() is a loop, this moves the shape up on the y-axis by one each iteration
    if(theBox.y < -theBox.height) { // my square is moving up, so I used the distance of the height past the canvas as my condition, i.e. negative height 
        noLoop();
        fill('blue');
        text('nice! your score was: ' + mouseClicks, 230, 240);
    }
}

function mousePressed() {
    // console.log("mouse x", mouseX);
    // console.log("mouse y", mouseY);
     if( // check if mouse click is inside the box (success)
        (mouseX >= theBox.x && mouseX <= theBox.x + theBox.width) && (mouseY >= theBox.y && mouseY <= theBox.y + theBox.height)
    ) {
        mouseClicks++; // count successful mouse clicks
        console.log('you hit the box!', mouseClicks);

        if(colorIndex < (colors.length -1)) { // checks to see if colorIndex is going to be in range. 6 colors, array only counts to 5
            colorIndex ++
        } else { // resets colorIndex so colors can keep changing
            colorIndex = 0;
        }
    } 
}

function drawShape() {
    fill(colors[colorIndex]);
    noStroke();
    rect(theBox.x, theBox.y, theBox.width, theBox.height);
}