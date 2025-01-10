"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import SelectField from "../common/SelectField";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  InquiryFormData,
  inquiryFormSchema,
} from "@/schema/inquiry-form-schema";

const preferredLocation = [
  { value: "ktm", selectFieldData: "Kathmandu" },
  { value: "bkt", selectFieldData: "Bhaktapur" },
  { value: "lalit", selectFieldData: "Lalitpur" },
];

const InquiryForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      selectedProperty: "",
      message: "",
      terms: false,
    },
  });

  const onSubmit = (data: InquiryFormData) => {
    console.log("Form submitted successfully:", data);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      selectedProperty: "",
      message: "",
      terms: false,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 border border-grey-shade-15 rounded-lg p-5"
    >
      <div className="grid mobile-lg:grid-cols-2 gap-3">
        <div className="flex flex-col gap-3">
          <Label
            htmlFor="firstName"
            className="font-semibold text-xl max-desktop-lg:text-base"
          >
            First Name
          </Label>
          <Input
            id="firstName"
            {...register("firstName")}
            type="text"
            placeholder="Enter First Name"
            className="h-16 max-desktop-lg:h-14 border border-grey-shade-15 dark:bg-grey-shade-10"
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <Label
            htmlFor="lastName"
            className="font-semibold text-xl max-desktop-lg:text-base"
          >
            Last Name
          </Label>
          <Input
            id="lastName"
            {...register("lastName")}
            type="text"
            placeholder="Enter Last Name"
            className="h-16 max-desktop-lg:h-14 border border-grey-shade-15 dark:bg-grey-shade-10"
          />
          {errors.lastName && (
            <p className="text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>
      <div className="grid mobile-lg:grid-cols-2 gap-3">
        <div className="flex flex-col gap-3">
          <Label
            htmlFor="email"
            className="font-semibold text-xl max-desktop-lg:text-base"
          >
            Email
          </Label>
          <Input
            id="email"
            {...register("email")}
            type="email"
            placeholder="Enter your Email"
            className="h-16 max-desktop-lg:h-14 border border-grey-shade-15 dark:bg-grey-shade-10"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <Label
            htmlFor="phoneNumber"
            className="font-semibold text-xl max-desktop-lg:text-base"
          >
            Phone
          </Label>
          <Input
            id="phoneNumber"
            {...register("phoneNumber")}
            type="number"
            placeholder="Enter phone Number"
            className="h-16 max-desktop-lg:h-14 border border-grey-shade-15 dark:bg-grey-shade-10"
          />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber.message}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <Label
          htmlFor="selectedProperty"
          className="font-semibold text-xl max-desktop-lg:text-base"
        >
          Preferred Location
        </Label>
        <Controller
          name="selectedProperty"
          control={control}
          render={({ field }) => (
            <SelectField
              placeholder="Select Location"
              data={preferredLocation}
              value={field.value || ""}
              onChange={field.onChange}
            />
          )}
        />
        {errors.selectedProperty && (
          <p className="text-red-500">{errors.selectedProperty.message}</p>
        )}
      </div>
      <div className="grid grid-cols-1 gap-3">
        <Label
          htmlFor="message"
          className="font-semibold text-xl max-desktop-lg:text-base"
        >
          Message
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Enter your Message here.."
          className="h-44 max-desktop-lg:h-28 max-mobile-xl:h-20 border border-grey-15 dark:bg-grey-shade-10"
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>
      <div className="flex flex-row justify-between items-center max-mobile-xl:flex-col max-mobile-xl:gap-5 max-mobile-lg:pt-5">
        <div className="flex flex-row items-center gap-2">
          <div className="flex items-center">
            <Controller
              name="terms"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="terms"
                  className="border border-grey-shade-15 dark:bg-grey-shade-10 data-[state=checked]:text-white"
                  checked={field.value || false}
                  onCheckedChange={field.onChange}
                />
              )}
            />
          </div>
          <p className="text-lg text-grey-shade-60 max-desktop-lg:text-base max-mobile-xl:text-sm">
            I agree with
            <span className="underline px-2">Terms of Use</span>
            and
            <span className="underline px-2">Privacy Policy</span>
          </p>
        </div>
        {errors.terms && <p className="text-red-500">{errors.terms.message}</p>}
        <div className="max-mobile-lg:w-full">
          <Button className="bg-purple-shade-60 hover:bg-purple-shade-d60 py-6 px-4 font-medium rounded-md max-desktop-lg:text-sm dark:text-white max-mobile-lg:w-full">
            Send Your Message
          </Button>
        </div>
      </div>
    </form>
  );
};

export default InquiryForm;
