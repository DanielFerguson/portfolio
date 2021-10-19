import Hero from './components/home/Hero';
import Projects from './components/home/Projects';
import Skills from './components/home/Skills';
import Articles from './components/home/Articles';
import Newsletter from './components/home/Newsletter';
import Contact from './components/home/Contact';

// TODO: Update text under My Projects
// TODO: Update text under Skills
// TODO: Add Google Analytics tracking
// TODO: Update the logos for the projects, add their appropriate links
// TODO: Setup contact form with API
// TODO: Add newsletter signup, add API route
// TODO: Fill in tools section
// TODO: Add smooth scroll to the site
// TODO: Load article routes and articles in dynamically from CMS
// TODO: Enable AMP for article pages

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <Hero />
      <Projects />
      <Skills />
      <Articles />
      <Newsletter />
      <Contact />
    </div>
  )
}