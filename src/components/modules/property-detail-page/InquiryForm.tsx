"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import SelectField from "../common/SelectField";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  InquiryFormData,
  inquiryFormSchema,
} from "@/schema/inquiry-form-schema";
import { toast } from "sonner";
import { PropertyApiResponse } from "@/app/properties/types";

const InquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [locations, setLocations] = useState<
    { value: string; selectFieldData: string }[]
  >([]);
  const [allProperties, setAllProperties] = useState<PropertyApiResponse[]>([]);

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
      terms: true,
    },
  });

  const fetchProperties = async () => {
    try {
      const res = await fetch("/estatein/api/addProperty");
      const result = await res.json();
      if (result.data && Array.isArray(result.data)) {
        setAllProperties(result.data); // Store the original data
      }
    } catch (error) {
      console.error("Failed to fetch properties:", error);
      toast.error("Failed to fetch property");
    } finally {
    }
  };

  useEffect(() => {
    // Fetch and display property type
    fetchProperties();
  }, []);

  //taking unique locations from json file
  useEffect(() => {
    const uniqueLocations = Array.from(
      new Set(allProperties?.map((property) => property.location))
    ).map((location) => ({
      value: location,
      selectFieldData: location,
    }));
    setLocations(uniqueLocations);
  }, [allProperties]);

  const onSubmit = async (data: InquiryFormData) => {
    if (isSubmitting) return; // Prevent multiple submissions
    try {
      setIsSubmitting(true);
      const response = await fetch("/estatein/api/inquiryForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast.success("Form submitted successfully");
      reset({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        selectedProperty: "",
        message: "",
        terms: true,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 border border-white-d1 dark:border-grey-shade-15 rounded-lg p-5"
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
            className="h-16 max-desktop-lg:h-14 border dark:border-grey-shade-15 dark:bg-grey-shade-10"
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
            className="h-16 max-desktop-lg:h-14 border dark:border-grey-shade-15 dark:bg-grey-shade-10"
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
            className="h-16 max-desktop-lg:h-14 border dark:border-grey-shade-15 dark:bg-grey-shade-10"
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
            className="h-16 max-desktop-lg:h-14 border dark:border-grey-shade-15 dark:bg-grey-shade-10"
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
              data={locations}
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
        <div className="max-mobile-lg:w-full">
          <Button
            disabled={isSubmitting}
            className={`py-6 px-4 font-medium rounded-md max-desktop-lg:text-sm max-mobile-lg:w-full dark:text-white ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purple-shade-60 hover:bg-purple-shade-d60"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Send Your Message"}
          </Button>
        </div>
      </div>
      {errors.terms && <p className="text-red-500">{errors.terms.message}</p>}
    </form>
  );
};

export default InquiryForm;
