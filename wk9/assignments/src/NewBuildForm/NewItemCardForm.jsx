import {useState} from "react"
import PropTypes from "prop-types";
import './NewItemCardForm.css'


export function NewItemCardForm( {addItemCardFn} ) {
    // set up an initial data set so we can "reset" at any point
    const initalItemCardSettings = {
        name: "",
        image: "",
        description: "",
        rating: "",
        retired: false,
    }

    // enable useState to control newCard data
    const [newItemCard, setNewItemCard] = useState(initalItemCardSettings);

    // enable form validation for new build/card
    // create state variable for errors
    const [errorObj, setErrorObj] = useState({
        name: "",
        image: "",
        description: "",
        rating: ""
    });
    // form validation function
    function validateForm() {
        let valid = true;
        const errors = {};

        if (!newItemCard.name) {
            errors.name = "Build name is required";
            valid = false;
        }
        if (!newItemCard.image) {
            errors.image = "An image of the build is required";
            valid = false;
        }
        if (!newItemCard.description) {
            errors.description = "Provide a description of the build";
            valid = false;
        }
        if (!newItemCard.rating) {
            errors.rating = "Provide a rating in whole or half numbers (out of 5)";
            valid = false;
        }
        // set message error for all of the above if left blank
        setErrorObj(errors);
        return valid;
    }

    function changeHandler(event) {
        setNewCard((prevItemCard) => {
            return {
                ...prevItemCard,
                [event.target.name]: event.target.value
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log(NewItemCard);
        if (validateForm(newItemCard)) {
            // if no errors, add new card
            addItemCardFn(newItemCard);
            // Reset values
            setNewItemCard({
                ...initalItemCardSettings
            });
        }
    }

    return (
        <>
            <form className="new-item-card-form-wrapper" onSubmit={submitHandler}>
                <h2 className="form__title">
                    Add a new Build to the collection!
                </h2>
                <fieldset>
                    <legend className="fieldset-heading">
                        Build Details
                    </legend>
                    <div className="form-group">
                        <label htmlFor="name">
                            Build Name
                        </label>
                        <input
                        type="text" name="name" id="name"
                        value={newItemCard.name} 
                        onChange={changeHandler}
                        />
                        {errorObj.name && <small className="error-message">{errorObj.name}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">
                            Picture
                        </label>
                        <input
                        type="text" name="image" id="image"
                        value={newItemCard.image} 
                        onChange={changeHandler}
                        />
                        {errorObj.image && <small className="error-message">{errorObj.image}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">
                            Build Description
                        </label>
                        <input
                        type="text" name="description" id="description"
                        value={newItemCard.description} 
                        onChange={changeHandler}
                        />
                        {errorObj.description && <small className="error-message">{errorObj.description}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">
                            Rating (out of 5)
                        </label>
                        <input
                        type="text" name="rating" id="rating"
                        value={newItemCard.rating} 
                        onChange={changeHandler}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <legend className="fieldset-heading">
                        Collection Details
                        </legend>
                    <div className="form-group">
                        <label htmlFor="retired">
                            This build is retired
                        </label>
                        <input type="checkbox" name="retired" id="retired" 
                        onChange={changeHandler}
                        value={newItemCard.retired}
                        />
                    </div>
                </fieldset>
                <button type="submit">
                    Add Build
                </button>
            </form>
        </>
    )
}

NewItemCardForm.propTypes = {
    addItemCardFn: PropTypes.func.isRequired
};