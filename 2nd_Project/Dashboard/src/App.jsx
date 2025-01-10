import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Profile from "./component/Profile.jsx";
import SignUp from "./component/SignUp.jsx";
import LoginForm from "./component/SignIn.jsx";
import  Home  from "./component/Home.jsx";
import UserTable from "./component/UserTable.jsx";
import ScienceResult from "./component/ScienceResult.jsx";
import ArtsResult from "./component/ArtsResult.jsx";

function App() {
 
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<LoginForm />} />
      <Route path="/users" element={<UserTable />} />
      <Route path="/marksheet" element={<ScienceResult />} />
      <Route path="/marksheetarts" element={<ArtsResult />} />
    </Routes>
    {/* <Footer /> */}


  </Router>
  )
}

export default App
