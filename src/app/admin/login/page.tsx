"use client";

import { useState } from "react";
import Image from "next/image";
import { FormField, CustomButton } from "../../../../components";
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
    <div className='bg-white'>
      <div className='admin-login xl:mt-2 mt-10 bg-primary-blue-100 shadow-xl '>
        <div className='flex-1 xl:py-36 py-12 padding-x '>
          <h1 className='admin-login__title'>ADMIN LOGIN</h1>

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

          <CustomButton
            title='Submit'
            containerStyles='bg-primary-blue rounded-full mt-6 '
            handleClick={handleSubmit}
            textStyles='text-white'
          />
        </div>
        <div className='admin-login__image-container xl:py-36 xl:pb-36 bg-primary-blue'>
          <div className='admin-login__image'>
            <Image
              src='/about-img.png'
              alt='about'
              className='object-contain'
              fill
            />
            <div className='admin-login__image-overlay' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
