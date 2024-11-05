import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
function App() {
 
  return (
    <Router>
    <Navbar />
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
    {/* <Footer /> */}


  </Router>
  )
}

export default App
