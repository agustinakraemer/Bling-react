import './App.css';
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { Route, Router, Routes } from 'react-router-dom';
import {Home, Detail} from './pages/index';


function App() {
  const [products, setProducts] = useState([]);
  useEffect(()=> {
    const getProducts = async ()=> {
      try {
        const data = await fetch('https://636a72a4c07d8f936d9e3a2e.mockapi.io/products');
        const dataProducts = await data.json();
        setProducts(dataProducts);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [])
  console.warn('products',products);
  
  return (
    <div className="App">
      <Navbar/>
   {/*    <ItemListContainer greeting='Ezequiel'/> */}
      {/* <section className="container">
        <div className="grid " id="contenedor__productos">
          {products.length > 0 ? products.map(product => (
            <div className="producto">
                  <img className="producto__imagen" src={product.image} alt="nature"/>
                  <div key={product.id} class="producto__informacion">
                      <p className="producto__nombre">{product.name}</p>
                      <p className="producto__precio">${product.price}</p>
                  </div>
                <button className="producto__button" id={product.id}> Añadir al carrito </button>
            </div>
          )): <h3>No hay productos</h3>}
        </div>
      </section> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail" element={<Detail />} />
        </Routes>
      </main>
      {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Bling Tienda
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </div> */}
      
    </div>
    
  );
}

export default App;
