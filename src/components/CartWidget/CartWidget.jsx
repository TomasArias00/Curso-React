import './cartWidget.css';

import cart from '../../assets/img/cart.svg';
import { Link } from 'react-router-dom';
function CartWidget(){
    return(
        <div className="cart__widget">
                <img src={cart} alt="" />
        </div>
    )
}

export default CartWidget; 