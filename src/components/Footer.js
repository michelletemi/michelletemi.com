import './Footer.css';

function Footer() {
  return (
    <footer>
      <a href='/' className='footer-logo'>Michelle</a>
      <ul className='footer-links'>
        <li><a href='#story'>Story</a></li>
        <li><a href='#tool'>Free Tool</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='https://www.linkedin.com/in/michelle-mamudu-101082169' target='_blank' rel='noopener noreferrer'>LinkedIn</a></li>
        <li><a href='https://www.youtube.com/@michelletemi' target='_blank' rel='noopener noreferrer'>YouTube</a></li>
      </ul>
      <div className='footer-copy'>© 2026 — All rights reserved</div>
    </footer>
  );
}

export default Footer;
