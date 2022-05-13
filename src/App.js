
import './App.css';
import './components/NavBar/NavBar.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListCointainer.jsx';
import ItemCount from './components/ItemCount/ItemCount.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CartContainer from './components/CartContainer/CartContainer.jsx'
import {CartContextProvider} from './store/CartContext'


function App() {
  return (
    <div className="App">
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/:categoryid" element={<ItemListContainer/>}></Route>
          <Route path="/detail/:itemid" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartContainer/>}/>
        </Routes>
          
      {/*<ItemListContainer titulo="ENTREGA - CATALOGO CON MAPS Y PROMISES"/> */}
      </BrowserRouter>
      </CartContextProvider>
    </div>

  );
}

export default App;
