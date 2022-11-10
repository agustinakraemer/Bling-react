import React from 'react';
import logoBling from './logo_bling.png';
import CartWidget from './CartWidget';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
                    <Link to={'/'}>
                        <img className="bling-logo" src={logoBling} alt="logotipo"/>
                    </Link>
                </div>
                <div className="nav">
                    <Link to={'/'}>Inicio</Link>
                    <Link to={'/'}>Contacto</Link>
                </div>
                <div className="carrito-div">
                    <CartWidget/>
                </div>    

            </nav>
        </div>
    )
}

export default Navbar;