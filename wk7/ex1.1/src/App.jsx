import Camelid from './Camelid'
import './App.jsx'

function App() {
  const camelidArray = [
    {name: "Llama", funFact: "Fast llamas are referred to as 'llamaghinis'", img: ""},
    {name: "Alpaca", funFact: "Alpacas prefer to sing alpacapella", img: ""}
  ]
  return (
    <div>
      <Camelid
        name={camelidArray[0].name}
        funFact={camelidArray[0].funFact}
        //img={}
      />
      <Camelid
        name={camelidArray[1].name}
        funFact={camelidArray[1].funFact}
        //img={}
      />
    </div>
  )
}

export default App