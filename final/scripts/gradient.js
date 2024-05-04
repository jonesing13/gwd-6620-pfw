let ctx;

function setup() {
    createCanvas(400, 400);
    colorMode(HSB, 360, 100, 100, 100);
    rectMode(CENTER);
    noStroke();
    ctx = canvas.getContext('2d');
}

function draw() {
    radialGradient(
        width/2-40, height/2-120, 0,
        width/2-40, height/2-120, 380,
        color(190, 100, 100, 100), 
        color(310, 100, 100, 100)
    )
    
    ellipse(width/2, height/2, 400, 400);
}

function radialGradient(
    sX, sY, sR, eX, eY, eR, colorS, colorE
) {
    // Adapted from https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient
    gradient = ctx.createRadialGradient(
        sX, sY, sR, eX, eY, eR
    );
    gradient.addColorStop(0, colorS);
    gradient.addColorStop(1, colorE);
    ctx.fillStyle = gradient;
}






// DRAW linear gradient (rectangle)
// function draw() {

//     linearGradient(
//         width/2, 
//         0, 
//         width/2 - 200, 
//         height/2 + 200, 
//         color(310, 100, 100, 100), 
//         color(250, 100, 100, 100)
//     )
    
//     rect(width/2, height/2, 400, 400, 50);
// }

// function linearGradient(sX, sY, eX, eY, colorS, colorE) {
//     // Adapted from https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient
//     gradient = ctx.createLinearGradient(sX, sY, eX, eY);
//     gradient.addColorStop(0, colorS);
//     gradient.addColorStop(1, colorE);
//     ctx.fillStyle = gradient;
// }

function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE) {
    // Adapted from https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient
    gradient = ctx.createRadialGradient(sX, sY, eX, eY);
    gradient.addColorStop(0, colorS);
    gradient.addColorStop(1, colorE);
    ctx.fillStyle = gradient;
}

// let ctx;

// function setup() {
//     createCanvas(800, 800);
//     colorMode(HSB, 360, 100, 100, 100);
//     rectMode(CENTER);
//     noStroke();
//     ctx = canvas.getContext('2d');
// }

// function draw() {
//     background(230, 30, 23);

//     let gradient = ctx.createLinearGradient ( width/2-200, height/2-200, width/2+200, height/2+200 );

//     gradient.addColorStrop( 0, color(310, 100, 100, 100) );
//     gradient.addColorStop( 1, color(250, 100, 100, 100) );

//     ctx.fillStyle = gradient; 

//     rect( width/2, height/2, 400, 400, 50)
// }

