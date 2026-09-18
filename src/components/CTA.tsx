import { motion, useReducedMotion } from 'framer-motion'
import { INSTAGRAM, WHATSAPP_LINK, WHATSAPP_NUMBER } from '../data/content'
import { Icon } from './Icons'
import { Reveal } from './Reveal'

export function CTA() {
  const reduce = useReducedMotion()
  const fone = `+${WHATSAPP_NUMBER.slice(0, 2)} (${WHATSAPP_NUMBER.slice(2, 4)}) ${WHATSAPP_NUMBER.slice(4, 8)}-${WHATSAPP_NUMBER.slice(8)}`
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
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn btn-white">
              <Icon name="whatsapp" />
              Testar no WhatsApp
              <span className="arrow">→</span>
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <Icon name="instagram" />
              @telaazultech
            </a>
          </div>
          <span className="cta-phone">{fone}</span>
        </Reveal>
      </div>
    </section>
  )
}
