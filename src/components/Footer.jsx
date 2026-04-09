import { Link } from 'react-router';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <Link to='/' className='footer-logo'>
        Michelle
      </Link>
      <ul className='footer-links'>
        <li>
          <Link to='/story'>Story</Link>
        </li>
        <li>
          <Link to='/tool'>Free Tool</Link>
        </li>
        <li>
          <Link to='/services'>Services</Link>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/michelle-mamudu-101082169'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href='https://www.youtube.com/@michelletemi'
            target='_blank'
            rel='noopener noreferrer'
          >
            YouTube
          </a>
        </li>
      </ul>
      <div className='footer-copy'>© 2026 — All rights reserved</div>
    </footer>
  );
}

export default Footer;
