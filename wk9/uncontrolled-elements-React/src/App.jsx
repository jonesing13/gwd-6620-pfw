import './App.css'

function App() {
  const nameRef = useRef();
  const emailRef = useRef();

  function onSubmit() {
    console.log("Name value: " + nameRef.current.value);
    console.log("Email value: " + emailRef.current.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" ref={nameRef} required />
      <input type="email" name="email" ref={emailRef} required />
      <input type="submit" value="Submit" />
    </form>
  );
  // We created two React refs,
  // nameRef and 
  // emailRef, 
  // and assigned them to the ref attributes of name and email inputs, respectively. 
  // This will cause the refs to hold the HTMLElement instances of the elements in their .current property. 
  // From .current, we can reference the .value property to get the values of the input elements.
}

export default App
