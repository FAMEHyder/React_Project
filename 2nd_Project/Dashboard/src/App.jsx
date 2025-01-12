import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Profile from "./component/Profile.jsx";
import SignUp from "./component/SignUp.jsx";
import LoginForm from "./component/SignIn.jsx";
import  Home  from "./component/Home.jsx";
import UserTable9Arts from "./component/UserTable9Arts.jsx";
import UserTable10Arts from "./component/UserTable10Arts.jsx";
import UserTable9Science from "./component/UserTable9Science.jsx";
import UserTable10Science from "./component/UserTable10Science.jsx";
import ArtsResult from "./component/ArtsResult.jsx";
import ScienceResult from "./component/ScienceResult.jsx";
function App() {
 
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<LoginForm />} />
      <Route path="/user9arts" element={<UserTable9Arts />} />
      <Route path="/user10arts" element={<UserTable10Arts />} />
      <Route path="/user9science" element={<UserTable9Science />} />
      <Route path="/user10science" element={<UserTable10Science />} />
      <Route path="/artsresult" element={<ArtsResult />} />
      <Route path="/scienceresult" element={<ScienceResult />} />

      
    </Routes>
    {/* <Footer /> */}


  </Router>
  )
}

export default App
