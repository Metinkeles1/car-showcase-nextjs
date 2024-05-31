"use client";
import { useState, useEffect } from "react";
import {
  SearchBar,
  CustomFilter,
  CarCard,
  ShowMore,
  CustomButton,
} from "../components";
import Image from "next/image";
import BeatLoader from "react-spinners/BeatLoader";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const CarGrid = ({ allCars, loading }) => {
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [manufacturer, setManufacturer] = useState<string>("");
  const [model, setModel] = useState<string>("");

  useEffect(() => {
    const filtered = allCars.filter((car) =>
      manufacturer && model
        ? car.make.toLowerCase() === manufacturer.toLowerCase() &&
          car.model.toLowerCase() === model.toLowerCase()
        : manufacturer
        ? car.make.toLowerCase() === manufacturer.toLowerCase()
        : model
        ? car.model.toLowerCase() === model.toLowerCase()
        : true
    );
    setFilteredCars(filtered);
  }, [manufacturer, model, allCars]);

  const clearFilters = () => {
    setModel("");
    setManufacturer("");
  };

  return (
    <div id='cars' className='mt-12 padding-x padding-y max-width'>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial='hidden'
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className='home__text-container'
      >
        <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
        <p>Explore out cars you might like</p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial='hidden'
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className='home__filters'
      >
        <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

        <div className='home__filter-container'>
          <CustomButton
            title='Clear Filters'
            containerStyles='bg-primary-blue text-white rounded-full'
            handleClick={clearFilters}
            btnType='button'
          />
          {/* <CustomFilter title='fuel' options={fuels} setFilter={setFuel} /> */}
          {/* <CustomFilter
            title='year'
            options={yearsOfProduction}
            setFilter={setYear}
          /> */}
        </div>
      </motion.div>

      {loading && (
        <div className='mt-16 w-full flex-center'>
          <BeatLoader size={20} color='#36d7b7' />
        </div>
      )}

      {filteredCars.length > 0 ? (
        <section>
          <div className='home__cars-wrapper'>
            {filteredCars?.map((car, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.2)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.4 }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </div>

          {/* <ShowMore
            pageNumber={limit / 10}
            isNext={limit > allCars.length}
            setLimit={setLimit}
          /> */}
        </section>
      ) : (
        !loading && (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{filteredCars?.message}</p>
          </div>
        )
      )}
    </div>
  );
};

export default CarGrid;
