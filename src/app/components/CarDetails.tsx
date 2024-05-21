"use client";

import { useState } from "react";
import { CarProps } from "@/types";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { CustomButton } from "../components";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  const [currentImage, setCurrentImage] = useState(car?.car_img);
  const router = useRouter();
  const handleClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-50' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='relative w-full max-w-7xl max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                  <button
                    type='button'
                    className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                    onClick={closeModal}
                  >
                    <Image
                      src='/close.svg'
                      alt='close'
                      width={20}
                      height={20}
                      className='object-contain'
                    />
                  </button>
                  <div className='lg:flex gap-8'>
                    <div className='flex-[1.5] flex flex-col gap-8'>
                      <div className='relative w-full lg:h-96 h-36 bg-pattern bg-cover bg-center rounded-lg'>
                        <Image
                          src={currentImage}
                          alt='car model'
                          fill
                          priority
                          className='object-contain'
                        />
                      </div>
                      <div className='flex gap-3'>
                        <div className='car-details__image-container'>
                          <Image
                            src='/ford-explorer.png'
                            alt='car model'
                            fill
                            priority
                            className={`car-details__image-item ${
                              currentImage === "/ford-explorer.png"
                                ? "bg-primary-blue rounded-3xl"
                                : ""
                            }`}
                            onClick={() => handleClick("/ford-explorer.png")}
                          />
                        </div>

                        <div className='car-details__image-container'>
                          <Image
                            src='/honda-civic.png'
                            alt='car model'
                            fill
                            priority
                            className={`car-details__image-item ${
                              currentImage === "/honda-civic.png"
                                ? "bg-primary-blue rounded-3xl"
                                : ""
                            }`}
                            onClick={() => handleClick("/honda-civic.png")}
                          />
                        </div>

                        <div className='car-details__image-container'>
                          <Image
                            src='/toyota-pirius.png'
                            alt='car model'
                            fill
                            priority
                            className={`car-details__image-item ${
                              currentImage === "/toyota-pirius.png"
                                ? "bg-primary-blue rounded-3xl "
                                : ""
                            }`}
                            onClick={() => handleClick("/toyota-pirius.png")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='flex-1 flex flex-col gap-2'>
                      <h2 className='font-semibold text-xl capitalize flex justify-center'>
                        {car?.make} {car?.model}
                      </h2>
                      <div className='mt-3 flex flex-wrap gap-4'>
                        {Object.entries(car)
                          .filter(([key]) => key !== "car_img" && key !== "_id")
                          .map(([key, value]) => (
                            <div
                              className='flex justify-between gap-5 w-full text-right'
                              key={key}
                            >
                              <h4 className='text-grey capitalize'>
                                {key.split("_").join(" ")}
                              </h4>
                              <p className='text-black-100 font-semibold'>
                                {value}
                              </p>
                            </div>
                          ))}
                      </div>
                      <div className='flex justify-center'>
                        <Link href={`/reservation/${car._id}`}>
                          <CustomButton
                            title='Reservation Car'
                            containerStyles='bg-primary-blue text-white rounded-full mt-2'
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
