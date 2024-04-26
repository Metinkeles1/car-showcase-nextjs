import React from "react";
import Image from "next/image";
import { GiCarKey } from "react-icons/gi";
import { MdOutlineShowChart } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";

const About = () => {
  return (
    // <section id='about' className='w-full h-screen bg-primary-blue'>
    //   <div className='bg-red-900 w-full h-20'></div>
    //   <div className='bg-black w-full h-20'></div>
    // </section>
    <div id='about' className='container mx-auto px-4 xl:px-0 pt-16'>
      <h1 className='text-4xl font-semibold text-center my-8'>
        About Our Car Sales
      </h1>
      <p className='text-lg text-gray-700 text-center mb-8'>
        At Our Car Sales, we prioritize your car buying experience with
        top-quality vehicles and exceptional services. Contact us today to find
        your dream car.
      </p>

      <div className='flex justify-center mb-12'>
        <div className='relative w-full h-96'>
          <Image
            src='/about-car-blue-3.png'
            alt='about'
            fill
            className='object-contain'
          />
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-16 gap-10 xl:px-28'>
        <div className='flex flex-col items-center justify-center'>
          <GiCarKey className='text-4xl text-primary-blue mb-4' />
          <div className='text-center lg:h-48'>
            <h2 className='text-xl font-semibold mb-2'>Browse Our Cars</h2>
            <p className='text-center text-gray-700'>
              Explore our wide selection of high-quality cars. Find the perfect
              vehicle to suit your needs and preferences.
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <MdOutlineShowChart className='text-4xl text-primary-blue mb-4' />
          <div className='text-center lg:h-48'>
            <h2 className='text-xl font-semibold mb-2'>
              Easy Financing Options
            </h2>
            <p className='text-center text-gray-700'>
              Flexible financing options tailored to your budget and
              preferences. Our finance experts will guide you to find the best
              solution.
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <LuHeartHandshake className='text-4xl text-primary-blue mb-4' />
          <div className='text-center lg:h-48'>
            <h2 className='text-xl font-semibold mb-2'>
              Exceptional Customer Service
            </h2>
            <p className='text-center text-gray-700'>
              Our commitment to customer satisfaction sets us apart. Experience
              personalized service and a positive buying journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
