import { useState } from 'react'
import Animal from './Animal.jsx';
import './Animal.css'


function App() {
  // useState to indicate the page header
  const [pageHeader, setPageHeader] = useState("Animals from the Hundred Acre Wood");

/*  const animalList = [{
    name: "Winnie the Pooh",
    img: "./bonsai-tree_product_image_267x400.jpg",
  },
  {
    name: "Piglet",
    img: "./bonsai-tree_product_image_267x400.jpg",
  },
  {
    name: "Eeyore",
    img: "./bonsai-tree_product_image_267x400.jpg",
  },
  {
    name: "Tigger",
    img: "./bonsai-tree_product_image_267x400.jpg",
  },
  {
    name: "Owl",
    img: "./bonsai-tree_product_image_267x400.jpg",
  },
  {
    name: "Rabbit",
    img: "./bonsai-tree_product_image_267x400.jpg",
  },
  {
    name: "Kanga",
    img: "./bonsai-tree_product_image_267x400.jpg",
  },
  {
    name: "Little Roo",
    img: "./bonsai-tree_product_image_267x400.jpg",
  },
]
Error: Objects are not valid as a React child (found: object with keys {name, img}). If you meant to render a collection of children, use an array instead. 
*/

  const [animal, setAnimal] = useState([
    "Winnie the Pooh",
    "Eeyore",
    "Tigger",
    "Piglet",
    "Kanga",
    "Little Roo",
    "Owl",
    "Rabbit"
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
