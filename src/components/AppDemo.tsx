import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { appDemo } from '../data/content'
import { MonitorIcon } from './Logo'
import './app-demo.css'

// Linha do tempo da simulação, em ms acumulados. Cada passo liga uma parte da
// tela; o loop recomeça no fim. Espelha a interface web real: barra da loja,
// chat, gaveta do carrinho com marca e quantidade, botão de finalizar.
const passos = [
  { at: 800, step: 1 }, // usuário digita
  { at: 2400, step: 2 }, // assistente "digitando"
  { at: 3800, step: 3 }, // resposta
  { at: 5200, step: 4 }, // gaveta do carrinho sobe
  { at: 8800, step: 5 }, // toca "+" na banana
  { at: 11200, step: 6 }, // troca a marca do arroz
  { at: 13600, step: 7 }, // finalizar pulsa
  { at: 16400, step: 0 }, // reinicia
]

const reais = (v: number) => `R$ ${v.toFixed(2).replace('.', ',')}`

/**
 * Celular com a interface de APLICATIVO da ferramenta: a mesma inteligência do
 * WhatsApp, mas com a marca da rede, vitrine visual e carrinho editável na tela.
 */
export function AppDemo() {
  const reduce = useReducedMotion()
  const [step, setStep] = useState(0)

  useEffect(() => {
    let timers: number[] = []
    const rodar = () => {
      timers.forEach(window.clearTimeout)
      timers = passos.map((p) => window.setTimeout(() => setStep(p.step), reduce ? p.at * 1.3 : p.at))
      timers.push(window.setTimeout(rodar, reduce ? 17000 * 1.3 : 17000))
    }
    rodar()
    return () => timers.forEach(window.clearTimeout)
  }, [reduce])

  // Estado do carrinho derivado do passo: quantidade da banana e marca do arroz.
  const itens = appDemo.items.map((it) => {
    if (it.id === 'banana' && step >= 5) return { ...it, qty: it.qty + 1 }
    if (it.id === 'arroz' && step >= 6 && it.altBrand) return { ...it, brand: it.altBrand.name, price: it.altBrand.price }
    return it
  })
  const total = itens.reduce((acc, it) => acc + it.price * it.qty, 0)
  const cartOpen = step >= 4

  return (
    <div className="phone app-phone" aria-label="Demonstração da interface de aplicativo">
      <div className="phone-notch" />

      <div className="app-top">
        <span className="app-logo">
          <MonitorIcon size={18} />
          Tela Azul
        </span>
        <span className="app-cart-icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 4h2l2.4 11.2a1 1 0 0 0 1 .8H18a1 1 0 0 0 1-.8L21 8H7" />
            <circle cx="9" cy="20" r="1.4" />
            <circle cx="17" cy="20" r="1.4" />
          </svg>
          <AnimatePresence>
            {cartOpen && (
              <motion.b initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ type: 'spring', stiffness: 500, damping: 20 }}>
                {itens.length}
              </motion.b>
            )}
          </AnimatePresence>
        </span>
      </div>

      <div className="app-store">
        <span className="app-store-dot" />
        {appDemo.store}
        <em>trocar</em>
      </div>

      <div className="app-body">
        <div className="app-msg bot">{appDemo.welcome}</div>
        <AnimatePresence>
          {step >= 1 && (
            <motion.div key="u" className="app-msg user" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              {appDemo.userText}
            </motion.div>
          )}
          {step === 2 && (
            <motion.div key="t" className="app-msg bot app-typing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <i />
              <i />
              <i />
            </motion.div>
          )}
          {step >= 3 && (
            <motion.div key="b" className="app-msg bot" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              {appDemo.botText}
              <span className="app-speak" aria-hidden="true">
                🔊
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="app-input">
        <span className="app-input-field">{step === 1 ? appDemo.userText : 'Fale ou digite o que precisa…'}</span>
        <span className="app-input-mic" />
      </div>

      <div className="app-nav" aria-hidden="true">
        {['Início', 'Categorias', 'Chat', 'Carrinho', 'Perfil'].map((n) => (
          <span key={n} className={n === 'Chat' ? 'on' : ''}>
            <i />
            {n}
          </span>
        ))}
      </div>

      <AnimatePresence>
        {cartOpen && (
          <motion.div
            className="app-cart"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          >
            <div className="app-cart-handle" />
            <div className="app-cart-head">
              <strong>Seu carrinho</strong>
              <span>{itens.length} itens</span>
            </div>
            <ul className="app-cart-list">
              {itens.map((it, i) => (
                <motion.li
                  key={it.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.12 }}
                  className={(it.id === 'banana' && step === 5) || (it.id === 'arroz' && step === 6) ? 'hl' : ''}
                >
                  <span className="app-thumb" style={{ background: it.color }} aria-hidden="true" />
                  <div className="app-item">
                    <strong>{it.name}</strong>
                    <span className="app-brand">
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.em key={it.brand} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}>
                          {it.brand}
                        </motion.em>
                      </AnimatePresence>
                      {it.altBrand && <i>▾</i>}
                    </span>
                  </div>
                  <div className="app-qty">
                    <span>−</span>
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.b key={it.qty} initial={{ scale: 0.6 }} animate={{ scale: 1 }} exit={{ scale: 0.6 }}>
                        {it.qty}
                      </motion.b>
                    </AnimatePresence>
                    <span className={it.id === 'banana' && step === 5 ? 'tap' : ''}>+</span>
                  </div>
                  <span className="app-price">{reais(it.price * it.qty)}</span>
                </motion.li>
              ))}
            </ul>
            <div className="app-cart-foot">
              <div>
                <span>Total</span>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.strong key={total.toFixed(2)} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
                    {reais(total)}
                  </motion.strong>
                </AnimatePresence>
              </div>
              <motion.button
                type="button"
                className="app-checkout"
                animate={step >= 7 && !reduce ? { scale: [1, 1.04, 1] } : { scale: 1 }}
                transition={{ duration: 0.9, repeat: step >= 7 ? Infinity : 0 }}
              >
                Finalizar compra
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
