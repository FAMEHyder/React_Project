// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import './App.css';
import CategoryComponent from './components/Cetagory';
import BuyForm from './components/BuyForm';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/jewelries" element={<CategoryComponent category="jewelery" />} />
        <Route path="/womens-shoes" element={<CategoryComponent category="women's shoes" />} />
        <Route path="/Electronics" element={<CategoryComponent category="Electronics" />} />
        <Route path="/womens-clothing" element={<CategoryComponent category="women's clothing" />} />
        <Route path="/mens-clothing" element={<CategoryComponent category="men's clothing" />} />
        <Route path="/kids-clothing" element={<CategoryComponent category="kids' clothing" />} />
        <Route path="/buy" element={<BuyForm/>} />
      </Routes>
    </Router>
  );
};

export default App;
