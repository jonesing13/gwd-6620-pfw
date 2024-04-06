let gArrayVector = [];
let gGap = 0.05;

const WIDTH = 800;
const HEIGHT = 600;

function setup() {
    const myCanvas = createCanvas( WIDTH, HEIGHT );
    colorMode( HSB, 100 );

    //showGapValue();
    setInitVectors();
}

function draw() {
    drawSquare( gArrayVector );
    gArrayVector = getShiftedVectorArray( gArrayVector, gGap );
}

function mouseClicked() {
    background( color( random( 20 ), 20, 100 ) );

    gGap = random( 1 );
    showGapValue();
    setInitVectors();
}

const setInitVectors = () => {
    gArrayVector = [];
    gArrayVector.push( createVector( 0, 0 ) );
    gArrayVector.push( createVector( WIDTH, 0 ) );
    gArrayVector.push( createVector( WIDTH, HEIGHT ) );
    gArrayVector.push( createVector( 0, HEIGHT ) );
}

const showGapValue = () => { console.log( 'gap: ' + gGap ); }