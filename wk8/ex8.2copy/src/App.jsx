import { useState } from 'react'
import Animal from './Animal.jsx';
import './Animal.css'


function App() {
  // set the page header on landing, but enable it to change as state changes
  const [pageHeader, setPageHeader] = useState("Animals from the Hundred Acre Wood");
  // create a list of animals to show on landing, and enable it to change as state changes
  const [animal, setAnimal] = useState([
    "Winnie the Pooh",
    "Piglet",
    "Eeyore",
    "Tigger",
    "Kanga",
    "Little Roo",
    "Owl",
    "Rabbit"
  ]);

  // delete button functionality--remove animal from the list and return updated list
  function deleteAnimal(name) {
    const newAnimalList = animal.filter((animal) => {
      // return all animals that are not the selected one (e.g. the one to be deleted) in a new array
      return animal !== name;
    });
    setAnimal(newAnimalList);
  }

  // focus button functionality--update page header based on the animal showing
  function focusAnimal(name) {
    setPageHeader(name);
  } 

  // show the complete list of animals (which changes based on user interaction w buttons)
  // our children components will be able to update the state of the parent component
  return (
    <>
      <h1>{pageHeader}</h1>
      {animal.map((name) => {
        return <Animal 
          key={name}
          name={name}
          focusFn={focusAnimal}
          deleteFn={deleteAnimal}/>
      })}
    </>
  )
}

export default App
