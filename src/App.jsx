// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import SellProducts from './Components/SellProducts'; 
import OfferService from './Components/OfferService'; 
import Footer from './Components/footer';

function App() {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/sell-products" element={<SellProducts />} />
        <Route path="/offer-service" element={<OfferService />} />
      </Routes>
       <Footer/>
    </Router>
  );
}

export default App;
