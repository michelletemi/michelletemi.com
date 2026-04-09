import { Link } from 'react-router';
import './Navbar.css';

const links = [
  { label: 'Story', to: '/story' },
  //{ label: 'Tool', to:'/tool'},
  { label: 'Services', to: '/services' },
  { label: 'Newsletter', to: '/newsletter' },
  { label: 'Resources', to: '/resources' },
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
