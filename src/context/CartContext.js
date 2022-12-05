import { createContext, useState } from "react";
import { act } from "react-dom/test-utils";


export const CartContext = createContext();
console.log (CartContext)

export const CartProvider = ({children}) => {
    const [cart, setCart]= useState([]);

    const clear = () =>{
        setCart([])
    }

    const addToCart= (newProd, quantity) => {
        
        const newObj = {
            ... newProd,quantity
        }
        if ( isInCart ( newObj.id )) {
            cart.map(el => {
                if(el.id === newObj.id)  {
                el.quantity += newObj.quantity
                }
                return(el)
                })
            }
        else {
            setCart ([... cart , newObj])
            }
        console.log(cart)
    }

    const isInCart = (id) => {
        return cart.some((prod)=> prod.id === id )
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    return (

        <CartContext.Provider value={{ cart, clear, isInCart, removeItem, addToCart}}>
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