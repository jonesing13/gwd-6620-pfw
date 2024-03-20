import { useState } from 'react'
import './App.css'

function App() {
  const myNewObject = {
    foo: "bar",
    baz: "blarg"
  }
  const {foo, baz} = myNewObject; //putting the key on the left side of the equal sign, and the actual object on the right
  // DESTRUCTURING THE OBJECT
  console.log("this should be foo", foo);
  console.log("this should be baz", baz);

  // spread operator ...
  // use it to put one object inside of another object
  // "use it to merge new properties with another object into a new object"
  const myOtherObject = {
    ...myNewObject,
    someKey: "this",
    someOtherKey: "that"
  }
  // overwrite existing values
  const myLastObject = {
    ...myNewObject,
    foo: "banana"
  }
  console.log(myOtherObject)
  console.log(myLastObject)

  // use spread operator to merge a whole bunch of objects together
  const myReallyLastObject = {
    ...myNewObject,
    ...myOtherObject,
    ...myLastObject
  }
  console.log(myReallyLastObject)

  // use array notation to reference items in your object
  // e.g. "foo" is an item in every object I've made. if I wanna reference that value, I can use array notation to do that
  const myFooVar = "foo";
  console.log("array notation", myNewObject[myFooVar])


  return (
    <>
      Hi Everyone!
    </>
  )
}

export default App
