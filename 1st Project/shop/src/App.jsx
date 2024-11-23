import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Ap from 'Dry/src/App.css';
import Home from './components/Home.jsx'
import ProductDetails from './components/ProductDetails.jsx';
import Navbar from './components/Navbar.jsx';
import LoginForm from './components/LoginForm.jsx';
import SignUp from './components/SignUp.jsx';
import OrderForm from './components/OrderForm.jsx';
import AboutUs from './components/AboutUs.jsx';
import ContactUs from './components/ContactUs.jsx';
import AlmondCards from './components/AlmondData.jsx';
import CashewCards from './components/CashewData.jsx';
import WalnutCards from './components/WalnutData.jsx';
import PistachioCards from './components/PistachioData.jsx';
import RaisinCards from './components/RaisinData.jsx';
import AppricotCards from './components/AppricoteData.jsx';
import DateCards from './components/DatesData.jsx';
import Footer from './components/Footer.jsx';
import CartComp from './components/CartComp.jsx';
import Profile from './components/Profile.jsx';
import Payment from './components/Payment.jsx';
import ReplaceBE from './components/ReplaceBE.jsx';


function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/1" element={<AlmondCards />} />
        <Route path="/2" element={<CashewCards />} />
        <Route path="/3" element={<WalnutCards />} />
        <Route path="/4" element={<PistachioCards />} />
        <Route path="/5" element={<RaisinCards />} />
        <Route path="/6" element={<AppricotCards />} />
        <Route path="/7" element={<DateCards />} />
        <Route path="/Signin" element={<LoginForm />} />
        <Route path="/OrderForm" element={<OrderForm />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cartcomp" element={<CartComp />} />      
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/Replace" element={<ReplaceBE />} />
      </Routes>
      <Footer />


    </Router>
  )
}

export default App