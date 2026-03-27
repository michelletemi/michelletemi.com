import { useEffect, useRef, useState } from 'react';
import '../../App.css';

export default function Story() {
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
    <section className='section' id='story'>
      <div className='section-label'>My story</div>
      <div
        className={`story-grid fade-in${visible ? ' visible' : ''}`}
        ref={ref}
      >
        <div>
          <h2 className='story-heading'>
            I figured it out
            <br />
            without a <em>roadmap.</em>
          </h2>
          <div className='story-body'>
            <p>
              I studied Civil Engineering. I didn't have a mentor in tech. I
              didn't do a traditional CS degree. I started at a fintech company
              on the support team — handling customer queries while teaching
              myself to code in the evenings.
            </p>
            <p>
              Through an apprenticeship, self-study, and a lot of patience, I
              transitioned into engineering. I now work on payments, bank
              integrations, and cloud infrastructure at a regulated UK fintech —
              and I was promoted from Junior to Mid-level engineer.
            </p>
            <p>
              Everything I build here is the resource I wish I had when I was
              starting out. Real, practical, and honest about how messy the
              journey actually is.
            </p>
          </div>
        </div>
        <div className='timeline'>
          <div className='timeline-item'>
            <div className='tl-year'>Uni</div>
            <div className='tl-dot'></div>
            <div>
              <div className='tl-title'>MEng Civil Engineering</div>
              <div className='tl-desc'>
                Insurance internship, research, sales — exploring everything.
              </div>
            </div>
          </div>
          <div className='timeline-item'>
            <div className='tl-year'>Early</div>
            <div className='tl-dot'></div>
            <div>
              <div className='tl-title'>Support Team, Fintech</div>
              <div className='tl-desc'>
                Joined a fast-growing fintech part-time during final year.
                Self-studying in the background.
              </div>
            </div>
          </div>
          <div className='timeline-item'>
            <div className='tl-year'>Mid</div>
            <div className='tl-dot'></div>
            <div>
              <div className='tl-title'>Data Analytics Apprenticeship</div>
              <div className='tl-desc'>
                Structured learning while working. Built real skills with real
                context.
              </div>
            </div>
          </div>
          <div className='timeline-item'>
            <div className='tl-year'>Now</div>
            <div className='tl-dot'></div>
            <div>
              <div className='tl-title'>Mid-level Software Engineer</div>
              <div className='tl-desc'>
                Payments, bank integrations, cloud applications. Promoted from
                junior.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
