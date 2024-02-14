const gridGap = 16;
const DOWN = 'down'; // these are just for convenience later on, so we don't have to type ''
const UP = 'up';
let startingX = 24;
let startingY = 200;
let cards = []; // an empty array

let cardback;
let cardfaceArray = []; // an empty array

function preload() {
    cardback = loadImage('../images/snoopy_doghouse_112x112.png')
    cardfaceArray = [
        loadImage('../images/peanuts_charlie-brown_112x112.png'),
        loadImage('../images/peanuts_franklin2_112x112.png'),
        loadImage('../images/peanuts_linus_112x112.png'),
        loadImage('../images/peanuts_lucy_112x112.png'),
        loadImage('../images/peanuts_marcie_112x112.png'),
        loadImage('../images/peanuts_peppermint-patty_112x112.png'),
        loadImage('../images/peanuts_pigpen_112x112.png'),
        loadImage('../images/peanuts_sally-brown_112x112.png'),
        loadImage('../images/peanuts_schroeder_112x112.png')
    ];
}

function setup() {
    var cnv = createCanvas(848, 624);
//    var x = (windowWidth - width) / 2;
//    var y = (windowHeight - height) / 2;
//    cnv.position(x, y);
    background('#96cefc');
    let selectedFaces = [];
    for (let z = 0; z < 9; z++) { // loop thru the # of cards I have
        const randomIndex = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIndex];
        selectedFaces.push();
        selectedFaces.push(); // pushing twice cause we need two copies of the image in our array
        // and because we don't want to select the card again,
        cardfaceArray.splice(randomIndex, 1);
    }
    for (let j = 0; j < 3; j++) { // make 3 rows of cards
        for (let i = 0; i < 6; i++) { // make 6 columns of cards
            const faceImage = selectedFaces.pop(); // remember, .pop() RETURNS the item it removes
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += 136;
        }
        startingY += 136;
        startingX = 24; // reset x-position to start a new row
    }
    // myCard = new Card();
}

// mouse detection to flip the cards
function mousePressed() {
    // to fix 'myCard is undefined' error, replace that call with a for loop here and remove 'myCard' variable from top of file
    for (let k=0; k < cards.length; k++) {
        if(cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
        }
    }
}

class Card {
    constructor (x, y, cardfaceImg) {
        this.x = x; // this is property
        this.y = y;
        this.width = 120;
        this.height = 120;
        this.face = DOWN;
        this.cardfaceImg = cardfaceImg;
        this.show();
    }

    show () { // this is a method (like function, but specific to the class)
        // since we built flip(), add a check
        if (this.face === DOWN) {
            // draw a yellow box
            fill('#ffdc17');
            noStroke();
            rect(this.x, this.y, this.width, this.height, 8) // final property is border radius
            image(cardback, this.x + 4, this.y + 4); // show cardback
        } else {
            // draw a white box
            fill('#fff');
            noStroke();
            rect(this.x, this.y, this.width, this.height, 8) // final property is border radius
            image(this.cardfaceImg, this.x + 4, this.y + 4); // show image for memeory game
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