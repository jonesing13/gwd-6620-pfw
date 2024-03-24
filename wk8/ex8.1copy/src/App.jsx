import { useState } from 'react'
import alpaca from './assets/alpacas_600x414.png'
import llama from './assets/llama_768x512.jpg'
import Animal from './Animal';
import './App.css'

export default function App() {
  // on landing, show llama
  const [animal, setAnimal] = useState(llama)

  // on button click (depending on button) show the related imagery
  return (
    <>
      <h1>Show me the Camelid</h1>
      <Animal url={animal} />
      
      <div>
        <button onClick={() => {
          setAnimal(llama);
        }}>
          Llama
        </button>
        <button onClick={() => {
          setAnimal(alpaca);
        }}>
          Alpaca
        </button>
      </div>
    </>
  )
}

