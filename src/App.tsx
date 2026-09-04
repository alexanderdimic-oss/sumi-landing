import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Nav } from './components/Nav'
import { ProductShowcase } from './components/ProductShowcase'
import { SocialProof } from './components/SocialProof'
import { TrustStrip } from './components/TrustStrip'
import { ValuePillars } from './components/ValuePillars'
import { LanguageProvider } from './context/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-sm focus:bg-indigo focus:px-4 focus:py-2 focus:text-washi"
      >
        メインコンテンツへスキップ
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <TrustStrip />
        <ValuePillars />
        <ProductShowcase />
        <HowItWorks />
        <SocialProof />
        <CtaBand />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
