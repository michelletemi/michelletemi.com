import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import TrustBar from './components/TrustBar';
import Story from './components/pages/Story';
import Tool from './components/pages/Tool';
import Services from './components/pages/Services';
import Newsletter from './components/pages/Newsletter';
import Footer from './components/Footer';


import Home from './components/pages/Home';
import Resources from './components/pages/Resources';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/story' element={<Story />} />
          <Route path='/tool' element={<Tool />} />
          <Route path='/services' element={<Services />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/newsletter' element={<Newsletter />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
