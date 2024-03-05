import { useState } from 'react';
import { sculptureList } from './data.jsx';

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
    <section>
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
    </section>
  );
}


/*

This is what makes state different from regular variables that you might declare at the top of your module.
State is not tied to a particular function call or a place in the code, but it’s “local” to the specific place on the screen.
You rendered two <Gallery /> components, so their state is stored separately.

Also notice how the Page component doesn’t “know” anything about the Gallery state or even whether it has any.
Unlike props, state is fully private to the component declaring it.
The parent component can’t change it.
This lets you add state to any component or remove it without impacting the rest of the components.

What if you wanted both galleries to keep their states in sync?
The right way to do it in React is to remove state from child components and add it to their closest shared parent.
The next few pages will focus on organizing state of a single component, but we will return to this topic in Sharing State Between Components: https://react.dev/learn/sharing-state-between-components

*/