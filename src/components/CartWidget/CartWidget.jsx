import './cartWidget.css';
import useCartContext from '../../store/CartContext';


import cart from '../../assets/img/cart.svg';
function CartWidget(){
    const {cantInCart} = useCartContext()


    return(
        <div className="cart__widget">
            <a href="/cart" className='link'>
                <img src={cart} alt="" />
                <p>{cantInCart}</p>
                </a>
        </div>
    )
}

export default CartWidget; 