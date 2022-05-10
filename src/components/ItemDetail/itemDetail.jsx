import React from "react";
import './itemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx'
import { useState } from "react";
import { Link } from "react-router-dom";

function ItemDetail( {product} ){
    const [isInCart, setIsInCart] = useState(false)
    function onAdd(count){
        alert("agregaste al carrito "+count+" items")
        setIsInCart(true)
    }
    return(
        <div className="item__detail">
            <img src={product.img} alt="" className="item__detail__img" />
            <div className="item__detail__info">
            <h2 className="item__detail__title">{product.title}</h2>
            <p className="item__detail__price">${product.price}</p>
            {isInCart?
            <Link to={`/cart`} >
                <button>VER CARRITO</button>
            </Link>
             :
            <ItemCount initial={1} stock={product.stock} txtButton="AGREGAR AL CARRITO" onAdd={onAdd}></ItemCount>
            }
            </div>
        </div>
    )
}

export default ItemDetail;