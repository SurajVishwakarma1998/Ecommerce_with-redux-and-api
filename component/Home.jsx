import React from 'react';
import Footer from './footer';
import Product from './Product';
import Login from './Login';
import Navbar from "./Navbar";
import Onecart from "./Onecart";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Registration from './Registration';

const Home = () => {
  return (
  
    <Router>
     <Navbar />
       <Routes>
          <Route path='/' element={<Product/>} />
          <Route path='/footer' element={<Footer/>} />
          <Route path='/cart' element={<Onecart />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Registration/>} />
       </Routes>
    </Router>
      

  )
}

export default Home