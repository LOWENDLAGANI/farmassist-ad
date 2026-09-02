import { ArrowUpRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="pulse-dot" /> Rover By Bentech 2
        </div>
        <h1>For the better future<br /><em>FarmAssist</em></h1>
        <p className="hero-text">
          Meet FarmAssist, a rover that helps you manage your crops with ease.
        </p>
        <div className="hero-actions">
          <a href="https://minetallest-farm-assist.vercel.app" target="_blank" rel="noopener noreferrer" className="primary-button">
            Explore the dashboard <ArrowUpRight size={18} />
          </a>
          <button className="text-button">
            <span className="play-icon"><Play size={13} fill="currentColor" /></span>
            See FarmAssist in action
          </button>
        </div>
        <div className="hero-proof">
          <div className="avatar-stack">
            <span>JD</span>
            <span>MK</span>
            <span>+8k</span>
          </div>
          <div>
            <strong></strong>
            <small></small>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-glow" />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="robot-card">
          <div className="card-shine" />
          <img src="/images/image.png" alt="FarmAssist agricultural field robot" />
        </div>
        <div className="scan-ring" />
      </div>
    </section>
  );
}
