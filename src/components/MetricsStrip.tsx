import { ArrowRight, Sprout } from 'lucide-react';

const metrics = [
  { value: '4', unit: '', label: 'Sensors tracked in real time' },
  { value: '2,840', unit: '+', label: 'Data points per session' },
  { value: '98.6', unit: '%', label: 'Uptime reliability' },
];

export default function MetricsStrip() {
  return (
    <section className="metrics-strip">
      <div className="strip-intro">
        <Sprout size={18} />
        <span>
          FarmAssist monitors your soil, water, light and temperature so you
          can focus on growing — not guessing.
        </span>
      </div>

      {metrics.map((m) => (
        <div className="metric" key={m.label}>
          <strong>
            {m.value}
            <span>{m.unit}</span>
          </strong>
          <small>{m.label}</small>
        </div>
      ))}

      <div className="strip-arrow">
        <ArrowRight size={15} />
      </div>
    </section>
  );
}
