import React from 'react';
import Services from './components/Services';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
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
{/* <Route path='/projects' element={< Portfolio />} /> */}
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
