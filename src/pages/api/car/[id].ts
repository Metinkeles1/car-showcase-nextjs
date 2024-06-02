import type { NextApiRequest, NextApiResponse } from "next";
import Cars from "@/models/Cars";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { CarProps } from "@/types";

type ResponseData = {
  message: string;
  data?: CarProps | CarProps[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection<CarProps>("cars");

  if (req.method === "GET") {
    try {
      const carId = req.query.id;
      if (!carId) {
        res.status(400).json({ message: "Car ID is required" });
        return;
      }

      const car = await collection.findOne({
        _id: new ObjectId(carId as string),
      });
      if (!car) {
        res.status(404).json({ message: "Car not found" });
        return;
      }

      res.status(200).json(car);
    } catch (error) {
      console.error("Error fetching car:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "PUT") {
    try {
      const carId = req.query.id;
      if (!carId) {
        res.status(400).json({ message: "Car ID is required" });
        return;
      }

      const updatedCarData: Partial<CarProps> = req.body;
      const updatedCar = await collection.findOneAndUpdate(
        { _id: new ObjectId(carId as string) },
        { $set: updatedCarData },
        { returnOriginal: false }
      );

      if (!updatedCar) {
        res.status(404).json({ message: "Car not found" });
        return;
      }
      res.status(201).json("Car Updated successfully");
    } catch (error) {
      console.error("Error updating car:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "DELETE") {
    try {
      const carId = req.query.id as string;
      if (!carId || !ObjectId.isValid(carId)) {
        res.status(400).json({ message: "Invalid or missing Car ID" });
        return;
      }

      const deletedCar = await collection.findOneAndDelete({
        _id: new ObjectId(carId),
      });

      console.log(deletedCar);

      if (!deletedCar) {
        res.status(404).json({ message: "Car not found" });
        return;
      }

      res
        .status(200)
        .json({ message: "Car deleted successfully", data: deletedCar.value });
    } catch (error) {
      console.error("Error deleting car:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
