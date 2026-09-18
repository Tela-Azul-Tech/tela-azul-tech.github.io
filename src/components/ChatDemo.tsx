import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { chatScript, type ChatScene } from '../data/content'
import { MonitorIcon } from './Logo'
import './chat-demo.css'

// Duração de cada cena, em ms. A "digitação" é mais curta para a conversa
// parecer viva; o card fica mais tempo para dar para ler o carrinho.
function duracao(scene: ChatScene): number {
  switch (scene.kind) {
    case 'user':
      return 1500
    case 'typing':
      return 1300
    case 'bot':
      return 1400
    case 'card':
      return 4200
    case 'reset':
      return 900
  }
}

/**
 * Celular com a conversa acontecendo sozinha. É a demonstração do produto:
 * as mensagens são as que o assistente devolve de verdade, com os mesmos
 * botões e o mesmo formato de resumo do carrinho.
 */
export function ChatDemo() {
  const reduce = useReducedMotion()
  const [shown, setShown] = useState<ChatScene[]>([])
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let i = 0
    let timer: number
    const step = () => {
      const scene = chatScript[i]
      if (scene.kind === 'reset') {
        setShown([])
        setTyping(false)
      } else if (scene.kind === 'typing') {
        setTyping(true)
      } else {
        setTyping(false)
        setShown((prev) => [...prev, scene])
      }
      i = (i + 1) % chatScript.length
      timer = window.setTimeout(step, reduce ? duracao(scene) * 1.4 : duracao(scene))
    }
    timer = window.setTimeout(step, 900)
    return () => window.clearTimeout(timer)
  }, [reduce])

  // Sempre mostrar a última mensagem, como o WhatsApp faz.
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [shown, typing])

  return (
    <div className="phone" aria-label="Demonstração da conversa com o assistente">
      <div className="phone-notch" />
      <div className="wa-header">
        <div className="wa-avatar">
          <MonitorIcon size={18} />
        </div>
        <div className="wa-title">
          <strong>Tela Azul</strong>
          <span>{typing ? 'digitando…' : 'online'}</span>
        </div>
        <div className="wa-header-icons">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="wa-body" ref={scrollRef}>
        <div className="wa-day">hoje</div>
        <AnimatePresence initial={false}>
          {shown.map((scene, idx) => (
            <Bubble key={idx} scene={scene} />
          ))}
          {typing && (
            <motion.div
              key="typing"
              className="wa-bubble bot wa-typing"
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
            >
              <i />
              <i />
              <i />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="wa-input">
        <span>Mensagem</span>
        <div className="wa-mic" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <rect x="9" y="3" width="6" height="11" rx="3" />
            <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function Bubble({ scene }: { scene: ChatScene }) {
  const spring = { type: 'spring' as const, stiffness: 420, damping: 30, mass: 0.8 }

  if (scene.kind === 'user') {
    return (
      <motion.div
        className="wa-bubble user"
        initial={{ opacity: 0, y: 14, scale: 0.94, originX: 1 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={spring}
      >
        {scene.audio ? <AudioLine text={scene.text} /> : scene.text}
        <span className="wa-meta">
          {hora()} <Ticks />
        </span>
      </motion.div>
    )
  }

  if (scene.kind === 'bot') {
    return (
      <motion.div
        className="wa-bubble bot"
        initial={{ opacity: 0, y: 14, scale: 0.94, originX: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={spring}
      >
        {scene.text}
        <span className="wa-meta">{hora()}</span>
      </motion.div>
    )
  }

  if (scene.kind === 'card') {
    return (
      <motion.div
        className="wa-bubble bot wa-card"
        initial={{ opacity: 0, y: 14, scale: 0.94, originX: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={spring}
      >
        <strong>{scene.title}</strong>
        <ul>
          {scene.lines.map((l) => (
            <li key={l}>• {l}</li>
          ))}
        </ul>
        <div className="wa-total">
          Total do carrinho: <strong>{scene.total}</strong>
        </div>
        <div className="wa-buttons">
          {scene.buttons.map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
      </motion.div>
    )
  }

  return null
}

// Mensagem de voz: barra de áudio com a transcrição embaixo, como o WhatsApp
// mostra quando transcreve.
function AudioLine({ text }: { text: string }) {
  return (
    <div className="wa-audio">
      <div className="wa-audio-bar">
        <span className="wa-play" />
        <span className="wa-wave">
          {Array.from({ length: 22 }).map((_, i) => (
            <i key={i} style={{ height: `${6 + ((i * 7) % 11)}px` }} />
          ))}
        </span>
        <span className="wa-len">0:04</span>
      </div>
      <div className="wa-transcript">🎤 “{text}”</div>
    </div>
  )
}

function Ticks() {
  return (
    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" stroke="#53bdeb" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 6l3 3 6-7M6 9l1 1 7-8" />
    </svg>
  )
}

function hora() {
  const d = new Date()
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}
