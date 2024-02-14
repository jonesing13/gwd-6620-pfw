// Create a p5.js project
let startingX = 0;
let startingY = 0;
let blockWidth = 50;
let blockHeight = 50;
let blockColor = 255;
let drawTimer;
const speed = 30;
const distance = 4;

function setup () {
    createCanvas(600, 400);
    background(210);
    drawBlock(startingX, startingY);
}
// Create a function that draws a square in a specific location. The fill color and the location should be function parameters.
function drawBlock (x, y, color) {
    fill(color || 'cornflowerblue');
    stroke('#fff');
    rect(x, y, blockWidth, blockHeight);
}

// keyTyped function to change the box's color
function keyTyped() {
    // convert input to a number
    let keyToNumber = Number(key);
    // check to make sure input is a number
    if  (isNaN(keyToNumber)) {
        return; // escapes when input is Not A Number (NaN)
    }
    keyToNumber = map(keyToNumber, 1, 9, 1, 255); // user can input 1-9 and it maps to a greyscale color 1-255
    console.log('converted number', keyToNumber);
    blockColor = keyToNumber;
}

/* window.setTimeout{() => {

    }
}; */

// TODO make this a function, and place inside window.setTimeout above

drawTimer = window.setInterval(() => { // triggers the function we're setting at the interval we set
    // check if drawBlock is out of bounds to reset
    if(startingX - blockWidth <= width) {
        drawBlock(startingX, startingY, blockColor);
        startingX += distance;
    } else {
        startingX = 0;
        startingY += blockHeight;
    }
    if((startingX - blockWidth >= width) && (startingY - blockHeight >= height)) { // TODO why does this lag a bit before triggering my alert message? I had them as >, but it also lagged. 
        // cancels timer
        window.clearInterval(drawTimer);
        alert('done');
    }
}, speed); // first argument is a function, and the second argument is the interval (in milliseconds)

// Instead of using the draw function to draw your block, create a setInterval
// Each interval, draw your block increase either the X or the Y
// When the block goes out of bounds, reset whichever axis went out of bounds back to 0 and move the other axis coordinate over the length or width of your block. It should be like starting a new row or column.
// When the block is beyond both the width and the height, clear your interval.
// Experiment with keyTyped or keyPressed to change the color of your block as it goes.