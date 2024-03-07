import './App.css'
import { useState } from 'react'
import Masthead from './Masthead/Masthead'
import ItemCard from './ItemCard/ItemCard'
import { nanoid } from "nanoid"

function App() {
  // set landing lego collection to the full array
  const [legos, setLegos] = useState([
    {
      name: "Bonsai Tree",
      image: "./bonsai-tree_product_image_267x400.jpg",
      description: "Designed especially for adults, this rewarding project includes 878 pieces, creating a beautiful display piece measuring over 7 in. (18 cm) high.",
      rating: "4.5/5",
      retired: false,
      id: "1"
    },
    {
      name: "Wildflower Bouquet",
      image: "./wildflower-bouquet_product_image_267x400.jpg",
      description: "Immerse yourself in color! This building set provides an outstanding building experience for nature-lovers and budding florists.",
      rating: "5/5",
      retired: false,
      id: "2"
    },
    {
      name: "Bird of Paradise",
      image: "./bird-of-paradise_product_image_267x400.jpg",
      description: "Build a Bird of Paradise for your collection. This build features a repositionable flower model with unique elements for the stamens. (Retired December 2023.)",
      rating: "4.5/5",
      retired: true,
      id: "3"
    },
    {
      name: "Orchid",
      image: "./orchid_product_image_263x400.jpg",
      description: "Build your own orchid display and enjoy a rewarding project for adults as you build a joyful and elegant orchid decor piece for your home or office.",
      rating: "5/5",
      retired: false,
      id: "4"
    },
    {
      name: "Succulents",
      image: "./succulents_product_image_400x330.png",
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


  // TODO add a conditional style when retired=true that sets the card background to light blue?
  // fix the button/<a> links for delete/copy
  // sketch some designs for the card content; figure out what your actual flex needs are (and className needs)
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
    </div>
  )
}

export default App
