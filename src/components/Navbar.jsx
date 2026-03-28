import { Link } from 'react-router';
import './Navbar.css';

const links = [
  { label: 'Story', href: '#story' },
  //{ label: 'Tool', href:'#tool'},
  { label: 'Services', href: '#services' },
  { label: 'Newsletter', href: '#newsletter' },
  { label: 'Resources', href: '#resources' },
];

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/' className='nav-logo'>
        Michelle Digital Platform
      </Link>
      <ul className='nav-links'>
        {links.map(({ label, to }) => (
          <li key={to}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
      <Link to='/resources' className='nav-cta'>
        Get free resources →
      </Link>
    </nav>
  );
}

export default Navbar;
