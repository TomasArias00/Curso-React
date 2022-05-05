import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import Item from "../Item/Item";
import "./itemList.css"
function ItemList( { products } ){
    return(
        <>
        {products.map( thisproduct => {
            return(
                <div className="item">
                    <Item products={thisproduct} key={thisproduct.id}/>
                    <ItemCount initial={1} stock={thisproduct.stock} txtButton="VER MAS" id={thisproduct.id}/>
                </div>
            )
        })}
            
            </>
    )
    
}

export default ItemList;