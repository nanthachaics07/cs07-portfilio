import './Hero.css';

/** Top-of-page banner above the tab navigation. */
export default function Hero() {
  return (
    <section className="bgimage" id="home" aria-label="Welcome">
      <div className="container-fluid">
        <div className="row">
          <div className="hero-text">
            <h1 className="hero_title">Hello, it&apos;s me Safe</h1>
            <p className="hero_desc">
              &quot;The bast way to predict the future is to{' '}
              <span style={{ color: '#27e187' }}>create</span> it&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
