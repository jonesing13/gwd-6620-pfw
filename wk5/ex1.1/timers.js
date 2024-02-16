let blockX = 0;
let blockY = 0;
let blockWidth = 50;
let blockHeight = 50;
let blockColor = 255;
let drawTimer;
const speed = 10;
const distance = 5;

function setup () {
    createCanvas(600, 400);
    background(210);
    drawBlock(blockX, blockY);
}
// Create a function that draws a square in a specific location. The fill color and the location should be function parameters.
function drawBlock (x, y, color) {
    fill(color || 255);
    stroke('pink');
    rect(x, y, blockWidth, blockHeight);
}

// keyTyped function to change the box's color
function keyTyped() {
    // convert input to a number
    let keyToNumber = Number(key);
    // check to make sure input is a number
    if  (isNaN(keyToNumber)) {
        return; // safety measure that escapes (without error) when input is Not A Number (NaN)
    }
    keyToNumber = map(keyToNumber, 1, 9, 1, 255); // user can input 1-9 and it maps to a greyscale color 1-255
    // console.log('converted number', keyToNumber);
    blockColor = keyToNumber;
}

window.setTimeout(() => {
    drawTimer = window.setInterval(() => { // triggers the function we're setting at the interval we set
        // check if drawBlock is out of bounds to reset
        if(blockX - blockWidth <= width) {
            drawBlock(blockX, blockY, blockColor);
            blockX += distance;
        } else {
            blockX = 0;
            blockY += blockHeight;
        }
        if((blockX >= width) && (blockY >= height)) {
            // cancels timer
            window.clearInterval(drawTimer);
            alert('done'); // message that shows after the square draws outside of the canvas
        }
    }, speed); // first argument is a function, and the second argument is the interval (in milliseconds)
}, 1500);