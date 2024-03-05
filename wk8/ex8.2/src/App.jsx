import { useState } from 'react'
import Animal from './Animal.jsx';
import './Animal.css'


function App() {
  // useState to indicate the page header
  const [pageHeader, setPageHeader] = useState("Animals from the Hundred Acre Wood");

  const [animal, setAnimal] = useState([
    "Winnie the Pooh",
    "Eeyore",
    "Tigger",
    "Piglet",
    "Kanga",
    "Little Roo",
    "Owl"
  ]);

  // delete button functionality--remove animal from the list and return updated list
  function deleteAnimalButton(name) {
    let newAnimalList = animal.filter((animal) => {
      return animal !== name;
    });
    setAnimal(newAnimalList);
  }

  // focus button functionality--update page header based on the animal showing
  function focusAnimalButton(name) {
    setPageHeader(name);
  } 

  // todo make the title a STATE VARIABLE
  return (
    <>
      <h1>{pageHeader}</h1>
      {animal.map((name) => {
        return <Animal 
        key={name}
        name={name}
        focusAnimalButton={focusAnimalButton}
        deleteAnimalButton={deleteAnimalButton}/>
      })}
    </>
  )
}

export default App
