import { ArrowUpRight } from 'lucide-react';

export default function Monitoring() {
  return (
    <section className="monitoring-section" id="monitoring">
      <div className="section-heading">
        <div>
          <h2>Make your crops<br /><em>more smart</em></h2>
        </div>
        <p>You will always have access to real-time data and insights about your crops</p>
      </div>

      <div className="dashboard-shell live-embed">
        <a
          className="embed-link"
          href="https://minetallest-farm-assist.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open live dashboard <ArrowUpRight size={16} />
        </a>
        <iframe
          src="https://minetallest-farm-assist.vercel.app"
          title="FarmAssist Dashboard"
          className="live-iframe"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>
    </section>
  );
}
