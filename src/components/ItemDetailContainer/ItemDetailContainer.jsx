import './itemDetailContainer.css';
import React, {useEffect, useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import products from '../../data/productos.js'
import ItemDetail from '../ItemDetail/itemDetail';
import { useParams } from 'react-router-dom';

function getProduct(itemid){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const detailFiltered =  products.filter ((products) =>{
                return products.id == parseInt(itemid);
        });
        resolve(detailFiltered)
    }, 20);
})}


function ItemListContainer(){

    const itemid = useParams().itemid;

    console.log('ID: ', itemid);
    const [product, setProduct] = useState([]);
    
    useEffect( () => {
        getProduct(itemid).then( responseProducts => {
            setProduct(responseProducts[0]);
        });
    }, [itemid]);

    return(
        <div className='item__detail__container'>
            <ItemDetail product={product}></ItemDetail>
        </div>
    );
}

export default ItemListContainer;
