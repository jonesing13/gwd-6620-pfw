let startingX = 24;
let startingY = 200;
let cardWidth = 120;
let cardHeight = 120;

function setup() {
    createCanvas(848, 640);
    background('#95d0fc');
}

function draw() {
    noStroke();
    noLoop();
    // rect(16, 200, cardWidth, cardHeight);
    rect(startingX, startingY, cardWidth, cardHeight); // allows for 6 colums at 120w w 16px gap/gutter. using same dimension for height cause my images are squares. 408h needed for the 3 rows (but this can allow for additional space for title and score copy)
    // rect(16, 336, 120, 120);
    // rect(16, 472, 120, 120);

    /* for(let x = 24; x < width; x += 136) {
        //rect(x, startingY, cardWidth, cardHeight); only if we're just doing 1 row
        for(let y = 200; y < height; y += 136) { // to add more rows, need another for
            rect(x, y, cardWidth, cardHeight);
        }
        
    } */

    // i have 18 cards, so 3 rows of 6 columns
    // set for loop to handle rows
    for(let rows = 0; rows < 3; rows++) {
        // inner loop handles columns
        for(let columns = 0; columns < 6; columns++) { // with this, it's ideal to set a variable for the x and y, like how we changed the box dimensions to be set outside of the loops/elements themselves
            rect(startingX, startingY, cardWidth, cardHeight);
            // every iteration, move startingX by my desired grid
            startingX += 136; // x because this inner loop handles columns
        }
        // every iteration, move startingY, by my desired grid
        startingY += 136; // y because this loop handles rows
        startingX = 24; // reset X so new rows line up at the "origin" again
    }
}
// .wav or .mp4 file if you want a sound when you interact w your cards