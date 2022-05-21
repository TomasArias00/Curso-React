import './navBar.css';
import logoGridoAzul from '../../assets/img/logoGridoAzul.jpg';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link } from 'react-router-dom';
// import { dataToFirebase } from '../../data';

import useCartContext from '../../store/CartContext';

function NavBar(){

    const { contextFunction } = useCartContext();
        contextFunction();


    return(
        <div className="nav__bar__container">
            <div className="nav__bar">
                <ul className="nav__bar__list">
                    <li className="nav__bar__item"><Link to="/frizzio">FRIZZIO</Link></li>
                    <li className="nav__bar__item"><Link to="/palitos">PALITOS</Link></li>
                    <li className="nav__bar__item"><Link to="/"><img src={logoGridoAzul} alt="" /></Link></li>
                    <li className="nav__bar__item"><Link to="/">SUCURSALES</Link></li>
                    <li className="nav__bar__item"><Link to="/">CONTACTO</Link></li>
                </ul>
            </div>
            {/* <button onClick={dataToFirebase}>ACTIVAR LA CONECTA AL FIREBASE</button> */}
            <CartWidget/>
        </div>
    )
}

export default NavBar;