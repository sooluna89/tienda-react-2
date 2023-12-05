import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo"><h1>MODA SHOP</h1></Link>

            <ul className="menu">
                <li><Link className="menu-link" to="/">Inicio</Link></li>
                <li><Link className="menu-link" to="/productos/zapatillas">Zapatillas</Link></li>
                <li><Link className="menu-link" to="/productos/indumentaria">Indumentaria</Link></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default Navbar