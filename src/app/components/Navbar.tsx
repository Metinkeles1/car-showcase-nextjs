"use client";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import Image from "next/image";

import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className='w-full fixed top-0 left-0 z-50 bg-white shadow '>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 '>
        <Link
          href='/'
          className='flex justify-center items-center cursor-pointer'
        >
          <Image
            src='/navbar-icon.png'
            alt='Auto Select Logo'
            width={40}
            height={18}
            className='object-contain'
          />
          <h1 className=' 2xl:text-[24px] sm:text-[16px] text-[16px] font-extrabold ml-2'>
            Auto Select
          </h1>
        </Link>

        <div className='flex justify-center items-center gap-3'>
          {/* <CustomButton
            title='Sıgn In'
            btnType='button'
            containerStyles='text-primary-blue rounded-full min-w-[130px]'
          /> */}

          <ScrollLink
            activeClass='active'
            to='cars'
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            className='cursor-pointer font-semibold rounded-full hover:text-primary-blue'
          >
            Cars
          </ScrollLink>
          <ScrollLink
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            className='cursor-pointer font-semibold rounded-full hover:text-primary-blue'
          >
            About
          </ScrollLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
