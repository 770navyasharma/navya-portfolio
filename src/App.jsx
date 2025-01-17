import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Achievements from './Sections/Achievements'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
import Skills from './Sections/Skills'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Achievements/>
      <Skills/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App