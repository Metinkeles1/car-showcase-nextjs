import Link from "next/link";
import Image from "next/image";

import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 border-t border-gray-100 z-10'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <div className='flex flex-center'>
            <div className='w-10 h-auto '>
              <Image
                src='/navbar-icon.png'
                alt='Auto Select Logo'
                width='0'
                height='0'
                sizes='100vw'
                className='w-full h-auto'
              />
            </div>
            <h1 className=' 2xl:text-[24px] sm:text-[16px] text-[16px] font-extrabold ml-2'>
              Auto Select
            </h1>
          </div>
          <p className='text-base text-gray-700'>
            Auto Select 2023 rights reserved &copy;
          </p>
        </div>

        <div className='footer__links'>
          {footerLinks.map((link) => (
            <div key={link.title} className='footer__link'>
              <h3 className='font-bold'>{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.tite} href={item.url} className='text-gray-500'>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
        <p>@2023 Auto Select. All rights reserved</p>

        <div className='footer__copyrights-link'>
          <Link href='/' className='text-gray-500'>
            Privacy & Policy
          </Link>
          <Link href='/' className='text-gray-500'>
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
