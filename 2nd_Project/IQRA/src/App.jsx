import Navbar from "./component/Navbar";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignIn from './component/SignIn.jsx';
import SignUp from './component/SignUp.jsx';


function App() {
 
  return (
    <Router>
        <Navbar />
      <Routes>

        <Route path = "/signin" element ={<SignIn/>} />
        <Route path = "/signup" element = {<SignUp/>} />

      </Routes>
    </Router>
  )
}

export default App
