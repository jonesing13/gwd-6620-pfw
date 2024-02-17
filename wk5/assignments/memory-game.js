const gridGap = 16;
const DOWN = 'down'; // just a convenience later on, so we don't have to type ''
const UP = 'up'; // just a convenience later on, so we don't have to type ''
let startingX = 24;
let startingY = 240;
let cards = []; // an empty array
// initialize/setup some of our requirements for play
const gameState = {
    totalPairs: 9,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
}
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
    var cnv = createCanvas(848, 760);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    let selectedFaces = [];
    for (let z = 0; z < 9; z++) { // loop thru the # of cards I have
        const randomIndex = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIndex];
        selectedFaces.push(face);
        selectedFaces.push(face); // pushing twice cause we need two copies of the image in our array
        // and because we don't want to select the card again,
        cardfaceArray.splice(randomIndex, 1);
    }
    // set face of flipped card to random/shuffled image
    selectedFaces = shuffleArray(selectedFaces); 
    // make 3 rows of cards
    for (let j = 0; j < 3; j++) { 
        // make 6 columns of cards
        for (let i = 0; i < 6; i++) { 
            const faceImage = selectedFaces.pop(); // remember, .pop() RETURNS the item it removes
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += 136;
        }
        startingY += 136;
        // reset x-position to start a new row
        startingX = 24; 
    }
}

// take advantage of 'draw' function to let us cycle
function draw() {
    background('#96cefc');
    fill('white');
    // TODO different type face?
    textSize(56);
    text('A Peanuts Memory Game', 100, 120);
    // condition -- user wins, got all matches
    if (gameState.numMatched === gameState.totalPairs) {
        // TODO different type face?
        textSize(72);
        text('You\'re a winner, baby!', 70, 724);
        // show a button so user can restart
        let buttonReset = createButton('Play again');
        buttonReset.position(392, 208);
        // TODO RESET GAME ON BUTTON CLICK
        noLoop();
    }
    for (let l = 0; l < cards.length; l++) {
        if (!cards[l].isMatch) {
            cards[l].face = DOWN;
        }
        // redraw the card
        cards[l].show();
    }
    noLoop();
    // reset flipped cards count so isMatch can be handled well
    gameState.flippedCards.length = 0;
    // reset waiting so they can interact w the board again
    gameState.waiting = false;
    fill('white');
    // TODO different type face?
    textSize(20);
    text('Attempts: ' + gameState.attempts, 370, 172);
    text('Matches: ' + gameState.numMatched, 372, 200);
}

// mouse detection to flip the cards
function mousePressed() {
    // escape any of the following when the game is 'waiting'
    if (gameState.waiting) {
        return;
    }
    for (let k=0; k < cards.length; k++) {
        // first, check if there are 2 cards flipped, then check if the card was hit
        if(gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
        // so if there are 2 cards flipped, it won't even trigger to check if the mouse clicked another card (so it won't trigger show)
    }
    // when 2 cards are up we want to check to see if they match
    if (gameState.flippedCards.length === 2) {
        // increment attempt count
        gameState.attempts++;
        // matching?
        if (gameState.flippedCards[0].cardfaceImg === gameState.flippedCards[1].cardfaceImg) {
            // cards match -- handle scoring
            // mark cards as matched so they don't flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            // empty out matched items so user can continue game
            gameState.flippedCards.length = 0;
            // increment count of matched cards for scoring
            gameState.numMatched++;
            loop();
        } else {
            // cards don't match
            // don't allow them to flip other cards during checks/scoring
            gameState.waiting = true; 
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1500) // a short grace period for user to capture/recall where/what cards they've interacted with aree
        }
    }
}

class Card {
    constructor (x, y, cardfaceImg) {
        this.x = x;
        this.y = y;
        this.width = 120;
        this.height = 120;
        this.face = DOWN;
        this.cardfaceImg = cardfaceImg;
        this.isMatch = false; // use this to figure out 'whether to show the card or not' during show
        this.show();
    }

    show () { // this is a method (like function, but specific to the class)
        //check if card is UP or has already been matched
        if (this.face === UP || this.isMatch) {
            // when card is 'up' show one of the images in 'deck'
            fill('#fff');
            noStroke();
            rect(this.x, this.y, this.width, this.height, 8) // final property is border radius
            // show image for memory game
            image(this.cardfaceImg, this.x + 4, this.y + 4); 
        } else {
            // when card is 'down' show cardback
            fill('#ffdc17');
            noStroke();
            rect(this.x, this.y, this.width, this.height, 8) // final property is border radius
            // show 'generic' cardback image
            image(cardback, this.x + 4, this.y + 4); 
        }
        
    }

    // check if click was on card
    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width &&
            mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip();
                return true; // keeping it simple, so not building around the border radius 
            }
            else {
                return false;
            }
    }

    // check to see what the state of the card direction is, then call show()
    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}

// function to randomize/shuffle cards
function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        // pick random index
        const shuffleIndex = Math.floor(Math.random() * counter); 
        // decrease counter by 1
        counter--;
        // swap the last element with it
        const temp = array[counter];
        array[counter] = array[shuffleIndex];
        array[shuffleIndex] = temp;
    }
    return array;
}