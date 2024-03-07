import PropTypes from "prop-types"
import "./ItemCard.css"
import clsx from 'clsx'
import retired from "../assets/icons/skull-crossbones-solid.svg"

export default function ItemCard({
    name,
    image,
    description,
    rating,
    retired,
    id
}) {
    return (
        <div className="legoCard">
            

            <div className="cardImg">
                <img src={image} alt={name} />
            </div>
            {retired && <div className="retired"> <img src={retired} title="this build is retired" /> </div>}
            <ul className="cardDetails">
                <li className="cardTitle">{name}</li>
                <li>{description}</li>
                <li>{rating}</li>
                <li>{retired}</li>
            </ul>
            
        </div>
    )
}

ItemCard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.string,
    retired: PropTypes.bool,
    id: PropTypes.string
}

/*
export default function ItemCard() {
    return (
        <div className="legoCard">
            Item Card
        </div>
    )
}
*/