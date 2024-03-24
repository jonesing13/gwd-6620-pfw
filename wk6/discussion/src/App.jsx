// new subject: react

// how is this going to be different?
// whiteboard for the class: https://jamboard.google.com/d/15ka586dEn62MB4Epl8qj9cXPWnP-vxwHhgnuCmLmOM8/viewer?pli=1
// use components to help you succinctly/efficiently re-use code and also utilize features/functions that are helpful outside of the element you used them in
// let's go ahead and create some interesting stuff using react
// instead of spinning it up from scratch, use terminal (in vscode) to get to the folder you wanna build in, so wk6. can also right click in vscode the folder you want and "open in integrated terminal".
// we're assuming NPM and Node have been installed

// NOTE: make your my-test-react folder at the wk6 folder level. in terminal > new terminal, use the command 'cd wk6'
// open that folder in particular in vs code using command 'code .' once you're in the folder you wanna be in
// use command
// npm create vite@latest <folder name>
// NOTE: if the folder already exists, it'll do the create in the existing folder; if it doesn't it'll CREATE that folder too


import Header from "./Header";
import './App.css'

function App() {
  // how to get data into HTML?
  // first, define it, ABOVE the return; then WRAP the data in {} in the return statment
  const myString = 'Hello, world';
  const myArray = ['thing', 'other thing', 'last thing']
  // ternerary (not sure of spelling) -- one line conditional statement
  // left side: define or return a variable
  // right side: condition ? true : false;
  // ^ so what to do when it's true: what to do when it's false
  /* return (
    <div>
      <Header></Header>
      <h1>Hi</h1>
      {myString}
      <br />
      {myArray.map((item) => {
        return (<div>{item}</div>)
      })}
    </div>
  ); */

  // cannot use for loops inside of the return
  // everything in {} in the return is an expression; they're actions/executions (simple)
/*   return (
    <div>
      <Header></Header>
      <h1>Hi</h1>
      {myString}
      <br />
      {myString === 'Hello, world!' ? (<div>{myArray[0]}</div>) : (<div>This was false</div>)}
    </div>
  ); */

  const dogFact1 = 'Dogs like to lick things';
  const dogFact2 = 'Dogs are often furry';
  const dogFact3 = 'Dogs need exercise';
  const dogConditionTrue = 'Dogs like to drive cars';
  const dogConditionFalse = 'Dogs like to ride in cars';
  const dogLikes = 'car ride';
  return (
    <div>
      <Header></Header>
      <h1>Hi</h1>
      <p>Check out my list:</p>
      <ul>
        <li>{dogFact1}</li>
        <li>{dogFact2}</li>
        <li>{dogFact3}</li>
        <li>
          {dogLikes !== 'car ride' ? (<>{dogConditionTrue}</>) : (<>{dogConditionFalse}</>)}
        </li>
      </ul>
    </div>
  );
}

export default App

// use the link in the terminal to "go live"-- vs code 'go live' isn't helpful anymore
// use CTRL+C to QUIT the vite/react stuff, else it'll just continue running (unless you close vs code)


// we need to "have these files prepared to be served"
// compile them with terminal command 'npm run build'
// note, the links in the files made aren't sustainable for us cause we'll have tons of folders.
// use vite.config.js and edit to add "base: "./";
// 'npm run preview'