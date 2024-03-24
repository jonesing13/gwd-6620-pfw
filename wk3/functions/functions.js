// point of a function is to execute some action at a given time
// sometimes to execute actions w a different set of parameters at a given time

function logOutGreeting(salutation) {
    //console.log("heyyyoo");
    console.log(salutation);
}
logOutGreeting("heyyyyo");

// functions are useful if we're repeating the same stuff, or doing an action repetitively. then we can parameterize it and utilize it a bit easier

// e.g. ingredients for peanut butter sandwich
console.log("get bread");
console.log("get peanut butter");
console.log("get honey");
// function to get stuff
function getStuff(ingredient) {
    console.log("get" + ingredient);
}
getStuff("bread");
getStuff("peanut butter");
getStuff("honey");

const makeSandwich = function (ingredientArray) {
    for (let i = 0; i < ingredientArray.length; i++) {
        console.log("get" + ingredientArray[i]);
    }
}
makeSandwich(["bread", "mayo", "tuna fish"]);

// same thing but with => formatting:
const makeSandwich2 = (ingredientArray) => {
    for (let i = 0; i < ingredientArray.length; i++) {
        console.log("get" + ingredientArray[i]);
    }
}
makeSandwich2(["bread", "mayo", "tuna fish"]);
// note, makeSandwich2 is an ANONYMOUS FUNCTION, so it can't be called prior to it's defined (whereas makeSandwich can be)

let makeSandwich3 = (ingredientArray) => {
    for (let i = 0; i < ingredientArray.length; i++) {
        console.log("get" + ingredientArray[i]);
    }
}
makeSandwich3 = (ingredientArray) => {
    console.log(ingredientArray.toString(', '));
};
makeSandwich3(['bread', 'mayo', 'tuna fish']);
makeSandwich3(['this', 'that', 'thing']);

// so these are functions we pass stuff into, but what if we want to get stuff OUT of a function?
// create a function that gives me a number between something i pass in
function makeRand (maxNumber) {
    const output = Math.ceil(Math.Random() * maxNumber);
    return output;
}
console.log(makeRand(100));
// every time this is called, a random integer is logged
// but we can also NAME this "input" if this random number generator is going to be reused, for example:
function makeRand2 (maxNumber) {
    const output = Math.ceil(Math.Random() * maxNumber);
    return output;
}
const randomOutput = makeRand(100);
console.log(randomOutput);
// you may also see the above as
function makeRand3 (maxNumber) {
    return Math.ceil(Math.Random() * maxNumber);
}
const randomOutput3 = makeRand(100);
console.log(randomOutput3);
// this type of thing might be helpful for a "legality check", for example
function makeRand4 (maxNumber) {
    return Math.ceil(Math.Random() * maxNumber); // this might be more common in stack overflow (or professional content) than what we'll see in class
}
function checkLegality (age) {
    return age >= 21; // this is a comparison expression so it returns true or false
}
console.log(checkLegality(18));
const kensAge = 49;
if (checkLegality(kensAge)) {
    console.log('He is legal'); // cause we have a cool name "check legality" it's a bit more readable what is happening here. but we COULD also just have the function itself here. that gets tougher to read
}
// note: SCOPE can affect what you can call (and where) in your code. e.g. "output" isn't accessible OUTSIDE of the function makeRand or makeRand2

// create a new object to assign a function to
const myObject = {
    x: 200,
    y: 400,
    getPosition: function () { 
        // console.log('we are ' + x + ' from the left and ' + y + ' from the top') THIS FAILS DUE TO SCOPE/accessibility of your variables
        console.log('we are ' + this.x + ' from the left and ' + this.y + ' from the top')
    }
}
// what if we don't want the x & y from myObject, we want it from the function?
const myObject2 = {
    x: 200,
    y: 400,
    getPosition: () => { 
        this.x = 35;
        this.y = 45;
        console.log('we are ' + this.x + ' from the left and ' + this.y + ' from the top')
    }
}
const myObject3 = {
    x: 200,
    y: 400,
    getPosition: function () { 
        this.x = 35;
        this.y = 45;
        console.log('we are ' + this.x + ' from the left and ' + this.y + ' from the top')
    }
}
myObject3.getPosition(); // we are 35 from the left and 45 from the top
console.log(myObject3.x, myObject3.y); // 35 45, so we lost that ability to refer to the original x and y of the object