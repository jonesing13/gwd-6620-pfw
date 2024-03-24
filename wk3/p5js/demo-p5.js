let heading;
let button;
let input;
let message = 'type something to change me';
// using the DOM library for
function sayMessage() {
    // console.log('nothing yet'); placeholder while we built this stuff out
// using input values
    // alert(input.value()); "let's comment this out cause no one likes alert messages"
    message = input.value();
    input.value('');
}
function setup() {
    createCanvas(800, 600);
    background('lightblue');
    heading = createElement('h2', ['Heyyyo']);
    heading.position(100, 200);
// making buttons
    button = createButton('alert message');
    button.size(150, 25);
    button.position(100, 275);
// listening to button events
    button.mousePressed(sayMessage);
// making inputs
    input = createInput('');
    input.position(100, 250);
}
function draw() {
    background('lightblue');
    textSize(28);
    fill('purple');
    // text('this is a message', 100, 400);
    text(message, 100, 400);
}

// -----------------------------------
// using text (doesn't need DOM library)