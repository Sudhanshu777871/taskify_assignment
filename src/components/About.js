import React from 'react';

// import about data
import { aboutData } from '../data';



// import lotify anmiation
import Lottie from "lottie-react";
import collaboratewithtaskify from "../assets/img/collaboration.json";
const About = () => {
  // destructure about
  const {title, subtitle } = aboutData;
  return (
    <section
      className='my-[30px] xl:mt-[100px]'
      data-aos='fade-up'
      data-aos-offset='350'
    >
      <div className='container mx-auto'>
        <div className='bg-[rgb(59,174,167)] rounded-[50px] min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
          {/* image */}
          <div className='flex-1' data-aos='zoom-in-left'>
           {/* <img src={image} alt='' /> */}
           <Lottie
            animationData={collaboratewithtaskify}
            loop={true}
            className="md:w-[500px] sm:w-[500px] sm:h-[500px] h-[500px]"
          />
          </div>
          {/* text */}
          <div className='flex-1 xl:pr-12'>
            <h2 className='h2 mb-10' data-aos='fade-up' data-aos-delay='300'>
              {title}
            </h2>
            <p
              className='max-w-[474px] mx-auto xl:mx-0 text-white'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
