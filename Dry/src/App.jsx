import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Ap from 'Dry/src/App.css';
import Home from './components/Home'
import AlmondData from './components/AlmondData';
import CashewData from './components/CashewData';
import DatesData from './components/DatesData';
import WalnutData from './components/WalnutData';
import RaisinData from './components/RaisinData';
import AppricotData from './components/AppricoteData';
import PistachioData from './components/PistachioData';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp.jsx';
import OrderForm from './components/OrderForm.jsx';
import ProductDetailsTable from './components/PrductDetailTable.jsx';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<AlmondData />} />
        <Route path="/2" element={<CashewData />} />
        <Route path="/3" element={<WalnutData />} />
        <Route path="/4" element={<PistachioData />} />
        <Route path="/5" element={<RaisinData />} />
        <Route path="/6" element={<AppricotData />} />
        <Route path="/7" element={<DatesData />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Signin" element={<LoginForm />} />
        <Route path="/OrderForm" element={<OrderForm />} />
        <Route path="/ProductTable" element={<ProductDetailsTable />} />

        {/* <Route path="/:id" element={<AlmondData/>} />
        <Route path="/:id" element={<CashewData/>} /> */}

      </Routes>
    </Router>
  )
}

export default App