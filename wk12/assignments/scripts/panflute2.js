let startingX = 200;
let sliderX = 150;
let yPos = 100;
let sliderY = yPos - 50;
let fluteWidth = 50;
let fluteHeight = 300;
let sliderHeight = 20;
let inputs = ['a','s','d','f'];



function preload() {
    soundFormats('wav');

    flute1 = loadSound('./assets/373286__samulis__flute-non-vibrato-sustain-c5.wav');
    flute2 = loadSound('./assets/373278__samulis__flute-non-vibrato-sustain-e5.wav');
    flute3 = loadSound('./assets/373280__samulis__flute-non-vibrato-sustain-c6.wav');
    flute4 = loadSound('./assets/373281__samulis__flute-non-vibrato-sustain-e6.wav');
}



function setup() {
    let cnv = createCanvas(600, 500);
    background('#0137fe');
    

}

function draw() {
    //noLoop();
    noStroke();
    fill('white');
    text('press and hold a, s, d, and f to play some flute sounds', 150, 50);
    fill('#fec801'); // yellow
    
// draw a "pan flute"
for (i = 0; i < 4; i++) {
    console.log('startingX: ', startingX);
    if( startingX < 400) {
        drawKey({
            fillColor: '#fec801', //
            strokeColor: '#fe4a01',
            keyHeight: fluteHeight,
            xPos: startingX,
            keyLetter: inputs[i]
        })
        startingX += fluteWidth;
        fluteHeight -= 35;
    }

    // stroke('#fec801');
    // rect(startingX, yPos, fluteWidth, fluteHeight, 0, 0, 10, 10);
    // // set font coloring
    // noStroke();
    // fill(colIndex, 100, 100);
    // text(inputs[i],startingX + fluteWidth / 2.2, yPos + fluteHeight / 2)
    // startingX += fluteWidth;
    // // set flute coloring
    // stroke('#fec801');
    // fill(47,100,100)
    // fluteHeight -= 35;
}

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
        fill('#fec801');
        rect(200, 100, fluteWidth, 300, 0, 0, 10, 10);
        // drawKey({
        //     fillColor: '#fec801', //
        //     strokeColor: '#fe4a01',
        //     keyHeight: 300,
        //     xPos: 200,
        //     keyLetter: 'a'
        // })
        //play sound
        flute1.play();
    }
    // s
    if (keyCode == 83) {
        // highlight "note"/key played
        // fill('#fec801');
        // rect(250, 100, fluteWidth, 265, 0, 0, 10, 10);
        drawKey({
            fillColor: '#fec801', //
            strokeColor: '#fe4a01',
            keyHeight: 300 - 35,
            xPos: 200 + 50,
            keyLetter: 's'
        })
        // play sound
        flute2.play();
    }
    // d
    if (keyCode == 68) {
        // fill('#fec801');
        // rect(300, 100, fluteWidth, 230, 0, 0, 10, 10);
        drawKey({
            fillColor: '#fec801', //
            strokeColor: '#fe4a01',
            keyHeight: 300 - (35 * 2),
            xPos: 200 + (50 * 2),
            keyLetter: 'd'
        })
        flute3.play();
    }
    // f
    if (keyCode == 70) {
        // fill('#fec801');
        // rect(350, 100, fluteWidth, 195, 0, 0, 10, 10);
        drawKey({
            fillColor: '#fec801', //
            strokeColor: '#fe4a01',
            keyHeight: 300 - (35 * 3),
            xPos: 200 + (50 * 3),
            keyLetter: 'f'
        })
        flute4.play();
    }
}

function keyReleased() {
    // a
    if (keyCode == 65) {
        // redraw flute shape
        // drawKey({
        //     strokeColor: '#fec801', //
        //     fillColor: '#fe4a01',
        //     keyHeight: 300,
        //     xPos: 200,
        //     keyLetter: 'a'
        // })
        stroke('#fec801');
        fill('#fe4a01');
        rect(200, 100, fluteWidth, 300, 0, 0, 10, 10);
        // set font coloring
        noStroke();
        fill('#0137fe');
        text('a', 225, 250);
        // stop sound
        flute1.stop();
    }
    // s
    if (keyCode == 83) {
        // redraw flute shape
        stroke('#fec801');
        fill('#fe4a01');
        rect(250, 100, fluteWidth, 265, 0, 0, 10, 10);
        // set font coloring
        noStroke();
        fill('#0137fe');
        text('s', 272, 230);
        flute2.stop();
    }
    // d
    if (keyCode == 68) {
        // redraw flute shape
        stroke('#fec801');
        fill('#fe4a01');
        rect(300, 100, fluteWidth, 230, 0, 0, 10, 10);
        // set font coloring
        noStroke();
        fill('#0137fe');
        text('d', 323, 215);
        flute3.stop();
    }
    // f
    if (keyCode == 70) {
        // redraw flute shape
        stroke('#fec801');
        fill('#fe4a01');
        rect(350, 100, fluteWidth, 195, 0, 0, 10, 10);
        // set font coloring
        noStroke();
        fill('#0137fe');
        text('f', 373, 197);
        flute4.stop();
    }
}

function drawKey({
    fillColor,
    strokeColor,
    keyHeight,
    xPos,
    keyLetter
}) {
    push();
    stroke(strokeColor);
    fill(fillColor);
    rect(xPos, yPos, fluteWidth, keyHeight, 0, 0, 10, 10);
    // set font coloring
    noStroke();
    fill('#0137fe');
    text(keyLetter, xPos + fluteWidth / 2.2, yPos + keyHeight / 2)
    // xPos += fluteWidth;
    // set flute coloring
    noStroke();
    noFill();
    // keyHeight -= 35;
    pop();
}