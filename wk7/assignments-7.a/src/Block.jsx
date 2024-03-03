import BlockDetail from "./BlockDetail"

function Block({blockArray}) {
    // ??? Create your component to display 1 item in your collection. 
    // can I use .map() for a component?
    // or a for loop?
    // GOAL: make the retired one have a banner w the status at the top...

    return(
        <div className="">
            <BlockDetail 
                name={blockArray[0].name} 
                image={blockArray[0].image} 
                description={blockArray[0].description} 
                itemNumber={blockArray[0].itemNumber} 
                pieces={blockArray[0].pieces} 
                starRating={blockArray[0].starRating} 
                price={blockArray[0].price} 
                status={blockArray[0].status} />
            <BlockDetail 
                name={blockArray[1].name} 
                image={blockArray[1].image} 
                description={blockArray[1].description} 
                itemNumber={blockArray[1].itemNumber} 
                pieces={blockArray[1].pieces} 
                starRating={blockArray[1].starRating} 
                price={blockArray[1].price} 
                status={blockArray[1].status} />
            <BlockDetail 
                name={blockArray[2].name} 
                image={blockArray[2].image} 
                description={blockArray[2].description} 
                pieces={blockArray[2].pieces} 
                starRating={blockArray[2].starRating} 
                price={blockArray[2].price} 
                status={blockArray[2].status} />
            <BlockDetail
                name={blockArray[3].name} 
                image={blockArray[3].image} 
                description={blockArray[3].description} 
                pieces={blockArray[3].pieces} 
                starRating={blockArray[3].starRating} 
                price={blockArray[3].price} 
                status={blockArray[3].status} />
        </div>
    )
}


export default Block