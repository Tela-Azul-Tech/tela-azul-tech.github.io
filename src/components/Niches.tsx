import { useReducedMotion } from 'framer-motion'
import { niches } from '../data/content'
import { Reveal, RevealWords } from './Reveal'

// "Para qualquer nicho": um atendente autônomo, 24h, que vende por você — e
// um carrossel infinito de pedidos na língua de cada negócio, em duas
// fileiras correndo em sentidos opostos (CSS puro; pausa no hover).
export function Niches() {
  const reduce = useReducedMotion()
  const metade = Math.ceil(niches.length / 2)
  const fileiras = [niches.slice(0, metade), niches.slice(metade)]

  return (
    <section id="nichos" className="section bg-ink niches">
      <div className="container">
        <div className="section-head niches-head">
          <Reveal>
            <span className="eyebrow">Para qualquer nicho</span>
          </Reveal>
          <h2 className="display h2">
            <RevealWords
              text="Um atendente autônomo que vende por você. Em qualquer negócio."
              strong={['autônomo', 'vende', 'por', 'você.', 'qualquer', 'negócio.']}
            />
          </h2>
          <Reveal delay={0.2}>
            <p className="lead">
              Para negócios de qualquer nicho: um atendente totalmente autônomo e inteligente, capaz
              de trabalhar 24 horas por dia — e que faz as vendas por você.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="niches-badges">
            <span>
              <strong>24h</strong> por dia
            </span>
            <span>
              <strong>100%</strong> autônomo
            </span>
            <span>
              <strong>vende</strong> por você
            </span>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.15} className={`niches-rows ${reduce ? 'is-static' : ''}`}>
        {fileiras.map((lista, r) => {
          // Duplicado para o loop fechar sem emenda visível.
          const trilha = reduce ? lista : [...lista, ...lista]
          return (
            <div key={r} className={`niches-track ${r === 1 ? 'reverse' : ''}`}>
              {trilha.map((n, i) => (
                <div key={`${n.name}-${i}`} className="niche" aria-hidden={i >= lista.length}>
                  <span className="niche-name">{n.name}</span>
                  <p className="niche-ask">“{n.ask}”</p>
                  <span className="niche-result">
                    <i>→</i> carrinho pronto
                  </span>
                </div>
              ))}
            </div>
          )
        })}
      </Reveal>
    </section>
  )
}
