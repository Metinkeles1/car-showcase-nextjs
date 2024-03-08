"use client";

import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { CarProps } from "./types";
import { FormField, CustomButton } from "@/components";
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { carSchema } from "@/schema/carSchema";

type Props = {
  type: string;
  car?: CarProps;
};

const CarForm = ({ type, car }: Props) => {
  const router = useRouter();

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({
    city_mpg: car?.city_mpg || 0,
    car_class: car?.car_class || "",
    combination_mpg: car?.combination_mpg || 0,
    cylinders: car?.cylinders || 0,
    displacement: car?.displacement || 0,
    drive: car?.drive || "",
    fuel_type: car?.fuel_type || "",
    highway_mpg: car?.highway_mpg || 0,
    make: car?.make || "",
    model: car?.model || "",
    transmission: car?.transmission || "",
    year: car?.year || 0,
    car_rent: car?.car_rent || 0,
  });

  // const handleStateChange = (fieldName: keyof FormState, value: string) => {
  //   setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
  // };

  // */ const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();

  //   const file = e.target.files?.[0];

  //   if (!file) return;

  //   if (!file.type.includes("image")) {
  //     alert("Please upload an image!");

  //     return;
  //   }

  //   const reader = new FileReader();

  //   reader.readAsDataURL(file);

  //   reader.onload = () => {
  //     const result = reader.result as string;

  //     handleStateChange("image", result);
  //   };
  // };

  const onSubmit = async () => {
    console.log(values);

    setSubmitting(true);
    try {
      if (type === "create") {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/car`,
          values
        );
        if (res.status === 201) {
          toast("car added succesfyllt");
        }
      }
      if (type === "edit") {
        const res = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/car/${car._id}`,
          values
        );
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error(
        `Failed to ${type === "create" ? "create" : "edit"} a car. Try again!`
      );
    } finally {
      setSubmitting(false);
    }
  };

  const { handleSubmit, values, errors, touched, handleChange, handleBlur } =
    useFormik({
      initialValues: form,
      onSubmit,
      validationSchema: carSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "make",
      title: "Make",
      type: "text",
      placeholder: "Enter Make",
      value: values.make,
      errorMessage: errors.make,
      touched: touched.make,
    },
    {
      id: 2,
      name: "model",
      title: "Model",
      type: "text",
      placeholder: "Enter Model",
      value: values.model,
      errorMessage: errors.model,
      touched: touched.model,
    },
    {
      id: 3,
      name: "car_class",
      title: "Car Class",
      type: "text",
      placeholder: "Enter Car Class",
      value: values.car_class,
      errorMessage: errors.car_class,
      touched: touched.car_class,
    },
    {
      id: 4,
      name: "year",
      title: "Year",
      type: "number",
      placeholder: "Enter Year",
      value: values.year,
      errorMessage: errors.year,
      touched: touched.year,
    },
    {
      id: 5,
      name: "fuel_type",
      title: "Fuel Type",
      type: "text",
      placeholder: "Enter Fuel Type",
      value: values.fuel_type,
      errorMessage: errors.fuel_type,
      touched: touched.fuel_type,
    },
    {
      id: 6,
      name: "transmission",
      title: "Transmission",
      type: "text",
      placeholder: "Enter Transmission",
      value: values.transmission,
      errorMessage: errors.transmission,
      touched: touched.transmission,
    },
    {
      id: 7,
      name: "city_mpg",
      title: "City MPG",
      type: "number",
      placeholder: "Enter City MPG",
      value: values.city_mpg,
      errorMessage: errors.city_mpg,
      touched: touched.city_mpg,
    },
    {
      id: 8,
      name: "combination_mpg",
      title: "Combination MPG",
      type: "number",
      placeholder: "Enter Combination MPG",
      value: values.combination_mpg,
      errorMessage: errors.combination_mpg,
      touched: touched.combination_mpg,
    },
    {
      id: 9,
      name: "cylinders",
      title: "Cylinders",
      type: "number",
      placeholder: "Enter Cylinders",
      value: values.cylinders,
      errorMessage: errors.cylinders,
      touched: touched.cylinders,
    },
    {
      id: 10,
      name: "displacement",
      title: "Displacement",
      type: "number",
      placeholder: "Enter Displacement",
      value: values.displacement,
      errorMessage: errors.displacement,
      touched: touched.displacement,
    },
    {
      id: 11,
      name: "drive",
      title: "Drive",
      type: "text",
      placeholder: "Enter Drive",
      value: values.drive,
      errorMessage: errors.drive,
      touched: touched.drive,
    },
    {
      id: 12,
      name: "highway_mpg",
      title: "Highway MPG",
      type: "number",
      placeholder: "Enter Highway MPG",
      value: values.highway_mpg,
      errorMessage: errors.highway_mpg,
      touched: touched.highway_mpg,
    },
    {
      id: 13,
      name: "car_rent",
      title: "Car Rent",
      type: "number",
      placeholder: "Enter Car Rent",
      value: values.car_rent,
      errorMessage: errors.car_rent,
      touched: touched.car_rent,
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className='grid lg:grid-cols-3 grid-cols-1 gap-x-4 gap-y-2 w-full'
    >
      {/* <div className='flexStart form_image-container'>
        <label htmlFor='poster' className='flexCenter form_image-label'>
          {!form.image && "Choose a poster for your project"}
        </label>
        <input
          id='image'
          type='file'
          accept='image/*'
          required={type === "create" ? true : false}
          className='form_image-input'
          onChange={(e) => handleChangeImage(e)}
        />
        {form.image && (
          <Image
            src={form?.image}
            className='sm:p-10 object-contain z-20'
            alt='image'
            fill
          />
        )}
      </div> */}
      {inputs.map((input) => (
        <FormField
          key={input.id}
          title={input.title}
          placeholder={input.placeholer}
          name={input.name}
          type={input.type}
          value={input.value}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={input.errorMessage}
          touched={input.touched}
        />
      ))}
      <div className='flexStart !items-end w-full'>
        <CustomButton
          title={
            submitting
              ? `${type === "create" ? "Creating" : "Editing"}`
              : `${type === "create" ? "Create" : "Edit"}`
          }
          btnType='submit'
          leftIcon={submitting ? "" : "/close.svg"}
          submitting={submitting}
          containerStyles='bg-primary-blue rounded-full'
          textStyles='text-white'
        />
      </div>
    </form>
  );
};

export default CarForm;