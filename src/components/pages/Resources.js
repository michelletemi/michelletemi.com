import React from 'react';
import '../../App.css';

function resources() {
  return (
    <section className='section resources-section' id='resources'>
      <div className='section__inner'>
        <div className='section-label'>Resources</div>
        <h2>
          Everything I wish existed when I was <em>starting out.</em>
        </h2>
        <div className='resources-grid'>
          <div className='resource-card reveal'>
            <div className='resource-card__type'>📖 Guide</div>
            <div className='resource-card__title'>
              How to become a software engineer in 2026
            </div>
            <div className='resource-card__desc'>
              The honest, practical roadmap — no CS degree required.
            </div>
            <span className='resource-card__tag'>Free</span>
          </div>
          <div className='resource-card reveal reveal--d1'>
            <div className='resource-card__type'>✏️ Article</div>
            <div className='resource-card__title'>
              Frontend vs backend vs data — what's the difference?
            </div>
            <div className='resource-card__desc'>
              A plain-English breakdown for career changers.
            </div>
            <span className='resource-card__tag'>Free</span>
          </div>
          <div className='resource-card reveal reveal--d2'>
            <div className='resource-card__type'>🛠 Tool</div>
            <div className='resource-card__title'>Visual budget tracker</div>
            <div className='resource-card__desc'>
              See exactly where your money goes. No sign-up needed.
            </div>
            <span className='resource-card__tag'>Free tool</span>
          </div>
          <div className='resource-card reveal reveal--d3'>
            <div className='resource-card__type'>🎓 Mini course</div>
            <div className='resource-card__title'>Learn SQL in a weekend</div>
            <div className='resource-card__desc'>
              The fundamentals that will serve you in any data role.
            </div>
            <span className='resource-card__tag'>Coming soon</span>
          </div>
        </div>

        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
        <a href='#' class='resources-cta'>
          Browse all resources →
        </a>
      </div>
    </section>
  );
}

export default resources;
