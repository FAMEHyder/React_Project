import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Ap from 'Dry/src/App.css';
import Home from './components/Home'
import ProductData from './components/ProductData.jsx';

import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp.jsx';
import OrderForm from './components/OrderForm.jsx';
import OrderPlaced from './components/OrderPlaced.jsx';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';


function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<ProductData />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Signin" element={<LoginForm />} />
        <Route path="/OrderForm" element={<OrderForm />} />
        <Route path="/ProductTable" element={<OrderPlaced />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* <Route path="/:id" element={<AlmondData/>} />
        <Route path="/:id" element={<CashewData/>} /> */}

      </Routes>
      

    </Router>
  )
}

export default App