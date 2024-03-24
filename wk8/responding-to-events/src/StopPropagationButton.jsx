// EVENT HANDLERS receive an EVENT OBJECT as their only argument

// by convention, it's usually called 'e', which stands for EVENT

// you can use this object to read info about the event
// it also let's you STOP THE PROPOGATION

// if you want to prevent an event from reaching parent components, you need to call e.stopPropogation(), like this Button component does:
import './App.css'

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

export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <Button onClick={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}

// when you click on a button:
// 1) React calls the onClick handler passed to <button>
// 2) that handler, defined in Button, does the following:
  // - calls e.stopPropogation(), preventing the event from bubbling further
  // - calls the onClick function, which is a prop passed from the Toolbar component
// 3) that function, defined in the Toolbar component, displays the button's own alert
// 4) since the propogation was stopped, the parent <div>'s onClick handler does NOT run

// As a result of e.stopPropagation(), clicking on the buttons now only shows a single alert (from the <button>) rather than the two of them (from the <button> and the parent toolbar <div>) like our PropagatingButtons.jsx functionality did.

// Clicking a button is not the same thing as clicking the surrounding toolbar, so stopping the propagation makes sense for this UI.