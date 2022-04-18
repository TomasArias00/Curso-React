import './navBar.css';

function NavBar(){
    return(
        <div className="nav__bar__container">
            <div className="nav__bar">
                <ul className="nav__bar__list">
                    <li className="nav__bar__item"><a href="">ANCHOR</a></li>
                    <li className="nav__bar__item"><a href="">ANCHOR</a></li>
                    <li className="nav__bar__item"><a href=""><img src='.../src/media/logo.grido.azul.jpg' alt="" /></a></li>
                    <li className="nav__bar__item"><a href="">ANCHOR</a></li>
                    <li className="nav__bar__item"><a href="">ANCHOR</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;