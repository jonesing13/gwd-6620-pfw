function Animal({ name, deleteFn, focusFn }) {
    // using anonymous functions to call stuff from the other file
    return (
        <div className="animal">
            <h2>{name}</h2>
            <div>
                <button onClick={() => {
                    focusFn(name)
                }} >Focus</button>
                <button className="button-secondary" onClick={() => {
                    deleteFn(name)
                }}>Delete</button>
            </div>
        </div>
    )
}
  
export default Animal