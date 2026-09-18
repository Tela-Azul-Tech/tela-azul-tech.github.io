import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// `base: './'` gera caminhos relativos no build — funciona no GitHub Pages em
// qualquer nome de repositório (usuario.github.io/<repo>/) sem precisar
// ajustar nada quando o repositório for renomeado.
export default defineConfig({
  plugins: [react()],
  base: './',
})
