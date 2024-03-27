import { Link, useParams } from "react-router-dom"

export function Song({data}) {
    const {slug} = useParams()
    const selectedSong = data.find((song) => song.slug === slug)
    console.log(selectedSong)
    return (
        <>
            <nav>
                <Link to="/">Return to Home</Link>
            </nav>

            <h1>{selectedSong.title}</h1>
            <img src={selectedSong.cover} alt={selectedSong.title} />
            <p>
                <strong>Artist:</strong> {selectedSong.artist}
            </p>
            <p>
                <strong>Rank:</strong> {selectedSong.rank}
            </p>
        </>
    )
}
