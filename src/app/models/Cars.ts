import mongoose from "mongoose";

const CarsSchema = new mongoose.Schema(
  {
    car_img: { type: String, required: true },
    city_mpg: { type: Number, required: true },
    car_class: { type: String, required: true },
    combination_mpg: { type: Number, required: true },
    cylinders: { type: Number, required: true },
    displacement: { type: Number, required: true },
    drive: { type: String, required: true },
    fuel_type: { type: String, required: true },
    highway_mpg: { type: Number, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    transmission: { type: String, required: true },
    year: { type: Number, required: true },
    car_rent: { type: Number, required: true },
  },
  { timestamps: true }
);

const Cars = mongoose.models.Cars || mongoose.model("Cars", CarsSchema);

export default Cars;
