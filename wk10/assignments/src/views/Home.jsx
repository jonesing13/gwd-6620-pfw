import { useState } from "react"
import { nanoid } from "nanoid"
import Masthead from "../Masthead/Masthead"
import ItemCard from "../ItemCard/ItemCard"
import Footer from "../Footer/Footer"
import legoData from "../assets/lego-data.json"

export function Home() {
      // set landing lego collection to the full array
  const [legos, setLegos] = useState(legoData)

  function deleteLego(id) {
    // console.log("delete me", id)
    const updatedLegoArray = legos.filter((lego) => {
      return lego.id !== id // skips item with matching id
    })
    setLegos(updatedLegoArray)
  }

  // take id that matches and generate a duplicate item in list but with a new (unique) id-remember, id is a key
  function duplicateLego(id) {
    // console.log("duplicate me", id)
    const matchingLego = legos.find((lego) => {
      return lego.id === id // 
    })
    const updatedLegos = {...matchingLego, id: nanoid()}
    setLegos([...legos, updatedLegos])
  }

  return (
    <div className="page">
      {/* masthead goes here */}
      <Masthead />

      <div className="collection">
        {/* collection map goes here */}
        {/* use ItemCard component in loop */}
        {legos.map((legoItem) => {
          return (
            
            <ItemCard 
            key={legoItem.id} 
            deleteFn={deleteLego}
            duplicateFn={duplicateLego}
            {... legoItem} />
          )
        })}
      </div>

      {/* Footer goes here  */}
      <Footer />
    </div>
  )
}