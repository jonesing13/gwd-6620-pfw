let colIndex = 220;
let startingX = 200;
let sliderX = 150;
let yPos = 100;
let sliderY = yPos - 50;
let fluteWidth = 50;
let fluteHeight = 300;
let sliderHeight = 20;


function preload() {
    soundFormats('wav');

    flute1 = loadSound('./assets/373286__samulis__flute-non-vibrato-sustain-c5.wav');
    flute2 = loadSound('./assets/373278__samulis__flute-non-vibrato-sustain-e5.wav');
    flute3 = loadSound('./assets/373280__samulis__flute-non-vibrato-sustain-c6.wav');
    flute4 = loadSound('./assets/373281__samulis__flute-non-vibrato-sustain-e6.wav');
}



function setup() {
    let cnv = createCanvas(600, 500);
    let inputs = ['a','s','d','f'];
    colorMode(HSB); 
    background(colIndex, 100, 100);
    fill(47,100,100);

    // draw a "pan flute"
    for (i = 0; i < 4; i++) {
        stroke(17,100,100);
        rect(startingX, yPos, fluteWidth, fluteHeight, 0, 0, 10, 10);
        // set font coloring
        noStroke();
        fill(colIndex, 100, 100);
        text(inputs[i],startingX + fluteWidth / 2.2, yPos + fluteHeight / 2)
        startingX += fluteWidth;
        // set flute coloring
        stroke(17,100,100);
        fill(47,100,100)
        fluteHeight -= 35;
    }
}

function draw() {
    noStroke();
    fill('white');
    text('Press and hold a, s, d, and f to play some flute sounds.', 150, 50);
    
    //drawSlider();

}

// what if i could make a rectangle that you could "push" right or left to make the sound play?
// function drawSlider() {
//     stroke(47,100,100);
//     fill(161, 86, 100);
//     slider = rect(sliderX, sliderY, fluteWidth, sliderHeight, 20, 20, 20, 20)   
// }


function keyPressed() {
    // trigger a sound based on key typed (a, s, d, f)

    // a
    if (keyCode == 65) {
        // highlight "note"/key played
        fill(17,100,100);
        rect(200, 100, fluteWidth, 300, 0, 0, 10, 10);
        //play sound
        flute1.play();
    }
    // s
    if (keyCode == 83) {
        // highlight "note"/key played
        fill(17,100,100);
        rect(250, 100, fluteWidth, 265, 0, 0, 10, 10);
        // play sound
        flute2.play();
    }
    // d
    if (keyCode == 68) {
        fill(17,100,100);
        rect(300, 100, fluteWidth, 230, 0, 0, 10, 10);
        flute3.play();
    }
    // f
    if (keyCode == 70) {
        fill(17,100,100);
        rect(350, 100, fluteWidth, 195, 0, 0, 10, 10);
        flute4.play();
    }
}

function keyReleased() {
    // play no sound if user isn't pressing a key

    // a
    if (keyCode == 65) {
        // redraw flute shape
        stroke(17,100,100);
        fill(47,100,100);
        rect(200, 100, fluteWidth, 300, 0, 0, 10, 10);
        // set font coloring
        noStroke();
        fill(colIndex, 100, 100);
        text('a', 225, 250);
        // stop sound
        flute1.stop();
    }
    // s
    if (keyCode == 83) {
        // redraw flute shape
        stroke(17,100,100);
        fill(47,100,100);
        rect(250, 100, fluteWidth, 265, 0, 0, 10, 10);
        // set font coloring
        noStroke();
        fill(colIndex, 100, 100);
        text('s', 272, 230);
        flute2.stop();
    }
    // d
    if (keyCode == 68) {
        // redraw flute shape
        stroke(17,100,100);
        fill(47,100,100);
        rect(300, 100, fluteWidth, 230, 0, 0, 10, 10);
        // set font coloring
        noStroke();
        fill(colIndex, 100, 100);
        text('d', 323, 215);
        flute3.stop();
    }
    // f
    if (keyCode == 70) {
        // redraw flute shape
        stroke(17,100,100);
        fill(47,100,100);
        rect(350, 100, fluteWidth, 195, 0, 0, 10, 10);
        // set font coloring
        noStroke();
        fill(colIndex, 100, 100);
        text('f', 373, 197);
        flute4.stop();
    }
}