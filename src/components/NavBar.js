import React from 'react';
import logoBling from './logo_bling.png';
import CartWidget from './CartWidget';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
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
                    <a  href="#">
                        <img className="bling-logo" src={logoBling} alt="logotipo"/>
                    </a>
                </div>
                <div className="nav">
                    <a onClick={onInicio} href="#">Inicio</a>
                    <a onClick={onCategory} href="#">Categorías</a>
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