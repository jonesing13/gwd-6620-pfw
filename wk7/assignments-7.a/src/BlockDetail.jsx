function BlockDetail ({name, image, pieces, description, starRating, price, status}) {
    // TODO use .map() here?
    // nested .map()?
    return (
      <div className="product">
        <img className="product-image" src={image} alt={name} />
        <div className="product-details">
        <h2>{name}</h2>
        <ul>
            <li>Description: {description}</li>
            <li>Number of Pieces: {pieces}</li>
            <li>Rating: {starRating}</li>
            <li>Price: ${price}</li>
            <li>Status: {status}</li>
        </ul>
        </div>
      </div>
    )
  }
  
  export default BlockDetail