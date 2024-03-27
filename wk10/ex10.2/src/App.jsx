import { Route, Routes} from "react-router-dom"
import { Home } from "./views/Home"
import { Song } from "./views/Song"
import './App.css'
import musicData from "./assets/music-list.json"

// You will create an app with just 2 views but with 51 possible routes by utilizing the provided json file to display a song detail page for each song.
// Details:
//      use <HashRouter> for your router
//      put all the song links on your home view
//      create a single song view that will display the data 

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Song data={musicData} />} />
      </Routes>
    </>
  )
}

export default App
