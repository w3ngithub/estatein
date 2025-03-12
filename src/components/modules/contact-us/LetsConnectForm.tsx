"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThreeStars } from "@/svgs/HomePageSvg";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SelectField from "../common/SelectField";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  letsConnectSchema,
  LetsConnectSchema,
} from "@/schema/lets-connect-form-schema";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const LetsConnectForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryType = [
    { value: "price", selectFieldData: "About Price" },
    { value: "location", selectFieldData: "About Location" },
    { value: "auction", selectFieldData: "About Auction" },
    { value: "others", selectFieldData: "Others" },
  ];
  const hearAboutUs = [
    { value: "facebook", selectFieldData: "Facebook" },
    { value: "instagram", selectFieldData: "Instagram" },
    { value: "newspaper", selectFieldData: "Newspaper" },
    { value: "others", selectFieldData: "Others" },
  ];
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<LetsConnectSchema>({
    resolver: zodResolver(letsConnectSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      inquiryType: "",
      hearAboutUs: "",
      message: "",
      terms: true,
    },
  });
  const onSubmit = async (data: LetsConnectSchema) => {
    if (isSubmitting) return; // Prevent multiple submissions
    try {
      setIsSubmitting(true);

      const response = await fetch("/estatein/api/letsConnectForm", {
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
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container flex flex-col gap-10 py-10 max-mobile-md:gap-5 max-mobile-md:pb-8">
      {/* first section */}
      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-col gap-3">
          {/* 3 star logo */}
          <div>
            <ThreeStars />
          </div>
          <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px]">
            Let&apos;s Connect
          </h1>
          <p className="max-w-[900px] dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
            We&apos;re excited to connect with you and learn more about your
            real estate goals. Use the form below to get in touch with Estatein.
            Whether you&apos;re a prospective client, partner, or simply curious
            about our services, we&apos;re here to answer your questions and
            provide the assistance you need.
          </p>
        </div>
      </div>
      {/* second section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-7 border border-white-d1 dark:border-grey-shade-15 p-10 rounded-md max-mobile-md:p-5"
      >
        {/* first and second row */}
        <div className="grid tablet-md:grid-cols-3 gap-5">
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
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="inquiryType"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              Inquiry Type
            </Label>
            <Controller
              name="inquiryType"
              control={control}
              render={({ field }) => (
                <SelectField
                  placeholder="Select Inquiry Type"
                  data={inquiryType}
                  value={field.value || ""}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.inquiryType && (
              <span className="text-red-500">{errors.inquiryType.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="hearAboutUs"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              How Did You Hear About Us?
            </Label>
            <Controller
              name="hearAboutUs"
              control={control}
              render={({ field }) => (
                <SelectField
                  placeholder="Select"
                  data={hearAboutUs}
                  value={field.value || ""}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.hearAboutUs && (
              <span className="text-red-500">{errors.hearAboutUs.message}</span>
            )}
          </div>
        </div>
        {/* message and terms */}
        <div className="col-span-1 flex flex-col gap-3">
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

export default LetsConnectForm;
