import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

// Entrada ao rolar: sobe e aparece, uma vez só. `delay` escalona irmãos.
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  style,
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  style?: React.CSSProperties
  as?: 'div' | 'section' | 'li' | 'span'
}) {
  const reduce = useReducedMotion()
  const M = motion[as]
  return (
    <M
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </M>
  )
}

// Título que aparece palavra por palavra — usado nos displays das seções.
export function RevealWords({ text, className, strong = [] }: { text: string; className?: string; strong?: string[] }) {
  const reduce = useReducedMotion()
  const words = text.split(' ')
  // Pontuação não conta na comparação: "conversa." casa com "conversa".
  const limpa = (w: string) => w.replace(/[.,!?:;—]/g, '').toLowerCase()
  const fortes = new Set(strong.map(limpa))
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => {
        const isStrong = fortes.has(limpa(w))
        return (
          <motion.span
            key={i}
            aria-hidden="true"
            style={{ display: 'inline-block', marginRight: '0.26em', fontWeight: isStrong ? 800 : undefined }}
            initial={reduce ? false : { opacity: 0, y: '0.6em', filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {w}
          </motion.span>
        )
      })}
    </span>
  )
}
