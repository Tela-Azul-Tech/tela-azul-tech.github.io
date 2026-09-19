import { stats } from '../data/content'
import { Counter } from './Counter'
import { Reveal } from './Reveal'

export function Stats() {
  return (
    <section id="stats" className="stats">
      <div className="container">
        <Reveal className="stats-head">
          <h2 className="display">
            Recomendação não é apenas experiência. <strong>É geração de receita.</strong>
          </h2>
        </Reveal>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="stat">
              <div className="stat-value display">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <p className="stat-label">{s.label}</p>
              <span className="stat-source">Fonte: {s.source}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
