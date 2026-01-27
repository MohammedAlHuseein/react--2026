import logo from './logo.svg';
import './App.css';
import Navbar from './componet/navbar';
import Footer from './componet/footer';
import Home from './componet/home';
import Product from './componet/product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
  <BrowserRouter>
  <Navbar/>
<Routes>
  <Route path='/' Component={Home}/>
   <Route path='/prod' Component={Product}/>
</Routes>



  <Footer/>
  </BrowserRouter> 
  
    
  );
}

export default App;
