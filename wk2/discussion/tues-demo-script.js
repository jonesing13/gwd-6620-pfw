// primitive var review
// review exercises for this week
// function and method teaser
/* 
window.prompt("HI");
console.log("Hi");
*/ 

// new data type: arrays!
    // store numerically indexed data
    // creation
    /* simplest way */
    const myArray = ["john", "jacob", "jingleheimer", "schmidt"]; 

    // formatting
    /* 
    note:
    square brackets, w items separated by commas
    spaces aren't required after commas but are used for readability
    semi-colon at end is NOT required, but prof uses it by habit
    */
    /* another way */
    const myOtherArray = new Array();
    /* 
    now this is an empty array
    normally if you make an array this way, you would add the items directly after the fact.
        ASIDE: you can use either '' or "" to indicate an item in your array. Prof uses "" for the outer-most quotations, and then inside of those toggles to '' quotes. 
        e.g. myArray = ["john", "jacob", "jingleheimer of the house 'jingle'"] works BUT myArray = ["john", "jacob", "jingleheimer of the house "jingle""] will confuse p5js
    */
    const yetAnotherArray = [myArray, "smith", 9];
    /* 
    the array itself doesn't force you to use a consistent data type,
    however,
    prof finds it's more easy to use when you have the same format of all your data points in your array
    */

    // rules (when to use string, when to not)
    /* 
    you access a single data point in your array by referring to it's number.
    arrays, like other computer languages, start their count at 0.
    so for myArray above, "john" is item 0, and "jingleheimer" is item 2. There are a total of 4 items in the array.
    */
    console.log(myArray[1]);
    /* 
    spits out "jacob" in the console log!
    */
    
    // determining the number of items in an array
    console.log("my array is this long", myArray.length);
    /* 
    because "length" is a property (denoted with a blue icon, there is no need for () after the word length
    */

    // figuring out which item is the index you want
    myArray.push("phil");
    myArray[1] = "bob";
    /*
    now which index represents the item phil?
    */
   const philIndex = myArray.indexOf("phil");
   console.log("you can find phil at index", philIndex);
   console.log(myArray);
    //methods for manipulation (mutation)
        // push, pop, slice, splice, shift, unshift
        /*
        these methods are mutational
        */
        myArray.push("alice");
        /*
        PUSH
        concatenates "alice" as another item in the array
        i.e. adds an item to the end of the array
        */
        console.log(myArray);
        myArray.pop();
        console.log("array after pop", myArray);
        /* 
        POP
        when you pop something off an array, the actual function can be assigned to a variable
        */
        const whatWasPopped = myArray.pop();
        console.log("this was popped", whatWasPopped);
        /*
        SPLICE
        lets us
            delete an item
            replace an item
            add a bunch of items
        
        say you wanna add an item at "bob"
        */
        myArray.splice(1, 0, "gary");
        /*
        each of the items in the parentheses are ARGUMENTS, data passed in the method to make it more specific
            1st arg: where
            2nd: how many to delete?
            3rd & following: what to add
        */
        console.log("spliced array", myArray);

        /*
        SHIFT
        is like pop except for it works on the front of the array
        */
        myArray.shift();
        console.log("shifted array", myArray);

        /*
        UNSHIFT
        like PUSH except
        inserts an element at the beginning
        */
        myArray.unshift("charlotte");
        console.log("unshifted array", myArray);

        /* say you wanna replace a data point but don't know where it is...*/
        const jingleheimerIndex = myArray.indexOf("jingleheimer");
        myArray.splice(jingleheimerIndex, 1, "jane"); //replaces "jingleheimer"s in the array w "jane"
        // note, now philIndex is returning -1, which means the computer cannot locate "phil" in the array
        /* 
        if philIndex <= 0
        */

    // making arrays from a string with split()
    const myEmails = "ken@kenkorth.com,kkorth@mcad.edu,kkorth@spscommerce.com";
    /* 
    and I need to distribute that into an array
    */
    const myEmailArray = myEmails.split(","); //there are parentheses here cause it's a function on the string, and we have to tell it what to look for to make that split (here it is COMMA separated)
    console.log("email array", myEmailArray);
    /* 
    NOTE:
    if it were pipe delineated, we could have said "|" and it would've worked too!, or if they were just spaces separating all the items, that would work too.
    If it doesn't find something to split on, alllll these items will be in a single item (and your array will have 1 item)
    */

    // joining arrays to form a string with join()
    /*
    let's go the other direction
    */
    const myCarArray = ["chevy", "subaru", "ford", "hyundai", "tesla"]
    console.log(myCarArray.join()); // if I leave the parentheses empty, it joins with comma separated, but no spaces. otherwise, you can tell it what you want to join it with, like ", " will make the string "chevy, subaru, ford, hyundai, tesla"
    // checking if a variable is an array

// New data type: Objects!
    // store data using a key-value pair as object properties
    /* 
    to describe an object is to describe... something

        e.g.
        describe a car:
        engine
        wheelNumber
        paintColor

    that's rly the purpose of the object data type. create a collection of attributes that make up something
    */
    
    // creation
    const myObject = {color: "red"};
    /* 
    NOTE
    objects use CURLY BRACKETS
    */
    
    // formatting
    console.log("what is the object color?", myObject{"color"});
    /* 
    i'm using the key {color} to access the data point here
    */
    /* 
    but a more typical way of doing this instead of using the key is dot notation:
    */
    console.log("the object color is ", myObject.color);
    /* 
    using the square brackets with the key in quotes is ARRAY NOTATION
    using the dot with no quotes is DOT NOTATION
    */
    const myCar = {
        color: "red",
        make: "honda",
        wheels: 4,
        model: "accord",
        engine: "automatic" // wonder how I can set this as a boolean to true or false?
    };
    console.log("my car", myCar);
    const yourCar = {
        color: "black",
        make: "tesla",
        wheels: 4,
        model: "3",
        engine: "automatic"
    }
    /*
    when you're using objects in conjunction w arrays, you wanna have a consisten "shape" 
    e.g. the same fields appear in myCar and yourCar
    */
    

    // const doesn't prevent object properties from changing
    // deleting a property
        /* 
        in a recent example prof had, he tried
        */
        const shipToAddress = {
            addressTypeCode: "ST", // where "ST" is "ship to"
            address1: "123 Right Here Blvd",
            city: "Hershey",
            state: "PA,"
            id: "a9sduvj23fknvsd"
        };
        /* 
        but the system already made an ID so it spit out failures
        
        so he had to
        */
        delete shipToAddress.id;
        console.log("shipto address after id delete", shipToAddress);

    //mutationally adding/changing with key
    let const shipToAddress = {
        addressTypeCode: "ST",
        address1: "123 Right Here Blvd",
        city: "Hershey",
        state: "PA,"
        id: "a9sduvj23fknvsd"
    };
    shipToAddress.addressTypeCode = "SF"; // where "SF" is "ship from"
    console.log("updated ship to address", shipToAddress)

    // objects (and arrays) are stored as references through assignment
    /*
    NOTE
    with primitives, if i say
    */
    const myStringA = "a";
    const myStringB = myStringA; 
    /* 
    this is the same as saying myStringB = "a"


    but if we do the same w objects
    */
    const shipFrom = shipToAddress;
    shipToAddress.address1 = "Anywhere But Here Ln";
    console.log("ship from address", shipFrom);
    /*
    then we're making a reference to the original object, not copying the object
    */

    // non-mutationally making new objects from old objects
    /* 
    ideal not to shift old objects, better to make new .... idk I didn't capture this in-real-time... essentially: best to create new objects instead of mutating existing ones
    */


// combining objects and array -- quiz
// key thoughts -- all the objects should have the same properties (sometimes referred to as a shape) to make them predictable
const myCollectionOfCommanderDecks = [
    { // look! an object in my array!
        commander: "Breya",
        colors: ["white", "black", "red", "blue"], // look! an array inside an object (inside the array!)
        winCon: "make lots of tokens and kill your opponents" //winCon is short for "win condition"
    },
    {
        commander: "Braids",
        colors: ["black"],
        winCon: "make everyone sacrifice their creatures and take life damage"
    },
    {
        commander: "Essix",
        colors: ["green", "blue"],
        winCon: "copy everyone's good creatures and beat them with the copies"
    },
    {
        commander: "Frealise",
        colors: ["green"],
        winCon: "I don't actually win with this deck :-("
    }
];
/* 
I wanna get the winCon of "Breya" 
*/
console.log(myCollectionOfCommanderDecks[0].winCon);
/* 
because that's predictable, I can change that and now see the winCon for Essix.
in fact, when we learn loop, I can create a list of every winCon 
*/
// use Math.random (returns a number between 0 and 1)
console.log(Math.random() * 3); // returns decimal numbers, which won't work as an index identifier, BUT
// Math floor
console.log(Math.floor(Math.random() * 3)); // rounds DOWN the decimal number (that's great -- indeces start at 0!)
// BUT what if we add something to the array?
console.log(Math.floor(Math.random() * myCollectionOfCommanderDecks.length));
/* now we add to the array:
    {
        commander: "Frealise",
        colors: ["green"],
        winCon: "I don't actually win with this deck :-("
    }

let's name our variable
*/
const randomDeckIndex = Math.floor(Math.random() * myCollectionOfCommanderDecks.length);
/*
now we can "read" what we're doing in our code
*/
console.log(myCollectionOfCommanderDecks[randomDeckIndex].commander);
// to make this a quiz
/* 
this will help for the big assignment this week
*/
const prompt = window.prompt("who is the commander for this winCon: ", + myCollectionOfCommanderDecks[randomDeckIndex].winCon);
if(response === myCollectionOfCommanderDecks[randomDeckIndex].commander) {
    console.log("YOU WIN!")
}   else {
    console.log("You so DIDN'T win :-/");
}