import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from '../../context/CartContext';

const Products = () => {

    const [setProducts] = useState([]);
    const { addItemToCart, products } = useContext(CartContext);
   
    const {idCategory} = useParams ();

    useEffect(()=> {
        const getProducts = async ()=> {
            const data = await fetch('https://636a72a4c07d8f936d9e3a2e.mockapi.io/products');
            const dataProducts = await data.json();
            if (idCategory) {
                setProducts(dataProducts.filter(item => item.category === idCategory));
            } else {
                setProducts(dataProducts);
            }        
        }
        getProducts();
        }, [idCategory])

        const navigate = useNavigate();
        const onCard = () => {
            navigate('/product/${id}');
        }
        
    return(
        <div className="main">
            
                <section className="section_container container">
                    <div className="grid " id="contenedor__productos">
                    {products.map((product, i)=> (
                        <div key={i} className="producto__informacion">
                            <img onClick={onCard} className="producto__imagen" src={product.image} alt="nature"/>
                            <div>
                            <p onClick={onCard} className="producto__nombre">{product.name}</p>
                            <p className="producto__precio">${product.price}</p>
                            <p className="producto__categoria">Categoría: {product.category}</p>
                            </div>
                            {!product.inCart ? (
                            <button onClick={() => addItemToCart(product)} className="producto__button" id={product.id}> Añadir al carrito </button>
                            ) : (
                            <button>En el carrito</button>
                            )}
                      </div>
                    ))}
                    </div>
                </section>

                
        </div>
    )    
  /* Traemos del context la funcion para agregar un producto */
  /* const { addItemToCart, products } = useContext(CartContext);

  const navigate = useNavigate();
    const onCard = () => {
        navigate('/product/${id}', {state: item});
    }

  return (
    <div className={styles.productsContainer}>
      {products &&
        ProductsList.map((product, i) => (
          <div key={i} className="producto__informacion">
            <img onClick={onCard} className="producto__imagen" src={product.image} alt="nature"/>
            <div>
              <p onClick={onCard} className="producto__nombre">{product.name}</p>
              <p className="producto__precio">${product.price}</p>
              <p className="producto__categoria">Categoría: {product.category}</p>
            </div>
            {!product.inCart ? (
              <button onClick={() => addItemToCart(product)} className="producto__button" id={product.id}> Añadir al carrito </button>
            ) : (
              <button>En el carrito</button>
            )}
          </div>
        ))}
    </div>
  ); */
};

export default Products;
