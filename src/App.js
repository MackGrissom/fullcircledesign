import React from 'react';
import Services from './components/Services';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import About from './components/About';
import Technology from './components/Technology';
import Contact from './components/Contact';

function App() {
  return (
    <div>
    < Navbar />
    < Hero />
    < Services /> 
    < Timeline />
    < Technology />
    < About />
    < Contact />
    < NewsLetter /> 

    <Footer />
    </div>
  );
}

export default App;
