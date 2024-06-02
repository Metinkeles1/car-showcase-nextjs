"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { ReservationProps } from "@/types/index";

const Reservation = () => {
  const [reservations, setReservations] = useState<ReservationProps[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get<ReservationProps[]>(
        `${process.env.NEXT_PUBLIC_API_URL}/reservation`
      );
      setReservations(response.data);
    } catch (error) {
      console.log("Error Fetching reservation");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(reservations);

  return (
    <div className='w-full'>
      <div className='flex justify-between'>
        <h1 className='flex text-4xl font-bold font-inter ml-6 mt-8 mb-6'>
          Reservation List
        </h1>
      </div>
      <div className='h-[470px] overflow-y-auto'>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg mx-4'>
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 '>
            <thead className='text-xs  uppercase text-white  bg-primary-blue '>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Full Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Mail
                </th>
                <th scope='col' className='px-6 py-3'>
                  Phone
                </th>
                <th scope='col' className='px-6 py-3'>
                  Message
                </th>
                {/* <th scope='col' className='px-6 py-3'>
                  Price
                </th> */}
                <th scope='col' className='px-6 py-3'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(reservations) &&
                reservations?.map((reservation) => (
                  <tr
                    key={reservation._id}
                    className='bg-white border-b  hover:bg-gray-300 '
                  >
                    <td className='px-6 py-4 font-semibold text-gray-900 '>
                      {reservation.fullName}
                    </td>
                    <td className='px-6 py-4 font-semibold text-gray-900 '>
                      {reservation.mail}
                    </td>
                    <td className='px-6 py-4 font-semibold text-gray-900 '>
                      {reservation.phone}
                    </td>
                    <td className='px-6 py-4 font-semibold text-gray-900 '>
                      {reservation.message}
                    </td>
                    {/* <td className='px-6 py-4'>
                      <CustomButton
                        title='Edit'
                        containerStyles='py-[16px] rounded-full bg-primary-blue '
                        textStyles='text-white text-[14px] leading-[17px] font-bold'
                        rightIcon='/right-arrow.svg'
                        handleClick={() => handleEditClick(reservation)}
                      />
                    </td> */}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {/* <EditCar
          modalUpdateIsOpen={modalUpdateIsOpen}
          closeModal={() => setModalUpdateIsOpen(false)}
          car={selectedCar}
          getCars={getCars}
        />
        <CreateCar
          modalIsOpen={modalIsOpen}
          closeModal={() => setModalIsOpen(false)}
          getCars={getCars}
        /> */}
      </div>
    </div>
  );
};

export default Reservation;
