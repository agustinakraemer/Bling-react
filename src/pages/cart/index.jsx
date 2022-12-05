import React, { useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { removeItem } = useContext(CartContext);
    const { clear } = useContext(CartContext);
    const { cart } = useContext(CartContext);

    const total = cart?.reduce(
        (acc, item) => {
            return acc + item.price * item.quantity;
        },0);

    if (cart.length === 0) {
        return (
            <>
            <section className='tabla_productos'>
                <p className="carritoVacio">No hay productos en el carrito.</p>
                <Link to={'/'}> Ir al inicio </Link>
            </section>
            </>
        ) 
    } else {
            return (
        
                <section className='tabla_productos'>
                    <h2>Carrito</h2>
                    <table className='tabla'>
                        <thead className='tabla__head'>
                            <tr>
                                <td> </td>
                                <td align="center">Nombre</td>
                                <td align="center">Precio</td>
                                <td> </td>
                            </tr>
                        </thead>
        
                        {cart.map(el =>
                        <tbody className='tabla__body'>
                            <tr key={el.id}>
                                <td align="center"><img className="imagen-carrito" src={el.image}/></td>
                                <td align="center">{el.name}</td>
                                <td align="center">${el.price}</td>
                                <td><button onClick={()=> removeItem(el.id)} className='producto__button btn-eliminar'>Eliminar</button></td>
                            </tr> 
                        </tbody>
                        )}
                    </table>
                    <p className='sumaTotal'>Total ${total}<span></span></p>
                    <button id="botonComprar" onClick={()=> clear()} className="producto__button boton-agregar">Comprar</button>
        
                </section>
            )
        }
    };
    


export default Cart;