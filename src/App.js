
import './App.css';
import './components/NavBar/NavBar.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListCointainer.jsx';
import ItemCount from './components/ItemCount/ItemCount.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer titulo="ENTREGA - CONTADOR CON BOTON"/>
      
    </div>

  );
}

export default App;
