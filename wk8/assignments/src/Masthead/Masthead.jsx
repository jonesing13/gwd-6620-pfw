import "./Masthead.css"
import mastheadImg from "../assets/lego-tiny-plants-masthead.png"

export default function Masthead() {
    return (
        <div className="masthead">
            <img src={mastheadImg} alt="My LEGO Botanical Collection"/>
            <h1>My LEGO<sup>&reg;</sup> Botanical Collection</h1>
        </div>
    )
}