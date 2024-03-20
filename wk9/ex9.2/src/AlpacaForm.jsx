import { useState } from 'react'
import "./AlpacaForm.css"

export function AlpacaForm () {
  // use object to handle form elements
  const initialFormData = {
    firstName: "",
    lastName: "",
    street: "",
    state: "Select",
    country: "",
    colors: []
  }

  // array of US states/territories for select field in form
  const states = [
    "Alaska"
    ,"Alabama"
    ,"Arkansas"
    ,"American Samoa"
    ,"Arizona"
    ,"California"
    ,"Colorado"
    ,"Connecticut"
    ,"District of Columbia"
    ,"Delaware"
    ,"Florida"
    ,"Georgia"
    ,"Guam"
    ,"Hawaii"
    ,"Iowa"
    ,"Idaho"
    ,"Illinois"
    ,"Indiana"
    ,"Kansas"
    ,"Kentucky"
    ,"Louisiana"
    ,"Massachusetts"
    ,"Maryland"
    ,"Maine"
    ,"Michigan"
    ,"Minnesota"
    ,"Missouri"
    ,"Mississippi"
    ,"Montana"
    ,"North Carolina"
    ,"North Dakota"
    ,"Nebraska"
    ,"New Hampshire"
    ,"New Jersey"
    ,"New Mexico"
    ,"Nevada"
    ,"New York"
    ,"Ohio"
    ,"Oklahoma"
    ,"Oregon"
    ,"Pennsylvania"
    ,"Puerto Rico"
    ,"Rhode Island"
    ,"South Carolina"
    ,"South Dakota"
    ,"Tennessee"
    ,"Texas"
    ,"Utah"
    ,"Virginia"
    ,"Virgin Islands"
    ,"Vermont"
    ,"Washington"
    ,"Wisconsin"
    ,"West Virginia"
    ,"Wyoming"
  ]

  // error handling
  const [errorObject, setErrorObject] = useState({
    firstName: "",
    lastName: ""
  })
  function validateErrors () {
    if(!formObject.firstName) {
      setErrorObject({
        ...errorObject,
        firstName: "First Name is required"
      })
    } else if(!formObject.lastName) {
      setErrorObject({
        ...errorObject,
        lastName: "Last Name is required"
      })
    } else {
      setErrorObject({
        ...errorObject,
        firstName: "This field is required"
      })
    }
  }

  // form handling
  const [formObject, setFormObject] = useState(initialFormData);

  function changeHandler(event) {
    console.log(event.target.value);
    if(event.target.name === "colors") {
      const colorName = event.target.id;
      // update colors array based on user selection
      if(formObject.colors.includes(colorName)) {
        setFormObject({
          ...formObject,
          colors: formObject.colors.filter((color) => color !== colorName)
        })
      } else {
        setFormObject({
          ...formObject,
          colors: [...formObject.colors, colorName]
        })
      }
    } else {
      setFormObject((previousForm) => {
        console.log(event.target.name)

        return {
          ...previousForm,
          [event.target.name]: event.target.value
        }
      })
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit triggered");
    console.log("the whole form object", formObject)

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <div className="formgroup">
            <label htmlFor="firstName">
              First Name
            </label>
            <input 
              type="text" 
              name="firstName" 
              id="firstName" 
              value={formObject.firstName}
              onChange = {changeHandler}
              onBlur = {validateErrors}
            />
            {errorObject.firstName && (
              <>
                <br />
                <small>{errorObject.firstName}</small>
              </>
            )}
          </div>
          <div className="formgroup">
            <label htmlFor="lastName">
              Last Name
            </label>
            <input 
              type="text" 
              name="lastName" 
              id="lastName"
              value={formObject.lastName}
              onChange = {changeHandler}
              onBlur = {validateErrors}
            />
            {errorObject.lastName && (
              <>
                <br />
                <small>{errorObject.lastName}</small>
              </>
            )}
          </div>
          <div className="formgroup">
            <label htmlFor="street">
              Street Address
            </label>
            <input 
              type="text" 
              name="street" 
              id="street"
              value={formObject.street}
              onChange = {changeHandler}
            />
          </div>
          <div className="formgroup">
            <label htmlFor="state">
              State/Territory
            </label>
            <select 
              name="state" 
              id="state"
              value={formObject.state}
              onChange = {changeHandler}
              >
                {states.map((singleState, index) => {
                    return (
                      <option 
                        key={index}
                        value={singleState}>
                          {singleState}
                      </option>
                    )
                })}
            </select>
          </div>
          <div className="formgroup">
            <label htmlFor="country">
              Country
            </label>
            <input 
              type="text" 
              name="country" 
              id="country"
              value={formObject.country}
              onChange = {changeHandler}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Tell us about your Alpaca interests!</legend>
          <div className="formgroup">
            <p>
              Favorite Alpaca Colors
            </p>
            <label htmlFor="brown">
              Brown
              <input 
                type="checkbox" 
                name="colors" 
                id="brown" 
                checked={formObject.colors.includes("brown")}
                onChange={changeHandler}
              />
            </label>
            <label htmlFor="black">
              Black
              <input 
                type="checkbox" 
                name="colors" 
                id="black" 
                checked={formObject.colors.includes("black")}
                onChange={changeHandler}
              />
            </label>
            <label htmlFor="beige">
              Beige
              <input 
                type="checkbox" 
                name="colors" 
                id="beige" 
                checked={formObject.colors.includes("beige")}
                onChange={changeHandler}
              />
            </label>
            <label htmlFor="pinto">
              Pinto
              <input 
                type="checkbox" 
                name="colors" 
                id="pinto"
                checked={formObject.colors.includes("pinto")}
                onChange={changeHandler} 
              />
            </label>
            <label htmlFor="white">
              White
              <input 
                type="checkbox" 
                name="colors" 
                id="white"
                checked={formObject.colors.includes("white")}
                onChange={changeHandler} 
              />
            </label>
          </div>
        </fieldset>

        <button type="submit" disabled={errorObject.firstName || errorObject.lastName}>
          Register
        </button>

      </form>
    </>
  )
} 