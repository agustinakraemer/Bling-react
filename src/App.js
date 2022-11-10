import './App.css';
import logo from './logo.svg';
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { Route, Router, Routes } from 'react-router-dom';
import {Home, Detail, Category} from './pages/index';


function App() {
 
  return (
    <div className="App">
      <Navbar/>
 
      <main>
        <Routes>
          <Route path="/category/:idCategory" element={<Category />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:pruductId" element={<Detail />} />
        </Routes>
      </main>
 
    </div>
    
  );
}

export default App;
