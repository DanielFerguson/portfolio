import Hero from './components/home/Hero';
import Projects from './components/home/Projects';
import Skills from './components/home/Skills';
import Work from './components/home/Work';
import Tools from './components/home/Tools';
import Articles from './components/home/Articles';
import Newsletter from './components/home/Newsletter';
import Contact from './components/home/Contact';

// Content
// TODO: Update logo on the front page
// TODO: Update text under My Projects
// TODO: Update text under Skills
// TODO: Update the logos for the projects, add their appropriate links
// TODO: Fill in tools section

// Functionality
// TODO: Setup contact form with API
// TODO: Add newsletter signup, add API route

// Final
// TODO: Resize images

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <Hero />
      <Projects />
      <Work />
      <Skills />
      <Tools />
      <Articles />
      <Newsletter />
      <Contact />
    </div>
  )
}