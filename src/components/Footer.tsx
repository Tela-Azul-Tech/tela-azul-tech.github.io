import { INSTAGRAM, WHATSAPP_LINK, nav } from '../data/content'
import { Icon } from './Icons'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo size={40} />
          <p>Tecnologia que se adapta ao seu negócio. Não o contrário.</p>
        </div>
        <nav className="footer-links" aria-label="Seções">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="footer-social">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <Icon name="whatsapp" />
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Icon name="instagram" />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Tela Azul. Natal, RN.</span>
        <span>Nascemos no Hackathon do Sol 2026 · Vencedores da Trilha Varejo</span>
      </div>
    </footer>
  )
}
