import PropTypes from "prop-types";

// return an image url when Animal is called
export default function Animal ({ url }) {
    return (
        <>
            <img src={url} />
        </>
    )
}

Animal.propTypes = {
    url: PropTypes.string.isRequired,
}
