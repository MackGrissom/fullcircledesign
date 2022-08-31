import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import Services from './Services'
import Newsletter from './NewsLetter'
import Timeline from './Timeline'
import Projects from './Projects'

const Router = () => {
  <BrowserRouter>
  
  <Routes>
<Route path='Home' element={ <Hero />} />  

<Route path='Services' element={ <Services />} />  

<Route path='Process' element={ <Timeline />} />  

<Route path='About' element={ <About />} />  

<Route path='Contact' element={< Contact />} />  

<Route path='Projects' element={< Projects />} />  


  </Routes>
  
  </BrowserRouter>
}

export default Router