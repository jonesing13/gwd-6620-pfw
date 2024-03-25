import { useState } from 'react'
import PropTypes from "prop-types"
import './NewItemCardForm.css'
import 'clsx'

export function NewItemCardForm( {addItemCardFn} ) {
    // set initial data for any adds; enable us to reset to "factory settings" at any time
    const initialItemCardSettings = {
        name: "",
        image: "",
        description: "",
        rating: "",
        retired: false
    }
    // set control items for adding new items to list
    const [newItemCard, setNewItemCard] = useState(initialItemCardSettings)
    // for validation, create a new state variable
    const [errorObj, setErrorObj] = useState({
        name: "",
        image: "",
        description: ""
    })

    // form validation
    function validateForm(newItemCard) {
        // console.log("triggering validation", newItemCard)
        let valid = true
        if(!newItemCard.name) {
            // set errorObj prop to error message
            setErrorObj((prevErrorObj) => {
                return {
                    ...prevErrorObj,
                    name: "The Name field is required"
                }
            })
            valid = false
        }
        if(!newItemCard.image) {
            // set errorObj prop to error message
            setErrorObj((prevErrorObj) => {
                return {
                    ...prevErrorObj,
                    image: "The Picture field is required"
                }
            })
            valid = false
        }
        if(!newItemCard.description) {
            // set errorObj prop to error message
            setErrorObj((prevErrorObj) => {
                return {
                    ...prevErrorObj,
                    description: "The Description field is required"
                }
            })
            valid = false
        }
        if(!newItemCard.rating) {
            // set errorObj name prop to error message
            setErrorObj((prevErrorObj) => {
                return {
                    ...prevErrorObj,
                    rating: "A rating (e.g. 1, 2, 3, 4, 5) is required"
                }
            })
            valid = false
        }
        // console.log(valid)
        return valid
    }

    // handle setting new data in form items/adds
    function changeHandler(event) {
        // console.log(event.target.name)
        if(event.target.name === "retired") {
            // toggle retired value when clicked
            // console.log(event.target.value)
            setNewItemCard((prevItemCard) => {
                return {
                    ...prevItemCard,
                    retired: !prevItemCard.retired
                }
            })
        } else {
            setNewItemCard((prevItemCard) => {
                return {
                    ...prevItemCard,
                    [event.target.name]: event.target.value
                }
            })
        }
        /* TODO: transform the rating to the "#/5" of the original list       
        if(event.target.name === "rating") => {
            setNewItemCcard((prevItemCard) => {
                return {
                    ...prevItemCard,
                    rating: event.target.value, "/5"
                }
            })
        }
        */
    }

    // handle submission functionality
    function submitHandler(event) {
        event.preventDefault()
        // console.log({ newItemCard })
        if(validateForm(newItemCard)) {
            // send card to App
            addItemCardFn(newItemCard)
            //reset values
            setNewItemCard(initialItemCardSettings)
        }
    }

    return (
        <form className="new-item-card-form-wrapper" onSubmit={submitHandler}>
            <h2 className="form__title">
                Add a new build to the collection!
            </h2>
            <fieldset>
                <legend className="fieldset-heading">
                    Build Details
                </legend>
                <div className={{"form-group": true, "error": errorObj.name}}>
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={newItemCard.name}
                        onChange={changeHandler}
                        onBlur={() => {
                            if(newItemCard.name) {
                                setErrorObj((prevErrorObj) => {
                                    return {
                                        ...prevErrorObj,
                                        name: ""
                                    }
                                })
                            }
                        }}
                    />
                    {errorObj.name && (
                        <>
                            <br />
                            <small className="error-message">
                                {errorObj.name}
                            </small>
                        </>
                    )}
                </div>
                <div className={{"form-group": true, "error": errorObj.image}}>
                    <label htmlFor="image">
                        Image file name:
                    </label>
                    <input 
                        type="text" 
                        name="image" 
                        id="image" 
                        value={newItemCard.image}
                        onChange={changeHandler}
                        onBlur={() => {
                            if(newItemCard.image) {
                                setErrorObj((prevErrorObj) => {
                                    return {
                                        ...prevErrorObj,
                                        image: ""
                                    }
                                })
                            }
                        }}
                    />
                    {errorObj.image && (
                        <>
                            <br />
                            <small className="error-message">
                                {errorObj.image}
                            </small>
                        </>
                    )}                    
                </div>
                <div className={{"form-group": true, "error": errorObj.description}}>
                    <label htmlFor="description">
                        Description:
                    </label>
                    <input 
                        type="text" 
                        name="description" 
                        id="description" 
                        value={newItemCard.description}
                        onChange={changeHandler}
                        onBlur={() => {
                            if(newItemCard.description) {
                                setErrorObj((prevErrorObj) => {
                                    return {
                                        ...prevErrorObj,
                                        description: ""
                                    }
                                })
                            }
                        }}
                    />
                    {errorObj.description && (
                        <>
                            <br />
                            <small className="error-message">
                                {errorObj.description}
                            </small>
                        </>
                    )}
                </div>
                <div className={{"form-group": true, "error": errorObj.rating}}>
                    <label htmlFor="rating">
                        Rating (out of 5):
                    </label>
                    <input 
                        type="text" 
                        name="rating" 
                        id="rating" 
                        value={newItemCard.rating}
                        onChange={changeHandler}
                    />
                    {errorObj.rating && (
                        <>
                            <br />
                            <small className="error-message">
                                {errorObj.rating}
                            </small>
                        </>
                    )}
                </div>
            </fieldset> 
            <fieldset>
                <legend className="fieldset-heading">
                    Build Status
                </legend>
                <div className="form-group radio-group">
                    <label htmlFor="retired">
                        This build is retired
                        <input 
                            type="checkbox" 
                            name="retired" 
                            id="retired" 
                            onChange={changeHandler}
                            checked={newItemCard.retired}
                            />
                    </label>
                </div>
            </fieldset> 

            <button type="submit" disabled={errorObj.name || errorObj.image || errorObj.description}>
                Add Build
            </button>
        </form>
    )
}

NewItemCardForm.propTypes = {
    addItemCardFn: PropTypes.func.isRequired
}