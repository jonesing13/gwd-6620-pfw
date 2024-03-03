// detecting mouse clicks on objects in p5js
const squareWidth = 50;
const squareHeight = 50;
let squareXPosition = 100;
let squareYPosition = 0;

function setup() {
    createCanvas(500, 500);
    
}

function draw() {
    fill('purple');
    // ellipse(100, 100, 100);

    // rect(100, 100, 200, 200);
    rect(squareXPosition, squareYPosition, squareWidth, squareHeight);

    // now in our draw function we can increment the square's position
    background(0); // originally had this in the "setup" function, but moved here so it is re-drawn w each iteration of the draw (the += command below)
    squareYPosition += 1;

    // check to see if we need to restart our square (it drew itself off-screen)
    if(squareYPosition > height) {
        squareYPosition = 0; // reset to original setting
        // noLoop(); would terminate the looping mechanism
    }
}

function mousePressed() {
    console.log(mouseX, mouseY);
    // way to detect distance from mouse and object is gonna be different depending on what you're detecting

    // circle 
    // const distance = dist(mouseX, mouseY, 100, 100);
    // for troubleshooting/ "just for fun"
    // console.log(distance);
    // if(distance < 50) {
    //     alert('you hit it');
    // }

    // rectangle
    // check if your mouse is in the coords of the X length of the rect
    // if(mouseX >= 100 && mouseX <= 300) {
    //     console.log('you have got the x');
    // }
    // great. expand that if clause to include a check on if the mouse is in the coords of the Y length of the rect
    // if((mouseX >= 100 && mouseX <= 300) && (mouseY >= 100 && mouseY <= 300)) {
    //     console.log('you hit the rectangle!');
    // }
    // note, if the rectangle size changes, this function isn't true anymore. you have to adjust your conditional statements

    // what if we wanna add some animation and still detect the hits? add const squareWidth, const squareHeight, let squareXPosition, let squareYPosition

    // see if a click "hits" the moving square
    if((mouseX >= squareXPosition && mouseX <= squareXPosition + squareWidth) && (mouseY >= squareYPosition && mouseY <= squareYPosition + squareHeight)) {
        console.log('you hit the rectangle!');
    }
}