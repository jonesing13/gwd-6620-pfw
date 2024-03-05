
// Because EVENT HANDLERS are declared inside of a component, they have access to the component’s props. Here is a button that, when clicked, shows an alert with its message prop:

function AlertButton({ message, children }) {
    return (
      <button onClick={() => alert(message)}>
        {children}
      </button>
    );
  }
  
  export default function Toolbar() {
    return (
      <div>
        <AlertButton message="Copying row!">
          Copy
        </AlertButton>
        <AlertButton message="Deleting row!">
          Delete
        </AlertButton>
      </div>
    );
  }
  