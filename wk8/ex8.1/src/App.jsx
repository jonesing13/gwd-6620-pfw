import { useState } from 'react'
import reactLogo from './assets/react.svg'
import alpacaPic from '/alpacas_600x414.png'
import llamaPic from '/llama_768x512.jpg'

/*

INSTRUCTIONS

Either using a new sandbox in codesandbox.io or by creating a new React app with "create vite@latest" create a simple application with one image and with two buttons. One button should say "Alpaca" and the other should say "Llama". Use the "useState" hook to set a state variable to the image for the Llama picture. Use this state variable to set the image in an IMG tag. Each button should have an onClick action to set the state variable to the respective camelid. The end result will be an app that shows either a llama or an alpaca depending on which button you have selected last.

*/

export default function App() {
  // use array destructuring to pass the states; initial state is set to "llama", transition state is setLlama
  const [selected, setSelected] = useState("showLlamas");

  // create functions to toggle between show/no show states for both llama, and alpaca
  function showLlamas () {
    setSelected("showLlamas")
  }
  function showAlpacas () {
    setSelected("showAlpacas")
  }

  // trigger the desired function onClick (based on button)
  // toggle the image based on the State of the buttons
  return (
    <>
      <h1>Show Me the Camelid</h1>

      <img 
      src={ selected === "showLlamas" ? llamaPic : alpacaPic } 
      alt="A pack of camelids"
      />

      <div>
        <button onClick={showAlpacas}>Alpacas</button>
        <button onClick={showLlamas}>Llamas</button>
      </div>
    </>
  );
}

