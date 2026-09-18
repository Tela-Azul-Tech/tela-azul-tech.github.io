import { manifesto } from '../data/content'
import { Logo } from './Logo'
import { Reveal, RevealWords } from './Reveal'

export function Manifesto() {
  const [a, b, c, d, e] = manifesto.quote
  const [f, g, h] = manifesto.adapt
  return (
    <section id="sobre" className="section bg-blue manifesto">
      <div className="container">
        <div className="manifesto-grid">
          <div>
            <Reveal>
              <span className="eyebrow">Sobre a Tela Azul</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display h2">
                {a}
                <strong>{b}</strong>
                {c}
                <strong>{d}</strong>
                {e}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <span className="manifesto-rule" />
              <p className="lead">{manifesto.origin}</p>
            </Reveal>
            <Reveal delay={0.3} className="manifesto-logo">
              <Logo tone="white" size={64} />
            </Reveal>
          </div>

          <Reveal delay={0.15} className="manifesto-card">
            <h3 className="display">
              <RevealWords text={`${f}${g}${h}`} strong={g.split(' ')} />
            </h3>
            <p>
              Desenvolvemos soluções digitais para transformar desafios reais em experiências,
              processos e ferramentas mais eficientes, considerando:
            </p>
            <ul className="arrow-list">
              {manifesto.considers.map((item, i) => (
                <Reveal as="li" key={item} delay={0.3 + i * 0.07}>
                  {item}
                </Reveal>
              ))}
            </ul>
            <p>
              Cada solução nasce a partir do contexto em que será utilizada, seja em uma jornada de
              compra, em uma operação interna ou em uma nova experiência digital.
            </p>
            <strong className="manifesto-closing">{manifesto.closing}</strong>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
