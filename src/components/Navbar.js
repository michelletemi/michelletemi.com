import './Navbar.css';

const links = [
  { label: 'Story', href:'#story'},
  { label: 'Tool', href:'#tool'},
  { label: 'Services', href:'#services'},
  { label: 'Newsletter', href:'#newsletter'},
  { label: 'Resources', href:'#resources'}
]

function Navbar() {
  return (
    <nav className='navbar'>
      <a href='/' className='nav-logo'>Michelle Digital Platform</a>
      <ul className='nav-links'>
        {links.map(({ label, href }) => (
          <li key={href}><a href={href}>{label}</a></li>
        ))}
      </ul>
      <a href='#newsletter' className='nav-cta'>Get free resources →</a>
    </nav>
  );
}

export default Navbar;
