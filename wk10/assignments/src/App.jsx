import { Routes, Route } from "react-router-dom"
import { useLayoutEffect } from "react";
import './App.css'
import { Home } from "./views/Home"
import { ItemDetail } from "./views/ItemDetail"
import legoData from "./assets/lego-data.json"


function App() {
  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<ItemDetail data={legoData} />} />
      </Routes>
    </>
  )
}

export default App
