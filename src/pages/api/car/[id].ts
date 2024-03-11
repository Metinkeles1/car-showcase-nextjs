import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb"; // ObjectId için import ekledim
import clientPromise from "@/lib/mongodb";
import { CarProps } from "@/types/index";

type ResponseData = {
  message: string;
  data?: CarProps;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection<CarProps>("cars");
  const { id } = req.query;
  const carId = typeof id === "string" ? new ObjectId(id) : null;

  if (req.method === "GET") {
    try {
      const car = await collection.findOne({ _id: carId });

      if (!car) {
        return res.status(404).json({ message: "Car not found" });
      }

      res.status(200).json(car);
    } catch (error) {
      console.error("Error fetching car:", error);
      res.status(500).json({ message: "Server Error" });
    }
  } else if (req.method === "PUT") {
    try {
      const {
        car_img,
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
      const updatedCar: CarProps = {
        car_img,
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

      const result = await collection.updateOne(
        { _id: carId },
        { $set: updatedCar }
      );

      if (result.modifiedCount === 0) {
        return res.status(404).json({ message: "Car not found" });
      }
      res.status(200).json(updatedCar);
    } catch (error) {
      console.error("Error updating car:", error);
      res.status(500).json({ message: "Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
