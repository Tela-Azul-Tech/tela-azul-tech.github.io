import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { WHATSAPP_LINK } from '../data/content'
import { ChatDemo } from './ChatDemo'
import { Icon } from './Icons'
import './hero.css'

const ease = [0.2, 0.8, 0.2, 1] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  // Parallax leve: o celular sobe um pouco mais devagar que a página.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120])
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

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
            WhatsApp ou no seu site.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease }}
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn btn-white">
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
            <li>Vencedor da Trilha Varejo · Hackathon do Sol 2026</li>
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
            <ChatDemo />
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
