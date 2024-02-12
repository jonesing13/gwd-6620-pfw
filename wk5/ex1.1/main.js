// Create a p5.js project
let startingX = 50;
let startingY = 50;
let rectColor = 'cornflowerblue';

function setup () {
    createCanvas(windowWidth, windowHeight);
    background(210);
}
// Create a function that draws a square in a specific location. The fill color and the location should be function parameters.
function draw () {
    fill(rectColor);
    noStroke();
    rect(startingX, startingY, 100, 100);
}
// Instead of using the draw function to draw your block, create a setInterval
// Each interval, draw your block increase either the X or the Y
// When the block goes out of bounds, reset whichever axis went out of bounds back to 0 and move the other axis coordinate over the length or width of your block. It should be like starting a new row or column.
// When the block is beyond both the width and the height, clear your interval.
// Experiment with keyTyped or keyPressed to change the color of your block as it goes.