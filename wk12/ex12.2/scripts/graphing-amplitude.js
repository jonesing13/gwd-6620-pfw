var song;
var amp;
var button; // for dev

var volhistory = [];

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('assets/Ketsa_Peace-Love.mp3');
}

function setup() {
    cnv = createCanvas(600, 200);
    song.play();
    amp = new p5.Amplitude();
    // when user clicks canvas, toggle song
    // why doesn't this seem to work on the first click?
    cnv.mouseClicked(toggleSong);
    
}

function draw() {
    background('cornflowerblue');
    var vol = amp.getLevel();
    volhistory.push(vol);
    stroke(255);
    strokeWeight(2);
    noFill();

    // draw a continuous shape
    push();
    // make the amplitude line display in the middle of the canvas; var currentY = map(vol, 0, 1, height, 0);
    //translate(0, height / 2 - currentY);
    beginShape();
    for (var i = 0; i < volhistory.length; i++) {
        var y = map(volhistory[i], 0, 1, height / 2, 0);
        vertex(i, y);

        //can i make the line color different with each mouseClick?
    }
    endShape();
    pop();

    if (volhistory.length > width - 50) {
        volhistory.splice(0, 1); // continue the line on the canvas as the song plays
    }

    //stroke("black");
    //line(volhistory.length, 0, volhistory.length, height);
    //ellipse(100, 100, 200, vol * 200);
}