import { Routes, Route } from "react-router-dom"
import './App.css'
import { Home } from "./views/Home"
import { ItemDetail } from "./views/ItemDetail"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<ItemDetail />} />
    </Routes>
  )
}

export default App
