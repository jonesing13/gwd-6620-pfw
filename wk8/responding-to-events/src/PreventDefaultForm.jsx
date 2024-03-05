// preventing default browser behavior

// e.g. some browsers automatic behavior, like a form reload on <form> submit event (happens when a butotn inside of it is clicked, and reloads the whole page by default
import './App.css'

/*
export default function Signup() {
  return (
    <form onSubmit={() => alert('Submitting!')}>
      <input />
      <button>Send</button>
    </form>
  );
}
*/

// You can call e.preventDefault() on the event object to stop this from happening:

export default function Signup() {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert('Submitting!');
    }}>
      <input />
      <button>Send</button>
    </form>
  );
}

// don't confuse e.stopPropagation() with e.preventDefault(). they are both useful but ARE UNRELATED
  // - e.stopPropagation() stops the event handlers attached to the tags above from firing
  // - e.preventDefault() prevents the default browser behavior for the few events that have it