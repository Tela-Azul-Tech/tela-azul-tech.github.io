import { Reveal } from './Reveal'

// Divisória geométrica entre seções: uma faixa azul com a grade da marca e um
// traço escuro inclinados para um lado, cruzados por uma faixa azul-clara
// inclinada para o outro. Só CSS (clip-path em %), então a inclinação se
// ajusta sozinha do celular ao desktop.
export function Divider() {
  return (
    <Reveal className="divider" y={16}>
      <span className="divider-cross" aria-hidden="true" />
      <span className="divider-band" aria-hidden="true" />
      <span className="divider-line" aria-hidden="true" />
    </Reveal>
  )
}
