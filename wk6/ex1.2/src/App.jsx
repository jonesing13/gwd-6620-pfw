import './App.css'

/* function App() {
  const happy = true;
  return (
    <>
      Hi this is a React App that I made!
      {happy && (<div>Yay!</div>)}
    </>
  )
} */

function App() {
  const greeting = 'Hello, world!'
  const thisString = 'this'
  const thisArray = ['THIS, &', 'THAT, and', 'ANOTHER THING!']
  const oneMoreString = '... and one more!'
  return (
    <>
      <div class="header">
        <h1>{greeting}</h1>
        <h2>Get a load of... <a href="https://www.google.com" target="_blank">{thisString}!</a></h2>
      </div>
      <div>
        <h3>And...! (And!!)</h3>
        <div>
          <p>(wait for it...)</p>
          <div class="card">
            {thisArray.map((item) => {
              return (<p>{item}</p>)
            })}
          </div>
          <p class="emphatic">{oneMoreString}</p>
        </div>
      </div>
      <div class="footnote">
        <p>OK, byeeee &#x1F44B;</p>
      </div>
    </>
  )
}

export default App
