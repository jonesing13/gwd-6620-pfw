import { useState } from 'react'
import alpaca from './assets/alpacas_600x414.png'
import llama from './assets/llama_768x512.jpg'
import Animal from './Animal';
import './App.css'


/*

INSTRUCTIONS

Either using a new sandbox in codesandbox.io or by creating a new React app with "create vite@latest" create a simple application with one image and with two buttons. One button should say "Alpaca" and the other should say "Llama". Use the "useState" hook to set a state variable to the image for the Llama picture. Use this state variable to set the image in an IMG tag. Each button should have an onClick action to set the state variable to the respective camelid. The end result will be an app that shows either a llama or an alpaca depending on which button you have selected last.

*/

export default function App() {

  const [animal, setAnimal] = useState(llama)

  return (
    <>
      <div>
        <Animal url={llama} />
      </div>
      <h1>Show me the Camelid</h1>
      <div>
        <button onClick={() => {
          console.log("you clicked llama");
          setAnimal(llama);
        }}>
          Llama
        </button>
        <button onClick={() => {
          console.log("you clicked alpaca");
          setAnimal(alpaca);
        }}>
          Alpaca
        </button>
      </div>
    </>
  )
}

