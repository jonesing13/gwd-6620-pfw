import { Link } from "react-router-dom"
import musicData from "../assets/music-list.json"

export function Home() {
    return (
        <>
            <h1>Music List</h1>
            <div className="wrapper">
            {musicData.map((song) => {
                return (
                    <Link to={`${song.slug}`}><div key={song.slug} className="song-item">
                        <img src={song.cover} alt={song.title} />
                        <p>
                            <strong>{song.title}</strong> by {song.artist}
                        </p>
                    </div></Link>
                )
            })}
            </div>
        </>
    ) 
}