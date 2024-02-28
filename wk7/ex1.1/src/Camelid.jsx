import './camelid.css'

function Camelid({img, name, funFact}) {

    return (
        <div className="card">
            <img src={img} className="img" />
            <h1>{name}</h1>
            <p>{funFact}</p>
        </div>
    );
}

export default Camelid;