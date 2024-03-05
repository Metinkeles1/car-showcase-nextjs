import type { NextApiRequest, NextApiResponse } from "next";
import Cars from "@/models/Cars";
import clientPromise from "@/lib/mongodb";

type ResponseData = {
  message: string;
  data?: Car | Car[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection<Car>("cars");

  if (req.method === "GET") {
    try {
      const cars = await collection.find({}).toArray();
      res.status(200).json(cars);
    } catch (error) {
      console.error("Error fetching cars:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      const {
        city_mpg,
        car_class,
        combination_mpg,
        cylinders,
        displacement,
        drive,
        fuel_type,
        highway_mpg,
        make,
        model,
        transmission,
        year,
        car_rent,
      } = req.body;

      const newCar: Car = {
        city_mpg,
        car_class,
        combination_mpg,
        cylinders,
        displacement,
        drive,
        fuel_type,
        highway_mpg,
        make,
        model,
        transmission,
        year,
        car_rent,
      };

      await collection.insertOne(newCar);
      res.status(201).json({ message: "Car added successfully" });
    } catch (error) {
      console.error("Error adding car:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
