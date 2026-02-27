import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import Portfolio from './components/pages/Portfolio';
import Resources from './components/pages/Resources';
import Contact from './components/pages/Contact';
import MailingList from './components/pages/MailingList';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/home" element= {<Home/>}/>
      <Route path="/blog" element= {<Blog/>}/>
      <Route path="/portfolio" element= {<Portfolio/>}/>
      <Route path="/resources" element= {<Resources/>}/>
      <Route path="/contact" element= {<Contact/>}/>
      <Route path="/join-mailing-list" element= {<MailingList/>}/>
    </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;
