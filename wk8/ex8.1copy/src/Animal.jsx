import PropTypes from "prop-types"; //technically this is built in when you use Typescript

export default function Animal ({ url }) {
    return (
        <>
            <img src={url} />
        </>
    )
}

// use terminal command: 'npm install prop-types --save' will add the prop-types right into your pacakage.json file under "dependencies" to share w other folks accessing your code
// otherwise, add -dev to the command to add to the devDependencies on your package.json file, if you're like the only one using the file I think. "I'm only concerned with this for dev purposes"

// now you can use propTypes 

Animal.propTypes = {
    url: PropTypes.string.isRequired,
}

