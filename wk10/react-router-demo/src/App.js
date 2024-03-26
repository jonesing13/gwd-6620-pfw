import { Link, Route, Routes } from 'react-router-dom'
import { Categories, Desktops, Laptops } from './Categories'
import Products from './Products'

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to our homepage!</p>
  </div>
)

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/" element={<Categories />}>
          <Route path="desktops" element={<Desktops />} />
          <Route path="laptops" element={<Laptops />} />
        </Route>
        <Route path="/products/*" element={<Products />} />
      </Routes>
    </div>
  )
}