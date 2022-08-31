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

function App() {
  return (
    <div>
    <Router /> 
    < Navbar />
    < Hero />
    < Services /> 
    < Timeline />
    < About />
    < Contact />
    {/* < NewsLetter />  */}

    <Footer />
    </div>
  );
}

export default App;
