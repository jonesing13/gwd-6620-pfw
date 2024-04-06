// initial data
let modulo = 10;
const VISUAL_MODE_COLORED = 1;
let gModeVisual = VISUAL_MODE_COLORED;
const WIDTH = 500;
const HEIGHT = 500;

function setup() {
    createCanvas( WIDTH, HEIGHT );
    colorMode( HSB, 100 );
}

function draw() {
    background( 'white' );
    drawTable( modulo, WIDTH );
    frameRate(5);
}

// draw a table
const drawTable = ( modulo, width ) => {
    const scalar = width / ( modulo - 1 );
    let num;

    // set up a grid
    // rows
    for( let i = 1; i < modulo; i++ ){
        num = i;  
        //console.log('num: ', num)
        // columns
        for( let j = 1; j < modulo; j++ ){
            const vector = createVector( j - 0.5, i - 0.5 );
            vector.mult( scalar );
            fill( color( random( 100 ), 50, 100 ) );
            noStroke();
            ellipse( vector.x, vector.y, scalar / 2, scalar / 2 );
            num = ( num * i ) % modulo;
            console.log('num: ', num)
        }
    }
}