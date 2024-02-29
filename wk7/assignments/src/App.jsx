import Block from './Block'
import './App.css'

/*
7.A | ✳️ Assignment 7: Show and Tell Collection
No unread replies. No replies.

Estimated time: up to 4 hours
INSTRUCTIONS

Create a list displaying a collection of items with conditional formatting.

Select an item that you collect or would like to collect (baseball cards, European high-performance cars, Power Ranger figures; it can literally be anything). Create an POJO (plain old javascript object) that represents one unit of that collection. For example, if I was selecting retro video game consoles, my first POJO would look like this:


    {
      name: "Nintendo Entertainment System",
      nickname: "NES",
      manufacturer: "Nintendo"
      activeYears: [1983, 1990],
      description: "Released July 15, 1983, the Nintendo Entertainment System (NES) is an 8-bit video game console released by Nintendo in North America, South America, Europe, Asia, Oceania and Africa and was Nintendo's first home video game console released outside Japan. In Japan, it is known as the "Family Computer" (or "Famicom", as it is commonly abbreviated)."
    }

For this assignment, your collection object should have 3 to 5 properties. Create an array of 5  or more of these objects and in the App.jsx file as a variable. 

          const consoles = [
            {...}, // this would be the NES object
            {...}, //  and this might be the N64
          ]


Create a new JSX file to be used as a row for each one of your collection items. Name the file with a capital letter that makes sense for you collection. For example, if your collection is made of Baseball Cards, you may want to name the row component "Card.jsx". For my example, I'll use the name "Console.jsx". 

Create a function in your component that matches your file name. So mine would be function Console(props) {...}. Create your component to display 1 item in your collection. 

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
      itemNumber: 10281,
      pieces: 878,
      starRating: "4.5/5",
      price: "49.99"
    },
    {
      name: "Wildflower Bouquet",
      itemNumber: 10313,
      pieces: 939,
      starRating: "5/5",
      price: "59.99"
    },
    {
      name: "Orchid",
      itemNumber: 10311,
      pieces: 608,
      starRating: "5/5",
      price: "49.99"
    },
    {
      name: "Bird of Paradise",
      itemNumber: 10289,
      pieces: 1173,
      starRating: "4.5/5",
      price: "99.99"
    }
  ]

  return (
    <>
      <h1>LEGO&reg; Bonsai Collection</h1>
      <Block blockArray={blockArray} />
    </>
  )
}

export default App
