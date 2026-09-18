import { motion, useReducedMotion } from 'framer-motion'
import { Reveal, RevealWords } from './Reveal'

// Painel administrativo ilustrado: números e barras entram animados. Os
// valores são ilustrativos — o painel real mostra a operação de cada rede.
const bars = [38, 52, 46, 70, 64, 88, 76, 92, 84, 100, 90, 96]

export function Dashboard() {
  const reduce = useReducedMotion()
  return (
    <section id="painel" className="section bg-ink dash">
      <div className="container dash-inner">
        <div className="dash-copy">
          <Reveal>
            <span className="eyebrow">Dashboard administrativo</span>
          </Reveal>
          <h2 className="display h2">
            <RevealWords text="Visão geral em tempo real. Campanhas sob controle." strong={['tempo', 'real.', 'controle.']} />
          </h2>
          <Reveal delay={0.2}>
            <p className="lead">
              Transforme conversas em sinais operacionais para o dia a dia da rede. Configure as
              ações que o assistente prioriza no momento certo — por produto, marca ou categoria.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <ul className="arrow-list dash-list">
              <li>O que os clientes pedem — e o que não encontram</li>
              <li>Campanhas com prioridade na recomendação</li>
              <li>Curadoria da vitrine sem depender de TI</li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="dash-panel" y={40}>
          <div className="dash-top">
            <span className="dash-dot" />
            <span className="dash-dot" />
            <span className="dash-dot" />
            <span className="dash-title">Visão geral · últimos 30 dias</span>
          </div>
          <div className="dash-kpis">
            {[
              ['Conversas', '4.812', '+18%'],
              ['Ticket médio', 'R$ 214,90', '+27%'],
              ['Itens por carrinho', '19,4', '+31%'],
              ['Não encontrados', '2,1%', '−0,8pp'],
            ].map(([k, v, d], i) => (
              <motion.div
                key={k}
                className="dash-kpi"
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
              >
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
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.05, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              />
            ))}
          </div>
          <div className="dash-campaigns">
            <div className="dash-campaigns-head">Campanhas ativas</div>
            {[
              ['Marca própria · hortifruti', 'prioridade alta', 92],
              ['Café — combo 2 un.', 'prioridade média', 64],
              ['Selo sem lactose', 'em teste', 37],
            ].map(([name, tag, w], i) => (
              <motion.div
                key={name}
                className="dash-campaign"
                initial={reduce ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
              >
                <span>{name}</span>
                <em>{tag}</em>
                <i>
                  <motion.b
                    initial={reduce ? false : { width: 0 }}
                    whileInView={{ width: `${w}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + i * 0.1, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
                  />
                </i>
              </motion.div>
            ))}
          </div>
          <span className="dash-note">valores ilustrativos</span>
        </Reveal>
      </div>
    </section>
  )
}
