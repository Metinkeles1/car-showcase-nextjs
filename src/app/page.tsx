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
  const [carCount, setCarCount] = useState(0);

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

  return (
    <main className='overflow-hidden'>
      <Hero carCount={carCount} />

      <CarGrid allCars={allCars} loading={loading} />

      <About />
    </main>
  );
}
