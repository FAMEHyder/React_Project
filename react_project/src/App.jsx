
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import About from './About';
import OurMembers from './OurMembers';
import Courses from './Courses';
import Notes from './Notes';
import OnlineCourses from './Onlinecourses';
import RegisterCourses from './RegisterCourses';
import Results from './Results';

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
        <Route path="/section/courses" element={<Courses />} />
        <Route path="/section/notes" element={<Notes />} />
        <Route path="/section/online-classes" element={<OnlineCourses />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
