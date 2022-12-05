import React, {useState} from 'react';

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
    {/* <div className='item-count'>
        <button  className='producto__button btn-resta'onClick={restar}>-</button>
        <span  className='btn-cant'>{count}</span>
        <button className='producto__button btn-suma' onClick={sumar}>+</button>
    </div> */}
        <button  className='producto__button btn-comprar m-3'onClick={onAdd}>comprar</button>
    </>
  )
}

export default ItemCount;