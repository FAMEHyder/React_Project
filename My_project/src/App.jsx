
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import About from './About';
import OurMembers from './OurMembers';
// import Courses from './Courses';
import Notes from './Notes';
import OnlineCourses from './Onlinecourses';
import RegisterCourses from './RegisterCourses';
import Results from './Results';
import SelectClass from './SelectClass';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/section/results" element={<Results />} />
        <Route path="/section/registercourses" element={<RegisterCourses />} />
        <Route path="/section/members" element={<OurMembers />} />
        {/* <Route path="/section/SelectClass" element={<SelectClass />} /> */}
        <Route path="/section/SelectClass" element={<SelectClass />} />
        <Route path="/section/online-classes" element={<OnlineCourses />} />
        <Route path="/Notes" element={<Notes />} />
        {/* <Route path="/Courses" element={<Courses />} /> */}
        
        
      </Routes>
    </Router>
  );
}

export default App;
