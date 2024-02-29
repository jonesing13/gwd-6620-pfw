function BlockDetail ({name, itemNumber, pieces, starRating, price}) {
    return (
      <>
        <ul>
            <li>Name: {name}</li>
            <li>Item Number: {itemNumber}</li>
            <li>Number of Pieces: {pieces}</li>
            <li>Rating: {starRating}</li>
            <li>Price: ${price}</li>
        </ul>
      </>
    )
  }
  
  export default BlockDetail