// EVENT HANDLERS will also catch events from any children your component might have
// we say an event "bubbles" or "propogates" up the tree: 
  // it starts with where the event happened and then goes up the tree

  export default function Toolbar() {
    return (
      <div className="Toolbar" onClick={() => {
        alert('You clicked on the toolbar!');
      }}>
        <button onClick={() => alert('Playing!')}>
          Play Movie
        </button>
        <button onClick={() => alert('Uploading!')}>
          Upload Image
        </button>
      </div>
    );
  }
// above, there are two buttons that sit on the "toolbar"
// so when I click one of the buttons, I get that button's onClick, then the div's onClick (I see two messages)
// if I click outside of both buttons AND and the div, only the div onClick is triggered (I see one message)

// PITFALL: all events propogate in React except onScroll, which only works on the JSX tag you attach it to