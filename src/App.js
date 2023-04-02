import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
// import About from './components/About'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
