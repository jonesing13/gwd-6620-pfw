import { Routes, Route } from "react-router-dom"
import './App.css'
import { Home } from "./views/Home"
import { ItemDetail } from "./views/ItemDetail"
import legoData from "./assets/lego-data.json"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<ItemDetail data={legoData} />} />
    </Routes>
  )
}

export default App
