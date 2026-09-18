import { channels, working } from '../data/content'
import { Icon } from './Icons'
import { Reveal, RevealWords } from './Reveal'

export function Channels() {
  return (
    <section id="canais" className="section">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">Canais</span>
          </Reveal>
          <h2 className="display h2">
            <RevealWords text="Dois canais. Um só motor." strong={['Dois', 'canais.', 'motor.']} />
          </h2>
          <Reveal delay={0.2}>
            <p className="lead">
              O assistente conversa onde o seu cliente já está. Os dois modelos funcionam em
              qualquer um dos canais.
            </p>
          </Reveal>
        </div>

        <div className="grid-2 channels">
          {channels.map((c, i) => (
            <Reveal key={c.kind} delay={i * 0.12} className="card channel">
              <div className="channel-kind">
                <Icon name={i === 0 ? 'whatsapp' : 'globe'} />
                {c.kind}
              </div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <ul className="channel-bullets">
                {c.bullets.map((b) => (
                  <li key={b}>
                    <Icon name="check" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="working">
          <div className="working-head">
            <span className="eyebrow">Funcionando hoje</span>
            <h3 className="h3">Pronto para demonstrar. Preparado para integrar.</h3>
            <p>
              Base montada com um catálogo real de supermercado — cerca de 9.000 produtos — para
              você ver a conversa acontecer com preço, marca e promoção de verdade.
            </p>
          </div>
          <ul className="working-list">
            {working.map((w, i) => (
              <Reveal as="li" key={w} delay={0.1 + i * 0.06}>
                <Icon name="check" />
                {w}
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
