import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { WHATSAPP_DEMO_LINK } from '../data/content'
import { AppDemo } from './AppDemo'
import { ChatDemo } from './ChatDemo'
import { Icon } from './Icons'
import './hero.css'

type Canal = 'whatsapp' | 'app'

// Quanto tempo cada simulação fica na tela antes de alternar sozinha. O
// WhatsApp roda um loop de ~19 s e o app ~17 s; 20 s deixa cada uma completar.
const AUTO_MS = 20000

const ease = [0.2, 0.8, 0.2, 1] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  // Parallax leve: o celular sobe um pouco mais devagar que a página.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120])
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  // Carrossel das duas simulações: alterna sozinho, e para de alternar quando
  // o visitante escolhe uma — quem clicou quer olhar aquela com calma.
  const [canal, setCanal] = useState<Canal>('whatsapp')
  const [manual, setManual] = useState(false)
  useEffect(() => {
    if (manual) return
    const t = window.setInterval(() => setCanal((c) => (c === 'whatsapp' ? 'app' : 'whatsapp')), AUTO_MS)
    return () => window.clearInterval(t)
  }, [manual])
  const escolher = (c: Canal) => {
    setCanal(c)
    setManual(true)
  }

  return (
    <section id="top" className="hero bg-blue" ref={ref}>
      <div className="hero-blob hero-blob-a" aria-hidden="true" />
      <div className="hero-blob hero-blob-b" aria-hidden="true" />

      <div className="container hero-inner">
        <motion.div className="hero-copy" style={{ y: textY, opacity: fade }}>
          <motion.span
            className="eyebrow hero-eyebrow"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
          >
            Ferramenta autônoma de vendas inteligente
          </motion.span>

          <h1 className="display h1">
            {['O carrinho', 'não deveria ser', 'o fim da', 'conversa.'].map((line, i) => (
              <span key={line} className="hero-line">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.35 + i * 0.1, ease }}
                  style={{ display: 'inline-block' }}
                >
                  {i === 1 ? (
                    <>
                      não deveria ser
                    </>
                  ) : i === 3 ? (
                    <strong>conversa.</strong>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="lead hero-lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
          >
            Uma camada de inteligência em cima do seu negócio: o cliente pede do jeito que fala e o
            assistente monta o carrinho, recomenda o que você quer vender e fecha o pedido — no
            WhatsApp ou no app da sua marca.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease }}
          >
            <a href={WHATSAPP_DEMO_LINK} target="_blank" rel="noreferrer" className="btn btn-white">
              <Icon name="whatsapp" />
              Testar no WhatsApp
              <span className="arrow">→</span>
            </a>
            <a href="#como-funciona" className="btn btn-ghost">
              Ver como funciona
            </a>
          </motion.div>

          <motion.ul
            className="hero-proof"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <li>Linguagem natural, voz, foto e PDF</li>
            <li>Catálogo real com ~9.000 produtos em demonstração</li>
            <li>Piloto sem custo, com o seu catálogo</li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="hero-phone"
          style={{ y: phoneY }}
          initial={{ opacity: 0, y: 60, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease }}
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="hero-switch" role="tablist" aria-label="Escolha a simulação">
              <button
                type="button"
                role="tab"
                aria-selected={canal === 'whatsapp'}
                className={canal === 'whatsapp' ? 'on' : ''}
                onClick={() => escolher('whatsapp')}
              >
                <Icon name="whatsapp" />
                WhatsApp
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={canal === 'app'}
                className={canal === 'app' ? 'on' : ''}
                onClick={() => escolher('app')}
              >
                <Icon name="globe" />
                App da marca
              </button>
              <motion.span
                className="hero-switch-pill"
                aria-hidden="true"
                animate={{ x: canal === 'whatsapp' ? 0 : '100%' }}
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            </div>

            <div className="hero-stage">
              <AnimatePresence mode="wait" initial={false}>
                {canal === 'whatsapp' ? (
                  <motion.div
                    key="wa"
                    initial={{ opacity: 0, x: -40, rotateY: -12 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, x: 40, rotateY: 12 }}
                    transition={{ duration: 0.5, ease }}
                  >
                    <ChatDemo />
                  </motion.div>
                ) : (
                  <motion.div
                    key="app"
                    initial={{ opacity: 0, x: 40, rotateY: 12 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, x: -40, rotateY: -12 }}
                    transition={{ duration: 0.5, ease }}
                  >
                    <AppDemo />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <p className="hero-stage-caption">
              {canal === 'whatsapp'
                ? 'No WhatsApp: a lista vira carrinho dentro da conversa.'
                : 'No app da sua marca: a mesma inteligência, com vitrine e carrinho na tela.'}
            </p>
          </motion.div>

          <motion.div
            className="hero-badge hero-badge-a"
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.4, ease }}
          >
            <strong>+80%</strong>
            <span>dos carrinhos são abandonados</span>
          </motion.div>
          <motion.div
            className="hero-badge hero-badge-b"
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.6, ease }}
          >
            <strong>Entende → Recomenda → Converte</strong>
            <span>uma mensagem, um carrinho</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#stats"
        className="hero-scroll"
        aria-label="Rolar para baixo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span />
      </motion.a>
    </section>
  )
}
