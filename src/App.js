
import './App.css';
import './components/NavBar/NavBar.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListCointainer.jsx';
import ItemCount from './components/ItemCount/ItemCount.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/:categoryid" element={<ItemListContainer/>}></Route>
          <Route path="/detail/:itemid" element={<ItemDetailContainer/>}/>

        </Routes>


      {/*<ItemListContainer titulo="ENTREGA - CATALOGO CON MAPS Y PROMISES"/> */}
      </BrowserRouter>
    </div>

  );
}

export default App;
