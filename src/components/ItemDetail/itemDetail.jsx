import React from "react";
import './itemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx'
function ItemDetail( {product} ){
    return(
        <div className="item__detail">
            <img src={product.img} alt="" className="item__detail__img" />
            <div className="item__detail__info">
            <h2 className="item__detail__title">{product.title}</h2>
            <p className="item__detail__price">${product.price}</p>
            <ItemCount initial={1} stock={product.stock} txtButton="FINALIZAR COMPRA" handle='handleAddToCart'></ItemCount>
            </div>
        </div>
    )
}

export default ItemDetail;