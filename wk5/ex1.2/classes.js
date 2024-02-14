// BIG DISCLAIMER: This is ES6. That means this will work fine on modern browsers like Chrome or Firefox or even Edge. This will not work on any version of Internet Explorer or old browser versions. You can see compatibility here: https://caniuse.com/#feat=es6-class

// Start a new p5.js project.
function setup() {
    createCanvas(600,400);
    background(200);
}
function draw() {
    noFill();
    stroke('cornflowerblue');
    strokeWeight(5);
    rect(10, 10, 75, 75);
}
// Create a simple outline shape.
// Convert it to a class.
// In the constructor, set the shape's x and y coordinates as class properties (a variable that is specific to the class).
// Create a method (a class-specific function)  that renders the shape with the class properties (probably something like this.x andn this.y—you may also want to use class properties with width and height). 
// Create a method that gives the shape some sort of movement.
// Use a for loop in the draw function to draw a number of instances of your class on the canvas.

// This video (while not me) does a good job of demonstrating the process. Parenthetically, this Youtube channel has some awesome p5 tutorials. https://youtu.be/T-HGdc8L-7w