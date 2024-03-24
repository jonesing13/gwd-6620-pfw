// prof has had some family emergencies so his schedule will be affected. All classes until after spring break should occur on the normal cadence


// two types of timers:
// timeout -- one-time timer
// to create
function alertUser(name) {
    window.alert('surprise ' + name + ' your time is up!');
}
// alertUser('ken');
// there are times when you want to delay this from firing, and that's the purpose of this
/* window.setTimeout(alertUser, 5000); */ // first argument is the function, second is the time to trigger (in milliseconds, i.e. 5000 is 5sec)
// you can't put your name in the alertUser mention of the argument for timeouts, you have to add as a third argument:
/* window.setTimeout(alertUser, 5000, 'timmy'); */
// this is only going to appear 1 time
// you can also trigger this with the function (anonymous) in the call
/* window.setTimeout(function () {
    console.log('this was called in the timeout');
}, 1000); */
// you'll be using timeout after you check the cards match in the memory game

// interval -- like a timeout but that continues to happen (recurring timer)
/* window.setInterval(function () {
    console.log(new Date());
}, 2000); */

// clearInterval (needed to cancel the recurring interval)
// need your setInterval to be assigned to a variable
const myInterval = window.setInterval(function () {
    console.log(new Date());
}, 2000);
const myButton = document.getElementById('cancelInterval');
myButton.addEventListener('click', () => {
    console.log('clearing interval');
    window.clearInterval(myInterval); // a named interval OR named timeout will clear so it doesn't happen
})

// OOP
// Object-oriented programminng
// apply abstract structure to programming concepts (i.e. create an object that describes a car)
const myCar = {
    color: 'red',
    accelerate: () => {
        console.log('I\'m accelerating');
    }
}
// myCar is an object literal, it doesn't have a shape
// object-oriented usually has a more formal structure, e.g. a class
// by convention, class names are capitalized
class Car {
    color = 'red';
    tires = '4'
}
const newCar = new Car();
console.log(newCar);
// unfortunately every newCar will be exactly the same
// so to pass new info into the class, we use what's called a constructor, which is an initializing function. initialized when a new instance of a class is created
class Car2 {
    constructor() {
        console.log('I\'ve been constructed')
    }
    color = 'red';
    tires = '4'
}

const newCar2 = new Car2();
console.log(newCar2);


// this
// when used inside of a class, refers to the class itself (the properties of the class, or the properties of the methods of that class)
class Car3 {
    constructor(color, tires) {
        console.log('I\'ve been constructed')
        this.color = color;
        this.tires = tires;
    }
}

const newCar3 = new Car3('red', '3');
const anotherNewCar3 = new Car('blue', '6');
console.log(newCar3, anotherNewCar3);

class Rect {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = 50;
        this.height = 100;
        this.hit = false; // we're using the class to store a "state" of the rectangle
    }
    // we also want to define some methods (functions)
    // this is a little bit special. we don't use the fat arrow, and we don't use the keyword "function"
    show () {
        if(this.hit) { // the same as this.hit === true; but it's already a boolean so we don't have to explicitly compare it to true and false cause it already is
            // we're using this if statement to check the state and change the color
            fill('pink');
            rect(this.x, this.y, this.width, this.height);
        } else {
            fill(this.color);
            rect(this.x, this.y, this.width, this.height);
        }
    }
    clicked () { // use to toggle the state, and trigger another show
        this.hit = !this.hit;
        this.show();
    }
}
// we've made this show function but aren't actually doing anything with it yet so let's do a setup
 function setup() {
    createCanvas(800, 600);
    background(210);
 }
/*  function draw() {
    // use our Circle class
    const myCircle = new Circle(150, 300, 'cornflowerblue'); // defines our new circle instance
    // need to also actually have it draw
    myCircle.show(); 
 } */
 //if I had many circles I had to keep track of, it might make sense for me to put those circles in an array
 const arrayOfRect = [
    new Rect(100, 100, 'cornflowerblue'),
    new Rect(200, 200, 'pink'),
    new Rect(300, 300, 'teal'),
 ]
 // then we alter the DRAW function above to use a loop and just go thru the array
/*  function draw() {
    // use our Circle class
    for(let i = 0; i < arrayOfCircle.length; i++){
        arrayOfCircle[i].show();
    }
 } */
 // you COULD declare newCircle IN the for loop too, but then you can't access new Circle() outside the loop
 /*
 function draw() {
    for(let i=0; i < arrayOfCircle.length; i++) {
        const newCircle = new Circle(I * 150 + 100, 200, 'red'); 
        newCircle.show();
    }
 }
 */

 // let's create an array of circles that will create an 2 rows of 4
 let startX = 150;
 let startY = 150;
 let rectArr = []; // we'll use a for loop to fill up our array
 for (let i = 0; i < 2; i++) { // i < 2 cause this will be for rows
    for(j = 0; j < 4; j++) { // j < 4 cause 4 columns
        rectArr.push(new Rect(startX, startY, 'cornflowerblue'));
        startX += 150;
    }
    startX = 150; // reset x position for a new row
    startY += 150;
 }

 function draw() {
    // use our Circle class
    for(let k = 0; k < rectArr.length; k++){
        rectArr[k].show();
    }
 }

 function mousePressed() {
    for(let l = 0; l < rectArr.length; l++) {
        if(mouseX > rectArr[l].x && mouseX < rectArr[l].x + rectArr[l].width
            && mouseY > rectArr[l].y && mouseY < rectArr[l].y + rectArr[l].height) {
                console.log('you hit', rectArr[l]); // shows which rectangle was hit
                rectArr[l].clicked();
                // prof suggests putting your timer in the clicked state
                window.setTimeout(() => { // putting it here so it remembers we're working with rect[l]
                    rectArr[l].clicked();
                }, 2000)
            }
    }
 }

// classes, instances, and constructors (oh my!)
// the quiz
// open note quiz
// one attempt
// things he thinks you'll want to remember:
// how to use an array (array is used to store objects)
// create array
// add to array
// remove things from array
// I believe splice is gonna be your friend if you can remember what splice does
// array of objects is probably something you can work with
// no Classes on the quiz
// objects you'll want to know the same things
// create object
// add properties
// delete properties
// difference between = (assignment operator, used when defining a variable) and === (strict comparison; use that when we're checking conditions)
// how conditions work
// what a function is
// how to create a function
// he doesn't think there's anything for interval, setInterval, or setTimeout
