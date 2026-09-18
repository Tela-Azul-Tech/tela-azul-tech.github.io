import { motion, useReducedMotion } from 'framer-motion'
import { INSTAGRAM, WHATSAPP_CONTACT_LINK, WHATSAPP_CONTACT_NUMBER, WHATSAPP_DEMO_LINK } from '../data/content'
import { Icon } from './Icons'
import { Reveal } from './Reveal'

export function CTA() {
  const reduce = useReducedMotion()
  const n = WHATSAPP_CONTACT_NUMBER
  const fone = `+${n.slice(0, 2)} (${n.slice(2, 4)}) ${n.slice(4, 9)}-${n.slice(9)}`
  return (
    <section id="contato" className="section cta">
      <div className="container">
        <Reveal className="cta-box">
          <motion.div
            className="cta-glow"
            aria-hidden="true"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
          <span className="eyebrow">Próximo passo</span>
          <h2 className="display h2">
            O próximo carrinho <strong>pode começar agora.</strong>
          </h2>
          <p className="lead">
            Teste a ferramenta agora mesmo, no seu WhatsApp: mande um “oi” e monte um carrinho com
            a sua própria lista. Depois a gente conversa sobre o piloto com o seu catálogo.
          </p>
          <div className="cta-actions">
            <a href={WHATSAPP_DEMO_LINK} target="_blank" rel="noreferrer" className="btn btn-white">
              <Icon name="whatsapp" />
              Testar no WhatsApp
              <span className="arrow">→</span>
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <Icon name="instagram" />
              @telaazultech
            </a>
          </div>
          <a href={WHATSAPP_CONTACT_LINK} target="_blank" rel="noreferrer" className="cta-phone">
            Para falar com a gente: {fone}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
