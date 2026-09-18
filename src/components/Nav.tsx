import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { WHATSAPP_LINK, nav } from '../data/content'
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

        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className={`btn nav-cta ${scrolled || open ? 'btn-primary' : 'btn-white'}`}>
          <Icon name="whatsapp" />
          Testar agora
        </a>

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
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn btn-primary" onClick={() => setOpen(false)}>
              <Icon name="whatsapp" />
              Testar no WhatsApp
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
