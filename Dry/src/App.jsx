import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home'
import AlmondData from './components/AlmondData';
import CashewData from './components/CashewData';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/1" element={<AlmondData/>} />
        <Route path="/2" element={<CashewData/>} /> */}

        <Route path="/:id" element={<AlmondData/>} />
        <Route path="/:id" element={<CashewData/>} />

      </Routes>
    </Router>
  )
}

export default App
