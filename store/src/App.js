import logo from './logo.svg';
import './App.css';
import Navbar from './componet/navbar';
import Contact from './componet/contact';
import Footer from './componet/footer';
import Home from './componet/home';
import Product from './componet/product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SabProduct from './componet/subproduct';



function App() {
  return (
  <BrowserRouter>
  <Navbar/>
<Routes>
  <Route path='/' Component={Home}/>
   <Route path='/prod' Component={Product}/>
   <Route path='/subprod' Component={SabProduct}/>
    <Route path='/contact' Component={Contact}/>
</Routes>



  <Footer/>
  </BrowserRouter> 
  
    
  );
}

export default App;
