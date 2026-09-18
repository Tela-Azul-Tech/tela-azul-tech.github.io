# CONTEXTO — landing page Tela Azul (Chat Commerce)

Documento de contexto completo deste projeto. Serve para qualquer pessoa (ou
assistente de IA) retomar o trabalho sem precisar reconstruir o raciocínio:
o que é a empresa, o que é o produto, de onde veio cada texto e número, como a
identidade visual foi aplicada, como o código está organizado e quais decisões
foram tomadas de propósito.

Criado em 18/09/2026, junto com a primeira versão do site.

---

## 1. O que é este projeto

Landing page pública da **Tela Azul**, apresentando a **ferramenta de vendas
por conversa** da empresa — posicionada como **chat commerce**. Página única,
estática, em português do Brasil, com deploy no GitHub Pages.

**Objetivo da página:** fazer o visitante (dono ou gestor de rede de
supermercado / varejo) entender o produto em uma rolagem e **testar na hora**
pelo WhatsApp — o CTA principal em toda a página é o link `wa.me` do número de
produção. CTA secundário: pedir um piloto.

**O que a página NÃO é:** não é o produto. O produto (backend, interface web,
interface WhatsApp, painel administrativo) vive em outro repositório (ver §4).

---

## 2. A empresa: Tela Azul

- **Nome:** Tela Azul. Sempre escrito assim, duas palavras, iniciais
  maiúsculas. No Instagram: `@telaazultech`.
- **Origem:** nasceu no **Hackathon do Sol 2026**, de um desafio real do
  varejo — reduzir o abandono de carrinho. **Venceu a Trilha Varejo.** Essa
  frase de origem é usada literalmente no site ("e aquilo era só o começo").
- **Cidade:** Natal, RN (aparece no rodapé).
- **Posicionamento (do material de marca):**
  - "Tecnologia começa com **código**. Solução começa **entendendo o
    problema**."
  - "Criamos tecnologia que **se adapta ao seu negócio**. Não o contrário."
  - Considera: o modelo de negócio, a identidade da marca, as campanhas em
    andamento, os objetivos comerciais, a experiência do consumidor.
  - "Cada solução nasce a partir do contexto em que será utilizada, seja em uma
    jornada de compra, em uma operação interna ou em uma nova experiência
    digital."
  - Fechamento: "Seu negócio tem particularidades. Sua solução também deveria
    ter."
- Todo esse texto está na seção **Sobre** (`Manifesto.tsx`), praticamente
  literal ao material original.

---

## 3. O produto: ferramenta de vendas por conversa (chat commerce)

### 3.1 Como se fala do produto

Regras de vocabulário decididas pelo dono do projeto:

- A empresa é **"Tela Azul"**.
- O produto é chamado de **"nossa ferramenta de vendas"** (não tem nome
  próprio de produto). Também: "assistente", "assistente de compras", "motor de
  conversão e cross-sell".
- O termo **"chat commerce"** deve aparecer — é tratado como a inovação, o
  conceito que a Tela Azul está trazendo. Definição usada no site: *vender onde
  o cliente já conversa; em vez de navegar por categorias, filtros e telas de
  checkout, ele diz o que precisa e a ferramenta transforma isso em carrinho,
  com o contexto do negócio decidindo o que recomendar.*
- **Nunca citar o nome do cliente/rede** (a proposta original era para uma
  rede específica de supermercados; o site fala em "um catálogo real de
  supermercado, cerca de 9.000 produtos"). Essa regra vale também para a
  interface do WhatsApp do produto.
- Tom: direto, frases curtas, sem jargão de startup. Títulos misturam peso leve
  e peso pesado na mesma frase, como no material da marca.

### 3.2 O que a ferramenta faz (pitch em três passos)

**Entende → Recomenda → Converte**

1. **Entende** linguagem natural e intenção. O cliente pede do jeito que fala —
   texto, áudio, foto de lista ou PDF (receita, plano alimentar).
2. **Recomenda** campanhas, marcas e categorias usando as regras do negócio como
   critério de decisão. O assistente mostra o que a rede quer vender.
3. **Converte** com menos fricção e mais valor por compra — cross-sell no
   momento certo, menos etapas entre pedido e carrinho fechado.

"Uma camada inteligente em cima do seu negócio — da intenção do cliente à
oportunidade de cross-sell, sem acrescentar fricção."

### 3.3 Diferenciais (6, do material comercial)

| diferencial | frase |
|---|---|
| Integração ao canal | app, site ou WhatsApp — onde o cliente já está |
| Personalização | critérios do negócio como regra de decisão |
| Campanhas reais | o assistente mostra o que vocês querem vender |
| Acessibilidade digital | uma experiência mais simples para mais pessoas |
| Menos tempo de compra | menos etapas entre pedido e carrinho |
| Recomendação por usuário | cada cliente recebe uma próxima melhor ação |

Selo: **"IA com contexto de negócio"** — não é chatbot de FAQ.

### 3.4 Dois jeitos de vender (WhatsApp × app da marca)

A ferramenta tem duas interfaces sobre o mesmo motor, e a página trata isso
como **escolha do cliente, não do lojista** — o ponto central é "não é um OU
outro". Vocabulário: "WhatsApp" e "app da sua marca" (a interface web/app do
produto, com a identidade da rede).

| | WhatsApp | App da sua marca |
|---|---|---|
| resumo | vender na conversa que já existe | o mesmo assistente dentro do app/site da rede |
| pontos fortes | nada para instalar · onde o cliente já conversa · canal pronto mesmo sem e-commerce · voz, foto e PDF | sua marca na frente · vitrine visual · carrinho editável na tela · entra no e-commerce e pagamento existentes |
| melhor para | começar a vender rápido / abrir canal novo | quem já vende online e quer conversa por cima |

Três cenários de entrada (seção Canais): **ainda não vende online?** → comece
pelo WhatsApp · **já tem e-commerce?** → coloque o assistente dentro dele ·
**rede grande?** → use os dois. Dados em `comparison` e `scenarios`
(`content.ts`). Regra do dono: poucos pontos por lado, sem tabela densa.

### 3.5 O que funciona hoje (estado real do produto em 09/2026)

- Carrinho montado por linguagem natural
- Busca semântica e pedido por voz
- Receita ou lista em PDF e foto
- Filtros de promoção, desconto e selo
- Ajuste de quantidade e troca de marca na conversa
- Painel administrativo com campanhas
- Interface WhatsApp em produção (número real, aberto a qualquer pessoa)
- Base de demonstração com ~9.000 produtos de um catálogo real de supermercado
- **Ainda não integrada a nenhuma rede** — base montada para demonstração
- **Pagamento é mock** nas duas interfaces (web e WhatsApp): o pedido é
  confirmado com "a pagar na entrega/retirada"; não há cobrança real

### 3.6 Recursos "em todos os planos" (8, do material)

Assistente de compras · Catálogo completo (ingestão e indexação) · Painel de
gestão · Campanhas inteligentes · Curadoria da vitrine (por produto, marca ou
categoria) · Relatórios de comportamento (o que pedem e o que não encontram) ·
Produto e suporte (atualizações contínuas) · Tecnologia que se encaixa (entra
na operação sem exigir uma nova operação).

### 3.7 Números usados na página (com fonte)

| número | afirmação | fonte |
|---|---|---|
| **+80%** | dos carrinhos são abandonados no e-commerce brasileiro | OneKey Payments |
| **35%** | da receita da Amazon vem de recomendações | Estudo HEAD of AI |
| **+20–40%** | ticket médio — faixa de potencial com recomendação | Estudo HEAD of AI |
| **+15–30%** | conversão — faixa de potencial com recomendação | Estudo HEAD of AI |

Os KPIs do painel ilustrado (4.812 conversas, R$ 214,90 de ticket, 19,4
itens/carrinho, 2,1% não encontrados) são **ilustrativos** e estão marcados
assim na tela. Não são dados reais.

### 3.8 Planos (do material comercial)

Mensalidade por volume de mensagens + implantação única por faixa de catálogo.

| plano | mensalidade | franquia/mês | excedente | faixa de SKUs | implantação |
|---|---|---|---|---|---|
| Essencial | R$ 2.500 | 6.000 msgs | R$ 0,12 | até 5.000 | R$ 4.000 |
| Crescimento | R$ 5.000 | 18.000 msgs | R$ 0,10 | 5.001–15.000 | R$ 7.000 |
| **Rede** (destaque) | R$ 9.000 | 45.000 msgs | R$ 0,08 | 15.001–40.000 | R$ 10.500 |
| Enterprise | R$ 15.000 | 80.000 msgs | R$ 0,06 | 40.000+ | R$ 15.000 |

"Sem teto de volume" · "A mensalidade não varia com o tamanho do catálogo".

**Piloto sem custo:** validação real com o catálogo real do cliente, a preço
de custo por até 1 mês (era 3 meses no material; reduzido pelo dono em
18/09/2026), sem compromisso de contratação. Mede: conversão,
ticket médio, aderência ao catálogo, experiência do consumidor, demanda não
atendida; melhorias com a equipe. "Se fizer sentido → entrada em um dos
planos."

> **Decisão em aberto:** os preços estão públicos na página porque estavam no
> material. Se o dono do projeto não quiser preço aberto, basta remover
> `<Plans />` de `src/App.tsx` (o piloto está dentro de `Plans.tsx`; se quiser
> manter só o piloto, extraia o bloco `.pilot`).

---

## 4. Relação com o produto de verdade

O backend e as interfaces do produto vivem em
`~/Documents/app-mercado-hackathon` (Next.js 16, Postgres + pgvector, Gemini).
Fatos relevantes para a landing:

- **Dois números de WhatsApp, com papéis diferentes** (`src/data/content.ts`):
  - **Demo** — `+55 84 9838-7270` → `WHATSAPP_DEMO_NUMBER = '558498387270'`.
    É a ferramenta em produção (conta da WhatsApp Cloud API chamada "Tela
    Azul", aberta a qualquer número). Só os CTAs **"Testar no WhatsApp" /
    "Testar agora"** (nav, hero, CTA final) apontam para cá, com `?text=oi`.
  - **Contato** — `+55 84 98779-5754` → `WHATSAPP_CONTACT_NUMBER =
    '5584987795754'`. É a equipe. Tudo que remete a **"falar com a gente"**
    (botões dos planos, "Quero um piloto", ícone do rodapé, telefone exibido
    no CTA final) aponta para cá, com mensagem pré-preenchida
    (`WHATSAPP_CONTACT_LINK` / `WHATSAPP_PILOT_LINK`).
  - Regra (18/09/2026): **nunca mandar "fale com a gente" para o número da
    demo** — quem clica cai num bot montando carrinho, não numa pessoa.
- A conversa animada no hero (`chatScript` em `content.ts`) **replica o formato
  real** das respostas do assistente do WhatsApp: mensagem de texto + card com
  "✅ Adicionei:" / "🔄 Ajustei:" / "🗑 Removi:", total do carrinho, e os três
  botões `🛒 Ver carrinho · ✅ Finalizar · 🔊 Ouvir`. Os preços são os que o
  catálogo devolveu num teste real (arroz R$ 4,29, leite R$ 5,79, café
  R$ 33,69).
- A saudação real do WhatsApp é "Olá! Bem-vindo à ferramenta de Chat-Commerce"
  — mesma terminologia da landing.
- Se um número mudar, muda só a constante correspondente. O `INSTAGRAM` está ao lado.
- Nenhuma credencial do produto está (nem deve estar) neste repositório.

---

## 5. Identidade visual

Baseada em três imagens de marca (posts do Instagram) fornecidas pelo dono do
projeto. Valores **medidos** nas imagens, não estimados:

| token | valor | uso |
|---|---|---|
| `--blue` | `#0051F5` | cor principal; fundos de seção, botões, destaques |
| `--blue-deep` | `#0038B8` | hover do botão primário |
| `--blue-ink` | `#001F6B` | blob escuro do hero |
| `--blue-soft` | `#E8EFFF` | fundo de ícones e tags |
| `--paper` | `#F6F6F6` | off-white do fundo (é o branco da marca; não usar `#fff` como fundo de página) |
| `--ink` | `#0B0F1A` | texto e seções escuras |
| `--muted` | `#5B6478` | texto secundário |
| `--line` | `rgba(11,15,26,.1)` | bordas |

**Tipografia:** Manrope (Google Fonts), pesos 300–800. A regra da marca é o
**contraste de peso na mesma frase**: título em 300 com as palavras-chave em
800 (`.display` + `<strong>`). Letter-spacing negativo nos displays
(`-0.035em`). Exemplos: "O carrinho não deveria ser o fim da **conversa.**",
"Tecnologia começa com **código**."

**Elementos gráficos da marca reproduzidos:**

- **Grade sutil** sobre o azul (`.bg-blue`: linhas brancas a 6% em células de
  48px) — está nos posts originais.
- **Setas `→`** como marcador de lista (`.arrow-list`) e no marquee.
- **Régua branca curta** abaixo do título do manifesto (`.manifesto-rule`),
  igual ao post.
- **Logo:** monitor com base + wordmark em duas linhas ("Tela / Azul"), peso
  800. Desenhado em SVG em `Logo.tsx` (`MonitorIcon`); o favicon
  (`public/favicon.svg`) é o mesmo monitor sobre um quadrado azul.
- Cantos arredondados generosos (20px em cards, 28px no CTA), botões em pílula.

**Cores do WhatsApp** (só dentro do celular do hero, para o mockup ser
reconhecível): header `#075E54`, balão do usuário `#DCF8C6`, fundo `#ECE5DD`,
mic `#128C7E`, ticks azuis `#53BDEB`.

---

## 6. Estrutura da página (ordem e intenção de cada seção)

| # | seção | componente | id | intenção |
|---|---|---|---|---|
| 0 | Barra fixa | `Nav.tsx` | — | transparente sobre o hero, vira vidro fosco ao rolar; CTA WhatsApp sempre visível; menu hambúrguer ≤960px |
| 1 | Hero | `Hero.tsx` + `ChatDemo.tsx` + `AppDemo.tsx` | `#top` | frase-tese + celular com a simulação acontecendo sozinha; **seletor WhatsApp / App da marca** alterna entre as duas simulações (carrossel automático a cada 20 s, para ao clicar) |
| 2 | Marquee | `Marquee.tsx` | — | faixa escura em movimento com os termos-chave; separa hero de conteúdo |
| 3 | Números | `Stats.tsx` + `Counter.tsx` | `#stats` | os 4 dados com fonte, contadores animados |
| 4 | Como funciona | `HowItWorks.tsx` | `#como-funciona` | Entende → Recomenda → Converte |
| 5 | Chat commerce | `ChatCommerce.tsx` | `#chat-commerce` | define o termo + 6 diferenciais + faixa "IA com contexto de negócio" |
| 6 | Canais | `Channels.tsx` + `split.css` | `#canais` | **seção dividida ao meio**, sangrando até as bordas: verde do WhatsApp à esquerda, azul Tela Azul à direita; cada lado com a própria demo rodando (`ChatDemo` / `AppDemo`), 4 pontos fortes e "melhor para" embaixo; selo "ou os dois" na costura; abaixo, os 3 cenários e o bloco "Funcionando hoje" |
| 7 | Dashboard | `Dashboard.tsx` | `#painel` | painel ilustrado com KPIs, barras e campanhas animadas |
| 8 | Recursos | `Features.tsx` | `#recursos` | os 8 recursos "em todos os planos" |
| 9 | Planos | `Plans.tsx` | `#planos` | tabela de 4 planos + piloto sem custo |
| 10 | Sobre | `Manifesto.tsx` | `#sobre` | o manifesto da marca, literal |
| 11 | CTA final | `CTA.tsx` | `#contato` | "O próximo carrinho pode começar agora" + botão da demo + Instagram + telefone de contato |
| 12 | Rodapé | `Footer.tsx` | — | logo, links, social, origem no hackathon |

Os `id`s são os alvos do menu (`nav` em `content.ts`). Rolagem suave via
`scroll-behavior: smooth`.

---

## 7. Arquitetura do código

### 7.1 Stack e versões

- Vite 8 · React 19 · TypeScript 6 (template `react-ts` do Vite)
- `framer-motion` 13 (animações; API `motion`, `AnimatePresence`, `useInView`,
  `useScroll`, `useTransform`, `animate`, `useReducedMotion`)
- `gh-pages` 6 (deploy)
- `oxlint` (lint do template; `npm run lint`)
- CSS puro com variáveis — **sem Tailwind, sem CSS-in-JS**, de propósito:
  controle total sobre a identidade e zero dependência extra.
- Fonte via `<link>` do Google Fonts no `index.html` (Manrope 300–800).

### 7.2 Árvore

```
index.html                 título, meta description/OG, fonte, favicon
vite.config.ts             base: './' (caminhos relativos → GitHub Pages)
package.json               scripts: dev, build, preview, lint, predeploy, deploy
public/favicon.svg         monitor azul
src/
  main.tsx                 monta <App/>; importa global.css e sections.css
  App.tsx                  ordem das seções
  data/content.ts          TODO o conteúdo textual + números + roteiro do chat
  styles/global.css        tokens, reset, tipografia, botões, cards, grids, reduced-motion
  styles/sections.css      estilo de cada seção (marquee, stats, steps, cc, canais,
                           dashboard, features, planos, manifesto, cta, footer) + responsivo
  components/
    Logo.tsx               Logo + MonitorIcon (SVG)
    Icons.tsx              ícones de linha 24px (<Icon name="..."/>)
    Reveal.tsx             Reveal (entra ao rolar) e RevealWords (palavra por palavra)
    Counter.tsx            número que conta até o valor quando entra na tela
    Nav.tsx + nav.css      barra fixa + menu mobile
    Hero.tsx + hero.css    hero, blobs, badges flutuantes, parallax
    ChatDemo.tsx + chat-demo.css   celular + conversa do WhatsApp animada em loop
    AppDemo.tsx + app-demo.css     mesmo celular com a interface de APP: barra da loja,
                                   chat, gaveta do carrinho (marca, quantidade, total)
    Marquee.tsx            faixa em movimento
    Channels.tsx + split.css     seção dividida (verde × azul) com as duas demos
    Stats.tsx, HowItWorks.tsx, ChatCommerce.tsx,
    Dashboard.tsx, Features.tsx, Plans.tsx, Manifesto.tsx, CTA.tsx, Footer.tsx
```

### 7.3 Conteúdo centralizado (`src/data/content.ts`)

Regra: **nenhum texto de marketing dentro de componente**. Tudo vem daqui:
`WHATSAPP_DEMO_*`, `WHATSAPP_CONTACT_*`, `WHATSAPP_PILOT_LINK`, `INSTAGRAM`, `nav`, `stats`, `steps`,
`differentials`, `comparison`, `scenarios`, `working`, `features`, `plans`, `manifesto`, `appDemo`,
`chatScript`. Exceções deliberadas (texto curto acoplado ao layout): títulos de
seção com `RevealWords`, textos do `Dashboard` ilustrado, o lead do hero e do
CTA.

### 7.4 Sistema de animação

- **`Reveal`** — `whileInView` com `once: true` e `margin: '-80px'`; sobe 28px
  e aparece em 0.8s com easing `[0.2, 0.8, 0.2, 1]`. Aceita `delay` para
  escalonar irmãos e `as` (`div|section|li|span`).
- **`RevealWords`** — quebra o título em palavras; cada uma entra com blur e
  deslocamento, 50ms de defasagem. A prop `strong` recebe as palavras que
  devem ficar em 800; a comparação **ignora pontuação e caixa** (bug corrigido:
  "conversa." tem que casar com "conversa").
- **`Counter`** — `animate(0, value)` em 1.8s quando entra na tela.
- **Hero** — título entra linha a linha por máscara (`overflow: hidden` +
  `y: 110% → 0`), badges e CTA com atraso; parallax leve por `useScroll` (o
  celular sobe mais devagar que o texto); o celular flutua num loop de 6s.
- **ChatDemo** — roteiro em `chatScript`, uma cena por vez com `setTimeout`
  (durações em `duracao()`: user 1.5s, digitando 1.3s, bot 1.4s, card 4.2s,
  reset 0.9s). `AnimatePresence` anima entrada/saída dos balões; o container
  rola sozinho para a última mensagem. Loop infinito. Os totais do roteiro
  fecham a conta: R$ 48,06 → R$ 101,91 (×4/×3/×2) → R$ 44,02 (−café
  +achocolatado R$ 9,49).
- **AppDemo** — linha do tempo fixa (`passos`, ms acumulados, loop de 17 s):
  usuário digita → digitando → resposta → gaveta do carrinho sobe (spring) →
  toca "+" na banana (qty 2→3, linha destacada) → troca a marca do arroz (Tio
  João → Camil, preço muda) → "Finalizar compra" pulsa → reinicia. O estado do
  carrinho é DERIVADO do passo (não há estado de carrinho separado). Dados em
  `appDemo`; total inicial R$ 116,40.
- **Carrossel do hero** — `canal: 'whatsapp' | 'app'` no `Hero`; `setInterval`
  de 20 s alterna, e o primeiro clique no seletor (`.hero-switch`) desliga o
  automático (`manual = true`). Troca com `AnimatePresence mode="wait"` e leve
  rotação 3D. Legenda abaixo do celular muda junto (`.hero-stage-caption`).
- **Dashboard** — barras com `scaleY`, KPIs e campanhas em cascata, barra de
  progresso com `width`.
- **CTA** — brilho cônico girando em 30s atrás do texto (opacidade baixa para
  não atrapalhar leitura).
- **Marquee e blobs** — CSS puro (`@keyframes`), independem de JS.
- **`prefers-reduced-motion`** respeitado em dois níveis: o CSS zera durações e
  os componentes consultam `useReducedMotion()` para pular loops e entradas.

### 7.5 Responsivo (breakpoints)

- `≤1200px` — badges flutuantes do hero somem (não há espaço à direita do
  celular sem colidir com o texto).
- `≤1024px` — hero vira coluna única (celular abaixo do texto); stats 2 colunas;
  dashboard, manifesto e cabeçalho do chat commerce em 1 coluna; rodapé 1 coluna.
- `≤960px` — menu vira hambúrguer (`.nav-mobile`).
- `≤820px` — steps, working, pilot, grid-3/grid-2 em 1 coluna; a seta entre os
  passos gira 90° e vai para baixo do card.
- `≤560px` — grid-4 e stats em 1 coluna; container com 18px de margem.
- `≤420px` — celular do hero encolhe para 286px.

> O layout foi validado no navegador em 1440px e ~1100px. **Abaixo disso não
> foi visto em tela** (a janela do Chrome usada no teste não reduzia mais);
> os breakpoints estão escritos, mas vale conferir num celular após o deploy.

### 7.6 Comportamentos que valem saber

- O `Nav` usa `useMotionValueEvent(scrollY)` para trocar de transparente para
  sólido a partir de 40px. O logo troca de branco para azul junto.
- Todos os links externos têm `target="_blank" rel="noreferrer"`.
- `index.html` já tem `<meta name="theme-color" content="#0051F5">` e Open
  Graph básico (sem imagem OG ainda — ver pendências).
- Em **abas em segundo plano** o navegador pausa `requestAnimationFrame`, e o
  framer-motion só anima quando a aba ganha foco. Em teste automatizado isso
  aparece como "página azul vazia"; num usuário real é normal (ele só vê a aba
  quando a foca).

---

## 8. Deploy (GitHub Pages)

```bash
# uma vez
git init && git add -A && git commit -m "landing page"
git remote add origin git@github.com:Tela-Azul-Tech/tela-azul-tech.github.io.git
git push -u origin main

# a cada publicação
npm run deploy      # = predeploy (npm run build) + gh-pages -d dist
```

No GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a
branch → Branch: `gh-pages` / `(root)`**.

Repositório: `Tela-Azul-Tech/tela-azul-tech.github.io` (site da organização,
primeiro push e deploy em 18/09/2026). Endereço do GitHub:
`https://tela-azul-tech.github.io/`.

**Domínio próprio: `telazul.tech`** (Namecheap, comprado em 18/09/2026).
`public/CNAME` contém `telazul.tech`, então cada `npm run deploy` já leva o
arquivo para a `gh-pages` — não configurar o domínio só pela interface do
GitHub, senão o próximo deploy apaga. DNS no Namecheap (Advanced DNS):
`A @` → 185.199.108.153 / .109.153 / .110.153 / .111.153 e
`CNAME www` → `tela-azul-tech.github.io`. No GitHub: Settings → Pages →
Custom domain `telazul.tech` + Enforce HTTPS.

- `base: './'` no Vite gera caminhos relativos, então **o nome do repositório
  não importa** e a mesma build serve para domínio próprio (basta `CNAME` em
  `public/`).
- `dist/` está no `.gitignore`; só a branch `gh-pages` recebe o build.
- Não há roteador (página única), logo não há problema de 404 em rotas.

---

## 9. Decisões tomadas (e por quê)

| decisão | motivo |
|---|---|
| CSS puro em vez de Tailwind | identidade com poucos tokens; menos dependência; classes legíveis para quem for editar |
| Conteúdo em `content.ts` | o dono do projeto vai mexer em texto e preço com frequência; não deve precisar abrir JSX |
| Celular com conversa **real** no hero | é a prova do produto — mostra o formato exato das respostas em vez de descrever |
| Duas simulações no hero (WhatsApp / app) com carrossel | pedido do dono: mostrar que existe interface própria além do WhatsApp; alternância automática para quem não clica, manual para quem quer olhar com calma |
| Seção Canais dividida ao meio, uma cor e uma demo por lado | pedido do dono ("stylish, com demo rodando em cada lado"); WhatsApp à esquerda, app à direita; empilha em ≤960px com o selo "ou os dois" na costura |
| Cores do WhatsApp só dentro do celular | reconhecimento imediato do canal, sem contaminar a identidade da página |
| Badges do hero à direita do celular | à esquerda colidiam com o título em 1440px |
| Faixa "IA com contexto de negócio" com rótulo horizontal | a versão vertical cortava o texto |
| Preços públicos | estavam no material; fácil de remover (ver §3.8) |
| Não citar o cliente | decisão do dono; o catálogo aparece como "catálogo real de supermercado" |
| Ícones em SVG inline (`Icons.tsx`) | sem biblioteca de ícones; 20 ícones bastam |
| Fonte via Google Fonts (não self-hosted) | simplicidade; se precisar de offline/privacidade, baixar os `.woff2` para `public/fonts` |
| KPIs do painel marcados "ilustrativos" | não existe operação real ainda; não inventar dado como se fosse real |

---

## 10. Pendências e ideias

- [ ] Ver em celular real após o deploy (§7.5).
- [ ] Imagem Open Graph (`og:image`) para o link ficar bonito no WhatsApp —
  1200×630, azul com o logo e a frase-tese.
- [ ] Decidir se os preços ficam públicos.
- [ ] Formulário/e-mail de contato, se quiser um canal além do WhatsApp.
- [x] Analytics — GA4 instalado em 18/09/2026 no `index.html` (gtag). Propriedade
  "Tela Azul — Landing Page" (id `554936614`) na conta "Blog Pessoal" do
  Google Analytics; fluxo web `15804351302`; **ID de métrica `G-8HZPPTE0RB`**.
  URL cadastrada no fluxo: `https://telazul.tech`.
- [x] Microsoft Clarity — instalado em 18/09/2026 no `index.html`, logo após o
  GA4. Projeto "Tela Azul - Landing Page", **ID `ykdgw47fd7`**, site
  `telazul.tech`, setor B2B Services. Painel: clarity.microsoft.com (login com a
  conta do dono). Grava sessões e mapas de calor; sem custo.
- [x] Domínio próprio — `telazul.tech` (18/09/2026, ver §8).
- [ ] Vídeo/GIF real do WhatsApp em vez da simulação, quando houver material.
- [ ] Depoimento/logotipo do primeiro cliente, quando o piloto virar caso.
- [ ] Rever o número do painel ilustrado quando existir dado real.

---

## 11. Fontes usadas para construir a página

- **Identidade:** `~/Documents/projects/identidade-visual-telaazul/` — três
  imagens (post azul com manifesto, logo centralizado, post off-white "Criamos
  tecnologia que se adapta ao seu negócio").
- **Conteúdo:** `~/Documents/projects/info-tela-azul/Tela Azul - Nordestão.pdf`
  — proposta comercial de 22 páginas (números, diferenciais, canais, recursos,
  planos, piloto, "funcionando hoje"). A paleta desse PDF (teal/navy) **não**
  foi usada; a identidade oficial é a das imagens.
- **Produto real:** repositório `app-mercado-hackathon` e a conversa de
  desenvolvimento da interface WhatsApp (formato das mensagens, número de
  produção, saudação).
