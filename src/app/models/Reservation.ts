import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    mail: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
    car: { type: mongoose.Schema.Types.ObjectId, ref: "Cars", required: true },
  },
  { timestamps: true }
);

const Reservation =
  mongoose.models.Reservation ||
  mongoose.model("Reservation", ReservationSchema);

export default Reservation;
