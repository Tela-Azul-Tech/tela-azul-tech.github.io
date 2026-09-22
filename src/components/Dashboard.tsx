import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { adminPanel } from '../data/content'
import { Icon } from './Icons'
import { Reveal, RevealWords } from './Reveal'

// Painel do administrador ilustrado. Cinco abas, cada uma com um mockup
// animado (regras ligando, campanhas com resultado, pedido andando na
// timeline, gráfico, log de uma conversa). Troca sozinha a cada 6 s enquanto
// está na tela; o primeiro clique desliga o automático. Valores ilustrativos.
const AUTO_MS = 6000
const ease = [0.2, 0.8, 0.2, 1] as const

export function Dashboard() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { margin: '-20% 0px' })
  const reduce = useReducedMotion()
  const [tab, setTab] = useState(0)
  const [manual, setManual] = useState(false)
  const { tabs, capabilities } = adminPanel

  useEffect(() => {
    if (manual || !inView) return
    const t = window.setInterval(() => setTab((i) => (i + 1) % tabs.length), AUTO_MS)
    return () => window.clearInterval(t)
  }, [manual, inView, tabs.length])

  const atual = tabs[tab]

  return (
    <section id="painel" className="section bg-ink dash" ref={ref}>
      <div className="container">
        <div className="dash-inner">
          <div className="dash-copy">
            <Reveal>
              <span className="eyebrow">Painel do administrador</span>
            </Reveal>
            <h2 className="display h2">
              <RevealWords text="Você no controle. Nossa ferramenta no trabalho." strong={['controle.', 'trabalho.']} />
            </h2>
            <Reveal delay={0.2}>
              <p className="lead">
                Regras, campanhas, catálogo, pedidos e analytics em um painel só. Tudo o que o
                assistente decide segue o que você configurou — e fica registrado.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="dash-tabs" role="tablist" aria-label="Áreas do painel">
                {tabs.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={i === tab}
                    className={i === tab ? 'on' : ''}
                    onClick={() => {
                      setTab(i)
                      setManual(true)
                    }}
                  >
                    <span className="dash-tab-n">0{i + 1}</span>
                    {t.label}
                    {i === tab && !manual && !reduce && (
                      <motion.i
                        key={`bar-${tab}`}
                        className="dash-tab-progress"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: AUTO_MS / 1000, ease: 'linear' }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="dash-panel" y={40}>
            <div className="dash-top">
              <span className="dash-dot" />
              <span className="dash-dot" />
              <span className="dash-dot" />
              <span className="dash-title">Painel · {atual.label}</span>
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={atual.id}
                className="dash-view"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease }}
              >
                {atual.id === 'regras' && <RegrasView />}
                {atual.id === 'campanhas' && <CampanhasView />}
                {atual.id === 'pedidos' && <PedidosView />}
                {atual.id === 'analytics' && <AnalyticsView />}
                {atual.id === 'auditoria' && <AuditoriaView />}
              </motion.div>
            </AnimatePresence>
            <span className="dash-note">valores ilustrativos</span>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="dash-caps">
          {capabilities.map((c, i) => (
            <div key={c.title} className={`dash-cap ${atual.caps.includes(i) ? 'on' : ''}`}>
              <Icon name="check" />
              <div>
                <strong>{c.title}</strong>
                <span>{c.text}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

// Entrada em cascata usada por todas as abas.
function useEntrada() {
  const reduce = useReducedMotion()
  return (i: number, extra = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.15 + i * 0.1 + extra, duration: 0.45, ease },
  })
}

// ── Aba 1: regras e bias ligando uma a uma ────────────────────────────────
const regras = [
  ['Marca própria · hortifruti', 'bias · prioridade alta'],
  ['Se churrasco → sugerir carvão e gelo', 'atrelamento'],
  ['Sem estoque → similar da mesma marca', 'substituição'],
  ['Café combo 2 un. · sáb e dom', 'agendada'],
  ['Pedido mínimo R$ 60 · delivery', 'regra comercial'],
]

function RegrasView() {
  const entrada = useEntrada()
  const reduce = useReducedMotion()
  return (
    <div className="dash-rules">
      {regras.map(([nome, tipo], i) => (
        <motion.div key={nome} className="dash-rule" {...entrada(i)}>
          <span className="dash-rule-name">{nome}</span>
          <em>{tipo}</em>
          <span className="dash-switch" aria-hidden="true">
            <motion.b
              initial={reduce ? false : { x: 0 }}
              animate={{ x: 16 }}
              transition={{ delay: 0.5 + i * 0.18, type: 'spring', stiffness: 500, damping: 30 }}
            />
            <motion.i
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.18, duration: 0.25 }}
            />
          </span>
        </motion.div>
      ))}
    </div>
  )
}

// ── Aba 2: campanhas com resultado + disparo por WhatsApp ────────────────
const campanhas: [string, string, number][] = [
  ['Volta às aulas · papelaria', 'ativa', 82],
  ['Café — combo 2 un.', 'ativa', 61],
  ['Carrinho abandonado · lembrete 2h', 'automática', 44],
]

function CampanhasView() {
  const entrada = useEntrada()
  const reduce = useReducedMotion()
  return (
    <div className="dash-campaigns">
      {campanhas.map(([nome, tag, w], i) => (
        <motion.div key={nome} className="dash-campaign" {...entrada(i)}>
          <span>{nome}</span>
          <em>{tag}</em>
          <i>
            <motion.b
              initial={reduce ? false : { width: 0 }}
              animate={{ width: `${w}%` }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.9, ease }}
            />
          </i>
        </motion.div>
      ))}
      <motion.div className="dash-send" {...entrada(3, 0.1)}>
        <Icon name="whatsapp" />
        <div>
          <strong>Disparo · Volta às aulas</strong>
          <span>1.240 enviados · 318 conversas · 96 pedidos · R$ 18.430</span>
        </div>
        <em>template aprovado</em>
      </motion.div>
    </div>
  )
}

// ── Aba 3: catálogo + um pedido andando na timeline ──────────────────────
const etapas = ['Recebido', 'Em separação', 'Substituição aprovada pelo cliente', 'Pago · Pix', 'Saiu para entrega']

function PedidosView() {
  const entrada = useEntrada()
  const reduce = useReducedMotion()
  return (
    <div className="dash-orders">
      <motion.div className="dash-catalog" {...entrada(0)}>
        {[
          ['9.000', 'SKUs'],
          ['312', 'marcas'],
          ['41', 'categorias'],
          ['3', 'lojas'],
        ].map(([v, k]) => (
          <span key={k}>
            <strong>{v}</strong>
            {k}
          </span>
        ))}
      </motion.div>
      <motion.div className="dash-order-head" {...entrada(1)}>
        <strong>Pedido #4812</strong>
        <span>Loja Centro · entrega · R$ 214,90</span>
      </motion.div>
      <ol className="dash-timeline">
        {etapas.map((e, i) => (
          <motion.li
            key={e}
            initial={reduce ? false : { opacity: 0.35 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.5, duration: 0.3 }}
          >
            <motion.i
              initial={reduce ? false : { scale: 0.4, backgroundColor: '#dfe3ec' }}
              animate={{ scale: 1, backgroundColor: '#0051f5' }}
              transition={{ delay: 0.6 + i * 0.5, type: 'spring', stiffness: 400, damping: 22 }}
            />
            {e}
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

// ── Aba 4: analytics ─────────────────────────────────────────────────────
const bars = [38, 52, 46, 70, 64, 88, 76, 92, 84, 100, 90, 96]

function AnalyticsView() {
  const entrada = useEntrada()
  const reduce = useReducedMotion()
  return (
    <div className="dash-analytics">
      <div className="dash-kpis">
        {[
          ['Conversas', '4.812', '+18%'],
          ['Ticket médio', 'R$ 214,90', '+27%'],
          ['Conversão', '31%', '+9pp'],
          ['Não encontrados', '2,1%', '−0,8pp'],
        ].map(([k, v, d], i) => (
          <motion.div key={k} className="dash-kpi" {...entrada(i)}>
            <span>{k}</span>
            <strong>{v}</strong>
            <em>{d}</em>
          </motion.div>
        ))}
      </div>
      <div className="dash-chart" aria-hidden="true">
        {bars.map((h, i) => (
          <motion.span
            key={i}
            style={{ height: `${h}%` }}
            initial={reduce ? false : { scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.5 + i * 0.05, duration: 0.7, ease }}
          />
        ))}
      </div>
      <motion.div className="dash-legend" {...entrada(4)}>
        <span>Pedidos por dia · últimos 12 dias</span>
        <span>Demanda não atendida: “leite sem lactose 2L” · 37 pedidos</span>
      </motion.div>
    </div>
  )
}

// ── Aba 5: auditoria de uma conversa + operação ──────────────────────────
const log: [string, string][] = [
  ['Cliente', '“quero 2 kg de arroz, leite e café”'],
  ['IA considerou', '7 produtos · 2 regras · 1 campanha'],
  ['Regra aplicada', 'Marca própria → prioridade alta'],
  ['Campanha', 'Café — combo 2 un.'],
  ['Escolheu', 'Arroz T1 (marca própria) · Leite Integral · Café Torrado — R$ 48,06'],
]

function AuditoriaView() {
  const entrada = useEntrada()
  return (
    <div className="dash-audit">
      {log.map(([k, v], i) => (
        <motion.div key={k} className="dash-log" {...entrada(i)}>
          <span>{k}</span>
          <strong>{v}</strong>
        </motion.div>
      ))}
      <motion.div className="dash-ops" {...entrada(5, 0.1)}>
        <span>Permissão: gerente · Loja Centro</span>
        <span>Zona de entrega: 5 km · taxa R$ 6</span>
        <span>LGPD: opt-in registrado</span>
      </motion.div>
    </div>
  )
}
