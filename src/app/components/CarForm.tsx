"use client";

import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { CarProps } from "./types";
import { FormField, CustomButton } from "@/components";
import axios from "axios";
import { toast } from "react-toastify";

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

  const handleStateChange = (fieldName: keyof FormState, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
  };

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

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(form);

    setSubmitting(true);
    try {
      if (type === "create") {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/car`,
          form
        );
        if (res.status === 201) {
          toast("car added succesfyllt");
          // console.log("Car added successfully");
          // router.push("/admin/profile");
        }
      } else if (type === "edit") {
        // Düzenleme işlemi için gerekli kodu buraya ekleyin
      }
    } catch (err) {
      console.error("Error:", err);
      alert(
        `Failed to ${type === "create" ? "create" : "edit"} a car. Try again!`
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className='flexStart form'>
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
      <FormField
        title='Make'
        state={form.make}
        placeholder='Make'
        setState={(value) => handleStateChange("make", value)}
      />
      <FormField
        title='Model'
        state={form.model}
        placeholder='Model'
        setState={(value) => handleStateChange("model", value)}
      />
      <FormField
        title='Car Class'
        state={form.car_class}
        placeholder='Car Class'
        setState={(value) => handleStateChange("car_class", value)}
      />
      <FormField
        title='Combination Mpg'
        state={form.combination_mpg}
        placeholder='Combination Mpg'
        setState={(value) => handleStateChange("combination_mpg", value)}
      />
      <FormField
        title='City Mpg'
        state={form.city_mpg}
        placeholder='city Mpg'
        setState={(value) => handleStateChange("city_mpg", value)}
      />
      <FormField
        title='Cylinders'
        state={form.cylinders}
        placeholder='Cylinders'
        setState={(value) => handleStateChange("cylinders", value)}
      />
      <FormField
        title='Displacement'
        state={form.displacement}
        placeholder='Displacement'
        setState={(value) => handleStateChange("displacement", value)}
      />
      <FormField
        title='Drive'
        state={form.drive}
        placeholder='Drive'
        setState={(value) => handleStateChange("drive", value)}
      />
      <FormField
        title='Fuel Type'
        state={form.fuel_type}
        placeholder='Fuel Type'
        setState={(value) => handleStateChange("fuel_type", value)}
      />
      <FormField
        title='Highway Mpg'
        state={form.highway_mpg}
        placeholder='Highway Mpg'
        setState={(value) => handleStateChange("highway_mpg", value)}
      />
      <FormField
        title='Transmission'
        state={form.transmission}
        placeholder='Transmission'
        setState={(value) => handleStateChange("transmission", value)}
      />
      <FormField
        title='Year'
        state={form.year}
        placeholder='Year'
        setState={(value) => handleStateChange("year", value)}
      />
      <FormField
        title='Car Rent'
        state={form.car_rent}
        placeholder='Car Rent'
        setState={(value) => handleStateChange("car_rent", value)}
      />
      <div className='flexStart w-full'>
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
