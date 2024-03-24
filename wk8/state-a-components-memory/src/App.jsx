import './index.css'
import './App.css'

// Components often need to change what’s on the screen as a result of an interaction.
// Components need to “remember” things: the current input value, the current image, the shopping cart. 
//In React, this kind of component-specific memory is called state.

// State is local to a component instance on the screen.
// In other words, if you render the same component twice, each copy will have completely isolated state!
// Changing one of them will not affect the other.

// In this example, the Gallery component from earlier is rendered twice with no changes to its logic.
// Try clicking the buttons inside each of the galleries. Notice that their state is independent:

import Gallery from './Gallery.jsx';

export default function Page() {
  return (
    <div className="Page">
      <Gallery />
      <Gallery />
    </div>
  );
}

/*

Recap

  - Use a state variable when a component needs to “remember” some information between renders.
  - State variables are declared by calling the useState Hook.
  - Hooks are special functions that start with use. They let you “hook into” React features like state.
  - Hooks might remind you of imports: they need to be called unconditionally. Calling Hooks, including useState, is only valid at the top level of a component or another Hook.
  - The useState Hook returns a pair of values: the current state and the function to update it.
  - You can have more than one state variable. Internally, React matches them up by their order.
  - State is private to the component. If you render it in two places, each copy gets its own state.

*/