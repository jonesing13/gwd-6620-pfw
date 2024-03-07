import './App.css'
import { useState } from 'react'
import Masthead from './Masthead/Masthead'
import ItemCard from './ItemCard/ItemCard'

function App() {
  // set landing lego collection to the full array
  const [legos, setLegos] = useState([
    {
      name: "Bonsai Tree",
      image: "./bonsai-tree_product_image_267x400.jpg",
      description: "Designed especially for adults, this rewarding project includes 878 pieces, creating a beautiful display piece measuring over 7 in. (18 cm) high.",
      rating: "4.5/5",
      active: true,
      id: 1
    },
    {
      name: "Wildflower Bouquet",
      image: "./wildflower-bouquet_product_image_267x400.jpg",
      description: "Immerse yourself in color! The building set provides an immersive building experience for nature-lovers and budding florists.",
      rating: "5/5",
      active: true,
      id: 2
    },
    {
      name: "Bird of Paradise",
      image: "./bird-of-paradise_product_image_267x400.jpg",
      description: "Build a Bird of Paradise for your collection. This build features a repositionable flower model with unique elements for the stamens. (Retired December 2023.)",
      rating: "4.5/5",
      active: false,
      id: 3
    },
    {
      name: "Orchid",
      image: "./orchid_product_image_263x400.jpg",
      description: "Build your own orchid display and enjoy a rewarding project for adults as you build a joyful and elegant orchid decor piece for your home or office.",
      rating: "5/5",
      active: true,
      id: 4
    }
  ])

  return (
    <div className="page">
      {/* masthead goes here */}
      <Masthead />

      <div className="collection">
        {/* collection map goes here */}
        {/* use ItemCard component in loop */}
        {legos.map((legoItem) => {
          return (
            <ItemCard key={legoItem.id} {... legoItem} />
          )
        })}
      </div>
    </div>
  )
}

export default App
