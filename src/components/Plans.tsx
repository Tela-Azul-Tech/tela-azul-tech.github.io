import { WHATSAPP_CONTACT_LINK, WHATSAPP_PILOT_LINK, plans } from '../data/content'
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
            <RevealWords text="Um modelo simples para começar." strong={['simples']} />
          </h2>
          <Reveal delay={0.2}>
            <p className="lead">
              Mensalidade por volume de mensagens + implantação única por faixa de catálogo. Sem
              teto de volume, e a mensalidade não varia com o tamanho do catálogo.
            </p>
          </Reveal>
        </div>

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
              <div className="plan-setup">
                <span>Implantação única</span>
                <strong>{p.setup}</strong>
              </div>
              <a href={WHATSAPP_CONTACT_LINK} target="_blank" rel="noreferrer" className={`btn ${p.highlight ? 'btn-white' : 'btn-ghost'}`}>
                Falar com a gente
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="pilot">
          <div className="pilot-icon">
            <Icon name="spark" />
          </div>
          <div>
            <h3 className="h3">Piloto sem custo</h3>
            <p>
              Antes de qualquer plano: uma validação real, com o seu catálogo real, a preço de custo
              por até 3 meses e sem compromisso de contratação. Medimos conversão, ticket médio,
              aderência ao catálogo e demanda não atendida — e evoluímos junto com a sua equipe.
            </p>
          </div>
          <a href={WHATSAPP_PILOT_LINK} target="_blank" rel="noreferrer" className="btn btn-primary">
            Quero um piloto
            <span className="arrow">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
