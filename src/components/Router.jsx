import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Services from './Services'
import Timeline from './Timeline'

const Router = () => {
  <BrowserRouter>
  
  <Routes>
<Route path='Home' element={ <Hero />} />  

<Route path='Services' element={ <Services />} />  

<Route path='Process' element={ <Timeline />} />  

<Route path='About' element={ <About />} />  

<Route path='Contact' element={< Contact />} />  


  </Routes>
  
  </BrowserRouter>
}

export default Router