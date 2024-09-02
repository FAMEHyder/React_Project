import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home'
import AlmondData from './components/AlmondData';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<AlmondData />} />

      </Routes>
    </Router>
  )
}

export default App
