import './App.css'

function App() {
  // create array of facts
  const llamaFacts = [
    "Llamas have a reputation for spitting",
    "The collective noun for llamas (i.e. what you call a group of llamas) is 'herd'",
    "Fast llamas are often referred to as 'llamaghinis'",
    "Llamas are proficient story tellers",
    "A normal llama pregnancy lasts for an average of 11 to 11.5 months",
    "Llamas eat 7 meals a day, like their good friends the hobbits",
    "Llamas are great pack animals, but if you try to overload them with too much weight, they will likely lie down or simply refuse to move",
    "The average llama is between 5 feet 6 inches and 5 feet 9 inches tall",
    "LLama poop has almost no odor and makes for an eco-friendly fertilizer"
  ]
  // map array items into a list for display purposes
  const listItems = llamaFacts.map((factoid) => <li key={factoid}>{factoid}</li>)
  return (
    <>
      <h1>
        Totally True Llama Facts:
      </h1>
      <ul>
        {listItems}
      </ul>
      <div class="card">
        {llamaFacts.length < 10 ? <div>The most important thing to know about llamas is that they're social animals and prefer to stick with their herd &#129433; &#129433; &#129433;</div> : <div>Wow! So many llama facts!</div> }
      </div>
    </>
  )
}

export default App
