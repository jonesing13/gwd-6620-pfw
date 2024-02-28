import NavItem from "./NavItem"
//import { NavItem } from "./NavItem" // curly brackets used cause we didn't export default on the NavItem.jsx file

function Nav({navArray, currentPage}) {
  // when Nav(props): console.log("props", props)
  // also when Nav(props): console.log("nav array", props.navArray)
  // props is an object
  // object destructuring takes an object and sets it up to use a variable for each of the fields in the object
  // not needed when you switch out Nav(props) with Nav({navArray}), but used if you keep (props) in there: const { navArray } = props
  console.log("nav array", navArray)

  //now that we have {navArray}, we can pass that stuff into our <NavItem />s, also using props--these are things we'll set up in Nav.jsx to be passed down into NavItem.jsx file
  return (
    <>
      <NavItem label={navArray[0].label} link={navArray[0].link} currentPage={currentPage} />
      <NavItem label={navArray[1].label} link={navArray[1].link} currentPage={currentPage} />
      <NavItem label={navArray[2].label} link={navArray[2].link} currentPage={currentPage} />
    </>
  )
}

export default Nav