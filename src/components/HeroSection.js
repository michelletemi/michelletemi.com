import React from 'react';
import './HeroSection.css';
import chibiImage from '../assets/mychibi-transparentbg.png';

function HeroSection() {
  return (
    <section className='hero'>
      <div>
        <div className='hero-eyebrow'>
          Software Engineer · Tech Educator · Career Accelerator{' '}
        </div>
        <div className='hero-h1-row'>
          <img src={chibiImage} alt='Chibi Michelle' className='hero-chibi' />
          <h1>
            From support
            <br />
            tickets to <em>shipping</em>
            <br />
            production code.
          </h1>
        </div>
        <p className='hero-desc'>
          I'm a mid-level software engineer at a UK fintech - and I didn't take
          the traditional route. I help career changers and aspiring developers
          break into tech, build real portfolios, and land roles they actually
          want.
        </p>
        <div className='hero-actions'>
          <a href='#resources' className='btn-primary'>
            Explore free resources →
          </a>
          <a href='#story' className='btn-secondary'>
            Read my story
          </a>
        </div>
      </div>
      <div className='hero-badge-col'>
        <div className='badge-card'>
          <div className='badge-num'>3+</div>
          <div className='badge-label'>Years in fintech engineering</div>
        </div>
        <div className='badge-card'>
          <div className='badge-num'>£0</div>
          <div className='badge-label'>Cost to start with free tools</div>
        </div>
        <div className='badge-card'>
          <div className='badge-num'>MEng</div>
          <div className='badge-label'>Civil Engineering → Software</div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
