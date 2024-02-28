import Camelid from './Camelid'
import llamaImage from './assets/llama_600x400.png';
import alpacaImage from './assets/alpacas_600x414.png';
import './App.jsx'
import './app.css'

function App() {
  const camelidArray = [
    {name: "Llama", funFact: "Fast llamas are referred to as 'llamaghinis'", img: <img src={llamaImage} alt="Four llamas looking at the camera." />},
    {name: "Alpaca", funFact: "Alpacas prefer to sing alpacapella", img: <img src={alpacaImage} alt="A group of six alpacas staring in all different directions." />}
  ]
  return (
    <>
      <Camelid
        img={camelidArray[0].img}
        name={camelidArray[0].name}
        funFact={camelidArray[0].funFact}
      />
      <Camelid
        img={camelidArray[1].img}
        name={camelidArray[1].name}
        funFact={camelidArray[1].funFact}
      />
    </>
  )
}

export default App