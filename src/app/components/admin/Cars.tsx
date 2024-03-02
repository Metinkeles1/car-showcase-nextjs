// pages/Cars.tsx
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { CustomButton, CreateCar } from "@/components";
import { IoMdAdd } from "react-icons/io";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/car`
        );
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className='flex justify-between '>
        <h1 className='flex text-4xl font-bold font-inter ml-6 mt-8 mb-4'>
          Car List
        </h1>
        <CustomButton
          containerStyles='rounded-full bg-primary-blue text-white text-3xl mt-8 mb-4'
          icon={<IoMdAdd />}
          handleClick={() => {
            setModalIsOpen(true);
          }}
        />
      </div>
      <div className='max-h-[750px] overflow-y-auto'>
        <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pt-4 ml-4'>
          {cars?.map((car) => (
            <div className='car-card group min-w-80' key={car._id}>
              <div className='car-card__content'>
                <h2 className='car-card__content-title'>
                  {car.make} {car.model}
                </h2>
              </div>

              <p className='flex mt-6 text-[32px] font-extrabold'>
                <span className='self-start text-[14px] font-semibold'>$</span>
                {car.car_rent}
                <span className='self-end text-[14px] font-medium'>/day</span>
              </p>

              <div className='relative w-full h-40 my-3 object-contain'>
                <Image
                  src='/hero.png'
                  alt='car model'
                  fill
                  priority
                  className='object-contain'
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1024px'
                />
              </div>

              <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-gray'>
                  <div className='flex flex-col justify-center items-center gap-2'>
                    <Image
                      src='/steering-wheel.svg'
                      width={20}
                      height={20}
                      alt='steering wheel'
                    />
                    <p className='text-[14px]'>
                      {car.transmisson === "a" ? "Automatic" : "Manual"}
                    </p>
                  </div>
                  <div className='flex flex-col justify-center items-center gap-2'>
                    <Image
                      src='/tire.svg'
                      width={20}
                      height={20}
                      alt='tire wheel'
                    />
                    <p className='text-[14px]'>{car.drive.toUpperCase()}</p>
                  </div>
                  <div className='flex flex-col justify-center items-center gap-2'>
                    <Image
                      src='/gas.svg'
                      width={20}
                      height={20}
                      alt='gas wheel'
                    />
                    <p className='text-[14px]'>{car.city_mpg}</p>
                  </div>
                </div>
                <div className='car-card__btn-container'>
                  <CustomButton
                    title='View More'
                    containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                    textStyles='text-white text-[14px] leading-[17px] font-bold'
                    rightIcon='/right-arrow.svg'
                    handleClick={() => {
                      setIsOpen(true);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <CreateCar
          modalIsOpen={modalIsOpen}
          closeModal={() => setModalIsOpen(false)}
        />
      </div>
    </div>
  );
};

export default Cars;
