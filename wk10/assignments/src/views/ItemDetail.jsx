import PropTypes from "prop-types"
import { useParams, Link } from "react-router-dom"
import Footer from "../Footer/Footer"
import "./ItemDetail.css"

export function ItemDetail({ data }) {
    const { id } = useParams()
    console.log("params", id)
    const selectedLego = data.find((lego) => lego.id === id)
    console.log("lego", selectedLego)

    return (
        <div className="views-detail">
            <nav className="title">
                <Link to ="/">Return to List</Link>

                <h1>{selectedLego.name}</h1>
            </nav>

            <div className="lego-detail">
                {selectedLego.retired && (<p  className="retired-banner">The {selectedLego.name} lego set is retired, and no longer available for purchase by LEGO<sup>&reg;</sup>.</p>)}

                <img src={selectedLego.image} alt={selectedLego.name} />

                <ul>
                    <li>
                        {selectedLego.description}
                    </li>
                    <li>
                        <strong>Rating:</strong> {selectedLego.rating}
                    </li>
                </ul>
            </div>
            
            { /* TODO: display footer on all VIEWS
            <div className="footer">
                <Footer />
            </div>
            */ }
        </div>
    )
}

ItemDetail.propTypes = {
    data: PropTypes.array
}