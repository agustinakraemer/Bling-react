import React, { useEffect, useState } from 'react';
import Card from "../../components/card";

const Home =() =>{
/*     const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const startProduct = useRef(1);
    const endProduct = useRef(20);
    const getProducts = async (start = '1', end = '20') => {
        try {
            const promises = [];
            for (let i = start; i <= end; i++) {
                promises.push(fetch(`https://636a72a4c07d8f936d9e3a2e.mockapi.io/products`).then(res => res.json()));
            }
            const results = await Promise.all(promises);
            const newProduct = results.map((product) => {
                return {
                    id: product.id,
                    nombre: product.name,
                    image: product.image,
                    price: product.price,
                }
            });
            setProducts(newProduct);

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getProducts(startProduct.current, endProduct.current);
    }, []);

    console.log('products',products); */
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
        useEffect(()=> {
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
  console.warn('products',products);

    return(
        <div>
            <h2>Home</h2>
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