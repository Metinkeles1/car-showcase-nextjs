import type { NextApiRequest, NextApiResponse } from "next";
import Reservation from "@/models/Reservation";
import clientPromise from "@/lib/mongodb";
import { ReservationProps } from "@/types/index";

type ResponseData = {
  message: string;
  data?: ReservationProps | ReservationProps[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection<ReservationProps>("reservations");

  if (req.method === "GET") {
    try {
      const reservations = await collection.find({}).toArray();
      res.status(200).json(reservations);
    } catch (error) {
      console.error("Error fetching reservations:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      const newReservationData: ReservationProps = req.body;
      await collection.insertOne(newReservationData);
      res.status(201).json({ message: "Reservation added successfully" });
    } catch (error) {
      console.error("Error adding reservation:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
