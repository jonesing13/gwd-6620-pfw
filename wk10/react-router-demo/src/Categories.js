// src/Categories.js
import { Link, Outlet } from 'react-router-dom'

export const Categories = () => (
    <div>
        <h2>Categories</h2>
        <p>Browse items by category.</p>
        <nav>
            <ul>
                <li>
                    <Link to="desktops">Desktops</Link>
                </li>
                <li>
                    <Link to="laptops">Laptops</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
    </div>
)
// By nesting <Route> components within the /categories <Route>, we’re able to create a more structured URL and UI hierarchy. This way, when a user navigates to /categories/desktops or /categories/laptops, the respective <Desktops> or <Laptops> component will be rendered within the <Categories> component, showcasing a clear parent–child relationship between the routes and components.
// An <Outlet> is placed in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered.

export const Desktops = () => <h3>Desktop PC Page</h3>
export const Laptops = () => <h3>Laptops Page</h3>