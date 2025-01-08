"use client";
import React from "react";
import { ThreeStars } from "@/svgs/HomePageSvg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SelectField from "../common/SelectField";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { z } from "zod";
import { useForm, Controller, Form } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z.string().regex(/^[0-9]{10}$/, "Invalid phone number"),
  preferredLocation: z.string().min(1, "Preferred Location is required"),
  propertyType: z.string().min(1, "Property Type is required"),
  noOfBathrooms: z.string().min(1, "Number of Bathrooms is required"),
  noOfBedrooms: z.string().min(1, "Number of Bedrooms is required"),
  budget: z.string().min(1, "Budget is required"),
  preferredContactMethod: z.enum(["option-one", "option-two"]),
  message: z.string().optional(),
  agreeToTerms: z.boolean().refine((value) => value, {
    message: "You must agree to the terms and conditions",
  }),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  const preferredLocation = [
    { value: "ktm", selectFieldData: "Kathmandu" },
    { value: "bkt", selectFieldData: "Bhaktapur" },
    { value: "lalit", selectFieldData: "Lalitpur" },
  ];
  const propertyType = [
    { value: "rental", selectFieldData: "Rental" },
    { value: "own", selectFieldData: "Owned" },
  ];
  const noOfBathrooms = [
    { value: "1", selectFieldData: "One" },
    { value: "2", selectFieldData: "Two" },
    { value: "3", selectFieldData: "Three" },
  ];
  const noOfBedrooms = [
    { value: "1", selectFieldData: "One" },
    { value: "2", selectFieldData: "Two" },
    { value: "3", selectFieldData: "Three" },
  ];
  const budget = [
    { value: "1000", selectFieldData: "10000" },
    { value: "2000", selectFieldData: "20000" },
    { value: "3000", selectFieldData: "30000" },
  ];
  return (
    <section className="container flex flex-col gap-10 pt-5 max-mobile-md:gap-5">
      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-col gap-3">
          {/* 3 star logo */}
          <div>
            <ThreeStars />
          </div>
          <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px]">
            Let's Make it Happen
          </h1>
          <p className="max-w-[900px] dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
            Ready to take the first step toward your dream property? Fill out
            the form below, and our real estate wizards will work their magic to
            find your perfect match. Don't wait; let's embark on this exciting
            journey together.
          </p>
        </div>
      </div>
      {/* second section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-7 border border-grey-shade-15 p-10 rounded-md max-mobile-md:p-5"
      >
        {/* first row */}
        <div className="grid grid-cols-1 max-mobile-xl:space-y-3 mobile-xl:grid-cols-2 tablet-lg:grid-cols-4 gap-3">
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
              className="h-16 max-desktop-lg:h-14 border border-grey-15 bg-grey-shade-10"
            />
            {errors.firstName?.message && (
              <span className="text-red-500">
                {typeof errors.firstName.message === "string" &&
                  errors.firstName.message}
              </span>
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
              className="h-16 max-desktop-lg:h-14 border border-grey-15 bg-grey-shade-10"
            />
            {errors.lastName?.message && (
              <span className="text-red-500">
                {typeof errors.lastName.message === "string" &&
                  errors.lastName.message}
              </span>
            )}
          </div>
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
              className="h-16 max-desktop-lg:h-14 border border-grey-15 bg-grey-shade-10"
            />
            {errors.email?.message && (
              <span className="text-red-500">
                {typeof errors.email.message === "string" &&
                  errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="phone"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              Phone
            </Label>
            <Input
              id="phone"
              {...register("phone")}
              type="text"
              placeholder="Enter Phone Number"
              className="h-16 max-desktop-lg:h-14 border border-grey-15 bg-grey-shade-10"
            />
            {errors.phone?.message && (
              <span className="text-red-500">
                {typeof errors.phone.message === "string" &&
                  errors.phone.message}
              </span>
            )}
          </div>
        </div>
        {/* second row */}
        <div className="grid grid-cols-1 max-mobile-xl:space-y-3 mobile-xl:grid-cols-2 tablet-lg:grid-cols-4 gap-3">
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="firstName"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              Preferred Location
            </Label>
            {/* <SelectField
              placeholder="Select Location"
              data={preferredLocation}
            /> */}
            <Controller
              name="preferredLocation"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <SelectField
                  placeholder="Select Location"
                  data={preferredLocation}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.preferredLocation?.message && (
              <span className="text-red-500">
                {typeof errors.preferredLocation.message === "string" &&
                  errors.preferredLocation.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="lastName"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              Property Type
            </Label>
            {/* <SelectField
              placeholder="Select Property Type"
              data={propertyType}
            /> */}
            <Controller
              name="propertyType"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <SelectField
                  placeholder="Select Property Type"
                  data={propertyType}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.propertyType?.message && (
              <span className="text-red-500">
                {typeof errors.propertyType.message === "string" &&
                  errors.propertyType.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="email"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              No. of Bathrooms
            </Label>
            {/* <SelectField
              placeholder="Select no. of Bathrooms"
              data={noOfBathrooms}
            /> */}
            <Controller
              name="noOfBathrooms"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <SelectField
                  placeholder="Select no. of Bathrooms"
                  data={noOfBathrooms}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.noOfBathrooms?.message && (
              <span className="text-red-500">
                {typeof errors.noOfBathrooms.message === "string" &&
                  errors.noOfBathrooms.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="email"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              No. of Bedrooms
            </Label>
            {/* <SelectField
              placeholder="Select no. of Bedrooms"
              data={noOfBedrooms}
            /> */}
            <Controller
              name="noOfBedrooms"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <SelectField
                  placeholder="Select no. of Bedrooms"
                  data={noOfBedrooms}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.noOfBedrooms?.message && (
              <span className="text-red-500">
                {typeof errors.noOfBedrooms.message === "string" &&
                  errors.noOfBedrooms.message}
              </span>
            )}
          </div>
        </div>
        {/* third row */}
        <div className="grid tablet-sm:grid-cols-2 gap-3 max-tablet-sm:pb-12">
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="budget"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              Budget
            </Label>
            {/* <SelectField placeholder="Select Budget" data={budget} /> */}
            <Controller
              name="budget"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <SelectField
                  placeholder="Select Budget"
                  data={budget}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.budget?.message && (
              <span className="text-red-500">
                {typeof errors.budget.message === "string" &&
                  errors.budget.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="contact"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              Preferred Contact Method
            </Label>
            <div className="grid grid-cols-1">
              <RadioGroup
                defaultValue="option-one"
                className="flex flex-row justify-between w-full h-16 max-desktop-lg:h-14 max-desktop-md:flex-col max-desktop-md:mb-6"
              >
                <div className="flex items-center gap-3 w-full px-4 py-3 rounded-lg border border-grey-15 bg-grey-shade-10">
                  <div>
                    <svg
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 3.5C0 1.84315 1.34315 0.5 3 0.5H4.37163C5.232 0.5 5.98197 1.08556 6.19064 1.92025L7.29644 6.34343C7.47941 7.0753 7.20594 7.84555 6.60242 8.29818L5.3088 9.2684C5.17447 9.36915 5.14527 9.51668 5.183 9.61969C6.31851 12.7195 8.78051 15.1815 11.8803 16.317C11.9833 16.3547 12.1309 16.3255 12.2316 16.1912L13.2018 14.8976C13.6545 14.2941 14.4247 14.0206 15.1566 14.2036L19.5798 15.3094C20.4144 15.518 21 16.268 21 17.1284V18.5C21 20.1569 19.6569 21.5 18 21.5H15.75C7.05151 21.5 0 14.4485 0 5.75V3.5Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <input
                    type="number"
                    placeholder="Enter Your Number"
                    className="flex-1 bg-transparent dark:text-white dark:placeholder:text-gray-400 focus:outline-none text-sm"
                  />

                  <div className="p-2 rounded-full max-mobile-extra-md:pl-0">
                    <RadioGroupItem value="option-one" id="option-one" />
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full px-4 py-3 bg-[#E4E4E7] dark:bg-[#1C1C1C] rounded-lg">
                  <div>
                    <svg
                      width="22"
                      height="18"
                      viewBox="0 0 22 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.75 5.6691V14.25C0.75 15.9069 2.09315 17.25 3.75 17.25H18.75C20.4069 17.25 21.75 15.9069 21.75 14.25V5.6691L12.8223 11.1631C11.8581 11.7564 10.6419 11.7564 9.67771 11.1631L0.75 5.6691Z"
                        fill="white"
                      />
                      <path
                        d="M21.75 3.90783V3.75C21.75 2.09315 20.4069 0.75 18.75 0.75H3.75C2.09315 0.75 0.75 2.09315 0.75 3.75V3.90783L10.4639 9.88558C10.946 10.1823 11.554 10.1823 12.0361 9.88558L21.75 3.90783Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="flex-1 bg-transparent dark:text-white dark:placeholder:text-gray-400 focus:outline-none text-sm"
                  />

                  <div className="p-2 rounded-full max-mobile-extra-md:pl-0">
                    <RadioGroupItem value="option-two" id="option-two" />
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        {/* fourth row */}
        <div className="flex flex-col gap-3">
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
            className="h-44 max-desktop-lg:h-28 max-mobile-xl:h-20 border border-grey-15 bg-grey-shade-10"
          />
          {errors.message?.message && (
            <span className="text-red-500">
              {typeof errors.message.message === "string" &&
                errors.message.message}
            </span>
          )}
        </div>
        {/* fifth row */}
        <div className="flex flex-row justify-between items-center max-mobile-xl:flex-col max-mobile-xl:gap-5">
          <div className="flex flex-row items-center gap-2">
            <div className="flex items-center">
              <Checkbox className="border border-grey-shade-15 bg-grey-shade-10" />
            </div>
            <p className="text-lg text-grey-shade-60 max-desktop-lg:text-base max-mobile-xl:text-sm">
              I agree with<span className="underline px-2">Terms of Use</span>
              and
              <span className="underline px-2">Privacy Policy</span>
            </p>
          </div>
          <div>
            <Button className="bg-purple-shade-60 hover:bg-purple-shade-d60 py-6 px-4 font-medium rounded-md max-desktop-lg:text-sm max-mobile-lg:w-full dark:text-white">
              Send Your Message
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
