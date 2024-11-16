import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Profile from "./component/Profile.jsx";
import SignUp from "./component/SignUp.jsx";
import LoginForm from "./component/SignIn.jsx";
import  Home  from "./component/Home.jsx";
import AddProduct from "./component/AddProduct.jsx";
import UserTable from "./component/UserTable.jsx";
import ProductTable from "./component/ProductTable.jsx";

function App() {
 
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<LoginForm />} />
      <Route path="/products/add" element={<AddProduct />} />
      <Route path="/user/view" element={<UserTable />} />
      <Route path="/products/view" element={<ProductTable />} />
    </Routes>
    {/* <Footer /> */}


  </Router>
  )
}

export default App
