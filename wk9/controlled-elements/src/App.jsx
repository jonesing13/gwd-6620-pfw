import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function onSubmit() {
    console.log("Name value: " + name);
    console.log("Email value: " + email);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

  // the values of our input elements 'name' and 'email' are controlled by the React state--the state becomes the "single source of truth" for the input elements
  // thus, the 'App' component is a CONTROLLED element

export default App

// drawback to using controlled components is that the number of states in a component increases as more control elements are added to the form element