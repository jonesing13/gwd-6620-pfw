import { useState } from 'react'
import { nanoid } from "nanoid"
import { NewItemCardForm } from './NewItemCardForm/NewItemCardForm'
import Masthead from './Masthead/Masthead'
import ItemCard from './ItemCard/ItemCard'
import Footer from './Footer/Footer'
import './App.css'


function App() {
  // set landing lego collection to the full array
  const [legos, setLegos] = useState([
    {
      name: "Bonsai Tree",
      image: "./bonsai-tree_240x240.png",
      description: "Designed especially for adults, this rewarding project includes 878 pieces, creating a beautiful display piece measuring over 7 in. (18 cm) high.",
      rating: "4.5/5",
      retired: false,
      id: "1"
    },
    {
      name: "Wildflower Bouquet",
      image: "./wildflower-bouquet_240x240.png",
      description: "Immerse yourself in color! This building set provides an outstanding building experience for nature-lovers and budding florists.",
      rating: "5/5",
      retired: false,
      id: "2"
    },
    {
      name: "Bird of Paradise",
      image: "./bird-of-paradise_240x240.png",
      description: "Build a Bird of Paradise for your collection. This build features a repositionable flower model with unique elements for the stamens. This build was retired in December 2023 and cannot be purchased anymore.",
      rating: "5/5",
      retired: true,
      id: "3"
    },
    {
      name: "Orchid",
      image: "./orchid_240x240.png",
      description: "Build your own orchid display and enjoy a rewarding project for adults as you build a joyful and elegant orchid decor piece for your home or office.",
      rating: "5/5",
      retired: false,
      id: "4"
    },
    {
      name: "Succulents",
      image: "./succulents_240x240.png",
      description: "Enjoy a rewarding building project, creating a succulents plant display to enhance your home or office decor. You can customize your display by connecting the 9 plants together, arranging them in small groups or presenting them individually.",
      rating: "4.5/5",
      retired: false,
      id: "5"
    }
  ])

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

  function addItemCard(newItemCard) {
    const itemCardWithId = {
      ...newItemCard,
      id: nanoid()
    }
    setLegos([...legos, itemCardWithId])
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

      {/* a Form to add a new item card/build */}
      <hr />
      <NewItemCardForm addItemCardFn = {addItemCard}/>

      {/* Footer goes here */}
      <Footer />
    </div>
  )
}

export default App
