import './App.css' // w a css file, need to include the file type in the route
import Nav from './Nav' // js or jsx files don't require us to include the file type/extension in the route
import { Page } from './Page'

function App() {
  const navigationArray = [
    {label: "About", link: "https://google.com"},
    {label: "Portfolio", link: "https://disney.com"},
    {label: "Contact", link: "https://mpr.org"}
  ]
  const currentPage = "About"
// pass the navigationArray into the Nav component and then into the NavItem component
  return (
    <>
      <Page>
        <>
          <Nav navArray={navigationArray} currentPage={currentPage} /> 
          <div>Hi</div>
        </>
      </Page>
    </>
  )
}

export default App

/*
I get this warning, even before incorporating the string literals from the recording. and my styling for "current" doesn't render on the page then
---------------------------------------------

Warning: Received `false` for a non-boolean attribute `className`.

If you want to write it to the DOM, pass a string instead: className="false" or className={value.toString()}.

If you used to conditionally omit it with className={condition && value}, pass className={condition ? value : undefined} instead.
a
NavItem@http://localhost:5173/src/NavItem.jsx?t=1709103633923:17:17
Nav@http://localhost:5173/src/Nav.jsx?t=1709103633923:18:13
div
Page@http://localhost:5173/src/Page.jsx?t=1709103276082:24:5
App
 */