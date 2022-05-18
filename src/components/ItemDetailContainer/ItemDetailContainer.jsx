import './itemDetailContainer.css';
import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/itemDetail';
import { useParams } from 'react-router-dom';
import { getItem as getProduct } from '../../data/index.js'


function ItemDetailContainer(){

    const itemid = useParams().itemid; 

    const [product, setProduct] = useState();
    
    useEffect( () => {
        getProduct(itemid).then( responseProducts => {
            setProduct(responseProducts);
        });
    }, [itemid]);

    return(
        <div className='item__detail__container'>
            <ItemDetail product={product}></ItemDetail>
        </div>
    );
}

export default ItemDetailContainer;
