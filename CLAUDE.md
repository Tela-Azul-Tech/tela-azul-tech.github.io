# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@CONTEXTO.md

## Commands

```bash
npm run dev       # Vite dev server, http://localhost:5173
npm run build     # tsc -b && vite build → dist/  (type errors fail the build)
npm run preview   # serve dist/ at http://localhost:4173
npm run lint      # oxlint (config in .oxlintrc.json: rules-of-hooks = error, only-export-components = warn)
npm run deploy    # runs build (predeploy) then publishes dist/ to the gh-pages branch
```

There is no test suite. Verification is `npm run build` + `npm run lint` + looking at the page in a browser (see CONTEXTO §7.6: in a background tab framer-motion animations don't run, so a screenshot from an unfocused tab looks like an empty blue page — that is not a bug).

## Working rules (the short version — details and rationale in CONTEXTO.md)

- **All marketing copy, numbers, prices, links and the hero chat script live in `src/data/content.ts`.** Do not put text into components; the owner edits content without opening JSX. The deliberate exceptions are listed in CONTEXTO §7.3.
- **Content is Brazilian Portuguese.** Company is "Tela Azul" (two words); the product has no name — call it "nossa ferramenta de vendas" / "assistente"; the term "chat commerce" must stay. **Never name the client supermarket chain** anywhere (CONTEXTO §3.1).
- **Styling is plain CSS with tokens in `src/styles/global.css`** — no Tailwind, no CSS-in-JS. Page background is `--paper` (`#F6F6F6`), never `#fff`. Keep the weight-contrast rule for titles (300 body, 800 `<strong>` / `RevealWords strong=[...]`).
- **Numbers on the page must have a source** (CONTEXTO §3.7). Dashboard KPIs are illustrative and must stay labelled as such.
- Animation goes through the shared primitives (`Reveal`, `RevealWords`, `Counter`) and must respect `useReducedMotion()` in components plus the reduced-motion block in CSS.
- `vite.config.ts` uses `base: './'` — keep it; it's what makes the build work on any GitHub Pages repo name or custom domain.
- **Two WhatsApp numbers, never swap them:** `WHATSAPP_DEMO_LINK` (…7270, the live product bot) only behind "Testar no WhatsApp"; `WHATSAPP_CONTACT_LINK` / `WHATSAPP_PILOT_LINK` (…5754, the team) behind anything that means "falar com a gente" (CONTEXTO §4).

## Where things are

`src/App.tsx` is just the section order. One component per section in `src/components/`, section styles in `src/styles/sections.css`; `Nav`, `Hero` and `ChatDemo` carry their own `.css` next to them. Section ids (`#como-funciona`, `#planos`, …) are the nav targets in `content.ts` — renaming one breaks the menu.
