import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Experience from './components/Experience'
import CaseStudies from './components/CaseStudies'
import Skills from './components/Skills'
import Awards from './components/Awards'
import Terminal from './components/Terminal'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <div className="h-[55px]" />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Experience />
        <CaseStudies />
        <Skills />
        <Awards />
        <Terminal />
      </main>
      <Footer />
    </>
  )
}
