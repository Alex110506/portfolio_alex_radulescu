import Nav from './components/Nav'
import Hero from './components/Hero'
import Proof from './components/Proof'
import About from './components/About'
import Experience from './components/Experience'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Awards from './components/Awards'
import Terminal from './components/Terminal'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"


export default function App() {
  useReveal()

  return (
    <>
      <a
        href="#main"
        className="fixed left-3 top-3 z-[60] inline-flex min-h-11 -translate-y-[200%] items-center bg-ink px-4 font-mono text-xs font-semibold text-white focus-visible:translate-y-0"
      >
        SKIP TO CONTENT
      </a>
      <Nav />
      <div className="h-[56px]" />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Proof />
        <About />
        <CaseStudies />
        <Contact />
        <Experience />
        <Skills />
        <Awards />
        <Terminal />
      </main>
      <Footer />
      <Analytics/>
      <SpeedInsights/>
    </>
  )
}
