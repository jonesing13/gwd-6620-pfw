function setup() {
    createCanvas(windowWidth, windowHeight);

    angleMode(DEGREES);
    rectMode(CENTER);
}

function draw() {
    background(255);
    fill(20, 40, 60);
    //stroke(235, 245 ,255);

    translate(width / 2, height / 2);

    for( var i = 0; i < 200; i++) {
        push();

        //oscillate shape by varying offset
        rotate(sin(frameCount + i * 1.2) * 100); 
        // we're going back and forth between -100 and 100

        // use sin, cos functions to vary colors
        var r = map(sin(frameCount), -1, 1, 50, 255); // original val, original range min, original range max, target range min, target range max
        var g = map(cos(frameCount / 2), -1, 1, 50, 255);
        var b = map(sin(frameCount / 4), -1, 1, 50, 255);
        stroke(r, g, b);
        console.log('r=', r, 'g=', g, 'b=', b)

        //rounded edge square
        rect(0, 0, 600 - i * 3, 600 - i * 3, 200 - i)

        pop();
    }

    
}