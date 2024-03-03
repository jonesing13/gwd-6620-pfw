export function LegoRow({name, image, description, count, starRating, price, status, odd}) {
    return (
        <tr className={odd && "odd"}>
            <td>{name}</td>
            <td><img src={image} alt={name} /></td>
            <td>{description}</td>
            <td>${price}</td>
            <td className={status.toLowerCase() === "retired" ?  "retired" : ""}>{status}</td>
      </tr>
    )
}