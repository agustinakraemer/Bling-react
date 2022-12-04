import React, {useState} from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
  const [count, setCount]=useState(initial)
    const restar = () => {
        if(count > initial){
            setCount(count-1)
        }
    }

    const sumar=()=>{
        if(count<stock){
            setCount(count + 1)
        }
    }

  return (
    <>
    <div>
        <button className='btn btn-success' onClick={sumar}>+</button>
        <span  className='btn btn-light'>{count}</span>
        <button  className='btn btn-danger'onClick={restar}>-</button>
    </div>
        <button  className='btn btn-primary m-3'onClick={onAdd}>comprar</button>
    </>
  )
}

export default ItemCount;


/* import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const ItemCount = ({ initial, stock, onAdd }) => {
  //hook de estado
  const [qty, setQty] = useState(initial);

  let navigate = useNavigate();

  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button
          className="count-container__button"
          onClick={() => addProduct(-1)}
          disabled={qty === initial ? true : null}
        >
          -
        </button>
        <span className="count-container__qty">{qty}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
          disabled={qty === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className="producto__button"
        onClick={() => {onAdd(qty)}}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount; */

