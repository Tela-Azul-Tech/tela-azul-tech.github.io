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
    text: 'Linguagem natural e intenção. O cliente pede do jeito que fala — por texto, áudio, foto de lista ou PDF de receita.',
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

export const channels = [
  {
    kind: 'WhatsApp',
    title: 'Canal de vendas independente',
    text: 'Um número da sua rede que monta carrinho, ajusta quantidades, troca marcas e fecha o pedido — tudo dentro da conversa que o cliente já tem aberta.',
    bullets: ['Texto, áudio, foto e PDF', 'Botões e listas nativas', 'Sem app para instalar'],
  },
  {
    kind: 'Widget no site',
    title: 'Integrado ao e-commerce via API',
    text: 'O mesmo motor dentro do seu site ou app. O assistente conversa, o carrinho do e-commerce recebe. Sua identidade visual, sua operação.',
    bullets: ['Mesmo backend, mesma inteligência', 'Carrinho do seu e-commerce', 'Sua marca na frente'],
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
    text: 'Visão operacional para o supermercado, em tempo real.',
  },
  {
    title: 'Campanhas inteligentes',
    text: 'A IA empurra o que vocês querem vender.',
  },
  {
    title: 'Curadoria da vitrine',
    text: 'Controle por produto, marca ou categoria.',
  },
  {
    title: 'Relatórios de comportamento',
    text: 'O que pedem — e o que não encontram.',
  },
  {
    title: 'Produto e suporte',
    text: 'Atualizações contínuas para a operação.',
  },
  {
    title: 'Tecnologia que se encaixa',
    text: 'A solução entra na operação sem exigir uma nova operação.',
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
    'Nascemos no Hackathon do Sol 2026, de um desafio real do varejo: reduzir o abandono de carrinho. Vencemos a Trilha Varejo — e aquilo era só o começo.',
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
