let cymbal, 
    crash, 
    drum, 
    kick, 
    snare,
    cowbell,
    cowbellPic,
    fill = 220;

function preload() {
    cymbal = loadSound('assets/cymbal-crash-1-167695.mp3');
    crash = loadSound('assets/left-crashwav-14567.mp3');
    drum = loadSound('assets/drum-beat-01-37136.mp3');
    kick = loadSound('assets/kick-183936.mp3');
    snare = loadSound('assets/snare-made-from-clap-101249.mp3');
    cowbell = loadSound('assets/dirty-tony-cowbell-mx-013-107592.mp3');
    cowbellPic = loadImage('assets/more-cowbell.png');
    //song = 

}

function setup() {
    let canvas = createCanvas(800, 600);
    colorMode(HSB); 
    userStartAudio();
}

function draw() {
    background(fill, 100, 100);
    // draw a grid
    let x = 200;
    let y = 100;
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 2; j ++) {
            rect(x, y, 200, 100)
                x += 250;
        }
        x = 200;
        y += 150;
    }
}

// site doesn't "register" this until I click w my mouse (and it plays every sound)? then it works fine?
function keyPressed() {
    
    // trigger cowbell
    if ( keyCode === SHIFT) {
        cowbell.play();
        console.log("i need more cowbell!");
        image(cowbellPic, 200, 200, 200, 150);
        fill = random(360);
    }
    if ( keyCode === LEFT_ARROW) {
        drum.play();
        fill = 'white';
    }
    if ( keyCode === UP_ARROW) {
        snare.play();
        fill = 'black';
    }
    if ( keyCode === RIGHT_ARROW) {
        crash.play();
        fill = 110;
    }
    if ( keyCode === DOWN_ARROW) {
        kick.play();
        fill = 360;
    }
}

/*
function mousePressed() {
    cowbell.play();
    console.log("i need more cowbell!");
    fill = random(360);
}
*/

/**
 * if ( keyCode === 'SPACE') {
        if ( keyCode === 'SPACE') {
            cowbell.play();
            console.log("i need more cowbell!");
    }
    }
 */
