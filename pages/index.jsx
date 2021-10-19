import Head from 'next/head'

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
      <Head>
        <title>Your friendly neighbourhood social entrepreneur | Dan Ferg</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="A solutions architect and software developer with an understanding of holistic design; seeking to create digitally enabled change for good." />
        <meta name="keywords" content="social,entrepreneur,solutions,architect,software,developer,holistic,design,digitally,enabled,change,good,helping,group,yoogle,real,news,land,index" />
      </Head>
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