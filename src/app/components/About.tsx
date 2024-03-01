import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className='bg-primary-blue text-white'>
      <div className='about flex justify-between'>
        <div className='flex-1 xl:py-36 py-12 padding-x '>
          <h1 className='about__title'>About Me</h1>

          <p className='about__subtitle '>
            At Rent a Car, we prioritize your travel experiences. With
            top-quality car rental services, we aim to make your journeys
            enjoyable and hassle-free. Understanding your needs is key, and we
            strive to offer the most suitable vehicles and services. Customer
            satisfaction is paramount to us, and we operate with principles of
            reliability, transparency, and quality. We take pride in
            facilitating your travel plans, offering personalized solutions, and
            creating unforgettable memories. Our diverse range of beautiful
            vehicles and competitive prices ensure we serve you at all times.
            Contact us today to experience the Rent a Car difference and make
            your journeys truly exceptional. We're here to make every moment
            unforgettable
          </p>
        </div>
        <div className='about__image-container xl:py-36 pb-36'>
          <div className='about__image'>
            <Image
              src='/about-img.png'
              alt='about'
              fill
              className='object-contain'
            />
            <div className='about__image-overlay' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
