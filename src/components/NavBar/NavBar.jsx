import './navBar.css';
import logoGridoAzul from '../../assets/img/logoGridoAzul.jpg';
import CartWidget from '../CartWidget/CartWidget.jsx';

function NavBar(){
    return(
        <div className="nav__bar__container">
            <div className="nav__bar">
                <ul className="nav__bar__list">
                    <li className="nav__bar__item"><a href="#1">PRODUCTOS</a></li>
                    <li className="nav__bar__item"><a href="#2">HISTORIA</a></li>
                    <li className="nav__bar__item"><a href="#3"><img src={logoGridoAzul} alt="" /></a></li>
                    <li className="nav__bar__item"><a href="#4">SUCURSALES</a></li>
                    <li className="nav__bar__item"><a href="#5">CONTACTO</a></li>
                </ul>
            </div>
            <CartWidget/>
        </div>
    )
}

export default NavBar;