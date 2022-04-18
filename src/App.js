import logo from './logo.svg';
import './App.css';
import './components/NavBar/NavBar.jsx'
import NavBar from './components/NavBar/NavBar.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            CURSO REACT - ENTREGA DE NAV BAR 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
