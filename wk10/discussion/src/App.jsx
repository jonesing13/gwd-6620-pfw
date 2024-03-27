import { Routes, Route } from 'react-router-dom'
import './App.css'

const Placeholder = () => (
  <div>
    <h1>this is some content</h1>
  </div>
)

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Placeholder />} />
      </Routes>
    </>
  )
}

export default App
