import { Link } from "react-router-dom"
import musicData from "../assets/music-list.json"

export function Home() {
    return (
        <>
            <h1>Music List</h1>
            {musicData.map((song) => {
                return (
                    <div key={song.slug}>
                        <img src={song.cover} alt={song.title} />
                        <Link to={`${song.slug}`}><p>
                            <strong>{song.title}</strong> by {song.artist}
                        </p></Link>
                    </div>
                )
            })}

        </>
    ) 
}