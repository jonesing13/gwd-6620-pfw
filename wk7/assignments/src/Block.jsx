import BlockDetail from "./BlockDetail"

function Block({blockArray}) {
    // ??? Create your component to display 1 item in your collection. 
    return(
        <div>
            <BlockDetail name={blockArray[0].name} itemNumber={blockArray[0].itemNumber} pieces={blockArray[0].pieces} starRating={blockArray[0].starRating} price={blockArray[0].price} />
        </div>
    )
}

export default Block