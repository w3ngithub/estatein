import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThreeStars } from "@/svgs/HomePageSvg";
import React from "react";
import { Controller } from "react-hook-form";
import SelectField from "../common/SelectField";

const LetsConnectForm = () => {
  const inquiryType = [
    { value: "price", selectFieldData: "About Price" },
    { value: "location", selectFieldData: "About Location" },
    { value: "auction", selectFieldData: "About Auction" },
  ];
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
        //   onSubmit={handleSubmit(onSubmit)}
        className="space-y-7 border border-white-d1 dark:border-grey-shade-15 p-10 rounded-md max-mobile-md:p-5"
      >
        {/* first row */}
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="firstName"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              First Name
            </Label>
            <Input
              id="firstName"
              // {...register("firstName")}
              type="text"
              placeholder="Enter First Name"
              className="h-16 max-desktop-lg:h-14 border border-grey-15 dark:bg-grey-shade-10"
            />
            {/* {errors.firstName?.message && (
            <span className="text-red-500">
              {typeof errors.firstName.message === "string" &&
                errors.firstName.message}
            </span>
          )} */}
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
              // {...register("lastName")}
              type="text"
              placeholder="Enter Last Name"
              className="h-16 max-desktop-lg:h-14 border border-grey-15 dark:bg-grey-shade-10"
            />
            {/* {errors.lastName?.message && (
            <span className="text-red-500">
              {typeof errors.lastName.message === "string" &&
                errors.lastName.message}
            </span>
          )} */}
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
              // {...register("email")}
              type="email"
              placeholder="Enter your Email"
              className="h-16 max-desktop-lg:h-14 border border-grey-15 dark:bg-grey-shade-10"
            />
            {/* {errors.email?.message && (
            <span className="text-red-500">
              {typeof errors.email.message === "string" &&
                errors.email.message}
            </span>
          )} */}
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
              // {...register("phoneNumber")}
              type="number"
              placeholder="Enter Phone Number"
              className="h-16 max-desktop-lg:h-14 border border-grey-15 dark:bg-grey-shade-10"
            />
            {/* {errors.phoneNumber?.message && (
            <span className="text-red-500">
              {typeof errors.phoneNumber.message === "string" &&
                errors.phoneNumber.message}
            </span>
          )} */}
          </div>
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="preferredLocation"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              Inquiry Type
            </Label>
            <Controller
              name="inquiryType"
              //   control={control}
              render={({ field }) => (
                <SelectField
                  placeholder="Select Inquiry Type"
                  data={inquiryType}
                  value={field.value || ""}
                  onChange={field.onChange}
                />
              )}
            />
            {/* {errors.inquiryType && (
              <span className="text-red-500">
                {errors.inquiryType.message}
              </span>
            )} */}
          </div>
        </div>
      </form>
    </section>
  );
};

export default LetsConnectForm;
