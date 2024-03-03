import './App.css'
import './LegoRow.css'
import { LegoRow } from './LegoRow'

function App() {
  const legoCollection = [
    {
      name: "Bonsai Tree",
      image: "./bonsai-tree_product_image_267x400.jpg",
      itemNumber: 10281,
      count: 878,
      description: "Designed especially for adults, this rewarding project includes 878 pieces, creating a beautiful display piece measuring over 7 in. (18 cm) high.",
      starRating: "4.5/5",
      price: "49.99",
      status: "Available"
    },
    {
      name: "Wildflower Bouquet",
      image: "./wildflower-bouquet_product_image_267x400.jpg",
      itemNumber: 10313,
      count: 939,
      description: "Immerse yourself in color! The building set provides an immersive building experience for nature-lovers and budding florists.",
      starRating: "5/5",
      price: "59.99",
      status: "Available"
    },
    {
      name: "Bird of Paradise",
      image: "./bird-of-paradise_product_image_267x400.jpg",
      itemNumber: 10289,
      count: 1173,
      description: "Build a Bird of Paradise for your collection. This build features a repositionable flower model with unique elements for the stamens. (Retired December 2023.)",
      starRating: "4.5/5",
      price: "99.99",
      status: "Retired"
    },
    {
      name: "Orchid",
      image: "./orchid_product_image_263x400.jpg",
      itemNumber: 10311,
      count: 608,
      description: "Build your own orchid display and enjoy a rewarding project for adults as you build a joyful and elegant orchid decor piece for your home or office.",
      starRating: "5/5",
      price: "49.99",
      status: "Available"
    }
  ]

  return (
    <>
      <h1 className="header">My LEGO<sup>&reg;</sup> Botanical Collection</h1>
      <table className="lego-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Product Image</th>
            <th>Description</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {legoCollection.map((lego, index) => {
            return (
              <LegoRow
                key={lego.name}
                odd={index % 2 === 0}
                name={lego.name} 
                image={lego.image} 
                description={lego.description}
                price={lego.price}
                status={lego.status}
                />
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default App
