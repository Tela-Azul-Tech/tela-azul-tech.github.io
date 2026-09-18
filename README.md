# Tela Azul — landing page (Chat Commerce)

Landing page da ferramenta de vendas por conversa da Tela Azul. React + TypeScript +
Vite, animações com Framer Motion, deploy no GitHub Pages via `gh-pages`.

## Rodar local

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # gera dist/
npm run preview    # serve o build em http://localhost:4173
```

## Deploy no GitHub Pages

Uma vez, para ligar o repositório:

```bash
git init
git add -A && git commit -m "landing page"
git remote add origin git@github.com:<usuario>/<repositorio>.git
git push -u origin main
```

Depois, toda vez que quiser publicar:

```bash
npm run deploy
```

O script roda o build (`predeploy`) e publica a pasta `dist/` na branch `gh-pages`.
No GitHub: **Settings → Pages → Source: Deploy from a branch → `gh-pages` / `(root)`**.
O site fica em `https://<usuario>.github.io/<repositorio>/`.

O `vite.config.ts` usa `base: './'` (caminhos relativos), então funciona com
qualquer nome de repositório — e também num domínio próprio, se um dia apontar.

## Onde mexer

| o quê | arquivo |
|---|---|
| Textos, planos, números, roteiro do chat animado, links | `src/data/content.ts` |
| Cores, tipografia, botões, cards (identidade) | `src/styles/global.css` |
| Estilo de cada seção | `src/styles/sections.css` |
| Seções (uma por componente) | `src/components/*.tsx` |
| Celular com a conversa | `src/components/ChatDemo.tsx` + `chat-demo.css` |
| Título, descrição, fonte | `index.html` |

Número do WhatsApp e Instagram estão no topo de `src/data/content.ts`
(`WHATSAPP_DEMO_NUMBER` = a demo da ferramenta, `WHATSAPP_CONTACT_NUMBER` = a equipe, `INSTAGRAM`).

## Identidade

Azul `#0051F5`, off-white `#F6F6F6`, tinta `#0B0F1A`. Fonte Manrope (Google Fonts),
títulos com peso 300 e destaques em 800 na mesma frase, grade sutil sobre o azul,
listas com `→`. Tudo em variáveis CSS no `global.css`.
