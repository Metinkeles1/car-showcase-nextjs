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
  CarGrid,
} from "./components";
import { fetchCars } from "./utils";
import { fuels, yearsOfProduction } from "./constants";
import axios from "axios";
import { CarProps } from "./types/index.ts";

export default function Home({ searchParams }: HomeProps) {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(true);
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
  const getCars = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/car`
      );
      setAllCars(response.data);
      setCarCount(response.data.length);
    } catch (error) {
      console.error("Error fetching cars:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  // useEffect(() => {
  //   const filteredCars = allCars.filter((car) => {
  //     return car.make.toLowerCase().includes(manufacturer.toLowerCase());
  //   });

  //   setAllCars(filteredCars);
  //   // getCars();
  // }, [manufacturer]);
  // // console.log(allCars.filter((car) => car.make.includes(manufacturer)));
  // console.log(allCars);

  // const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero carCount={carCount} />

      <CarGrid allCars={allCars} loading={loading} />

      <About />
    </main>
  );
}
