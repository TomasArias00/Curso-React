import './itemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer(props){
    return(
        <div className='item__list__container'>
            <h1 className='item__list__title'>{props.titulo}</h1>
            <ItemCount title="COMPRA TU PRODUCTO" stock="6" initial={1}/>
        </div>
    )
}


export default ItemListContainer;
