import logo from './logo.svg';
import './App.css';
import Navbar from './componet/navbar';
import Footer from './componet/footer';
import Home from './componet/home';
import Product from './componet/product';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Footer/>
      <Home/>
      <Product/>
    </div>
    
  );
}

export default App;
