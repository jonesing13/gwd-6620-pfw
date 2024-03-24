import { useState } from 'react'
import cat from "./assets/cat.png";
import dog from "./assets/dog.jpg";
import './App.css'
import Animal from './Animal';

function App() {
  const myVar = "bob";
  const [pet, setPet] = useState(dog)
  // we use an array constructor on the left side of an equals
  // this is strange, but it's es6 deconstruction
  // what we're really saying is by using this HOOK is:
  // const stateArray = useState(dog);
  // const pet = stateArray[0]; 
  // const setPet = stateArray[1]; 
  // first item is the state variable; second item is the one we use to set the variable

// note: the onClick stuff we use here in the buttons is just regular JS

// there will be times you want to use your click event on an a tag e.g. 
/*
<a href="#" onClick={() => {
  console.log("click cat")
  setPet(cat)
}}
*/
// notice when you use this on a link, it pushes you to the top of the page. it's also using the AUTOMATIC feature that reloads the page
// you can suppress this
/*
<a href="#" onClick={(evt) => {
  evt. preventDefault(); // prevents event from acting like whatever the event is
  console.log("click cat")
  setPet(cat)
}}
*/
// this is helpful for FORMS cause of the onSubmit event that happens automatically. if we don't prevent that, it clears all the form info and reloads the page

// you may want to set up a handleer instead of calling an anonymous function
// use a function inside of your funtion
  function handleClick(evt) {
    evt.preventDefault()
    // console.log(evt.target.id)
    const target=evt.target.id
    if(target === "dogLink") {
      setPet(dog)
    }
    if(target === "catLink") {
      setPet(cat)
    }
  }

  //there will be times we want the function to communicate to the parent
  function alertMessage(message) {
    alert(message)
  }

// add an id to all of the items in your collection for 8.a assignments, then use this parent/child function calling and handling to delete the item or copy the item in that table

  return (
    <>
      <div>
        <Animal 
          url={dog} 
          messageFn={alertMessage} 
        />
      </div>
      <h1>Dogs vs Cats</h1>
      <div className="card">
        <a href="#" onClick={handleClick} id="dogLink">
          Dog
        </a>
        <a href="#" onClick={handleClick} id="catLink">
          Cat
        </a>
      </div>
    </>
  )
}


  /* using an anonymous function in your return
   
  return (
    <>
      <div>
        <Animal url={dog} />
      </div>
      <h1>Dogs vs Cats</h1>
      <div className="card">
        <button onClick={() => {
          console.log("you clicked dog");
          setPet(dog);
        }}>
          Dog
        </button>
        <button onClick={() => {
          console.log("you clicked cat");
          setPet(cat);
        }}>
          Cat
        </button>
      </div>
    </>
  )
}
*/

export default App
