import "./styles.css"

function App() {
  const aBoolean = "no";
  const paragraphStyleObj = {
    color: "green",
    fontSize: "32px",
    margin: "4rem auto",
    width: "600px"
  }
  const myAge = 33

  return (
    <>
      <h1 className="blue">CSS Demo</h1>
      <h2 className={aBoolean === "yes" ? "blue" : "red"}>some text</h2>
      <p style={paragraphStyleObj}>This is some BIG green text</p>
      <p className={myAge > 18 && "blue"}>footnote</p>
    </>
  )
}

export default App
