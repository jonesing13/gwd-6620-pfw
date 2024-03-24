
function Animal({ name, focusAnimalButton, deleteAnimalButton }) {
    return (
        <>
        <div className="animal">
            <h2>{name}</h2>
            <div className="animalDetail">
                <button onClick={() => {
                    focusAnimalButton(name)
                }}>Focus</button>
                <button className="button-secondary" onClick={() => {
                    deleteAnimalButton(name)
                }}>Delete</button>
            </div>
        </div>
        </>
    )
}
  
export default Animal