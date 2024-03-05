export function LegoRow({name, image, description, price, status, odd, deleteRow, copyRow}) {
    return (
        <tr className={odd && "odd"}>
            <td>{name}</td>
            <td><img src={image} alt={name} /></td>
            <td>{description}</td>
            <td>${price}</td>
            <td className={status.toLowerCase() === "retired" ?  "retired" : ""}>{status}</td>
            <td>
                <button>{copyRow}</button>
                <button className="button-secondary">{deleteRow}</button>
            </td>            
      </tr>
    )
}