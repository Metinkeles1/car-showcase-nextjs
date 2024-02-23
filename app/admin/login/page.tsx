"use client";

import { useState } from "react";
import Image from "next/image";
import { FormField, CustomButton } from "@/components";
import { useRouter } from "next/navigation";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (
      username === process.env.NEXT_PUBLIC_ADMIN_USERNAME &&
      password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      console.log(username, password);

      router.push("/admin");
    } else {
      console.log(username, password);
      console.log(process.env.NEXT_PUBLIC_ADMIN_USERNAME);
      alert("Invalid username or password");
    }
  };

  return (
    <div className='mt-20 padding-x max-width  '>
      <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto w-full bg-light-white rounded-t-3xl  xl:rounded-r-full  '>
        <div className='flex-1 items-start xl:py-36 py-12 padding-x '>
          <h1 className='flex items-center justify-center mb-4 2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold'>
            Login
          </h1>
          <FormField
            title='Username'
            placeholder='Enter your username'
            state={username}
            setState={setUsername}
          />
          <FormField
            title='Password'
            placeholder='Enter your password'
            state={password}
            setState={setPassword}
            type='password'
          />

          <div className='flex justify-end items-end'>
            <CustomButton
              title='Submit'
              containerStyles='bg-blue-500 text-white hover:bg-blue-700 rounded-full mt-4 mr-4'
              handleClick={handleSubmit}
            />
          </div>
        </div>
        <div className='xl:flex-[1.5] flex justify-end items-end w-full bg-primary-blue rounded-full'>
          <div className='relative xl:w-full w-[90%] xl:h-full h-[590px] z-0'>
            <Image
              src='/about-img.png'
              alt='about'
              fill
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
