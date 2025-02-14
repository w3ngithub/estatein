"use client";
import React, { useState } from "react";
import { ThreeStars } from "@/svgs/HomePageSvg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SelectField from "../common/SelectField";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormSchema } from "@/schema/contact-form-schema";
import { MessageIcon, PhoneIcon } from "@/svgs/PropertyPageSvg";
import { toast } from "sonner";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      preferredLocation: "",
      propertyType: "",
      noOfBathrooms: "",
      noOfBedrooms: "",
      budget: "",
      preferredContactMethod: "number",
      preferredNumber: "",
      preferredEmail: "",
      message: "",
      terms: true,
    },
  });

  const onSubmit = async (data: FormSchema) => {
    if (isSubmitting) return; // Prevent multiple submissions
    try {
      setIsSubmitting(true);

      const response = await fetch("/estatein/api/contactForm", {
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
        preferredLocation: "",
        propertyType: "",
        noOfBathrooms: "",
        noOfBedrooms: "",
        budget: "",
        preferredContactMethod: "number",
        preferredNumber: "",
        preferredEmail: "",
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

  const email = watch("email");
  const phoneNumber = watch("phoneNumber");

  const populatePreferredPhoneNumber = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setValue("preferredNumber", phoneNumber);
  };
  const populatePreferredEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setValue("preferredEmail", email);
  };

  return (
    <section className="container flex flex-col gap-10 pt-5 max-mobile-md:gap-5 max-mobile-md:pb-8">
      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-col gap-3">
          {/* 3 star logo */}
          <div>
            <ThreeStars />
          </div>
          <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px]">
            Let&apos;s Make it Happen
          </h1>
          <p className="max-w-[900px] dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
            Ready to take the first step toward your dream property? Fill out
            the form below, and our real estate wizards will work their magic to
            find your perfect match. Don&apos;t wait; let&apos;s embark on this
            exciting journey together.
          </p>
        </div>
      </div>
      {/* second section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-7 border border-white-d1 dark:border-grey-shade-15 p-10 rounded-md max-mobile-md:p-5"
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
              className="h-16 max-desktop-lg:h-14 border border-grey-15 dark:bg-grey-shade-10"
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
              className="h-16 max-desktop-lg:h-14 border border-grey-15 dark:bg-grey-shade-10"
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
              className="h-16 max-desktop-lg:h-14 border border-grey-15 dark:bg-grey-shade-10"
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
              htmlFor="phoneNumber"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              Phone
            </Label>
            <Input
              id="phoneNumber"
              {...register("phoneNumber")}
              type="number"
              placeholder="Enter Phone Number"
              className="h-16 max-desktop-lg:h-14 border border-grey-15 dark:bg-grey-shade-10"
            />
            {errors.phoneNumber?.message && (
              <span className="text-red-500">
                {typeof errors.phoneNumber.message === "string" &&
                  errors.phoneNumber.message}
              </span>
            )}
          </div>
        </div>
        {/* second row */}
        <div className="grid grid-cols-1 max-mobile-xl:space-y-3 mobile-xl:grid-cols-2 tablet-lg:grid-cols-4 gap-3">
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="preferredLocation"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              Preferred Location
            </Label>
            <Controller
              name="preferredLocation"
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
            {errors.preferredLocation && (
              <span className="text-red-500">
                {errors.preferredLocation.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="propertyType"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              Property Type
            </Label>
            <Controller
              name="propertyType"
              control={control}
              render={({ field }) => (
                <SelectField
                  placeholder="Select Property Type"
                  data={propertyType}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.propertyType && (
              <span className="text-red-500">
                {errors.propertyType.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="noOfBathrooms"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              No. of Bathrooms
            </Label>
            <Controller
              name="noOfBathrooms"
              control={control}
              render={({ field }) => (
                <SelectField
                  placeholder="Select no. of Bathrooms"
                  data={noOfBathrooms}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.noOfBathrooms && (
              <span className="text-red-500">
                {errors.noOfBathrooms.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="noOfBedrooms"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              No. of Bedrooms
            </Label>
            <Controller
              name="noOfBedrooms"
              control={control}
              render={({ field }) => (
                <SelectField
                  placeholder="Select no. of Bedrooms"
                  data={noOfBedrooms}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.noOfBedrooms && (
              <span className="text-red-500">
                {errors.noOfBedrooms.message}
              </span>
            )}
          </div>
        </div>
        {/* third row */}
        {/* max-tablet-sm:pb-12 */}
        <div className="grid tablet-sm:grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="budget"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              Budget
            </Label>
            <Controller
              name="budget"
              control={control}
              render={({ field }) => (
                <SelectField
                  placeholder="Select Budget"
                  data={budget}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.budget && (
              <span className="text-red-500">{errors.budget.message}</span>
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
              <Controller
                name="preferredContactMethod"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    // className="flex flex-row justify-between w-full h-16 max-desktop-lg:h-14 max-desktop-md:flex-col max-desktop-md:mb-6"
                    // className="flex flex-col space-y-4 w-full"
                    className="grid grid-cols-1 desktop-md:grid-cols-2"
                  >
                    <div className="flex flex-col w-full">
                      <div className="flex items-center gap-3 w-full h-full px-4 py-3 rounded-lg bg-[#E4E4E7] dark:bg-[#1C1C1C]">
                        <div>
                          <PhoneIcon />
                        </div>

                        <input
                          type="number"
                          placeholder="Enter Your Number"
                          className="flex-1 bg-transparent dark:text-white dark:placeholder:text-gray-400 focus:outline-none text-sm"
                          {...register("preferredNumber")}
                        />

                        <div className="p-2 rounded-full max-mobile-extra-md:pl-0">
                          <RadioGroupItem value="number" id="number" />
                        </div>
                      </div>
                      <Button
                        variant="link"
                        className="flex justify-end items-center text-purple-shade-60"
                        onClick={(e) => populatePreferredPhoneNumber(e)}
                      >
                        Same as above?
                      </Button>
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="flex items-center gap-3 w-full h-full px-4 py-3 bg-[#E4E4E7] dark:bg-[#1C1C1C] rounded-lg">
                        <div>
                          <MessageIcon />
                        </div>
                        <input
                          type="email"
                          placeholder="Enter Your Email"
                          className="flex-1 bg-transparent dark:text-white dark:placeholder:text-gray-400 focus:outline-none text-sm"
                          {...register("preferredEmail")}
                        />

                        <div className="p-2 rounded-full max-mobile-extra-md:pl-0">
                          <RadioGroupItem value="email" id="email" />
                        </div>
                      </div>
                      <Button
                        variant="link"
                        className="flex justify-end items-center text-purple-shade-60"
                        onClick={(e) => populatePreferredEmail(e)}
                      >
                        Same as above?
                      </Button>
                    </div>
                  </RadioGroup>
                )}
              />
              {errors.preferredNumber && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.preferredNumber.message}
                </span>
              )}
              {errors.preferredEmail && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.preferredEmail.message}
                </span>
              )}
              {errors.preferredContactMethod && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.preferredContactMethod.message}
                </span>
              )}
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
            className="h-44 max-desktop-lg:h-28 max-mobile-xl:h-20 border border-grey-15 dark:bg-grey-shade-10"
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
              I agree with<span className="underline px-2">Terms of Use</span>
              and
              <span className="underline px-2">Privacy Policy</span>
            </p>
          </div>
          <div className="max-mobile-md:w-full">
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
    </section>
  );
};

export default ContactForm;
