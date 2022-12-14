import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import About from './components/about/About'

import Nav from './components/nav/Nav'


const App = () => {
  return (
    <>
      <Header  /> 
      <Nav/>    
        
      <About/> 
      <Experience/>
      <Portfolio/>
      <Contact/>  
      <Footer/>
    </>
  )
}

export default App