import { Link, useParams } from "react-router-dom"

export function Song({data}) {
    const {slug} = useParams
    const selectedSong = data.find((song) => song.slug === slug)
    console.log(selectedSong)
    return (
        <>
            <nav>
                <Link to="/">Return to Home</Link>
            </nav>

            <h1>Song</h1>
        </>
    )
}
