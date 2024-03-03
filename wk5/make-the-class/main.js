// set up our class
// class is like a special function but it describes how the class works
// 2 parts: blueprint, then usages
// blueprints always start w capital letters
function setup() {
    createCanvas(800, 600);
    background(0);
    let myCard = new Card();
    // myCard.show();
}

class Card {
    constructor () {
        this.x = 100; // property
        this.y = 100;
        this.width = 80;
        this.height = 80;
        this.show();
    }
    show () { // method (like function, but specific to the class)
        fill('#95d0fc');
        rect(this.x, this.y, this.width, this.height, 10)
    }
}