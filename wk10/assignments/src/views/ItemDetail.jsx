import PropTypes from "prop-types"
import { useParams, Link } from "react-router-dom"

export function ItemDetail({ data }) {
    const { id } = useParams()
    console.log("params", id)
    const selectedLego = data.find((lego) => lego.id === id)
    console.log("lego", selectedLego)

    return (
        <div>
            <nav>
                <Link to ="/">Return to List</Link>
            </nav>

            <h1>{selectedLego.name}</h1>
            <img src={selectedLego.image} alt={selectedLego.name} />
            <p>
                {selectedLego.description}
            </p>
            <p>
                Rating: {selectedLego.rating}
            </p>
            <p>
                {selectedLego.retired && (<p>This set is retired, and no longer sold by LEGO<sup>&reg;</sup></p>)}
            </p>
        </div>
    )
}

ItemDetail.propTypes = {
    data: PropTypes.array
}