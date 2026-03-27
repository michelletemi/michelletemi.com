import { Link } from 'react-router-dom';
import './Navbar.css';

const links = [
  { label: 'Story', href:'#story'},
  //{ label: 'Tool', href:'#tool'},
  { label: 'Services', href:'#services'},
  { label: 'Newsletter', href:'#newsletter'},
  { label: 'Resources', href:'#resources'}
]

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/home' className='nav-logo'>Michelle Digital Platform</Link>
      <ul className='nav-links'>
        {links.map(({ label, href }) => (
          <li key={href}><a href={href}>{label}</a></li>
        ))}
      </ul>
      <a href='#resources' className='nav-cta'>Get free resources →</a>
    </nav>
  );
}

export default Navbar;
