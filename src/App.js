import React from 'react';
import Router from './components/Router';
import Services from './components/Services';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>

    < Navbar />

    <Routes>
<Route path='/' element={< Hero /> }/>
<Route path='/services' element={< Services /> }/>
<Route path='/process' element={< Timeline /> }/>
<Route path='/about'about element={< About /> }/>
<Route path='/contact' element={< Contact /> }/>
<Route path='/projects' element={< Projects />} />
    {/* < Hero />
    < Services /> 
    < Timeline />
    < About />
    < Contact /> */}
    {/* < NewsLetter />  */}
    </Routes>

    <Footer />

    </>
  );
}

export default App;
