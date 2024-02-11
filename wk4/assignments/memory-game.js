let startingX = 24;
let startingY = 200;
const cardWidth = 120;
const cardHeight = 120;
const gridGap = 16;

/*
COLORS

woodstock yellow #ffdc17, #ffdb18
sky blue #95d0fc
grass #909710
dog house red #ea191e
*/

function setup() {
    var cnv = createCanvas(848, 640);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    background('#95d0fc');
}

function draw() {
    stroke('#ffffff');
    noLoop(); // doing my own for loops!
    rect(startingX, startingY, cardWidth, cardHeight); // allows for 6 colums at 120w w 16px gap/gutter. using same dimension for height cause my images are squares. 408h needed for the 3 rows (but this can allow for additional space for title and score copy, as well as padding at the bottom of the canvas for ~aesthetics~)

    // i have 18 cards, so 3 rows of 6 columns
    // set for loop to handle rows
    for(let rows = 0; rows < 3; rows++) {
        // inner loop handles columns
        for(let columns = 0; columns < 6; columns++) { 
            fill(255, 220, 23);
            rect(startingX, startingY, cardWidth, cardHeight);
            // every iteration, move startingX by my desired grid
            startingX += (cardWidth + gridGap); // x because this inner loop handles columns
        }
        // every iteration, move startingY, by my desired grid
        startingY += (cardHeight + gridGap); // y because this loop handles rows
        startingX = 24; // reset X so new rows line up at the "origin" again
    }
}

// .wav or .mp4 file if you want a sound when you interact w your cards... 'good grief', 'teacher wah wah', 'snoopy/woodstock laughing'....?
// can I use a specific font in my p5js? there's a comic font that could be fun to keep in theme