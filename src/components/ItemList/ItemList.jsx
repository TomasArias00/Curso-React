import React from "react";
import Item from "../Item/Item";
import "./itemList.css"
function ItemList( { products, onAdd } ){
    return(
        <>
        {products.map( thisproduct => {
            return(
                <div className="item">
                    <Item products={thisproduct} key={thisproduct.id}/>
                </div>
            )
        })}
            
            </>
    )
    
}

export default ItemList;