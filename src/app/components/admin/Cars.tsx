// pages/Cars.tsx
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { CustomButton, CreateCar, EditCar } from "@/components";
import { IoMdAdd } from "react-icons/io";
import { CarProps } from "@/types/index";
import { carsGetProps } from "@/types/index";

const Cars = () => {
  const [cars, setCars] = useState<Array>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalUpdateIsOpen, setModalUpdateIsOpen] = useState<boolean>(false);
  const [selectedCar, setSelectedCar] = useState<CarProps | null>(null);

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

  useEffect(() => {
    fetchData();
  }, []);

  const handleEditClick = (car) => {
    setSelectedCar(car);
    setModalUpdateIsOpen(true);
  };

  const getCars: carsGetProps = () => {
    fetchData();
  };

  return (
    <div className='w-full'>
      <div className='flex justify-between'>
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
      <div className='max-h-[470px] overflow-y-auto'>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg mx-4'>
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs  uppercase text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-16 py-3'>
                  <span className='sr-only'>Image</span>
                </th>
                <th scope='col' className='px-6 py-3'>
                  Car Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Year
                </th>
                <th scope='col' className='px-6 py-3'>
                  Car class
                </th>
                <th scope='col' className='px-6 py-3'>
                  Fuel
                </th>
                <th scope='col' className='px-6 py-3'>
                  Price
                </th>
                <th scope='col' className='px-6 py-3'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr
                  key={car._id}
                  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                >
                  <td className='p-4'>
                    <Image
                      src={car?.car_img}
                      alt={car?.make}
                      width={130}
                      height={75}
                      priority
                      className='object-contain rounded-md'
                    />
                  </td>
                  <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                    {car.make} {car.model}
                  </td>
                  <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                    {car.year}
                  </td>
                  <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                    {car.car_class}
                  </td>
                  <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                    {car.fuel_type}
                  </td>
                  <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                    ${car.car_rent}
                  </td>

                  <td className='px-6 py-4'>
                    <CustomButton
                      title='Edit'
                      containerStyles='py-[16px] rounded-full bg-primary-blue '
                      textStyles='text-white text-[14px] leading-[17px] font-bold'
                      rightIcon='/right-arrow.svg'
                      handleClick={() => handleEditClick(car)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <EditCar
          modalUpdateIsOpen={modalUpdateIsOpen}
          closeModal={() => setModalUpdateIsOpen(false)}
          car={selectedCar}
          getCars={getCars}
        />
        <CreateCar
          modalIsOpen={modalIsOpen}
          closeModal={() => setModalIsOpen(false)}
          getCars={getCars}
        />
      </div>
    </div>
  );
};

export default Cars;
