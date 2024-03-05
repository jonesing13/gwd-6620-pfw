// When your component supports multiple interactions, you might name event handler props for app-specific concepts.

// For example, this Toolbar component receives onPlayMovie and onUploadImage event handlers:

export default function App() {
    return (
      <Toolbar
        onPlayMovie={() => alert('Playing!')}
        onUploadImage={() => alert('Uploading!')}
      />
    );
  }
  // notice how the App component does not need to know WHAT the Toolbar will do with onPlayMovie or onUploadImage
    // this is an implementation detail of the Toolbar, which passes them down as onClick handlers to its Buttons, but it could later also trigger them on a keyboard shortcut
  
  function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
      <div>
        <Button onClick={onPlayMovie}>
          Play Movie
        </Button>
        <Button onClick={onUploadImage}>
          Upload Image
        </Button>
      </div>
    );
  }
  // naming props after app-specific interactions like onPlayMovie gives you the flexibility to change how they're used later
  
  function Button({ onClick, children }) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  }
  