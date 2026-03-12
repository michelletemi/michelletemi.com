import React from 'react';
import './HeroSection.css';
import '../App.css';
import chibiImage from '../assets/mychibi-transparentbg.png'; // Adjust path if needed

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-content'>
        <img src={chibiImage} alt='Chibi Michelle' className='hero-chibi' />
        <div className='hero-text'>
          <h1>Hi, I'm Michelle Mamudu</h1>
          <p>
            A Software Engineer passionate about creative tech, inclusive teams
            & building meaningful products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

/*import './HeroSection.css';
import '../App.css';
import { Button } from './Button';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>WELCOME TO MY WORLD</h1>
            <p>I'm Michou, a passionate developer</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>

        </div>
    )
}

export default HeroSection;*/
