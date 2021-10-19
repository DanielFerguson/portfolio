import Hero from './components/home/Hero';
import Projects from './components/home/Projects';
import Skills from './components/home/Skills';
import Work from './components/home/Work';
import Tools from './components/home/Tools';
import Articles from './components/home/Articles';
import Newsletter from './components/home/Newsletter';
import Contact from './components/home/Contact';
import Footer from './components/home/Footer';

// Functionality
// TODO: Add newsletter signup, add API route

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <Hero />
      <Projects />
      <Work />
      <Skills />
      <Tools />
      <Articles />
      {/* <Newsletter /> */}
      <Contact />
      <Footer />
    </div>
  )
}