import './App.css';
import Navbar from './components/NavBar';
import React, {createContext, useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import {Home, Detail, Cart} from './pages/index';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">

      <CartProvider>

            <Navbar/>
            <Routes>
              <Route path="/category/:idCategory" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:productId" element={<Detail />} />
            </Routes>

      </CartProvider>
  
    </div>
    
  );
}

export default App;