import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo"><h1>MODA SHOP</h1></Link>
            <div className="cart-icon">
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            
            <ul className="menu">
                <li><Link className="menu-link" to="/">Inicio</Link></li>
                <li><Link className="menu-link" to="/zapatillas">zapatillas</Link></li>
                <li><Link className="menu-link" to="/indumentaria">indumentaria</Link></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default Navbar