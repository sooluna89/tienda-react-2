import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div className="cart-icon">
            <Link className="menu-link" to="/carrito">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="numerito">{cantidadEnCarrito()}</span>
            </Link>
        </div>
    );
};

export default CartWidget;
