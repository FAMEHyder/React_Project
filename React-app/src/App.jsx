// import React from 'react'
// // import Odin from './component/Odin'
// // import Thor from './component/Thor'
// // import Navbar from './component/Navbar'
// // import Login from './component/login'
// // import "./component/login.css";
// // import Counter from './component/Counter'
// // import "./component/Counter.css"
// // import Sign_in  from './component/Sign_in'
// // import "./component/sign_in.css"
// // import Loginform from './component/Loginform'
// // import Register from './component/Sign_up'
// // import RegistrationForm from './component/Registrationform'
// // import CompanyPage from './component/Companypage'
// // import Application from './component/Application'
// function App() {
  

//   return (
//     <React.Fragment>

//       {/* <Login/> */}
//       {/* <Counter/> */}
//       {/* <Sign_in/> */}
//       {/* <Register/> */}
//       {/* <Loginform/> */}
//       {/* <RegistrationForm/> */}
//       {/* <CompanyPage/> */}
//       {/* <Application/> */}
//       {/* <Navbar title = 'IYEF'/> */}
//       {/* <Thor/> */}
//       {/* <Odin/> */}

//     </React.Fragment>
   
//   )
// }

// export default App


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import { Home } from './component/Home';
import { Service } from './component/Home';
import { AboutUs } from './component/Home';
import { ContactUs } from './component/Home';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Main />
      <Footer />
    </Router>
  );
};

export default App;
