// ───────────────────────────────────────────────────────────────────────────
// Conteúdo da landing page — tudo que é texto mora aqui, para editar sem
// mexer em componente. Fontes: proposta comercial da Tela Azul e material de
// identidade da marca.
// ───────────────────────────────────────────────────────────────────────────

// Dois números, dois papéis — não misturar:
//  - DEMO: a ferramenta em produção. "Testar no WhatsApp" manda um "oi" pra cá.
//  - CONTATO: a equipe da Tela Azul. "Falar com a gente" / "Quero um piloto".
const waLink = (numero: string, texto: string) => `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`

export const WHATSAPP_DEMO_NUMBER = '558498387270'
export const WHATSAPP_DEMO_LINK = waLink(WHATSAPP_DEMO_NUMBER, 'oi')
// A mesma demo, na interface web da ferramenta. Sempre aparece ao lado do
// botão do WhatsApp: são os dois jeitos de testar.
export const WEBAPP_DEMO_LINK = 'https://app.telazul.tech/chat'

export const WHATSAPP_CONTACT_NUMBER = '5584987795754'
export const WHATSAPP_CONTACT_LINK = waLink(
  WHATSAPP_CONTACT_NUMBER,
  'Olá! Quero saber mais sobre a ferramenta de vendas da Tela Azul.',
)
export const WHATSAPP_PILOT_LINK = waLink(
  WHATSAPP_CONTACT_NUMBER,
  'Olá! Quero um piloto da ferramenta de vendas da Tela Azul com o nosso catálogo.',
)
export const INSTAGRAM = 'https://www.instagram.com/telaazultech'

export const nav = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Chat commerce', href: '#chat-commerce' },
  { label: 'Canais', href: '#canais' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Planos', href: '#planos' },
  { label: 'Sobre', href: '#sobre' },
]

export const stats = [
  {
    value: 80,
    prefix: '+',
    suffix: '%',
    label: 'dos carrinhos são abandonados no e-commerce brasileiro',
    source: 'OneKey Payments',
  },
  {
    value: 35,
    prefix: '',
    suffix: '%',
    label: 'da receita da Amazon vem de recomendações',
    source: 'Estudo HEAD of AI',
  },
  {
    value: 40,
    prefix: '+20–',
    suffix: '%',
    label: 'de ticket médio: faixa de potencial com recomendação',
    source: 'Estudo HEAD of AI',
  },
  {
    value: 30,
    prefix: '+15–',
    suffix: '%',
    label: 'de conversão: faixa de potencial com recomendação',
    source: 'Estudo HEAD of AI',
  },
]

export const steps = [
  {
    n: '01',
    title: 'Entende',
    text: 'Linguagem natural e com intenção. O cliente pede do seu jeito — por texto, áudio, foto ou PDF — o assistente transforma a interação em contexto para a compra.',
    tags: ['integração ao canal do cliente'],
  },
  {
    n: '02',
    title: 'Recomenda',
    text: 'Campanhas, marcas e categorias com as regras do seu negócio como critério de decisão. O assistente mostra o que você quer vender.',
    tags: ['personalização por regra de negócio'],
  },
  {
    n: '03',
    title: 'Converte',
    text: 'Menos fricção, mais valor por compra. Do pedido ao carrinho fechado em menos etapas — e com cross-sell no momento certo.',
    tags: ['tempo de compra reduzido'],
  },
]

export const differentials = [
  {
    icon: 'plug',
    title: 'Integração ao canal',
    text: 'App, site ou WhatsApp — onde o cliente já está. Sem pedir para ele instalar mais nada.',
  },
  {
    icon: 'sliders',
    title: 'Personalização',
    text: 'Os critérios do seu negócio viram regra de decisão do assistente.',
  },
  {
    icon: 'megaphone',
    title: 'Campanhas reais',
    text: 'O assistente prioriza o que vocês querem vender: promoções, marcas próprias, selos.',
  },
  {
    icon: 'access',
    title: 'Acessibilidade digital',
    text: 'Uma experiência mais simples para mais pessoas: quem não navega em menu, conversa.',
  },
  {
    icon: 'clock',
    title: 'Menos tempo de compra',
    text: 'Menos etapas entre o pedido e o carrinho. Uma lista de mês em uma mensagem.',
  },
  {
    icon: 'user',
    title: 'Recomendação por usuário',
    text: 'Cada cliente recebe uma próxima melhor ação, com base no que pediu e no que a rede quer empurrar.',
  },
]

// Comparativo dos dois jeitos de usar a ferramenta. Poucos pontos por lado, de
// propósito: é para o visitante se reconhecer num dos cenários, não para ler
// uma tabela.
export const comparison = [
  {
    kind: 'WhatsApp',
    icon: 'whatsapp',
    title: 'Vender na conversa que já existe',
    text: 'Em um número da sua rede, o cliente manda a lista — por texto, áudio, foto ou PDF — e recebe o carrinho pronto para a venda.',
    pros: [
      'Nada para instalar: funciona em qualquer celular',
      'Onde o cliente já conversa todo dia',
      'Canal de vendas pronto, mesmo sem e-commerce',
      'Voz, texto, foto e PDF — do jeito que o consumidor preferir',
    ],
    bestFor: 'quem quer começar a vender rápido, ou abrir um canal novo',
  },
  {
    kind: 'App da sua marca',
    icon: 'globe',
    title: 'O mesmo assistente, dentro do seu app ou site',
    text: 'Um assistente que se adapta à identidade e à jornada da sua marca, integrando descoberta, recomendações e carrinho ao seu app ou site — conectado à estrutura de e-commerce que você já utiliza.',
    pros: [
      'Sua marca na frente, do início ao checkout',
      'Vitrine visual: fotos, marcas, promoções lado a lado',
      'Carrinho editável na tela, com quantidade e marca',
      'Conectado ao e-commerce e ao pagamento que já existem',
    ],
    bestFor: 'quem já vende online e quer uma camada de inteligência por cima',
  },
]

// Os três cenários de entrada. O ponto central: não é um OU outro.
export const scenarios = [
  {
    title: 'Ainda não vende online?',
    text: 'Comece pelo WhatsApp. Sem site, sem app, sem projeto de TI: o catálogo entra, o assistente começa a vender pra você.',
    icon: 'spark',
  },
  {
    title: 'Já tem e-commerce?',
    text: 'Coloque o assistente dentro dele. O cliente conversa, o seu carrinho recebe — e o WhatsApp vira um canal a mais.',
    icon: 'puzzle',
  },
  {
    title: 'Rede grande?',
    text: 'Use os dois. É o mesmo motor, o mesmo catálogo e as mesmas campanhas — o cliente escolhe onde comprar.',
    icon: 'chart',
  },
]

export const working = [
  'Carrinho montado por linguagem natural',
  'Busca semântica e pedido por voz',
  'Receita ou lista em PDF e foto',
  'Filtros de promoção, desconto e selo',
  'Ajuste de quantidade e troca de marca na conversa',
  'Painel administrativo com campanhas',
]

export const features = [
  {
    title: 'Assistente de compras',
    text: 'Linguagem natural no WhatsApp e no site.',
  },
  {
    title: 'Catálogo completo',
    text: 'Ingestão e indexação dos produtos, do jeito que já existem.',
  },
  {
    title: 'Painel de gestão',
    text: 'Visão operacional para a sua gestão, em tempo real.',
  },
  {
    title: 'Campanhas inteligentes',
    text: 'A IA direciona o consumidor para o que a empresa quer vender.',
  },
  {
    title: 'Curadoria da vitrine',
    text: 'Controle por produto, marca ou categoria.',
  },
  {
    title: 'Relatórios de comportamento',
    text: 'Conheça o seu cliente. Saiba o que ele pede e o que não está encontrando.',
  },
  {
    title: 'Produto e suporte',
    text: 'Atualizações contínuas para a operação.',
  },
  {
    title: 'Tecnologia que se encaixa',
    text: 'A solução entra na sua empresa sem exigir uma nova operação.',
  },
]

export const plans = [
  {
    name: 'Essencial',
    price: 'R$ 2.500',
    quota: '6.000 mensagens/mês',
    extra: 'R$ 0,12',
    skus: 'até 5.000 SKUs',
    setup: 'R$ 4.000',
  },
  {
    name: 'Crescimento',
    price: 'R$ 5.000',
    quota: '18.000 mensagens/mês',
    extra: 'R$ 0,10',
    skus: '5.001 – 15.000 SKUs',
    setup: 'R$ 7.000',
  },
  {
    name: 'Rede',
    price: 'R$ 9.000',
    quota: '45.000 mensagens/mês',
    extra: 'R$ 0,08',
    skus: '15.001 – 40.000 SKUs',
    setup: 'R$ 10.500',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'R$ 15.000',
    quota: '80.000 mensagens/mês',
    extra: 'R$ 0,06',
    skus: '40.000+ SKUs',
    setup: 'R$ 15.000',
  },
]

export const manifesto = {
  quote: ['Tecnologia começa com ', 'código', '. Solução começa ', 'entendendo o problema', '.'],
  origin:
    'Mais de 80% dos carrinhos são abandonados no e-commerce brasileiro. Nossa ferramenta de vendas ataca exatamente esse ponto: entende o que o cliente quer, recomenda com as regras do seu negócio e fecha o pedido — no WhatsApp, no seu app ou nos dois.',
  adapt: ['Criamos tecnologia que ', 'se adapta ao seu negócio', '. Não o contrário.'],
  considers: [
    'o modelo de negócio',
    'a identidade da marca',
    'as campanhas em andamento',
    'os objetivos comerciais',
    'a experiência do consumidor',
  ],
  closing: 'Seu negócio tem particularidades. Sua solução também deveria ter.',
}

// Roteiro da conversa animada do hero. Cada linha é uma "cena": o que aparece
// e quem fala. Os valores são os mesmos que o assistente devolve de verdade.
export type ChatScene =
  | { kind: 'user'; text: string; audio?: boolean }
  | { kind: 'typing' }
  | { kind: 'bot'; text: string }
  | { kind: 'card'; title: string; lines: string[]; total: string; buttons: string[] }
  | { kind: 'reset' }

export const chatScript: ChatScene[] = [
  { kind: 'user', text: 'quero 2 kg de arroz, leite e café ☕' },
  { kind: 'typing' },
  { kind: 'bot', text: 'Pronto! Adicionei 2kg de arroz, leite e café ao seu carrinho 🛒' },
  {
    kind: 'card',
    title: '✅ Adicionei:',
    lines: [
      '2× Arroz Branco T1 — R$ 4,29 cada = R$ 8,58',
      'Leite Integral — R$ 5,79',
      'Café Torrado e Moído — R$ 33,69',
    ],
    total: 'R$ 48,06',
    buttons: ['🛒 Ver carrinho', '✅ Finalizar', '🔊 Ouvir'],
  },
  { kind: 'user', text: 'somos 4 na família' },
  { kind: 'typing' },
  { kind: 'bot', text: 'Ajustei as quantidades para 4 pessoas 👨‍👩‍👧‍👦' },
  {
    kind: 'card',
    title: '🔄 Ajustei:',
    lines: ['Arroz Branco T1 → 4×', 'Leite Integral → 3×', 'Café Torrado e Moído → 2×'],
    total: 'R$ 101,91',
    buttons: ['🛒 Ver carrinho', '✅ Finalizar', '🔊 Ouvir'],
  },
  { kind: 'user', text: 'tira o café e coloca um achocolatado', audio: true },
  { kind: 'typing' },
  { kind: 'bot', text: 'Feito: tirei o café e coloquei um achocolatado em promoção 🎉' },
  {
    kind: 'card',
    title: '🗑 Removi: Café Torrado e Moído',
    lines: ['✅ Adicionei: Achocolatado em Pó 400g — R$ 9,49 (de R$ 11,90)'],
    total: 'R$ 44,02',
    buttons: ['🛒 Ver carrinho', '✅ Finalizar', '🔊 Ouvir'],
  },
  { kind: 'reset' },
]

// Simulação da interface de APLICATIVO no hero (AppDemo). Mesma pegada da do
// WhatsApp: valores plausíveis, com marca alternativa para mostrar a troca.
export const appDemo = {
  store: 'Loja Centro · 0,9 km · entrega',
  welcome: 'Oi! Me diga o que você precisa e eu monto o carrinho 🛒',
  userText: 'compras da semana pra 2 pessoas, até R$ 150',
  botText: 'Montei uma lista de semana para 2 pessoas por R$ 116,40. Dá uma olhada no carrinho 👇',
  items: [
    { id: 'arroz', name: 'Arroz Branco T1 5kg', brand: 'Tio João', price: 24.9, qty: 1, color: '#f3d9a4', altBrand: { name: 'Camil', price: 22.9 } },
    { id: 'feijao', name: 'Feijão Carioca 1kg', brand: 'Camil', price: 8.49, qty: 2, color: '#c9a27e' },
    { id: 'frango', name: 'Frango Inteiro kg', brand: 'Sadia', price: 12.9, qty: 2, color: '#f7c9b0' },
    { id: 'leite', name: 'Leite Integral 1L', brand: 'Piracanjuba', price: 5.79, qty: 6, color: '#dfe7f5' },
    { id: 'banana', name: 'Banana Prata kg', brand: 'Hortifruti', price: 6.99, qty: 2, color: '#f5e37a' },
  ],
}
