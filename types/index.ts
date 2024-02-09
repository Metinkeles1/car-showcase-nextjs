import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  sontainerStyles?: string;
  handleClick?: MouseEventHandler<HtmlButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
