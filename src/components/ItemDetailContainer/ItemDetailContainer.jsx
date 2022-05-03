import './itemDetailContainer.css';
import React, {useEffect, useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import products from '../../data/productos.js'
import ItemDetail from '../ItemDetail/itemDetail';

function getProduct(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        }, 500);
    })
}

function ItemListContainer(){

    const [product, setProduct] = useState([]);
    
    useEffect( () => {
        getProduct().then( responseProducts => {
            setProduct(responseProducts[0]);
        });
    }, []);

    return(
        <div className='item__detail__container'>
            <ItemDetail product={product}></ItemDetail>
        </div>
    );
}

export default ItemListContainer;
