// Often you’ll want the parent component to specify a child’s event handler. Consider buttons: depending on where you’re using a Button component, you might want to execute a different function—perhaps one plays a movie and another uploads an image.

// To do this, pass a prop the component receives from its parent as the event handler like so:


// accepts a prop called { onClick }
// passes that prop directly to the built-in browser <button> with onClick={onClick}
// this tells React to call the passed function on click
function Button({ onClick, children }) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  }
  
  // pass handlePlayClick as the onClick prop to the Button inside
  function PlayButton({ movieName }) {
    function handlePlayClick() {
      alert(`Playing ${movieName}!`);
    }
  
    return (
      <Button onClick={handlePlayClick}>
        Play "{movieName}"
      </Button>
    );
  }
  
  // UploadButton passes () => alert("Uploading!") as the onClick prop to the Button inside
  function UploadButton() {
    return (
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    );
  }
  
  // render the PlayButton and the UploadButton
  export default function Toolbar() {
    return (
      <div>
        <PlayButton movieName="Kiki's Delivery Service" />
        <UploadButton />
      </div>
    );
  }
  
  // if you use a DESIGN SYSTEM, it's common for components like buttons to contain styling, but not specify behavior.
  // instead, components like PlayButton and UploadButton will pass event handlers down