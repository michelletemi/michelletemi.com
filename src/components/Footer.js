import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Tech newsletter to receive the latest news and updates
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <form className='footer-form'>
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            className='footer-input'
          />
          <button className='btn btn--outline'>Subscribe</button>
        </form>
      </section>

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About</h2>
            <Link to='/about'>About Me</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/resources'>Resources</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Support</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/consultation'>Consultation</Link>
          </div>
        </div>
      </div>

      {/* 🌐 Social Icons Section */}
      <section className='footer-social'>
        <a
          className='social-icon-link'
          href='https://github.com/yourgithub'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>
        <a
          className='social-icon-link'
          href='https://linkedin.com/in/yourlinkedin'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin />
        </a>
        <a className='social-icon-link' href='mailto:you@example.com'>
          <FaEnvelope />
        </a>
      </section>

      <section className='footer-bottom'>
        <small className='website-rights'>
          © {new Date().getFullYear()} Michou Dev. All rights reserved.
        </small>
      </section>
    </div>
  );
}

export default Footer;
