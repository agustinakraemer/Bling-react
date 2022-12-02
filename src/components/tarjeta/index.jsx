import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item}) => {
    const navigate = useNavigate();
    const onCard = () => {
        navigate('/product/${id}', {state: item});
    }
    return (
        <div onClick={onCard} className="producto">
            <img className="producto__imagen" src={item.image} alt="nature"/>
            <div key={item.id} className="producto__informacion">
                <p className="producto__nombre">{item.name}</p>
                <p className="producto__precio">${item.price}</p>
                <p className="producto__categoria">Categoría: {item.category}</p>
            </div>
            {/* <button className="producto__button" id={item.id} category= {item.category}> Añadir al carrito </button> */}
        </div>
    )
};

export default Card;