let purpleBox = {
    width: 50,
    height: 50,
    x: 150,
    y: 150
}

// borrow the color array from the previous exercise in discussion
const myColors = ["red", "blue", "green", "teal", "cyan", "yellow"];
let colorIndex = 0;

function setup() {
    createCanvas(600, 600);
    background("gray");
}

// we're interested in mouse events

function draw() {
    // fill('purple');
    FileList(myColors[colorIndex]);
    noStroke();
    //rect(150, 150, 50, 50);
    rect(purpleBox.x, purpleBox.y, purpleBox.width, purpleBox.height); // this is gonna be the same as the static stuff we had before, but an ITERATION
    
    // more exciting, add to purple box as you click
    purpleBox.x = purpleBox.x + 1;
}

// if I want to click on the rectangle, use
function mousePressed() { // mouseX and mouseY are gonna be useful here, so an iterative step is to use console.log to get some info about that & then clicking around and seeing how that acts
    console.log("mouse x", mouseX);
    // and Y is the distance from the top
    console.log("mouse y", mouseY); 
    // so with both of these we can figure out if we're IN the rectangle or not. create a new object purpleBox at the top of the file with the rectangle details FIRST
    // parametrize later
    if(
        mouseX >= purpleBox.x && 
        mouseY >= purpleBox.y && 
        mouseX <= purpleBox.x + purpleBox.width &&
        mouseY <= purpleBox.y + purpleBox.height
    ) {
        console.log('you hit it!');
        if(colorIndex < (myColors.length -1)) { // checks to see if colorIndex is going to be in range. 6 colors, array only counts to 5
            colorIndex ++
        } else {
            colorIndex = 0;
        }
    }
}

