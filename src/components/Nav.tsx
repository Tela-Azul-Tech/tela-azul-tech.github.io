import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { WEBAPP_DEMO_LINK, WHATSAPP_DEMO_LINK, nav } from '../data/content'
import { Icon } from './Icons'
import { Logo } from './Logo'
import './nav.css'

// Barra fixa: transparente sobre o hero azul, vira vidro fosco ao rolar.
export function Nav() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 40))

  return (
    <motion.header
      className={`nav ${scrolled || open ? 'nav-solid' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
    >
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" aria-label="Tela Azul — início">
          <Logo tone={scrolled || open ? 'blue' : 'white'} size={34} />
        </a>

        <nav className="nav-links" aria-label="Seções">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* "Testar agora" abre as duas opções no hover (e no foco, para teclado). */}
        <div className="nav-cta-wrap">
          <button type="button" className={`btn nav-cta ${scrolled || open ? 'btn-primary' : 'btn-white'}`} aria-haspopup="menu">
            Testar agora
            <Icon name="chevron" />
          </button>
          <div className="nav-cta-menu" role="menu">
            <a href={WHATSAPP_DEMO_LINK} target="_blank" rel="noreferrer" role="menuitem">
              <Icon name="whatsapp" />
              <span>
                <strong>Testar no WhatsApp</strong>
                <em>na conversa, direto do celular</em>
              </span>
            </a>
            <a href={WEBAPP_DEMO_LINK} target="_blank" rel="noreferrer" role="menuitem">
              <Icon name="globe" />
              <span>
                <strong>Testar no web app</strong>
                <em>a mesma demo, no navegador</em>
              </span>
            </a>
          </div>
        </div>

        <button className="nav-burger" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span style={{ transform: open ? 'translateY(7px) rotate(45deg)' : undefined }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : undefined }} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav-mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            aria-label="Seções"
          >
            {nav.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                {item.label}
              </motion.a>
            ))}
            <a href={WHATSAPP_DEMO_LINK} target="_blank" rel="noreferrer" className="btn btn-primary" onClick={() => setOpen(false)}>
              <Icon name="whatsapp" />
              Testar no WhatsApp
            </a>
            <a href={WEBAPP_DEMO_LINK} target="_blank" rel="noreferrer" className="btn btn-ghost" onClick={() => setOpen(false)}>
              <Icon name="globe" />
              Testar no web app
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
