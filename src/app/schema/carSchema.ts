import * as Yup from "yup";

export const carSchema = Yup.object({
  city_mpg: Yup.number().required("City MPG is required"),
  car_class: Yup.string().required("Car class is required"),
  combination_mpg: Yup.number().required("Combination MPG is required"),
  cylinders: Yup.number().required("Cylinders is required"),
  displacement: Yup.number().required("Displacement is required"),
  drive: Yup.string().required("Drive is required"),
  fuel_type: Yup.string().required("Fuel type is required"),
  highway_mpg: Yup.number().required("Highway MPG is required"),
  make: Yup.string().required("Make is required"),
  model: Yup.string().required("Model is required"),
  transmission: Yup.string().required("Transmission is required"),
  year: Yup.number().required("Year is required"),
  car_rent: Yup.number().required("Car rent is required"),
});
