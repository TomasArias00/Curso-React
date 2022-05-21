import { createContext } from "react";
import { useContext, useState } from 'react';

const CartContext = createContext();
const useCartContext = () => useContext(CartContext)




export function CartContextProvider({children}){
    const [cart, setCart] = useState([]); 
    const addToCart = (product, cant) => {
        const cartList = [...cart];
        const cartListComp = cartList.some(item => item.id === product.id );
        
        if(cartListComp){
            const addQuantity = cart.map(cartItem =>{
                if(cartItem.id === product.id){
                    cartItem.cant += cant ;
                    return cartItem;
                }
                else{
                    return cartItem;
                }
            })
            setCart(addQuantity)
        }else{
        const newItem = {...product, cant}
        setCart([...cart, newItem]);
        }
    }

    const removeFromCart = (id) => {
        const newCart = [...cart];
        const cartFilter = newCart.filter( (item) => {
            return item.id !== id;
        });
        setCart(cartFilter);
    }

    const clearCart = () => {
        setCart([])
    }

    const cantInCart = () => {
       const total = cart.forEach(item => total += item.cant)
    }

    const getTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach(item => totalPrice += item.cant * item.price)
        return totalPrice;
    }



    // const estaEnElCarro = (id) => {
    //     const cartList = [...cart];
    //     const cartListComp = cartList.some(item => item.id === id.id );
    //     console.log("true or false: ",cartListComp)
    // }

    const contextFunction = () => {};

    return(
        <CartContext.Provider value={ { contextFunction, cart, addToCart, removeFromCart, clearCart, cantInCart, getTotalPrice} }>
            {children}
        </CartContext.Provider>
    )
}

export default useCartContext;