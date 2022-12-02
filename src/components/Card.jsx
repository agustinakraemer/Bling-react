import React from "react";
import { useNavigate } from "react-router-dom";


const Card = ({ item}) => {

    const navigate = useNavigate();
    const onCard = () => {
        navigate('/product/${id}', {state: item});
    }
    return (
        <div className="producto">
            <img onClick={onCard} className="producto__imagen" src={item.image} alt="nature"/>
            <div key={item.id} className="producto__informacion">
                <p onClick={onCard} className="producto__nombre">{item.name}</p>
                <p className="producto__precio">${item.price}</p>
                <p className="producto__categoria">Categoría: {item.category}</p>
            </div>
            {/* <ItemCount stock={item.stock} initial={1} onAdd={onAdd} /> */}
           {<button  className="producto__button" id={item.id}> Añadir al carrito </button>} 
        </div>
    )
};

export default Card;
