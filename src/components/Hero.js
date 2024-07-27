import React from 'react';

// import hero data
import { heroData } from '../data';

// import components
import Header from './Header';

// import lotify
import Lottie from "lottie-react";
import herowithannimation from "../assets/img/hero.json";

const Hero = () => {
  // destructure hero
  const { title, subtitle, btnText } = heroData;
  return (
    <section className='lg:h-[900px] py-12'>
      <Header />
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col xl:flex-row items-center h-full md:py-24'>
          {/* text */}
          <div className='text-center xl:text-left xl:absolute'>
            {/* title */}
            <h3
              className='h1 xl:max-w-[400px] mb-6 xl:mb-12 text-6xl'
              data-aos='fade-down'
              data-aos-delay='400'
            >
              {title}
            </h3>
            {/* subtitle */}
            <p
              className='lead xl:max-w-[380px] mb-6 lg:mb-12'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              {subtitle}
            </p>
            <button
              className='btn btn-primary mb-8 xl:mb-0'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              {btnText}
            </button>
          </div>
          {/* image */}
          <div
            className='xl:absolute xl:-right-12 xl:bottom-16'
            data-aos='fade-up'
            data-aos-delay='700'
          >
            {/* <img src={image} alt='' /> */}
            <Lottie
            animationData={herowithannimation}
            loop={true}
            className="md:w-[500px] sm:w-[800px] sm:h-[700px] h-[500px]  lg:mx-40"
          />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
