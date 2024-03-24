import './index.css'
import './App.css'

// Components often need to change what’s on the screen as a result of an interaction.
// Components need to “remember” things: the current input value, the current image, the shopping cart. 
//In React, this kind of component-specific memory is called state.

import { useState } from 'react';
import { sculptureList } from './data.jsx';

// You can have as many state variables of as many types as you like in one component. 

// This component has two state variables, a number index and a boolean showMore that’s toggled when you click “Show details”:
export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}

/*

It is a good idea to have multiple state variables if their state is unrelated, like index and showMore in this example. 
But if you find that you often change two state variables together, it might be easier to combine them into one. 

For example, if you have a form with many fields, it’s more convenient to have a single state variable that holds an object than state variable per field.

Read Choosing the State Structure for more tips. https://react.dev/learn/choosing-the-state-structure

*/