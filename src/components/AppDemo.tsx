import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { appDemo } from '../data/content'
import './app-demo.css'

// Linha do tempo da simulação, em ms acumulados. Cada passo liga uma parte da
// tela; o loop recomeça no fim. Espelha o widget real "Compre conversando":
// cabeçalho azul, barra da loja, chat, gaveta do carrinho (que sobe em altura,
// empurrando o chat) com marca e quantidade, e o botão de seguir para o pagamento.
const passos = [
  { at: 800, step: 1 }, // usuário digita
  { at: 2400, step: 2 }, // assistente "digitando"
  { at: 3800, step: 3 }, // resposta + carrinho recebe os itens (gaveta fechada)
  { at: 5200, step: 4 }, // gaveta do carrinho abre
  { at: 8800, step: 5 }, // toca "+" na banana
  { at: 11200, step: 6 }, // troca a marca do arroz
  { at: 13600, step: 7 }, // seguir para o pagamento pulsa
  { at: 16400, step: 0 }, // reinicia
]

const reais = (v: number) => `R$ ${v.toFixed(2).replace('.', ',')}`

const IconStore = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9l1.5-5h15L21 9" />
    <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
    <path d="M5 11v9h14v-9" />
    <path d="M10 20v-5h4v5" />
  </svg>
)

const IconPin = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10z" />
    <circle cx="12" cy="11" r="2" />
  </svg>
)

const IconClip = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5l-8.5 8.5a5 5 0 0 1-7-7l9-9a3.5 3.5 0 0 1 5 5l-9 9a2 2 0 0 1-3-3l8-8" />
  </svg>
)

const IconMic = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
  </svg>
)

const IconSend = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const IconSpeaker = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 5L6 9H3v6h3l5 4V5z" />
    <path d="M15.5 8.5a5 5 0 0 1 0 7" />
  </svg>
)

/**
 * Celular com o widget "Compre conversando" da ferramenta: a mesma inteligência
 * do WhatsApp, com a marca da rede e o carrinho editável na própria tela.
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

  // Estado do carrinho derivado do passo: itens só existem depois da resposta;
  // quantidade da banana e marca do arroz mudam nos passos seguintes.
  const itens =
    step >= 3
      ? appDemo.items.map((it) => {
          if (it.id === 'banana' && step >= 5) return { ...it, qty: it.qty + 1 }
          if (it.id === 'arroz' && step >= 6 && it.altBrand)
            return {
              ...it,
              brand: it.altBrand.name,
              price: it.altBrand.price,
              oldPrice: it.altBrand.oldPrice,
            }
          return it
        })
      : []
  const total = itens.reduce((acc, it) => acc + it.price * it.qty, 0)
  const cheio = itens.reduce((acc, it) => acc + (it.oldPrice ?? it.price) * it.qty, 0)
  const economia = Math.max(0, cheio - total)
  const economiaPct = cheio > 0 ? Math.round((economia / cheio) * 100) : 0
  const cartOpen = step >= 4
  const { cart } = appDemo

  return (
    <div className="phone app-phone" aria-label="Demonstração da interface de aplicativo">
      <div className="phone-notch" />

      {/* Cabeçalho do widget */}
      <div className="app-top">
        <span className="app-badge" aria-hidden="true">
          TA
        </span>
        <div className="app-title">
          <strong>{appDemo.title}</strong>
          <span>{appDemo.subtitle}</span>
        </div>
        <span className="app-top-btn" aria-hidden="true">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </span>
        <span className="app-top-btn" aria-hidden="true">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
            <path d="M5 12h14" />
          </svg>
        </span>
      </div>

      {/* Barra da loja */}
      <div className="app-store">
        <IconPin />
        {appDemo.store}
        <em>{appDemo.storeSwitch}</em>
      </div>

      {/* Conversa */}
      {/* Com a gaveta aberta o chat encolhe e, como no widget, fica "rolado"
          para a última mensagem. */}
      <div className={`app-body${cartOpen ? ' app-body-end' : ''}`}>
        <div className="app-row bot">
          <span className="app-avatar">
            <IconStore />
          </span>
          <div className="app-msg bot">{appDemo.welcome}</div>
          <span className="app-speak">
            <IconSpeaker />
          </span>
        </div>
        <AnimatePresence>
          {step >= 1 && (
            <motion.div key="u" className="app-row user" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="app-msg user">{appDemo.userText}</div>
            </motion.div>
          )}
          {step === 2 && (
            <motion.div key="t" className="app-row bot" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <span className="app-avatar">
                <IconStore />
              </span>
              <div className="app-msg bot app-typing">
                <i />
                <i />
                <i />
              </div>
            </motion.div>
          )}
          {step >= 3 && (
            <motion.div key="b" className="app-row bot" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <span className="app-avatar">
                <IconStore />
              </span>
              <div className="app-msg bot">{appDemo.botText}</div>
              <span className="app-speak">
                <IconSpeaker />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Entrada */}
      <div className="app-input">
        <span className="app-input-btn">
          <IconClip />
        </span>
        <span className="app-input-btn">
          <IconMic />
        </span>
        <span className="app-input-field">{step === 1 ? appDemo.userText : appDemo.placeholder}</span>
        <span className={`app-input-send${step === 1 ? ' on' : ''}`}>
          <IconSend />
        </span>
      </div>

      {/* Gaveta do carrinho: como no widget, cresce em altura empurrando o chat.
          O wrapper é a "tela" branca atrás da folha arredondada — é ele que
          aparece nos cantos do cabeçalho, com a sombra da folha por cima. */}
      <motion.div
        className="app-cart-wrap"
        animate={{ height: cartOpen ? '62%' : economia > 0 ? 74 : 54 }}
        transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 30 }}
      >
        <div className="app-cart">
          <div className="app-cart-head">
            <div className="app-cart-line">
              <span className="app-cart-name">
                🛒 {cart.title}
                <b>{itens.length}</b>
              </span>
              <span className="app-cart-right">
                {itens.length > 0 && <strong>{reais(total)}</strong>}
                {itens.length > 0 && <i>{cart.clear}</i>}
                <em>{cartOpen ? cart.close : cart.open}</em>
              </span>
            </div>
            {economia > 0 && (
              <div className="app-cart-savings">
                {cart.savings} {reais(economia)} ({economiaPct}%)
              </div>
            )}
          </div>

          <ul className="app-cart-list">
            {itens.map((it, i) => {
              const promo = it.oldPrice != null && it.oldPrice > it.price
              return (
                <motion.li
                  key={it.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className={(it.id === 'banana' && step === 5) || (it.id === 'arroz' && step === 6) ? 'hl' : ''}
                >
                  <div className="app-item-top">
                    <span className="app-thumb" aria-hidden="true">
                      🛒
                    </span>
                    <div className="app-item">
                      <strong>{it.name}</strong>
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span key={it.brand} className="app-item-sub" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}>
                          {it.brand} • {it.unit}
                        </motion.span>
                      </AnimatePresence>
                      {promo && (
                        <span className="app-promo">
                          de <s>{reais(it.oldPrice!)}</s>, por {reais(it.price)}
                        </span>
                      )}
                    </div>
                    <div className="app-price">
                      {promo && <s>{reais(it.oldPrice! * it.qty)}</s>}
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.b
                          key={(it.price * it.qty).toFixed(2)}
                          className={promo ? 'promo' : ''}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                        >
                          {reais(it.price * it.qty)}
                        </motion.b>
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="app-item-bottom">
                    <div className="app-qty">
                      <span className={it.qty <= 1 ? 'off' : ''}>−</span>
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.b key={it.qty} initial={{ scale: 0.6 }} animate={{ scale: 1 }} exit={{ scale: 0.6 }}>
                          {it.qty}
                        </motion.b>
                      </AnimatePresence>
                      <span className={it.id === 'banana' && step === 5 ? 'tap' : ''}>+</span>
                    </div>
                    <span className="app-brand">
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.em key={it.brand} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}>
                          {it.brand}
                        </motion.em>
                      </AnimatePresence>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </motion.li>
              )
            })}
          </ul>

          {itens.length > 0 && (
            <div className="app-cart-foot">
              <motion.button
                type="button"
                className="app-checkout"
                animate={step >= 7 && !reduce ? { scale: [1, 1.03, 1] } : { scale: 1 }}
                transition={{ duration: 0.9, repeat: step >= 7 ? Infinity : 0 }}
              >
                {cart.checkout} · {reais(total)}
              </motion.button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
