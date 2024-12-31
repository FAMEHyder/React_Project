import Navbar from "./component/Navbar";
import Contact from "./component/Contact.jsx";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignIn from './component/SignIn.jsx';
import SignUp from './component/SignUp.jsx';
import Home from './component/Home.jsx';
import Footer from "./component/Footer.jsx";
import Members from './component/Members.jsx'
import Pre_board from "./component/Pre_board.jsx";

function App() {
 
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/signin" element ={<SignIn/>} />
        <Route path = "/signup" element = {<SignUp/>} />
        <Route path = "/contact" element = {<Contact />} />
        <Route path = "/members"  element ={<Members/>}/>
        <Route path = "/pre-board" element = {<Pre_board/>} />
      </Routes>
      < Footer/>
    </Router>
  )
}

export default App
