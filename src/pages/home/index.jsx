import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Card from "../../components/card";
import Category from '../category/index';

const Home =() =>{
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
     /*    useEffect(()=> {
            const getProducts = async ()=> {
            try {
                const data = await fetch('https://636a72a4c07d8f936d9e3a2e.mockapi.io/products');
                const dataProducts = await data.json();
                setProducts(dataProducts);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false)
            }
            }
        getProducts();
  }, [])

  console.warn('products',products); */
  const {idCategory} = useParams ();

    useEffect(()=> {
        const getProducts = async ()=> {
            const data = await fetch('https://636a72a4c07d8f936d9e3a2e.mockapi.io/products');
            const dataProducts = await data.json();
            if (idCategory) {
                setProducts(dataProducts.filter(idCategory));
            } else {
                setProducts(dataProducts);
            }        
       /*  try {
            const data = await fetch('https://636a72a4c07d8f936d9e3a2e.mockapi.io/products');
            const dataProducts = await data.json();
            setProducts(dataProducts);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        } */
        }
        getProducts();
        }, [])

    return(
        <div>
            <Category />
            {isLoading ? (
                <div> Loading...</div>
            ): (
                <section className="container">
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