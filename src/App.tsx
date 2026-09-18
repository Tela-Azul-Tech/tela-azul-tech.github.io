import { ChatCommerce } from './components/ChatCommerce'
import { Channels } from './components/Channels'
import { CTA } from './components/CTA'
import { Dashboard } from './components/Dashboard'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Manifesto } from './components/Manifesto'
import { Marquee } from './components/Marquee'
import { Nav } from './components/Nav'
import { Plans } from './components/Plans'
import { Stats } from './components/Stats'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <HowItWorks />
        <ChatCommerce />
        <Channels />
        <Dashboard />
        <Features />
        <Plans />
        <Manifesto />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
