import React from 'react';

const ItemListContainer = (props) => {
    return(
        <h3 className={`${props.greeting}`}> ¡Bienvenido {props.greeting}!</h3>
    )
}

export default ItemListContainer;