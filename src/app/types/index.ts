import { MouseEventHandler } from "react";
import mongoose from "mongoose";

export interface CustomButtonProps {
  title: string;
  sontainerStyles?: string;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  icon?: ReactNode;
  isDisabled?: boolean;
  handleClick?: MouseEventHandler;
  submitting?: boolean | false;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  car_img: string;
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface carsGetProps {
  getCars: () => void;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}

export interface ReservationProps {
  fullName: string;
  mail: string;
  phone: string;
  message: string;
  car: mongoose.Schema.Types.ObjectId;
}
