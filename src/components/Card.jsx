import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useState } from "react";
import ItemCount from "./ItemCount";

const Card = ({ item}) => {
    const [compra, setCompra] = useState(false);
    const { addToCart } = useContext(CartContext);
    const navegar = useNavigate();
    const onAdd = (quantity) => {
        setCompra(true)
        addToCart(item, quantity)
    }

    const onCard = () => {
        navegar('/product/${id}', {state: item});
    }
    return (
        <div className="producto">
            <img onClick={onCard} className="producto__imagen" src={item.image} alt="nature"/>
            <div key={item.id} className="producto__informacion">
                <p onClick={onCard} className="producto__nombre">{item.name}</p>
                <p className="producto__precio">${item.price}</p>
                <p className="producto__categoria">Categoría: {item.category}</p>
            </div>
            
            <ItemCount onClick={()=> addToCart(item)} initial={1} onAdd={onAdd} />
           {/* {<button  className="producto__button" id={item.id}> Añadir al carrito </button>} */ }
        </div>
    )
};

export default Card;
