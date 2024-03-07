"use client";

import { useState } from "react";
import Image from "next/image";
import { FormField, CustomButton } from "@/components";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { loginSchema } from "@/schema/admin/login";
import { IoMdAdd } from "react-icons/io";

const Admin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = (values, actions) => {
    if (
      values.userName === process.env.NEXT_PUBLIC_ADMIN_USERNAME &&
      values.password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      setLoading(true);
      toast.success("Login Success");
      router.push("/admin/profile");
    } else {
      toast.error("Invalid username or password");
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        userName: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "userName",
      title: "User Name",
      type: "text",
      placeholder: "Your Username",
      value: values.userName,
      errorMessage: errors.userName,
      touched: touched.userName,
    },
    {
      id: 2,
      name: "password",
      title: "Password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <div className='bg-white'>
      <div className='admin-login mt-28 bg-primary-blue-100 shadow-xl '>
        <form onSubmit={handleSubmit}>
          <div className='flex-1 xl:py-36 py-12 padding-x '>
            <h1 className='admin-login__title'>ADMIN LOGIN</h1>
            {inputs.map((input) => (
              <FormField
                key={input.id}
                title={input.title}
                placeholder={input.placeholder}
                name={input.name}
                type={input.type}
                value={input.value}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={input.errorMessage}
                touched={input.touched}
              />
            ))}

            <CustomButton
              title='Submit'
              containerStyles='bg-primary-blue rounded-full mt-6 '
              handleClick={handleSubmit}
              textStyles='text-white'
              submitting={loading}
            />
          </div>
        </form>
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
