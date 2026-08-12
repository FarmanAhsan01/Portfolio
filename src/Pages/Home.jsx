import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Work from '../Components/Work'
import Contact from '../Components/Contact'
function Home() {
  return (
    <div>
       <Hero/>
       <About/>
       <Skills/>
       <Projects/>
       <Work/>
       <Contact/>
    </div>
  )
}

export default Home
