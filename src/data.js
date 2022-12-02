//importo los productos

const getById = (id, array) => array.find((el) => el.id === id);


//otro

export const onAdd = ( qty ) => {
    alert(`Has agregado ${qty} cervezas 🍺`);
  };