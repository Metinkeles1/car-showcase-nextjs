"use client";

import Image from "next/image";

import { CustomButton } from "../components";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Hero = ({ carCount }: int) => {
  const handleScroll = () => {};

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='hero__title'
        >
          Find, book, buy a car; fast and extremely easy!
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.2)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='hero__subtitle'
        >
          Simplify your car buying experience with our hassle-free booking
          service process.
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <CustomButton
            title='Explore Cars'
            containerStyles='bg-primary-blue text-white rounded-full mt-10'
            handleClick={handleScroll}
          />
        </motion.div>
      </div>
      {/* <div className='hero__image-container'>
        <div className='hero__image '>
          <Image src='/hero.png' alt='hero' fill className='object-contain' />
        </div>

        <div className='hero__image-overlay' />
      </div>*/}
      <div className='xl:flex-[1.5] flex justify-center items-center w-full xl:h-screen'>
        <div className='grid grid-cols-2 gap-3'>
          {/* <Image
            src='/hero-clover-car-1.jpg'
            alt='hero'
            width={350}
            height={350}
            className='object-fill min-w-full min-h-full rounded-full rounded-br-none'
          /> */}

          <motion.div
            variants={fadeIn("right", 0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='flex items-center justify-center bg-primary-blue rounded-full rounded-br-none text-primary-blue-100'
          >
            <div className='relative'>
              <h1 className='hero__title'>{carCount + 60}</h1>
              <span className='absolute lg:top-3 top-0 lg:left-20 left-14 text-xl'>
                +
              </span>
            </div>
            <p className='text-[27px] mt-5 ml-2 '>Total Car</p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='group relative'
          >
            <div className='overflow-hidden rounded-lg transform transition-transform duration-300 group-hover:scale-105'>
              <Image
                src='/hero-clover-car-3.jpeg'
                alt='hero'
                width={350}
                height={350}
                className='object-fill lg:min-h-60 min-h-44 rounded-full rounded-bl-none'
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='group relative'
          >
            <div className='overflow-hidden rounded-lg transform transition-transform duration-300 group-hover:scale-105'>
              <Image
                src='/hero-clover-car-2.jpg'
                alt='hero'
                width={350}
                height={350}
                className='object-fill lg:min-h-60 min-h-44 rounded-full rounded-tr-none'
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='group relative'
          >
            <div className='overflow-hidden rounded-lg transform transition-transform duration-300 group-hover:scale-105'>
              <Image
                src='/hero-clover-car-4.jpg'
                alt='hero'
                width={350}
                height={350}
                className='object-fill lg:min-h-60 min-h-44 rounded-full rounded-tl-none'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
