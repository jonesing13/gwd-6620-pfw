export default function Button() {
    // step 2: make a function for onClick
    function handleClick() {
      alert("You clicked me!");
    }
    // step 2.5: update your return statement to pass your handleClick function as a prop in an onClick item on your element (button)
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
    // NOTE: handleClick is an EVENT HANDLER
    // EVENT HANDLER functions are 1) usually defined INSIDE your components, and 2) have names that start with HANDLE, followed by the name of the event
    // EVENT HANDLERS can be defined inline:
      /*
      <button onClick={function handleClick() {
        alert("You clicked me!");
      }}>
      */
    // or more concisely using an arrow function
    /*
      <button onClick={() => {
        alert("You clicked me!");
      }}></button>
    */
  
    // PITFALL: functions passed to event handlers MUST BE PASSED <button onClick={handleClick}> (so that it only triggers on the click itself), NOT CALLED <button onClick={handleClick()}> (cause this triggers immediately on rendering!)
  
  /* step 1: create button in your return
    return (
      <button>
        I don't do anything
      </button>
    );
  */
  }
  
  
  