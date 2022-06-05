import React from "react";
import './itemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx'
import { useState } from "react";
import { Link } from "react-router-dom";
import useCartContext from "../../store/CartContext";

function ItemDetail( {product} ){
    const [isInCart, setIsInCart] = useState(false)
    const { addToCart } = useCartContext();
    function onAdd(count){
        setIsInCart(true)
        addToCart(product, count)

        
    };

    if(!product){
        return(
            <h1>CARGANDO...</h1>
        )
    }
    else{
    return(
        <div className="item__detail">
            <img src={product.img} alt="" className="item__detail__img" />
            <div className="item__detail__info">
            <h2 className="item__detail__title">{product.title}</h2>
            <p className="item__detail__price">${product.price}</p>
            {isInCart?
            <Link to={`/cart`} >
                <button className="see__cart">VER CARRITO</button>
            </Link>
             :
            <ItemCount initial={1} stock={product.stock} txtButton="AGREGAR AL CARRITO" onAdd={onAdd}></ItemCount>
            }
            </div>
        </div>
    )
        }
}

export default ItemDetail;