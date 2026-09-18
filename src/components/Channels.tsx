import { motion, useReducedMotion } from 'framer-motion'
import { comparison, scenarios, working } from '../data/content'
import { AppDemo } from './AppDemo'
import { ChatDemo } from './ChatDemo'
import { Icon } from './Icons'
import { Reveal, RevealWords } from './Reveal'
import './split.css'

// Seção dividida ao meio: WhatsApp (verde) à esquerda, app da marca (azul) à
// direita, cada lado com a própria simulação rodando e os pontos fortes embaixo.
// As duas demos são as mesmas do hero — aqui rodam ao mesmo tempo, lado a lado.
export function Channels() {
  const reduce = useReducedMotion()
  const [wa, app] = comparison

  return (
    <section id="canais" className="section canais">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">Dois jeitos de vender</span>
          </Reveal>
          <h2 className="display h2">
            <RevealWords text="WhatsApp ou app da sua marca. Ou os dois." strong={['WhatsApp', 'app', 'os', 'dois.']} />
          </h2>
          <Reveal delay={0.2}>
            <p className="lead">
              É o mesmo motor, o mesmo catálogo e as mesmas campanhas. O que muda é onde o cliente
              prefere comprar — e você não precisa escolher por ele.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="split">
        <motion.div
          className="split-half split-wa"
          initial={reduce ? false : { opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="split-watermark" aria-hidden="true">
            WhatsApp
          </span>
          <div className="split-inner">
            <div className="split-kind">
              <Icon name="whatsapp" />
              {wa.kind}
            </div>
            <h3 className="display split-title">{wa.title}</h3>
            <p className="split-text">{wa.text}</p>

            <div className="split-stage">
              <ChatDemo />
            </div>

            <ul className="split-pros">
              {wa.pros.map((p, i) => (
                <Reveal as="li" key={p} delay={0.1 + i * 0.07}>
                  <Icon name="check" />
                  {p}
                </Reveal>
              ))}
            </ul>
            <div className="split-best">
              <span>Melhor para</span>
              {wa.bestFor}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="split-half split-app bg-blue"
          initial={reduce ? false : { opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
        >
          <span className="split-watermark" aria-hidden="true">
            App
          </span>
          <div className="split-inner">
            <div className="split-kind">
              <Icon name="globe" />
              {app.kind}
            </div>
            <h3 className="display split-title">{app.title}</h3>
            <p className="split-text">{app.text}</p>

            <div className="split-stage">
              <AppDemo />
            </div>

            <ul className="split-pros">
              {app.pros.map((p, i) => (
                <Reveal as="li" key={p} delay={0.1 + i * 0.07}>
                  <Icon name="check" />
                  {p}
                </Reveal>
              ))}
            </ul>
            <div className="split-best">
              <span>Melhor para</span>
              {app.bestFor}
            </div>
          </div>
        </motion.div>

        <div className="split-vs" aria-hidden="true">
          <span>ou os dois</span>
        </div>
      </div>

      <div className="container">
        <div className="grid-3 scenarios">
          {scenarios.map((s, i) => (
            <Reveal key={s.title} delay={0.1 + i * 0.1} className="scenario">
              <div className="card-icon">
                <Icon name={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="working">
          <div className="working-head">
            <span className="eyebrow">Funcionando hoje</span>
            <h3 className="h3">Pronto para demonstrar. Preparado para integrar.</h3>
            <p>
              Base montada com um catálogo real de supermercado — cerca de 9.000 produtos — para
              você ver a conversa acontecer com preço, marca e promoção de verdade.
            </p>
          </div>
          <ul className="working-list">
            {working.map((w, i) => (
              <Reveal as="li" key={w} delay={0.1 + i * 0.06}>
                <Icon name="check" />
                {w}
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
