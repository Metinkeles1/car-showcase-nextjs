"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Hero,
  SearchBar,
  CustomFilter,
  CarCard,
  ShowMore,
  About,
} from "./components";
import { fetchCars } from "./utils";
import { fuels, yearsOfProduction } from "./constants";
import axios from "axios";

export default function Home({ searchParams }: HomeProps) {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);
  const [limit, setLimit] = useState(10);
  const [carCount, setCarCount] = useState(0);
  

  // const [cars, setCars] = useState([]);

  // const getCars = () => {
  //   setLoading(true);
  //   fetchCars({
  //     manufacturer: manufacturer || "",
  //     year: year || 2022,
  //     fuel: fuel || "",
  //     limit: limit || 10,
  //     model: model || "",
  //   })
  //     .then((result) => {
  //       setAllCars(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };
  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/car`
      );
      setAllCars(response.data);
      setCarCount(response.data.length);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  // useEffect(() => {
  //   const filteredCars = allCars.filter((car) => {
  //     return car.make.toLowerCase().includes(manufacturer.toLowerCase());
  //   });

  //   setAllCars(filteredCars);
  //   // getCars();
  // }, [manufacturer]);
  // // console.log(allCars.filter((car) => car.make.includes(manufacturer)));
  // console.log(allCars);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero carCount={carCount} />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar
            setManufacturer={setManufacturer}
            setModel={setModel}
            setLimit={setLimit}
          />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} setFilter={setFuel} />
            <CustomFilter
              title='year'
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {/* {allCars?.map((car, index) => (
                <CarCard car={car} key={index} />
              ))} */}

              {allCars?.map((car, index) => (
                <CarCard car={car} key={index} />
              ))}
            </div>

            {loading && (
              <div className='mt-16 w-full flex-center'>
                <Image
                  src='/loading.svg'
                  alt='loading'
                  width={50}
                  height={50}
                  className='object-contain'
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>

      <About />
    </main>
  );
}
