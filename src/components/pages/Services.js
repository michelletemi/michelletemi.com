import { useEffect, useRef, useState } from 'react';
import '../../App.css';

export default function Services() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className='section' id='services' ref={ref}>
      <div className='section-label'>Services</div>
      <div style={{ marginBottom: '36px' }} className={`fade-in${visible ? ' visible' : ''}`}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px,3vw,38px)', fontWeight: 500, letterSpacing: '-0.8px', lineHeight: 1.15 }}>
          Practical support,<br />not generic advice.
        </h2>
      </div>
      <div className={`services-grid fade-in${visible ? ' visible' : ''}`}>
        <a href='#newsletter' className='service-card'>
          <div className='service-icon'>🎯</div>
          <div className='service-title'>Career Coaching</div>
          <div className='service-desc'>1:1 sessions for career changers breaking into tech. CV, strategy, and accountability from someone who's done it.</div>
          <div className='service-price'>From £25/session <span>→ Book a call</span></div>
        </a>
        <a href='#newsletter' className='service-card'>
          <div className='service-icon'>💬</div>
          <div className='service-title'>Mock Interviews</div>
          <div className='service-desc'>Technical and behavioural interview prep. Real feedback on what hiring managers at fintechs actually look for.</div>
          <div className='service-price'>£15/session <span>→ Book a slot</span></div>
        </a>
        <a href='#newsletter' className='service-card'>
          <div className='service-icon'>📘</div>
          <div className='service-title'>Guides & E-Books</div>
          <div className='service-desc'>Practical field guides for career changers — from customer service to software engineer, and everything in between.</div>
          <div className='service-price'>From £5.99 <span>→ Browse library</span></div>
        </a>
      </div>
    </section>
  );
}
