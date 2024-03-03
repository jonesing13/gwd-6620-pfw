let myCard; // defining outside of setup for now so we can refer to it in mousePressed function. this will probs change later.
const DOWN = 'down'; // these are just for convenience later on
const UP = 'up';

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    background('#95d0fc');
    myCard = new Card();
}

// want to add mouse detection to flip the cards
function mousePressed() {
    console.log(myCard.didHit(mouseX, mouseY));
}

class Card {
    constructor () {
        this.x = 24; // this is property
        this.y = 200;
        this.width = 120;
        this.height = 120;
        this.face = DOWN;
        this.show();
    }

    show () { // method (like function, but specific to the class)
        // since we built flip(), add a check
        if (this.face === DOWN) {
            // draw a yellow box
            fill('#ffdc17');
            stroke('#fff');
            rect(this.x, this.y, this.width, this.height, 8) // final property is border radius
        } else {
            // draw a grey box
            fill('#e0e0e0');
            stroke('#fff');
            rect(this.x, this.y, this.width, this.height, 8) // final property is border radius
        }
        
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width &&
            mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip();
                return true; // keeping it simple, so not building around the border radius 
            } // if statement because there will probably be more conditions later
            else {
                return false;
            }
    }

    // check to see what the state of the face direction is, then call show()
    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}