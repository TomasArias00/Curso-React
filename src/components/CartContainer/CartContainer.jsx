import React, {useContext} from "react";
import './CartContainer.css'
import useCartContext from '../../store/CartContext.jsx'
import { clear } from "@testing-library/user-event/dist/clear";

function CartContainer(){

    const { cart, removeFromCart, clearCart } = useCartContext();

    if(cart.length === 0 ){
        return(
            <div>
                <p>NO HAY ITEMS EN EL CARRITO...</p>
                <a href="/">Volver al catálogo</a>
            </div>
        )
    }
    else{
    return(
        <div className="cart__container">
            {cart.map( itemCart => {
                return <div key={itemCart.id} className="cart__item">
                    <img src={itemCart.img} alt="" className="cart__item__img"/>
                    <div className="car__item__data">
                    <h2>{itemCart.title}</h2>
                    <h2>{itemCart.cant}</h2>
                    <h2>${itemCart.cant * itemCart.price}</h2>
                    <button onClick={() => removeFromCart(itemCart.id)} className="cart__item__button">X</button>
                </div>
                </div>
            })}
            <button onClick={clearCart} className="cart__item__button">VACIAR CARRITO</button>
        </div>
    )
    }   
    }

export default CartContainer;