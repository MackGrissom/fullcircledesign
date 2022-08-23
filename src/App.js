import React from 'react'
import Services from './components/Services';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    < Navbar />
    < Hero />
    < Services /> 
    < Timeline />
    < NewsLetter /> 

    <Footer />
    </div>
  );
}

export default App;
