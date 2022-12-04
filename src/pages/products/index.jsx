import React, { useContext } from "react";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Card from '../../components/Card'
import Category from '../category/index';
import Json from '../Json.json'

const Products = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
   
   const {idCategory} = useParams ();

    useEffect(()=> {
        const getProducts = async ()=> {
            const data = await fetch(Json);
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
                <section className="section_container container">
                    <div className="grid " id="contenedor__productos">
                    {Json.map(product => (
                        <Card key={product.id} item={product} />
                    ))}
                    </div>
                </section>

                )}
        </div>
    )    
};

export default Products;
