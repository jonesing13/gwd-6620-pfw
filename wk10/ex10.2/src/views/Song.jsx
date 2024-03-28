import { Link, useParams } from "react-router-dom"

export function Song({data}) {
    const {slug} = useParams()
    const selectedSong = data.find((song) => song.slug === slug)
    console.log(selectedSong)
    return (
        <div>
            <nav className="nav-link">
                <Link to="/">Return to Home</Link>
            </nav>

            <div className="song-item">
                <h1>{selectedSong.title}</h1>
                <img src={selectedSong.cover} alt={selectedSong.title} />
                <p>
                    <strong>Artist:</strong> {selectedSong.artist}
                </p>
                <p>
                    <strong>Current rank:</strong> {selectedSong.rank}
                </p>
                <p>
                    <strong>Number of weeks on chart:</strong> {selectedSong.position.weeksOnChart}
                </p>
                <p>
                    <strong>Rank last week:</strong> {selectedSong.position.positionLastWeek}
                </p>
                <p>
                    <strong>Highest rank:</strong> {selectedSong.position.peakPosition}
                </p>
            </div>
        </div>
    )
}
