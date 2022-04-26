import React, {useState} from 'react';
import './ItemCount.css'

function ItemCount(props){
    const [count, setCount] = useState(props.initial);

    function handleAdd(){
        if(count<props.stock){
            setCount(count + 1);
        } else{
            alert("No contamos con tanto stock")
        }
    }

    function handleSubtract(){
        if(count>1){
        setCount(count - 1); 
    } else{
        alert("No puedes agregar menos de 1 producto");
    }
    }

    function handleAddToCart(){
        if(count==1){
            alert("AGREGANDO "+count+" PRODUCTO AL CARRITO..")
        }else{
            alert("AGREGANDO "+count+" PRODUCTOS AL CARRITO...")
        }
    }

    return(
        <div className='item__count__container'>
        <div className='item__count'>
            <p className='item__count__title'>{props.title}</p>
            <div className='item__count__quantity'>
                <button className='item__count__subtract' onClick={handleSubtract}>-</button>
                <div className='item__count__number'>{count}</div>
                <button className='item__count__add' onClick={handleAdd}>+</button>
            </div>
            <button className='item__count__add__to__cart' onClick={handleAddToCart}>AGREGAR AL CARRITO</button>
        </div>
    </div>
    );
}



export default ItemCount;
