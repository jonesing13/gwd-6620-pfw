function draw() {
    createCanvas(windowWidth, windowHeight)
    background(0);
    randomSeed(1000);
    const count = 50
    
    // draw random squares
    for (let i = 0; i < count; i++) {
        noStroke();
        fill(random(100, 255), random(100, 255), random(100, 255));
        rect(random(width), random(height), random(width), random(height))
    }  
    
    // i'd like them to just fill up the screen
    // then tweak transparency?
    // blend?

      // max hue, max saturation, max brightness
        // colorMode(HSB, 360, 100, 100)
}