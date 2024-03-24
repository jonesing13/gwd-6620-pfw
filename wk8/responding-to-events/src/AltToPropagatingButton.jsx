// this click handler runs a line of code (.stopPropagation() )AND THEN calls the onClick prop passed by the parent

function Button({ onClick, children }) {
    return (
      <button onClick={e => {
        e.stopPropagation();
        onClick();
      }}>
        {children}
      </button>
    );
  }
  // you could add more code to this handler before calling the parent onClick event handler, too
  // this pattern provides an ALTERNATIVE TO PROPAGATION
    // lets the child component handle the event, while also letting the parent component specify some additional behavior
    // this is NOT automatic (unlike propagation)
    // benefit: you can clearly follow the whole chain of code that executes as a result of some event

// this is a useful approach to use IF YOU RELY ON PROPAGATION AND IT'S DIFFICULT TO TRACE WHICH HANDLERS EXECUTE AND WHY