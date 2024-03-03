import Block from './Block'
import './App.css'

/*
Use the array you just made to create a list of your collection using map to render each item as one row of your list using your newly created row component. You may use tables, lists or even stacked divs when displaying your collection. Each row component should display at least 4 properties from your collection objects.

If using a table, you should make an appropriate row with column headings as well as an appropriate page heading for the collection in general.

Additional requirements:

Use conditional classnames to alter one set of rows from the rest. This could be as simple as make every other row darker or displaying a special styling some subset in your collection. (For example, Nintendo consoles may have a Nintendo logo applied via CSS, or the most valuable console may use a CSS class to impose two dollar signs to its row). If you do something other than odd and even rows, please indicate with an explanation (perhaps in the form of a legend) somewhere on your page.

Future consideration:

This project will serve as the base for next week’s assignment where we learn to add new items to and delete items from your collection. Keep that in mind as you choose your content. I would recommend something you really are interested in.

Rubric:

    Following instruction: up to 5 points
    (Non-React) Javascript code and syntax: up to 5 points
    Appropriate creation and placement of your collection array in the returned JSX: up to 5 points
    Displaying each item of your collection using array mapping: up to 10 points
    Conditionally applying CSS styles or classes on specific rows (the subset of your collection as mentioned above): Up to 10 points
    Overall design of page: up to 5 points

TURN IT IN

When you have finished, commit your html and js to github (or a similar repository of version controlled code), upload the code you generated with "npm run build" (the contents of your dist folder) to your web server, test it, and then reply to this post. Include a link to both the (public) github repository and your uploaded webpage.
*/

function App() {
  const blockArray = [
    {
      name: "Bonsai Tree",
      id: 1,
      image: "./bonsai-tree_product_image_267x400.jpg",
      itemNumber: 10281,
      pieces: 878,
      description: "Designed especially for adults, this rewarding project includes 878 pieces, creating a beautiful display piece measuring over 7 in. (18 cm) high.",
      starRating: "4.5/5",
      price: "49.99",
      status: "Active"
    },
    {
      name: "Wildflower Bouquet",
      id: 2,
      image: "./wildflower-bouquet_product_image_267x400.jpg",
      itemNumber: 10313,
      pieces: 939,
      description: "Immerse yourself in color! The building set provides an immersive building experience for nature-lovers and budding florists.",
      starRating: "5/5",
      price: "59.99",
      status: "Active"
    },
    {
      name: "Orchid",
      id: 3,
      image: "./orchid_product_image_263x400.jpg",
      itemNumber: 10311,
      pieces: 608,
      description: "Build your own orchid display and enjoy a rewarding project for adults as you build a joyful and elegant orchid decor piece for your home or office.",
      starRating: "5/5",
      price: "49.99",
      status: "Active"
    },
    {
      name: "Bird of Paradise",
      id: 4,
      image: "./bird-of-paradise_product_image_267x400.jpg",
      itemNumber: 10289,
      pieces: 1173,
      description: "Build a Bird of Paradise for your collection. This build features a repositionable flower model with unique elements for the stamens. (Retired December 2023.)",
      starRating: "4.5/5",
      price: "99.99",
      status: "Retired"
    }
  ]
  // TODO convert this to .map to show all items in the list
  // utilize a "retired" class for bird of paradise
  return (
    <>
    <div className="header">
      <h1>My LEGO<sup>&reg;</sup> Botanical Collection</h1>
    </div>
    <div className="body">
      <Block blockArray={blockArray} className={blockArray.status && "retired"}/>
    </div>
    <div className="footer"></div>
    </>
  )
}

export default App
