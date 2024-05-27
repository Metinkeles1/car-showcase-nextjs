import type { NextApiRequest, NextApiResponse } from "next";
import Cars from "@/models/Cars";
import clientPromise from "@/lib/mongodb";
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
      const cars = await collection.find({}).toArray();
      res.status(200).json(cars);
    } catch (error) {
      console.error("Error fetching cars:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      const newCarData: CarProps = req.body;
      await collection.insertOne(newCarData);
      res.status(201).json("Car added successfully");
    } catch (error) {
      console.error("Error adding car:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
