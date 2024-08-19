import React from 'react'
import Navbar from "../components/Navbar"
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import About from '../components/About'
import ContactUs from '../components/ContactUs'
import Products from '../components/Products'
import Career from '../components/Career'
import AboutMe from '../components/AboutMe'
import ProjectList from '../components/ProjectList'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutMe/>
      <About/>
      <ProjectList/>
      <Products/>
      <Projects/>
      <ContactUs/>
      <Footer/>

    </div>
  )
}

export default LandingPage
