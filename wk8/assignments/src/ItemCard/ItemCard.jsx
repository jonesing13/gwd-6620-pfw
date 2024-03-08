import PropTypes from "prop-types"
import "./ItemCard.css"
import trash from "../assets/icons/trash-can-regular.svg"
import duplicate from "../assets/icons/copy-regular.svg"
import dead from "../assets/icons/face-dizzy-regular_yellow.svg"

export default function ItemCard({
    name,
    image,
    description,
    rating,
    retired,
    id,
    deleteFn,
    duplicateFn
}) {
    return (
        <div className="legoCard">

            <div className="cardImg">
                <img src={image} alt={name} />
            </div>

            {/* this is a conditional div that only shows when the lego/build is 'retired' */}
            {retired && <div className="retired"> <img src={dead} title="this build is retired" /> </div>}

            <ul className="cardDetails">
                <li className="cardTitle">{name}</li>
                <li>{description}</li>
                <li>{rating}</li>

                <li className="actions">
                    {/* call the copy function and show a copy icon */}
                    <a href="#" onClick={(evt) => {
                        evt.preventDefault();
                        duplicateFn(id)
                    }}>
                        <img src={duplicate} />
                    </a>

                    {/* call the delete function and show a trash can image */}
                    <a href="#" onClick={(evt) => {
                        evt.preventDefault();
                        deleteFn(id)
                    }}>
                        <img src={trash} />
                    </a>
                </li>
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
    id: PropTypes.string,
    deleteFn: PropTypes.func,
    duplicateFn: PropTypes.func
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