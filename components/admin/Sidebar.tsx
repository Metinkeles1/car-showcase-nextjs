"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  FaBullhorn,
  FaWindowMaximize,
  FaSignOutAlt,
  FaInfoCircle,
  FaCalendarAlt,
  FaBars,
} from "react-icons/fa";
import { RiEBike2Fill } from "react-icons/ri";
import { BiSolidCategory } from "react-icons/bi";
import { IoIosMegaphone } from "react-icons/io";
import Image from "next/image";
import { AddCar } from "../../components";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tabs, setTabs] = useState(0);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const router = useRouter();

  return (
    <div className='flex mt-20'>
      <div
        className={`lg:w-80 w-full lg:flex-shrink-0 mt-8 ${
          isMenuOpen ? "hidden" : "block"
        } lg:block`}
      >
        <div className='flex flex-col justify-center items-center relative border border-b-0 px-10 py-8'>
          <b className='text-2xl my-2'>Admin</b>
          <div className='relative w-full h-20 object-contain'>
            <Image
              src='/hero.png'
              alt='car model'
              fill
              priority
              className='object-contain'
            />
          </div>
        </div>
        <ul className='text-center font-semibold'>
          <li
            onClick={() => setTabs(0)}
            className={`border-t-0 border w-full p-3 cursor-pointer hover:bg-primary-blue hover:text-white transition-all flex items-center justify-center ${
              tabs === 0 && "bg-primary-blue text-white"
            }`}
          >
            <i className='fa fa-cutlery' aria-hidden='true'></i>
            <button className='ml-1'>Products</button>
          </li>
          <li
            onClick={() => setTabs(1)}
            className={`border-t-0 border w-full p-3 cursor-pointer hover:bg-primary-blue hover:text-white transition-all flex items-center justify-center ${
              tabs === 1 && "bg-primary-blue text-white "
            }`}
          >
            <RiEBike2Fill />
            <button className='ml-1'>Orders</button>
          </li>
          <li
            onClick={() => setTabs(2)}
            className={`border-t-0 border w-full p-3 cursor-pointer hover:bg-primary-blue hover:text-white transition-all flex items-center justify-center ${
              tabs === 2 && "bg-primary-blue text-white "
            }`}
          >
            <BiSolidCategory />
            <button className='ml-1'>Categories</button>
          </li>
          <li
            onClick={() => setTabs(3)}
            className={`border-t-0 border w-full p-3 cursor-pointer hover:bg-primary-blue hover:text-white transition-all flex items-center justify-center ${
              tabs === 3 && "bg-primary-blue text-white"
            }`}
          >
            <FaBullhorn />
            <button className='ml-1'>Campaign</button>
          </li>
          <li
            onClick={() => setTabs(4)}
            className={`border-t-0 border w-full p-3 cursor-pointer hover:bg-primary-blue hover:text-white transition-all flex items-center justify-center ${
              tabs === 4 && "bg-primary-blue text-white"
            }`}
          >
            <FaInfoCircle />
            <button className='ml-1'>About</button>
          </li>
          <li
            onClick={() => setTabs(5)}
            className={`border-t-0 border w-full p-3 cursor-pointer hover:bg-primary-blue hover:text-white transition-all flex items-center justify-center ${
              tabs === 5 && "bg-primary-blue text-white"
            }`}
          >
            <FaCalendarAlt />
            <button className='ml-1'>Reservation</button>
          </li>
          <li
            onClick={() => setTabs(6)}
            className={`border-t-0 border w-full p-3 cursor-pointer hover:bg-primary-blue hover:text-white transition-all flex items-center justify-center ${
              tabs === 6 && "bg-primary-blue text-white"
            }`}
          >
            <FaWindowMaximize />
            <button className='ml-1'>Footer</button>
          </li>
        </ul>
      </div>
      <div className='absolute left-4 top-6 z-10'>
        <button
          onClick={toggleMenu}
          className='block bg-primary text-3xl lg:hidden'
        >
          <FaBars />
        </button>
      </div>

      {tabs === 0 && <AddCar />}
      {/* {tabs === 1 && <Order />}
      {tabs === 2 && <Category />}
      {tabs === 3 && <Campaigns />}
      {tabs === 4 && <About />}
      {tabs === 5 && <Reservation />}
      {tabs === 6 && <Footer />} */}
    </div>
  );
};
export default Sidebar;
