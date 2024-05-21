"use client";
import { useState, useEffect } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { FormField, CustomButton, CarDetails } from "@/components";
import Image from "next/image";
import { CarProps } from "@/types";
import axios from "axios";
import { useFormik } from "formik";
import BeatLoader from "react-spinners/BeatLoader";

const Reservation = ({ params }: any) => {
  const [car, setCar] = useState<CarProps | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (values, actions) => {
    console.log("success");
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        mail: "",
        tel: "",
        message: "",
      },
      onSubmit,
    });

  const getCarById = async () => {
    try {
      const response = await axios.get<CarProps>(
        `${process.env.NEXT_PUBLIC_API_URL}/car/${params.reservationId}`
      );
      setCar(response.data);
    } catch (error) {
      console.error("Error fetching car data:", error);
    }
  };

  useEffect(() => {
    getCarById();
  }, []);

  const inputs = [
    {
      id: 1,
      name: "fullName",
      title: "Full Name",
      type: "text",
      placeholder: "John doe",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "mail",
      title: "Mail",
      type: "email",
      placeholder: "john@gmail.com",
      value: values.mail,
      errorMessage: errors.mail,
      touched: touched.mail,
    },
    {
      id: 3,
      name: "phone",
      title: "Phone",
      type: "tel",
      placeholder: "+90 (555) 012 32 33",
      value: values.phone,
      errorMessage: errors.phone,
      touched: touched.phone,
    },
    {
      id: 4,
      name: "message",
      title: "Reservation Request",
      // type: "textArea",
      isTextArea: true,
      placeholder: "I will pick up my car this weekend.",
      value: values.message,
      errorMessage: errors.message,
      touched: touched.message,
    },
  ];

  return (
    <div className='relative'>
      <div className='inset-0 bg-cover bg-center bg-reservation-bg lg:h-screen h-[120vh]' />
      <div className=' absolute inset-y-0 right-0 lg:w-1/3 md:w-1/2 w-full bg-white'>
        <div className='mt-20 padding-y text-center 2xl:text-[45px] sm:text-[35px] text-[30px] font-extrabold'>
          Car Reservation
        </div>
        <div className='flex-1 padding-x padding-y'>
          <a className='flex flex-col items-center pl-4 bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 '>
            {car && car.car_img ? (
              <Image
                src={car.car_img}
                alt='reservation car'
                width='0'
                height='0'
                sizes='100vw'
                className='w-1/2 h-auto'
                priority
              />
            ) : (
              <BeatLoader size={20} color='#36d7b7' />
            )}
            <div className='flex flex-col items-center justify-between xl:p-4 mb-2 leading-normal'>
              <h5 className='mb-2 text-2xl md:text-md font-bold tracking-tight'>
                {car?.make} {car?.model}
              </h5>
              <CustomButton
                title='View More'
                containerStyles='w-full  rounded-full bg-primary-blue'
                textStyles='text-white md:text-[8px] lg:text-[14px] text-[14px] leading-[17px] font-bold'
                rightIcon='/right-arrow.svg'
                handleClick={() => {
                  setIsOpen(true);
                }}
              />
            </div>
          </a>
        </div>
        <div className='flex-1 padding-x'>
          <div className='bg-white p-4 rounded-lg shadow '>
            {inputs.map((input) => (
              <FormField
                key={input.id}
                title={input.title}
                placeholder={input.placeholder}
                name={input.name}
                type={input.type}
                isTextArea={input.isTextArea}
                value={input.value}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={input.errorMessage}
                touched={input.touched}
              />
            ))}
            <CustomButton
              title='Submit'
              containerStyles='bg-primary-blue rounded-full mt-6'
              // handleClick={handleSubmit}
              textStyles='text-white'
              // submitting={submitting}
            />
          </div>
        </div>
      </div>
      {/* <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      /> */}
    </div>

    //* design 2
    // <div className='bg-reservation-bg min-h-screen '>
    //   <div className='max-width mx-auto xl:px-0 pb-4 lg:w-[60%] w-[90%] padding-x lg:pt-48 pt-24'>
    //     <div className='bg-primary-blue-100 padding-y rounded-2xl shadow-lg'>
    //       <div className='text-center 2xl:text-[45px] sm:text-[35px] text-[30px] font-extrabold'>
    //         Car Reservation
    //       </div>
    //       <div className='flex lg:flex-row flex-col justify-center items-center'>
    //         <div className='flex-1 lg:w-full w-1/2 h-64 xl:pl-16 lg:pl-14 '>
    //           <div className='flex justify-center items-center w-full h-full'>
    //             {car && car.car_img ? (
    //               <Image
    //                 src={car.car_img}
    //                 alt='reservation car'
    //                 width='0'
    //                 height='0'
    //                 sizes='100vw'
    //                 className='w-full h-auto'
    //                 priority
    //               />
    //             ) : (
    //               <BeatLoader size={20} color='#36d7b7' />
    //             )}
    //           </div>
    //           <CustomButton
    //             title='View More'
    //             containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
    //             textStyles='text-white text-[14px] leading-[17px] font-bold'
    //             rightIcon='/right-arrow.svg'
    //             handleClick={() => {
    //               setIsOpen(true);
    //             }}
    //           />
    //         </div>
    //         <div className='flex-1 w-full h-full lg:px-16 px-4'>
    //           <div className=''>
    //             {inputs.map((input) => (
    //               <FormField
    //                 key={input.id}
    //                 title={input.title}
    //                 placeholder={input.placeholder}
    //                 name={input.name}
    //                 type={input.type}
    //                 isTextArea={input.isTextArea}
    //                 value={input.value}
    //                 onChange={handleChange}
    //                 onBlur={handleBlur}
    //                 errorMessage={input.errorMessage}
    //                 touched={input.touched}
    //               />
    //             ))}
    //             <CustomButton
    //               title='Submit'
    //               containerStyles='bg-primary-blue rounded-full mt-6'
    //               // handleClick={handleSubmit}
    //               textStyles='text-white'
    //               // submitting={submitting}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //* design 2

    //*design3
    // <div className='max-width mx-auto mt-24'>
    //   <div className='flex flex-col sm:flex-row relative max-width rounded-3xl w-[90%]'>
    //     <div className='flex-1 padding-x padding-y bg-primary-blue rounded-l-3xl '>
    //       <div className='flex justify-center items-center w-full h-full'>
    //         {car && car.car_img ? (
    //           <Image
    //             src={car.car_img}
    //             alt='reservation car'
    //             width='0'
    //             height='0'
    //             sizes='100vw'
    //             className='w-full h-auto'
    //             priority
    //           />
    //         ) : (
    //           <BeatLoader size={20} color='#36d7b7' />
    //         )}
    //       </div>
    //     </div>
    //     <div className='flex-1 justify-center items-center bg-primary-blue-100 p-10 padding-x rounded-r-3xl'>
    //       <div className='text-center 2xl:text-[40px] sm:text-[30px] text-[15px] font-extrabold'>
    //         Car Reservation
    //       </div>
    //       {inputs.map((input) => (
    //         <FormField
    //           key={input.id}
    //           title={input.title}
    //           placeholder={input.placeholder}
    //           name={input.name}
    //           type={input.type}
    //           isTextArea={input.isTextArea}
    //           value={input.value}
    //           onChange={handleChange}
    //           onBlur={handleBlur}
    //           errorMessage={input.errorMessage}
    //           touched={input.touched}
    //         />
    //       ))}
    //       <CustomButton
    //         title='Submit'
    //         containerStyles='bg-primary-blue rounded-full mt-6'
    //         // handleClick={handleSubmit}
    //         textStyles='text-white'
    //         // submitting={submitting}
    //       />
    //     </div>
    //   </div>
    // </div>
    //*desing3
  );
};

export default Reservation;
