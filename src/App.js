
import './App.css';
import './components/NavBar/NavBar.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListCointainer.jsx';
import ItemCount from './components/ItemCount/ItemCount.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/*<ItemListContainer titulo="ENTREGA - CATALOGO CON MAPS Y PROMISES"/> */}
      <ItemDetailContainer/>
    </div>

  );
}

export default App;
