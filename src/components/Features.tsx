import { features } from '../data/content'
import { Icon } from './Icons'
import { Reveal, RevealWords } from './Reveal'

const iconFor = ['chat', 'box', 'eye', 'megaphone', 'cart', 'report', 'support', 'puzzle']

export function Features() {
  return (
    <section id="recursos" className="section">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">Principais recursos</span>
          </Reveal>
          <h2 className="display h2">
            <RevealWords text="A inteligência entra na jornada sem criar uma nova operação." strong={['sem', 'criar', 'uma', 'nova', 'operação.']} />
          </h2>
          <Reveal delay={0.2}>
            <p className="lead">Em todos os planos.</p>
          </Reveal>
        </div>

        <div className="grid-4 features">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.08} className="card feature">
              <div className="card-icon">
                <Icon name={iconFor[i]} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
