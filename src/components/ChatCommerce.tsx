import { differentials } from '../data/content'
import { Icon } from './Icons'
import { Reveal, RevealWords } from './Reveal'

export function ChatCommerce() {
  return (
    <section id="chat-commerce" className="section bg-blue cc">
      <div className="container">
        <div className="cc-head">
          <div>
            <Reveal>
              <span className="eyebrow">Chat commerce</span>
            </Reveal>
            <h2 className="display h2">
              <RevealWords text="A compra que acontece dentro da conversa." strong={['dentro', 'da', 'conversa.']} />
            </h2>
          </div>
          <Reveal delay={0.2}>
            <p className="lead">
              Chat commerce é vender onde o cliente já conversa. Em vez de navegar por categorias,
              filtros e telas de checkout, ele diz o que precisa — e a nossa ferramenta de vendas
              transforma isso em carrinho, com o contexto do seu negócio decidindo o que recomendar.
            </p>
          </Reveal>
        </div>

        <div className="grid-3 cc-grid">
          {differentials.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08} className="cc-card">
              <div className="cc-icon">
                <Icon name={d.icon} />
              </div>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="cc-band">
          <span className="cc-band-tag">IA com contexto de negócio</span>
          <p>
            Não é um chatbot de FAQ. É um motor de conversão e cross-sell que entende linguagem
            natural, consulta o seu catálogo e aplica as suas campanhas como regra — recomendação
            não é só experiência: <strong>é geração de receita.</strong>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
