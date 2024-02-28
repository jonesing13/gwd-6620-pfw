import './camelid.css'

function Camelid({img, name, funFact}) {

    return (
        <div className="card">
            <div className="img">{img}</div>
            <h1>{name}</h1>
            <p>{funFact}</p>
        </div>
    );
}

export default Camelid;