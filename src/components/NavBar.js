import React, { useContext } from 'react';
import logoBling from './logo_bling.png';
import CartWidget from './CartWidget';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';

const Navbar = () => {
   /*  const cartContext = useContext(CartContext);
    const { cart } = cartContext; */

    const navigate = useNavigate();
    const onInicio = () => {
        navigate('/');
    }
    const onCategory = () => {
        navigate('/category');
    }
    return (
        <div className="nav-bg">
            <nav className="principal-navegation contenedor">
                <div className="div-logo">
                    <Link to={'/'}>
                        <img className="bling-logo" src={logoBling} alt="logotipo"/>
                    </Link>
                </div>
                <div className="nav">
                    <Link to={'/'}>Inicio</Link>
                    <Link to={'/'}>Clientes</Link>
                    <Link to={'/'}>Nosotros</Link>
                    <Link to={'/'}>Contacto</Link>
                </div>
                <div className="carrito-div">
                <Link to={'/cart'}> <CartWidget/> </Link>
                </div>    

            </nav>
        </div>
    )
}

export default Navbar;