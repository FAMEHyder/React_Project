import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Profile from "./component/Profile.jsx";
function App() {
 
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/profile" element={<Profile />} />
    </Routes>
    {/* <Footer /> */}


  </Router>
  )
}

export default App
