import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Work from './components/Works';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/works" element={<Work />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
    
      </Routes>
    </Router>
  );
};

export default App;
