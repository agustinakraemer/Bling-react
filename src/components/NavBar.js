import React from 'react';
import logoBling from './logo_bling.png';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <div className="nav-bg">
            <nav className="principal-navegation contenedor">
                <div className="div-logo">
                    <a  href="#">
                        <img class="bling-logo" src={logoBling} alt="logotipo"/>
                    </a>
                </div>
                <div className="nav">
                    <a href="#">Inicio</a>
                    <a href="#">Productos</a>
                    <a href="#">Cliente</a>
                    <a href="#">Contacto</a>
                </div>
                <div className="carrito-div">
                    <CartWidget/>
                </div>    
            </nav>
        </div>
    )
}

export default Navbar;