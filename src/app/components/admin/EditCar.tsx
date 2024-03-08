"use client";

import { CarForm } from "@/components";
import React from "react";
import { CarProps, carsGetProps } from "@/types";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

interface EditCarProps {
  modalUpdateIsOpen: booelan;
  closeModal: () => void;
  car: CarProps;
  getCars: carsGetProps;
}

const EditCar = ({
  modalUpdateIsOpen,
  closeModal,
  car,
  getCars,
}: EditCarProps) => {
  return (
    <Transition appear show={modalUpdateIsOpen} as={Fragment}>
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
              <Dialog.Panel className='relative w-full max-w-6xl max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
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
                <div>
                  <h1 className='flex items-center justify-center text-3xl font-semibold'>
                    Car Form
                  </h1>
                  <CarForm type='edit' car={car} getCars={getCars} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EditCar;
