import PropTypes from "prop-types"
import "./ItemCard.css"

export default function ItemCard({
    name,
    image,
    description,
    rating,
    active,
    id
}) {
    return (
        <div className="legoCard">
            Item Card
        </div>
    )
}

ItemCard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.any([PropTypes.string, PropTypes.number]),
    active: PropTypes.bool,
    id: PropTypes.any([PropTypes.string, PropTypes.number])
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