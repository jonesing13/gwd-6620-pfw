import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Uncontrolled components are those for which the form data is handled by the DOM itself. “Uncontrolled” refers to the fact that these components are not controlled by React state.
// The values of the form elements are traditionally controlled by and stored on the DOM.
// We will have to refer to the instance of the form elements to retrieve their values from the DOM.

// the following example uses DOM APIs directly

function App() {
  function onSubmit() {
    console.log("Name value: " + window.name.value);
    console.log("Email value: " + window.email.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" id="name" required />
      <input type="email" name="email" id="email" required />
      <input type="submit" value="Submit" />
    </form>
  );
  // In the above code, we assigned ID attributes to the name and email input elements with values name and email, respectively.
  // We used these id attributes to get the value of the input element when the form is being submitted.
}

export default App
