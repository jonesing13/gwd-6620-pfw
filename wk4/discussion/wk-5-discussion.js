// what is the DOM?
// window is everything
console.log("window", window); // shows all the sort of commands you could look for about that window, e.g.
console.log("window", window.location); // shows like the URL and that kind of thing
// that's great but what about the actual body of the page?
console.log("body", document.body); // again from here we could drill down a bit if we want
console.log("body", document.body.children[1]); // but doing this for every element would be verbose, so there's some target methods that help us do this kind of thing on the page via some HTML features
console.log("all divs", document.getElementsByTagName("div")); // fetches all divs in our document
// this is the only way to grab an element that doesn't have an ID or Class
console.log("target", document.getElementById("targetDiv")); // since IDs are unique, note "Element" in the method name is singular
// once we have this div targeted, we can manipulate it
const targetDiv = document.getElementById("targetDiv");
targetDiv.style.background = 'red';
console.log("target", document.getElementById("targetDiv"));

// do these manipulations overwrite the CSS? try! 
// added class="blue" to the div with only an ID, then used targetDiv.style.backgroundColor = "red"; and the background changed from blue to red
// so, YES

// tool tips and toasts (for growlers) often use this same type of modification to override the position of the element

// developer.mozilla.org/en-US/docs/Web/API/Element/classList MDN reference documentation is super helpful as you're doing your work
targetDiv.classList.add("red"); // this adds the class "red" to the item we identified as targetDiv

console.log("array of div", document.getElementsByClassName("repeatedClass"));
// assign this to a const
const repeatedClassDivs = document.getElementsByClassName("repeatedClass");
// we can use loops on this 
// let's do a loop to change a piece of the style
for(let i = 0; i < repeatedClassDivs.length; i++) {
    repeatedClassDivs[i].style.background = 'green';
};
// and if i have an array of the same length of DIFF colors, I can use those colors in the loop to have a diff color for each item in that same class
const myColors = ["red", "blue", "green", "teal", "cyan", "yellow"];
for(let i = 0; i < repeatedClassDivs.length; i++) {
    repeatedClassDivs[i].style.background = myColors[i];
};

let heading = document.createElement('h2'); 
heading.innerHTML = 'this is the heading'; // this doesn't do anything til we ATTACH heading to something else
targetDiv.appendChild(heading); // APPEND adds to the end of the item
targetDiv.prepend(heading); // PREPEND adds to the top of the item w an ID (i.e. the element we named "targetDiv")

// we can not only access the elements on the HTML page, but we can change their properties, add/remove classes, etc.

// we probably also want the ability to INTERACT with those elements


// events - clicks, mouse overs; anything your mouse is doing, anything your browser's doing, anything your keyboard's doing
// add an event listener
targetDiv.addEventListener('click', function () {
    console.log('you clicked on target div');
}) // 1st argument is what is it listening for? 2nd argument is a function (can do an anonymous function right in that argument)
// when this function is being called, the function is going to get a parameter called event
targetDiv.addEventListener('click', function (event) {
    console.log('you clicked on target div', event); // there's an item called 'target'
})
targetDiv.addEventListener('click', function (event) {
    console.log('you clicked on target div', event);
    event.target.style.backgroundColor = myColors[0]; // changes the background color when clicked
})
// make the color change more interesting
let colorIndex = 0;
targetDiv.addEventListener('click', function (event) {
    console.log('you clicked on target div', event);
    event.target.style.backgroundColor = myColors[colorIndex]; // changes the background color when clicked
    colorIndex++; // increases/changes the count so the color shifts w multiple (6) clicks
})