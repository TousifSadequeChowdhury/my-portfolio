import { useState } from 'react'
import './App.css'
import Nav from './assets/components/Nav'
import Hero from './assets/components/Hero'
import About from './assets/components/About'
import Projects from './assets/components/Projects'
import Education from './assets/components/Education'
import Contact from './assets/components/Contact'
import Footer from './assets/components/Footer'
import Experience from './assets/components/Experience '
import Skills from './assets/components/Skills'

function App() {

  return (
    <>
    <div className='font-lexend bg-gradient-to-r from-blue-50 to-blue-100'>
     <Nav></Nav>
     <Hero></Hero>
     <About></About>
     <Skills></Skills>
     <Experience></Experience>
     <Projects></Projects>
     <Education></Education>
     <Contact></Contact>
     <Footer></Footer>
     </div>
    </>
  )
}

export default App
