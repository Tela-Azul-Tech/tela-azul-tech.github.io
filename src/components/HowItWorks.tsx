import { motion } from 'framer-motion'
import { steps } from '../data/content'
import { Reveal, RevealWords } from './Reveal'

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">Como funciona</span>
          </Reveal>
          <h2 className="display h2">
            <RevealWords text="Uma camada inteligente em cima do seu negócio." strong={['inteligente', 'negócio']} />
          </h2>
          <Reveal delay={0.2}>
            <p className="lead">Da intenção do cliente à oportunidade de cross-sell — sem acrescentar fricção.</p>
          </Reveal>
        </div>

        <div className="steps">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12} className="step">
              <div className="step-n">{s.n}</div>
              <h3 className="h3">{s.title}</h3>
              <p>{s.text}</p>
              <div className="step-tags">
                {s.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              {i < steps.length - 1 && (
                <motion.span
                  className="step-arrow"
                  aria-hidden="true"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
                >
                  →
                </motion.span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
