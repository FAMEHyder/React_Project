import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Ap from 'Dry/src/App.css';
import Home from './components/Home'
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp.jsx';
import OrderForm from './components/OrderForm.jsx';
import OrderPlaced from './components/OrderPlaced.jsx';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ProductCards from './components/ProductCards.jsx';


function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productcard" element={<ProductCards />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Signin" element={<LoginForm />} />
        <Route path="/OrderForm" element={<OrderForm />} />
        <Route path="/ProductTable" element={<OrderPlaced />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* <Route path="/category/:categoryName" element={<ProductCards />} /> */}
      
        {/* Fallback Route for Undefined Paths */}
        {/* <Route path="*" element={<h2 style={{ padding: '20px', textAlign: 'center' }}>404: Page Not Found</h2>} /> */}

      </Routes>
      

    </Router>
  )
}

export default App