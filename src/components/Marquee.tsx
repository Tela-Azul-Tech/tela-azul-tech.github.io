// Faixa que corre com os termos da proposta — separa o hero das estatísticas.
const itens = [
  'chat commerce',
  'linguagem natural',
  'cross-sell inteligente',
  'WhatsApp',
  'widget no site',
  'campanhas com prioridade',
  'catálogo real',
  'pedido por voz',
  'lista em foto ou PDF',
  'IA com contexto de negócio',
]

export function Marquee() {
  const linha = [...itens, ...itens]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {linha.map((t, i) => (
          <span key={i}>
            {t}
            <i>→</i>
          </span>
        ))}
      </div>
    </div>
  )
}
