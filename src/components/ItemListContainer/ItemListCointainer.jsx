import './itemListContainer.css';
import React, {useEffect, useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import products from '../../data/productos.js'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

function getProducts(categoryid){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(categoryid !== undefined){
               const arrayFiltered =  products.filter ((products) =>{
                    return products.category == categoryid;
                });
                resolve(arrayFiltered);
                console.log(arrayFiltered);
            }
            else{
                resolve(products);
                console.log(products)
            }
        }, 0);
    })
}



function ItemListContainer(props){

    function onAdd(count){
        alert("agregaste al carrito "+count+" items")
    }


    const [products, setProducts] = useState([]);

    const categoryid = useParams().categoryid;
    console.log('ID: ', categoryid);

    useEffect( () => {
        getProducts(categoryid).then( responseProducts => {
            setProducts(responseProducts);
        });
    }, [categoryid]);

    return(
        <div className='item__list__container'>
            <h1 className='item__list__title'>{props.titulo}</h1>
            <ItemList onAdd={onAdd} products={products}></ItemList>
        </div>
    );
}

export default ItemListContainer;
