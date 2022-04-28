import React from "react";
import "./item.css"
import products from "../../data/productos";

function Item( {products} ){
    return(
        <div className="item__data">
            <img src={products.img} alt="" className="item__img" />
            <h2 className="item__title">{products.title}</h2>
            <p className="item__price">${products.price}</p>
        </div>
    )
}

export default Item;