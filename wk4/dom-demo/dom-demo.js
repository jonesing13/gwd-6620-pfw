let p5ListItem = document.querySelector('#p5');
p5ListItem.Style.fontSize = '30px';

let newThing = document.createElement('span');
newThing.innerHTML = 'I am going along for the ride';
// doesn't show tho cause not attached to the DOM
p5ListItem.appendChild(newThing);


// attach event listeners (to button)
// line 26
function handleMyButtonClick() {
    console.log('howdy');
}

// added to handle the <button> w a class on line 27
let buttonThing = document.querySelector('.myButton');
buttonThing.addEventListener('click', () => {
    console.log('the button has been clicked');
})