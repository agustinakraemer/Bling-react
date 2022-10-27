import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting='Ezequiel'/>
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Bling Tienda
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </div>
    </div>
    
  );
}

export default App;
