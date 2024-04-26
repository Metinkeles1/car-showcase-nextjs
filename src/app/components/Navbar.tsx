"use client";
import { Link } from "react-scroll";
import Image from "next/image";

import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className='w-full fixed top-0 left-0 z-50 bg-white shadow '>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 '>
        <Link
          to='/'
          spy={true}
          smooth={true}
          className='flex justify-center items-center'
        >
          <Image
            src='/navbar-icon.png'
            alt='Auto Select Logo'
            width={40}
            height={18}
            className='object-contain'
          />
          <h1 className='2xl:text-[24px] sm:text-[16px] text-[16px] font-extrabold ml-2'>
            Auto Select
          </h1>
        </Link>

        <div className='flex justify-center items-center'>
          {/* <CustomButton
            title='Sıgn In'
            btnType='button'
            containerStyles='text-primary-blue rounded-full min-w-[130px]'
          /> */}

          <Link
            to='about'
            spy={true}
            smooth={true}
            className='cursor-pointer text-primary-blue rounded-full '
          >
            about
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
