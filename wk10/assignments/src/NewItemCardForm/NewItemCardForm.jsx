import {useState} from "react"
import PropTypes from "prop-types";
import './NewItemCardForm.css'

//removed this from NewItemCardForm():::: {addItemCardFn}
export function NewItemCardForm(  ) {
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
/*
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
            errors.rating = "Provide a rating from 0 to 5";
            valid = false;
        }
        // set message error for all of the above if left blank
        setErrorObj(errors);
        return valid;
    }
*/
    function changeHandler(event) {
        setNewCard((prevItemCard) => {
            return {
                ...prevItemCard,
                [event.target.name]: event.target.value
            }
        })
    }
/* // with validation on submit
    function submitHandler(event) {
        event.preventDefault();
        console.log(newItemCard);
        if (validateForm(newItemCard)) {
            // if no errors, add new card
            addItemCardFn(newItemCard);
            // Reset values
            setNewItemCard({
                ...initalItemCardSettings
            });
        }
    }
    */
    function submitHandler(event) {
        event.preventDefault();
        console.log({newItemCard});
        setNewItemCard((prevItemCard) => {
            return {
                ...prevItemCard,
                [event.target.name]: event.target.value
            }
        })
        }
    }

    return (
        <>
            <form className="new-item-card-form-wrapper" onSubmit={submitHandler}>
                <h2 className="form__title">
                    Add a new build to the collection!
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
                        {errorObj.name && <small className="error-message"><br />{errorObj.name}</small>}
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
                        {errorObj.image && <small className="error-message"><br />{errorObj.image}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">
                            Description
                        </label>
                        <input
                        type="text" name="description" id="description"
                        value={newItemCard.description} 
                        onChange={changeHandler}
                        />
                        {errorObj.description && <small className="error-message"><br />{errorObj.description}</small>}
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
                        {errorObj.rating && <small className="error-message"><br />{errorObj.rating}</small>}
                    </div>
                </fieldset>

                <fieldset>
                    <legend className="fieldset-heading">
                        Build Status
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

NewItemCardForm.propTypes = {
    addItemCardFn: PropTypes.func.isRequired
};