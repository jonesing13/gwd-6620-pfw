import './index.css'
import './App.css'

// Components often need to change what’s on the screen as a result of an interaction.
// Components need to “remember” things: the current input value, the current image, the shopping cart. 
//In React, this kind of component-specific memory is called state.


// this component renders a sculpture image
// clicking the "Next" button should show the next sculpture by changing the index to 1, then 2, etc.
// BUT IT WON'T WORK
import { sculptureList } from './data.jsx';
import { useState } from 'react';



/*

The handleClick event handler is updating a local variable, index. But two things prevent that change from being visible:

    Local variables don’t persist between renders. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
    Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data.

To update a component with new data, two things need to happen:

    Retain the data between renders.
    Trigger React to render the component with new data (re-rendering).

*/
/* 
export default function Gallery() {
  let index = 0;

  function handleClick() {
    index = index + 1;
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}
*/

// The useState Hook provides those two things:

  // - A state variable to retain the data between renders.
  // - A state setter function to update the variable and trigger React to render the component again.

/*

To add a state variable, import useState from React at the top of the file:

  import { useState } from 'react';

Then, replace this line:

  let index = 0;

with

  const [index, setIndex] = useState(0);

index is a state variable and setIndex is the setter function.

NOTE: you also gotta replace your "index = index + 1;" to with "setIndex(index+1);"

*/

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}
