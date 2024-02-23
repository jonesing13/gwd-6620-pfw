import './App.css'

function App() {
  const llamaFacts = [
    "llamas have a reputation for spitting",
    "the collective noun for llamas (i.e. what you call a group of llamas) is 'herd'",
    "fast llamas are often referred to as 'llamaghinis'"
  ]
  const listItems = llamaFacts.map((factoid) => <li key={factoid}>{factoid}</li>)
  // TODO: add a ternary condition https://react.dev/learn/conditional-rendering#conditional-ternary-operator--
  return (
    <>
      <h1>
        Totally True Llama Facts:
      </h1>
      <ul>
        {listItems}
      </ul>
      <div class="card">
        
      </div>
    </>
  )
}

export default App
