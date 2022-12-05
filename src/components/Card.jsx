import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useState } from "react";
import ItemCount from "./ItemCount";

const Card = ({ item}) => {
    const [compra, setCompra] = useState(false);
    const { addToCart } = useContext(CartContext);
    const navegar = useNavigate();
    const stock = 3;
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
            
            <ItemCount onClick={()=> addToCart(item)} stock={stock} initial={1} onAdd={onAdd} />
           {/* {<button  className="producto__button" id={item.id}> Añadir al carrito </button>} */ }
        </div>
    )
};

export default Card;

/* const Card = ({ item}) => {

    const [compra, setCompra]= useState(false)
    const {name, price, stock, img, id}= item;
    const navegar = useNavigate()
    const{ addItem }=useCart()
 
    const onAdd = (cantidad) => {
      
        setCompra(true)
      
         addItem({...item, cantidad})
        
    }

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
            { !compra 
            ? <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            : <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
            <button className="btn btn-warning" onClick={()=>navegar('/')}>Seguir Comprando</button>
            <button className="btn btn-info" onClick={()=>navegar('/cart')}>Ir al carrito</button>
            </div>}
           {/* {<button  className="producto__button" id={item.id}> Añadir al carrito </button>}  }
        </div>
    )
};
 */