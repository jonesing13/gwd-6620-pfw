import './App.css'

/* 

Can event handlers have side effects?

Absolutely! Event handlers are the best place for side effects.

Unlike rendering functions, event handlers don’t need to be pure, so it’s a great place to change something—for example, change an input’s value in response to typing, or change a list in response to a button press. However, in order to change some information, you first need some way to store it. In React, this is done by using state, a component’s memory. You will learn all about it in the next section.


Recap

  - You can handle events by passing a function as a prop to an element like <button>.
  - Event handlers must be passed, not called! onClick={handleClick}, not onClick={handleClick()}.
  - You can define an event handler function separately or inline.
  - Event handlers are defined inside a component, so they can access props.
  - You can declare an event handler in a parent and pass it as a prop to a child.
  - You can define your own event handler props with application-specific names.
  - Events propagate upwards. Call e.stopPropagation() on the first argument to prevent that.
  - Events may have unwanted default browser behavior. Call e.preventDefault() to prevent that.
  - Explicitly calling an event handler prop from a child handler is a good alternative to propagation.


*/
