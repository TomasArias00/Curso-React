import './itemListContainer.css';
import React, {useEffect, useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getAllItems as getProducts, getItemsByCategory } from '../../data/index'



function ItemListContainer(props){

    function onAdd(count){
        alert("agregaste al carrito "+count+" items")
    }

    const [products, setProducts] = useState([]);
    const categoryid = useParams().categoryid;

    useEffect( () => {
        if(categoryid === undefined){
        getProducts(categoryid).then( responseProducts => {
            setProducts(responseProducts);
        });
    }else{
        getItemsByCategory(categoryid).then((respuestaPromise) => {
            setProducts(respuestaPromise)
        })
    }
    }, [categoryid]);

    return(
        <div className='item__list__container'>
            <h1 className='item__list__title'>{props.titulo}</h1>
            <ItemList onAdd={onAdd} products={products}></ItemList>
        </div>
    );
}

export default ItemListContainer;
