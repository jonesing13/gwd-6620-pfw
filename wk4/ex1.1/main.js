// week 4 exercise 1.1 -- DOM manipulation and events


// make a variable of the empty div in our HTML file
// Ken's way.... const myEmptyDiv = document.querySelector("#myEmptyDiv");
const myEmptyDiv = document.getElementById("myEmptyDiv");

// put an h1 inside of it
// step 1: create the new h1 element
const heading = document.createElement('h1');
heading.style.cursor = 'pointer';
heading.innerHTML = "llama, llama, cheesecake, llama; llama, llama, duck!"
    // added after both step 1 & 2: add an event listener to your headline to change the background color of the whole window when the headline is clicked
heading.addEventListener('click', function () {
    // console.log('heading has been clicked');
    document.body.style.backgroundColor = '#8b002d';
});

// step 2: attach this (append) to the dom (so you can actually see it on the page thru the HTML)
myEmptyDiv.appendChild(heading); // fun fact this didn't show when <script> was on a line above my <div> in my html file, so I had to move it to the "bottom" of my <body> element