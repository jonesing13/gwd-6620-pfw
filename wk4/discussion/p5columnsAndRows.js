let startingX = 25;
let startingY = 25;
let cardWidth = 50;
let cardHeight = 50;

const myColors = ["red", "blue", "green", "teal", "cyan", "yellow"];
let colorIndex = 0;
function setup() {
    createCanvas(600, 600);
    background('gray');
}

function draw() {
    noLoop(); // cause we're gonna use a for loop, so don't want them to compete
/*     for(let x = 50; x < 600 ; x += 100) {
        rect(x, 200, 50, 50);
    } */ // displays a line of rectangles spaced evenly.
    // but we also want more rows of this
    // filling the whole canvas:
/*     for(let x = 50; x < 600 ; x += 100) {
        for(let y = 50; y < 600; y += 100) {
            rect(x, y, 50, 50);
        }
    } */
    // but we can use 'width' and 'height'
    /* for(let x = 25; x < width ; x += 100) { // changed to 25 to make the display more 'centered'
        for(let y = 25; y < height; y += 100) {
            rect(x, y, 50, 50);
        }
    } */

    // but what about a SPECIFIC number of objects?
    // make 2 rows w 10 total cards
    // still want a nested for loop...
    // outer loop handles rows
    for(let rows = 0; rows < 2; rows++) {
        // inner loop handles columns
        for(let columns = 0; columns < 5; columns++) { // with this, it's ideal to set a variable for the x and y, like how we changed the box dimensions to be set outside of the loops/elements themselves
            rect(startingX, startingY, cardWidth, cardHeight);
            // every iteration, move startingX by 100
            startingX += 100; // since we're inside the columns for this loop
        }
        // every iteration, move startingY, by 100
        startingY += 100; // since we're inside the rows for this loop
        // at each new row, reset startingX to align the row w the first row
        startingX = 25; // reset X so your row lines up at the "origin" again
    }
} // outer loop is only running twice (we want 2 rows)