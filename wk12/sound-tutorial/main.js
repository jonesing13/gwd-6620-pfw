var song;
// var sliderVolume;
// var sliderRate;
// var sliderPan;
var button;
var amp; 

/* this inhibits the entire p5js content from loading tho, so let's try w callback
function preload() {
    song = loadSound("fsm-team-escp-urban-rainfall-rhythms.mp3")
}
*/

function setup() {
    createCanvas(200,200);
    song = loadSound("Ketsa_Peace-Love.mp3", loaded); // trigger function "loaded" when the sound is ready
    amp = new p5.Amplitude();
    colorMode(HSB,360,100,100);
    // controls rate of audio file sliderRate = createSlider(0,1.5,0.5,0.01); 
    // controls which speaker(s) sound plays thru sliderPan = createSlider(-1,1,0,0.01); 


}

function loaded() {
    button = createButton("play"); // only show "play" button when page attributes are loaded
    button.mousePressed(togglePlaying);
    
}

function draw() {
    background(75);
    // song.pan(sliderPan.value());
    // song.rate(sliderRate.value());

    var vol = amp.getLevel();
    var diam = map(vol, 0, 0.3, 10, 200); // map a small number to a larger one so that our ellipse becomes more easily visible
    //console.log(vol);

    noStroke();
    fill(200,100,100);
    ellipse(width/2, height/2, diam, diam)
    
}

function togglePlaying() {
    // if song isn't playing, song will start and switch button to read "pause"
    if (!song.isPlaying()) {
        song.play();
        song.setVolume(0.3); // set max volume
        button.html("pause");
    } else {
        song.pause(); // pause song so it can restart where it left off
        button.html("play")
    }
}