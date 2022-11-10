import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Card from "../../components/card";
import Category from '../category/index';

const Home =() =>{
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
   
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

    return(
        <div className="main">
            <Category />
            {isLoading ? (
                <div> Loading...</div>
            ): (
                <section className="section_container">
                    <div className="grid " id="contenedor__productos">
                    {products.map(product => (
                        <Card key={product.id} item={product} />
                    ))}
                    </div>
                </section>

                )}
        </div>
    )    
}

export default Home;