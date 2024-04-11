var song;
var fft;

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
    cnv = createCanvas(256, 256);
    song.play();
    colorMode(HSB);
    angleMode(DEGREES);
    fft = new p5.FFT(0.8, 64);
    // when user clicks canvas, toggle song
    // why doesn't this seem to work on the first click?
    cnv.mouseClicked(toggleSong);
    
}

function draw() {
    background(0);
    var spectrum = fft.analyze();
    console.log(spectrum.length);
    fill('white');
    noStroke();
    // translate to center of canvas
    translate(width / 2, height / 2)


    beginShape();
    for (var i = 0; i < spectrum.length; i++) {
        var angle = map(i, 0, spectrum.length, 0 , 360);
        var amp = spectrum[i];
        var r = map(amp, 0, 256, 10, 100);
        var x = r * cos(angle);
        var y = r * sin(angle);
        // draw line from the center to that x, y
        stroke(i, 255, 255);
        line(0, 0, x, y);
        //vertex(x, y);
    }
    endShape();
}