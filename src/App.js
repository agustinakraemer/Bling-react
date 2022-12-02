import './App.css';
import Navbar from './components/NavBar';
import React, {createContext, useEffect, useState} from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import {Home, Detail, Carrito, Category} from './pages/index';
import { CartProvider } from './context/CartContext';



function App() {
  /* const [cart, setCart] = useState([]);

   const increaseQty = (id) => {
    const item = allProducts?.find((product) => product.id === id);
    if(cart?.find((product) => product.id ===id)?.quantity === item?.stock) return;
    if(cart?.lengh === 0) {
      setCart([{ ...item, quantity: 1}]);
    } else if (cart.length>0 && !cart?.find(item => item.id ===id)) {
      setCart([...cart, {...item, quantity: 1}]);
    } else {
      setCart(currentCart => {
        return currentCart.map((product) => {
          if(product.id ===id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
      });
    }
  }  
  const getCantItem = (id) => {
    return cart?.find(item => item.id === id)?.quantity || 0;
  } */
  return (
    <div className="App">

      <CartProvider>

            <Navbar/>
            <Routes>
              <Route path="/category/:idCategory" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Carrito />} />
              <Route path="/product/:pruductId" element={<Detail />} />
            </Routes>
            
      </CartProvider>
  
    </div>
    
  );
}

export default App;