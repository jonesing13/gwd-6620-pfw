import { NavLink, Route, Routes } from 'react-router-dom'
import { Home } from './views/Home'
import { Alpacas } from './views/Alpacas'
import { Llamas } from './views/Llamas'

export default function App() {
  return (
    <div>
      {/* Page Navigation */}
      <nav>
        <ul className="topnav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/alpacas">Alpacas</NavLink>
          </li>
          <li>
            <NavLink to="/llamas">Llamas</NavLink>
          </li>
        </ul>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alpacas" element={<Alpacas />} />
        <Route path="/llamas" element={<Llamas />} />
      </Routes>
    </div>
  )
}