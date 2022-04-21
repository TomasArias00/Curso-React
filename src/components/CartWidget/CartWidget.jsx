import './cartWidget.css';

import cart from '../../assets/img/cart.svg';

function CartWidget(){
    return(
        <div className="cart__widget"><a href="#"><img src={cart} alt="" /></a></div>
    )
}

export default CartWidget; 