import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Missions from './components/Missions';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-space-950 text-space-100 selection:bg-nebula-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Missions />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
