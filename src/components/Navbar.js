import React from 'react';
import './Navbar.css';

const links = [
  { label: 'Story', href:'#story'},
  { label: 'Tool', href:'#tool'},
  { label: 'Services', href:'#services'},
  { label: 'Newsletter', href:'#newsletter'},

]
function Navbar() {
  return (
    <nav className='navbar'>
      <a href='#' className='nav-logo'>Michelle Digital Platform</a>
      <ul className='nav-links'>
        <li><a href='#story'>Story</a></li>
        <li><a href='#tool'>Tool</a></li>
        <li><a href='#resources'>Resources</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#newsletter'>Newsletter</a></li>
      </ul>
      <a href='#newsletter' className='nav-cta'>Get free resources →</a>
    </nav>
  );
}

export default Navbar;
