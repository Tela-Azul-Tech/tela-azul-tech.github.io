// Logo da Tela Azul: o monitor + wordmark em duas linhas, como no material da
// marca. `tone` inverte para uso sobre fundo azul.
export function Logo({ tone = 'blue', size = 36 }: { tone?: 'blue' | 'white'; size?: number }) {
  const color = tone === 'blue' ? 'var(--blue)' : '#fff'
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size * 0.3,
        color,
        fontWeight: 800,
        lineHeight: 0.9,
        letterSpacing: '-0.03em',
        fontSize: size * 0.5,
      }}
      aria-label="Tela Azul"
    >
      <MonitorIcon size={size} />
      <span>
        Tela
        <br />
        Azul
      </span>
    </span>
  )
}

export function MonitorIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.82} viewBox="0 0 64 52" fill="currentColor" aria-hidden="true">
      <path d="M6 0h52a6 6 0 0 1 6 6v30a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6zm18 45h16v3h8a2 2 0 0 1 0 4H16a2 2 0 0 1 0-4h8z" />
    </svg>
  )
}
