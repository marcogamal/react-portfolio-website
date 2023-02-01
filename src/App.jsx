import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/about/Services'
import Portfolio from './components/about/Portfolio'
import Testimonials from './components/about/Testimonials'
import Contact from './components/about/Contact'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App