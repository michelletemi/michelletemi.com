import { useEffect, useRef, useState } from 'react';

export default function Newsletter() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  function handleSubmit() {
    setSubmitted(true);
  }

  return (
    <div className='email-section' id='newsletter'>
      <div className='email-inner' ref={ref}>
        <div className={`fade-in${visible ? ' visible' : ''}`}>
          <h2 className='email-heading'>
            Get the resources
            <br />I wish I had <em>earlier.</em>
          </h2>
          <p className='email-desc'>
            Join the newsletter for honest career advice, free tools, and
            practical guides - written by someone actively working in tech, not
            just writing about it.
          </p>
          <ul className='email-perks'>
            <li>Monthly free tools and templates</li>
            <li>Real talk on breaking into fintech and software engineering</li>
            <li>First access to new guides and courses</li>
            <li>No spam — I hate it too</li>
          </ul>
        </div>
        {!submitted ? (
          <div className={`email-form fade-in${visible ? ' visible' : ''}`}>
            <label className='form-label'>Your name</label>
            <input
              type='text'
              className='form-input'
              placeholder='First name'
            />

            <label className='form-label'>Email address</label>
            <input
              type='email'
              className='form-input'
              placeholder='you@example.com'
            />

            <label className='form-label'>Where are you now?</label>
            <select className='form-select'>
              <option value=''>Select your current stage</option>
              <option>Student or recent graduate</option>
              <option>Working in a non-tech role</option>
              <option>Junior developer looking to grow</option>
              <option>Exploring a career change into tech</option>
              <option>Already in tech, levelling up</option>
            </select>

            <button className='btn-submit' onClick={handleSubmit}>
              Join the newsletter →
            </button>
            <div className='form-small'>Free forever. Unsubscribe anytime.</div>
          </div>
        ) : (
          <div className='form-success' style={{ display: 'block' }}>
            <div className='form-success-icon'>✉️</div>
            <h3>You're in.</h3>
            <p>Check your inbox — your first resource is on its way.</p>
          </div>
        )}
      </div>
    </div>
  );
}
