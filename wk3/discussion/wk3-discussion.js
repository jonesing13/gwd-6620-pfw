// week 3 loops

// learning about functions
// what is a function?
    /* 
    not as dependent on arrays and objects, as, say, looping is, but still it's pretty important to understand how it works

    style sheets--how you store font specifications, colors, it's like they're in an object

    can kind of think of a function as a factory for running code
    set it up to do something
    then call it to run what we've defined/set up
    */

    function sayHello() {
        alert("howdy");
    } // calling sayHello just "says" 'howdy'

// how do you use it?
    sayHello();
    /*
    looks super similar to the declaration, but doesn't start with "function"
    
    let's make a more interesting function
    */
    function sayHelloPerson(name) {
        alert("howdy" + name);
    } // cause we input something in the field we're able to output something more interesting as well
    sayHelloPerson("Sam");
    sayHelloPerson("Alice"); // it's reusable because we can pass different things into it and it'll still produce a result

    // let's do another example
        const firstNumber = window.prompt("number");
        const secondNumber = window.prompt("different number");
        console.log(Number(firstNumber) + Number(secondNumber)); // using the Number() function cause anything from window.prompt is returned as a string, but we wanna work w it when it's a number

        // with a function...
        function calculator(number1, number2) {
            let modifiedNumber1 = number1;
            let modifiedNumber2 = number2;
            if(typeof number1 === "string") {
                modifiedNumber1 = Number(number1); // have to convert a string to a number and create a new name for the returned value otherwise the function concatenates, not adds
                // added benefit that it'll also work if you input two diff data types, e.g. calculator(17, "36");
            }
            if(typeof number2 === "string") {
                modifiedNumber2 = Number(number2);
            }
            console.log(modifiedNumber1 + modifiedNumber2);
        }
        calculator(firstNumber, secondNumber);
    
        // when you put typeOf in front of your variable it'll return the type of variable that value is

// cmd + / is  the shortcut for a single-line comment
// opt + shift + a should comment out large blocks in VS code

// returning
    /*
    functions always return something

    most of the time it returns a boolean value FALSE, or undefined, or an empty string
    */
    function nothingReally() {
        console.log("nothing to see here");
    };
    const whatIsTheFunction = nothingReally();
    console.log("this is the variable what is the function", whatIsTheFunction);
    // returns "this is the variable what is the function undefined"

    if(whatIsTheFunciton) {
        console.log("truthy")
    } else {
        console.log("falsey")
    }

    // return ALWAYS ends the function
         /* function nothingReally() {
            console.log("nothing to see here");
            return;
            console.log("important code to run"); // JS won't get to this line cause RETURN is above
        }; */

    function calculatorV2(n1, n2, operation) {
        if(operation === "add") {
            return n1 + n2; // note: we're assuming the inputs n1, n2 are type===number
        }
        if(operation === "subtract") {
            return n1 - n2;
        }
    }
    /* const whatIsTheFunction = calculatorV2(10, 7, "subtract");
    const anotherFunctionReturn = calculatorV2(10, 7, "add");
    console.log("another fn", anotherFunctionReturn);
    console.log("this is the variable what is the function", whatIsTheFunction)
    if(whatIsTheFunction) {
        console.log("truthy")
    }   else {
        console.log("falsey")
    } */

    // gospel according to ken: 
    // create each big step as a function
    // then build out any further nuance needed into additional functions
    // that helps w troubleshooting as well--you can see a particular piece of your progress that failed

// how do you make functions useful?
    /*
    */
// two ways to create functions
    /*
    */
// anonymous functions
    /*
    functions that are meant to just serve as a function and may not ever be called again

        function () 

    e.g. window.addEventListener will expect a function to be passed inside it. If you have one previously defined, use that, but also OK to create an anonymous function 
    
    Ken likes to use anonymous functions when he's not going to repeat them
    or it doesn't help him read/understand the code

    defined functions are first class citizens, so they can be accessible even before they're coded (like on line 2 even if the definition is on line 12)
    */
// "fat arrow" functions
    /*

    */
    const myOtherFunction = (ingredient) => {
        console.log("I have the " + ingredient);
    }
    myOtherFunction("peanut butter");
    //-> I have the peanut butter
    // almost always you'll see => functions set up with an equal sign and a setup to a variable
    // these won't be accessible before they're defined (e.g. on line 2 if it's not declared til line 12)


//looping
// what do we get out of looping
    /* 
    something that gets repeated

    setting up a block of code that gets repeated X number of times

    often used to iterate thru certain data types
    */
// what data types are iterable
    /* 
    arrays
    objects have a type of loop you can use to go thru each of their properties (but ken always has to look that one up cause he uses it so rarely)
    */
// for loop
    for(let loopVariable = 0; loopVariable < 5; loopVariable++) { // () houses the criteria & instructions for the block. we used "let" cause we know this value is gonna change
        // (start loop at; end loop at; how should the loop change each time it's run?)
        // almost all loop variables are on numbers
        //
        console.log(loopVariable);
    }
    for(let loopVariable = 1000; loopVariable < 2000; loopVariable++) { 
        console.log(myNumber, loopVariable);
    }


// looping with arrays
    // use loops to do something with an array
    let myArray = [];
    for(let loopVariable = 1000; loopVariable < 2000; loopVariable++) { 
        myArray.push(loopVariable);
    }
    console.log(myArray);

    let anArray = ["snoopy", "clifford", "tintin", "odie"]
    for(let i = 0; i < anArray.length; i++) {
        console.log("I really like " + anArray(i));
    }

    // HIGHLY RECOMMEND you remember you can use a FOR loop with an array

    /*
    first thing in side is the loop variable setting (i=0)
    second is the condition that'll stop the loop from continuing (i < myArray.length)
    the loop incrementation (i++)
    */

// while loop
    /* 
        dangerous due to infinite loops
        Ken's killed his computer because of one of these
    */
    let myNumber = 0;
    while(myNumber <20) {
        console.log("I'm waving hello", myNumber);
        myNumber++; // the variable incrementation happens inside the for loop here, so.... just don't forget it!
    }

// for in
    const myObject = {
        color: "red",
        style: "flashy",
        name: "something"
    };
    for(let objectKey in myObject) {
        console.log(objectKey);
    }
    //-> returns
    // color
    // style
    // name

    for(let objectKey in myObject) {
        console.log(`${objectKey}: ${myObject[objectKey]}`); // this is using STRING LITERALS
        // you don't have to use the + signs here and it'll concatenate nicer
        // note, this uses tildes, not single quotes or whatever 
    }
    //there's a better way to loop thru the elements in an object, cause some might be undeclared, like some built-in objects that come w javascript
    const keys = Object.keys(myObject); // returns an array of the object you've input
    // now use those keys just like you would've before
    for(let i = 0; i < keys.length; i++) {
        console.log(`${keys[i]}: ${myObject[keys[i]]}`);
    }
    // or, to provide some context in our code
    for(let i = 0; i < keys.length; i++) {
        const currentKey = keys[i];
        console.log(`${currentKey}: ${myObject[currentKey]}`);
    }

// looping demo in p5js
    function setUp() {
        createCanvas(600, 600);
        background(100);
    }
    function draw() {
        noLoop();
        for(let xCoord = 40; xCoord < 600; xCoord += 60)
            rect(xCoord, 300, 50, 50);
    }

    // another way

    const rectCoordinates = [
        {x: 0, y: 15},
        {x: 15, y: 100},
        {x: 300, y: 250},
        {x: 450, y: 0},
    ]
    function setUp() {
        createCanvas(600, 600);
        background(100);
    }
    function draw() {
        noLoop(); // this shuts of the constant send of this for loop, so it's helpful for performance when using draw() function w a for loop
        for(let loopVar = 0; loopVar < rectCoordinates; rectCoordinates ++)
            rect(rectCoordinates[loopVar].x, rectCoordinates[loopVar].y, 30, 30);
    }

// looping demo with a function 
// p5 fun
// push and pop
// rotate angleMode(DEGREES)
// translate