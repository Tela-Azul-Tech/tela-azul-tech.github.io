import { WHATSAPP_CONTACT_LINK, WHATSAPP_PILOT_LINK, plans } from '../data/content'
import { flags } from '../data/flags'
import { Icon } from './Icons'
import { Reveal, RevealWords } from './Reveal'

export function Plans() {
  return (
    <section id="planos" className="section plans-section">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">Planos</span>
          </Reveal>
          <h2 className="display h2">
            <RevealWords text="Simples para começar. Preparado para crescer." strong={['começar.', 'crescer.']} />
          </h2>
          <Reveal delay={0.2}>
            <p className="lead">
              Mensalidade baseada no volume de mensagens + implantação única de acordo com o
              catálogo. Seu negócio cresce, seu catálogo também — sem aumentar a mensalidade por
              isso.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="pilot">
          <div className="pilot-icon">
            <Icon name="spark" />
          </div>
          <div>
            <span className="pilot-tag">Condição promocional</span>
            <h3 className="h3">Piloto sem custo</h3>
            <p>
              Antes de qualquer plano: uma validação real, com o seu catálogo real,{' '}
              <strong>sem custo de implantação</strong> e com{' '}
              <strong>mensalidade a preço de custo por até 1 mês</strong>, sem compromisso de
              contratação. Medimos conversão, ticket médio, aderência ao catálogo e demanda não
              atendida — e evoluímos junto com a sua equipe. Após isso, você poderá escolher o plano
              que mais se adequa à realidade do seu negócio.
            </p>
          </div>
          <a href={WHATSAPP_PILOT_LINK} target="_blank" rel="noreferrer" className="btn btn-primary">
            Quero um piloto
            <span className="arrow">→</span>
          </a>
        </Reveal>

        {/* Mesma caixa do piloto, para as duas ofertas lerem como um conjunto. */}
        <Reveal className="plans-box">
          <span className="pilot-tag plans-tag">Planos</span>
          <h3 className="h3 plans-title">Escolha o plano que mais se adequa à realidade do seu negócio</h3>
          <div className="grid-4 plans">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1} className={`plan ${p.highlight ? 'plan-hl' : ''}`}>
                {p.highlight && <span className="plan-badge">Recomendado para redes</span>}
                <h3>{p.name}</h3>
                <div className="plan-price">
                  {p.price}
                  <span>/mês</span>
                </div>
                <ul>
                  <li>
                    <Icon name="check" />
                    {p.quota}
                  </li>
                  <li>
                    <Icon name="check" />
                    Excedente {p.extra} por mensagem
                  </li>
                  <li>
                    <Icon name="check" />
                    {p.skus}
                  </li>
                </ul>
                {flags.showSetupFee && (
                  <div className="plan-setup">
                    <span>Implantação única</span>
                    <strong>{p.setup}</strong>
                  </div>
                )}
                <a href={WHATSAPP_CONTACT_LINK} target="_blank" rel="noreferrer" className={`btn ${p.highlight ? 'btn-white' : 'btn-ghost'}`}>
                  Falar com a gente
                </a>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
