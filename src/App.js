import React from 'react';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import {Element } from 'react-scroll';
const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1500,
    offset: 0,
  });
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Element name="about">
      <About />
      </Element>

      <Element name='features'>
      <Features />
      </Element>

      <Element name='testimonials'>
      <Testimonials />
      </Element>
      <CtaSection />
      <Footer />
    </div>
  );
};

export default App;
