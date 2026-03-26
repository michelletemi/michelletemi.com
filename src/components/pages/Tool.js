import { useEffect, useRef, useState } from 'react';
import '../../App.css';

export default function Tool() {
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
    <section className='section' id='tool'>
    <div className="section-label">Tool</div>
    <div className={`tool-card fade-in${visible ? ' visible' : ''}`} ref={ref}>
        <div>
        <div className="tool-eyebrow">No sign-up · No tracking · Runs in your browser</div>
        <h2 className="tool-heading">Know exactly where your money <em>goes.</em></h2>
        <p className="tool-desc">A clean, visual budget tracker built for people who want clarity without a spreadsheet. Add your income and categories — see your saving rate instantly.</p>
        <ul className="tool-features">
            <li>Visual donut chart breakdown by category</li>
            <li>Automatic saving rate calculation</li>
            <li>Month-by-month tracking</li>
            <li>Personalised insights based on your numbers</li>
            <li>Data stays in your browser, always</li>
        </ul>
        <a href="budget-tracker.html" className="btn-tool">Open the tracker →</a>
        </div>
        <div className="tool-preview">
        <div className="preview-bar-label">Example breakdown</div>
        <div className="preview-row">
            <div className="preview-name">Rent</div>
            <div className="preview-bar-bg"><div className="preview-bar-fill" style={{ width: '45%', background: '#c8f060' }}></div></div>
            <div className="preview-amt">£900</div>
        </div>
        <div className="preview-row">
            <div className="preview-name">Groceries</div>
            <div className="preview-bar-bg"><div className="preview-bar-fill" style={{ width: '18%', background: '#60b8f0' }}></div></div>
            <div className="preview-amt">£360</div>
        </div>
        <div className="preview-row">
            <div className="preview-name">Transport</div>
            <div className="preview-bar-bg"><div className="preview-bar-fill" style={{ width: '10%', background: '#f0a040' }}></div></div>
            <div className="preview-amt">£200</div>
        </div>
        <div className="preview-row">
            <div className="preview-name">Subscriptions</div>
            <div className="preview-bar-bg"><div className="preview-bar-fill" style={{ width: '8%', background: '#ff7eb3' }}></div></div>
            <div className="preview-amt">£160</div>
        </div>
        <div className="preview-row">
            <div className="preview-name">Eating out</div>
            <div className="preview-bar-bg"><div className="preview-bar-fill" style={{ width: '7%', background: '#50d0b0' }}></div></div>
            <div className="preview-amt">£140</div>
        </div>
        <div className="preview-total">
            <div className="preview-total-label">Saving rate</div>
            <div className="preview-total-val">↑ 24% — On track</div>
        </div>
        </div>
    </div>
    </section>
  );
}
