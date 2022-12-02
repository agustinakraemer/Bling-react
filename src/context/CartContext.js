import { createContext, useState } from "react";


export const CartContext = createContext();
console.log (CartContext)

export const CartProvider = ({children}) => {
    const [cart, setCart]= useState([]);

    const clear = () =>{
        setCart([])
    }
    return (

        <CartContext.Provider value={{ cart, clear}}>
            {children}
        </CartContext.Provider>
    )
};



























/*
const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [ cartItems, setCartItems] = useState(() => { 
    try {
        const productsEnStorage = localStorage.getItem('cartProducts')
        return productsEnStorage ? JSON.parse(productsEnStorage) : []
    } catch (error) {
        return []
    }
 });

    useEffect (() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartItems));

    }, [cartItems]);

    const addItemToCart = (product) => {
        const enCart = cartItems.find (
            (productEnCart) => productEnCart.id === product.id
        );
        if(enCart) {
            setCartItems (
                cartItems.map((productEnCart) => {
                    if(productEnCart.id === product.id) {
                        return {... enCart, amount: enCart.amount + 1};
                    } else return productEnCart;
                })
            )
        } else {
            setCartItems([...cartItems, {...product, amount: 1}])
        }
        console.log(cartItems)
    };
    
    const deleteItemCart = (product) => {
            const enCart = cartItems.find(
                (productEnCart) => productEnCart.id === product.id
            );

            if(enCart.amount === 1) {
                setCartItems(
                    cartItems.filter((productEnCart) => productEnCart.id !== product.id)
                );
            } else {
                setCartItems((productEnCart) => {
                    if(productEnCart.id === product.id) {
                        return{...enCart, amount: enCart.amount -1}
                    } else return productEnCart;
                });
            }
        };
    
    return (
        <CartContext.Provider value = {{cartItems, addItemToCart, deleteItemCart}}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContext;
 */
/* 
import React, { useEffect, useState, createContext } from "react";

export const CartContext= createContext(null);

const CartProvider = (props) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item, qty) => {

        let product = {... item, qty: qty}
        setCart([...cart, product])

        console.log(product)
        console.log(cart)
    }

    return (
        <CartContext.Provider value={{cart, setCart, addToCart}}> {props.children} 

        </CartContext.Provider>
    )
}

export default CartProvider;  */