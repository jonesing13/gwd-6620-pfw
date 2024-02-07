let myBoxsArray = {
    {x: 50; y: 50},
    {x: 100; y: 50},
    {x: 50; y: 50},
    {x: 100; y: 50},
    {x: 50; y: 50},
    {x: 100; y: 50},
    {x: 50; y: 50},
    {x: 100; y: 50}
}

function setup() {
    createCanvas(600, 600);
    background(gray);
}

function draw() {
    // draw an ellipse
    ellipse(200, 200, 150);
    // single loop using array of coords
    for(let i = 0; i < myBoxsArray.length; i++) {
    rect(myBoxsArray[i].x, myBoxsArray[i].y, boxWidth, boxHeight);
    }
}

function mousePressed() {
    // check if you hit the ellipse
    // first we need to figure out the distance from the middle of the ellipse to the edge of it
    const distFromEllipse = dist(200, 200, mouseX, mouseY);
    console.log('distance from ellipse middle', distFromEllipse);

    if(distFromEllipse < 75) { // this is the diameter/2 (we set diameter to 150)
        console.log('you hit it');
    }
}