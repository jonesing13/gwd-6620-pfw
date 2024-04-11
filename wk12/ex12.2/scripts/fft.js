var song;
var fft;
var button; // for dev

var volhistory = [];
var w; // width of the visualizer bands

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
    fft = new p5.FFT(0.9, 64);
    // when user clicks canvas, toggle song
    // why doesn't this seem to work on the first click?
    cnv.mouseClicked(toggleSong);
    w = width / 64;
    
}

function draw() {
    background(0);
    var spectrum = fft.analyze();
    console.log(spectrum.length);
    noFill();

    for (var i =0; i < spectrum.length; i++) {
        var amp = spectrum[i];
        var y = map(amp, 0 , 256, height, 0);
        fill(200, y, 120);
        rect(i*w, y, w - 3, height - y);
    }
}