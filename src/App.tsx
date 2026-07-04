import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="bg-zinc-950 text-zinc-400 font-sans min-h-screen selection:bg-blue-500/20 selection:text-blue-200">
      <Navbar />
      <Hero />
      <div className="flex justify-center w-full">
        <Experience />
      </div>
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
