// built-in components, like <button> and <div> only support browser event names like onClick
// when you build your own components, you can name their event handler props any way you like
  // by convention, they should start with 'on' and be followed by a capital letter

  function Button({ onSmash, children }) {
    // see, here, <button> (lowercase!!) still needs a prop called onClick
    return (
      <button onClick={onSmash}>
        {children}
      </button>
    );
  }
  
  export default function App() {
    // but here we use our own component, Button, so I can call it whatever I want
    return (
      <div>
        <Button onSmash={() => alert('Playing!')}>
          Play Movie
        </Button>
        <Button onSmash={() => alert('Uploading!')}>
          Upload Image
        </Button>
      </div>
    );
  }
  