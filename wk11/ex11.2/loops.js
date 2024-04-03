let outline;
let shapes = [];
let totalShapes = 100;
let colors = ['pink', 'lightgreen', 'cornflowerblue'];

const randomNum = Math.floor(Math.random() * colors.length);

function setup() {
    createCanvas(displayWidth, displayHeight);
    outline = new Outline();
    for(let i = 0; i < totalShapes ; i++) { // create an array of outlines
        shapes[i] = new Outline();
    }    
}
function draw() {
    background(colors[randomNum]);

    for(let j = 0; j < shapes.length; j++) { // draw (and shake) all my Outlines from my array
        shapes[j].show();
    }
}

class Outline { // class for an outline of a sqaure that will move randomly and be colored randomly
    constructor() { // outline of a square
        this.x = random(50, displayWidth-50); // a random number between 50 and 550 (to try to make the shape start on the canvas and stay there for a few moves)
        this.y = random(50, displayHeight-50); // a random number between 50 and 350 (to try to make the shape start on the canvas and stay there for a few moves)
        this.width = random(0, 100);
        this.height = random(0, 100);
        this.color = random(0, 255); // a random number for greyscale color selection
    }
    show() { // create the shape
        fill(this.color);
        noStroke();
        rect(this.x, this.y, this.width, this.height);
    }
}