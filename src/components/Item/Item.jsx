import React from "react";
import "./item.css"
import { Link } from "react-router-dom";
function Item( {products} ){
    return(
        <div className="item__data">
            <Link to={`/detail/${products.id}`} className='item__img__link'>
            <img src={products.img} alt="" className="item__img"/>
            </Link>
            <h2 className="item__title">{products.title}</h2>
            <p className="item__price">${products.price}</p>
        </div>
    )
}


export default Item;