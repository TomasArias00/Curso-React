import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import Item from "../Item/Item";
import "./itemList.css"
function ItemList( { products, onAdd } ){
    return(
        <>
        {products.map( thisproduct => {
            return(
                <div className="item">
                    <Item products={thisproduct} key={thisproduct.id}/>
                    <ItemCount onAdd={onAdd} initial={1} stock={thisproduct.stock} txtButton="AGREGAR AL CARRITO" id={thisproduct.id}/>
                </div>
            )
        })}
            
            </>
    )
    
}

export default ItemList;