import './itemListContainer.css';
import React, {useEffect, useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import products from '../../data/productos.js'
import ItemList from '../ItemList/ItemList';
function getProducts(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        }, 500);
    })
}

function ItemListContainer(props){

    const [products, setProducts] = useState([]);
    
    useEffect( () => {
        getProducts().then( responseProducts => {
            setProducts(responseProducts);
        });
    }, []);

    return(
        <div className='item__list__container'>
            <h1 className='item__list__title'>{props.titulo}</h1>
            <ItemList products={products}></ItemList>
        </div>
    );
}

export default ItemListContainer;
