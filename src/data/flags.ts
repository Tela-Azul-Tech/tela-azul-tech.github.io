// ───────────────────────────────────────────────────────────────────────────
// Feature flags da landing. Liga e desliga partes da página sem mexer em
// componente: mude o valor aqui, rode `npm run deploy` e pronto.
// ───────────────────────────────────────────────────────────────────────────

export const flags = {
  /**
   * Mostra o bloco "Implantação única · R$ X" dentro de cada card de plano.
   * Desligado em 20/09/2026: com o piloto "sem custo de implantação" em
   * destaque, o valor nos cards concorria com a oferta. Os valores continuam
   * em `plans[].setup` (content.ts); é só ligar de novo para voltarem.
   */
  showSetupFee: false,
} as const
