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
import InputField from "../common/InputField";

const ContactForm = () => {
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
      <div className="space-y-7 border border-grey-shade-15 p-10 rounded-md">
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
              type="text"
              placeholder="Enter First Name"
              className="h-16 max-desktop-lg:h-14"
            />
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
              type="text"
              placeholder="Enter Last Name"
              className="h-16 max-desktop-lg:h-14"
            />
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
              type="email"
              placeholder="Enter your Email"
              className="h-16 max-desktop-lg:h-14"
            />
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
              type="text"
              placeholder="Enter Phone Number"
              className="h-16 max-desktop-lg:h-14"
            />
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
            <SelectField
              placeholder="Select Location"
              data={preferredLocation}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="lastName"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              Property Type
            </Label>
            <SelectField
              placeholder="Select Property Type"
              data={propertyType}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="email"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              No. of Bathrooms
            </Label>
            <SelectField
              placeholder="Select no. of Bathrooms"
              data={noOfBathrooms}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="email"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              No. of Bedrooms
            </Label>
            <SelectField
              placeholder="Select no. of Bedrooms"
              data={noOfBedrooms}
            />
          </div>
        </div>
        {/* third row */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="budget"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              Budget
            </Label>
            <SelectField placeholder="Select Budget" data={budget} />
          </div>
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="contact"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              Preferred Contact Method
            </Label>
            <div className="flex flex-row gap-3">
              <div className="w-1/2">
                {/* <Input
                  type="text"
                  placeholder="Enter Your Number"
                  className="h-16 max-desktop-lg:h-14"
                /> */}
                <InputField />
              </div>
              <div className="w-1/2">
                <Input
                  type="text"
                  placeholder="Enter Your Email"
                  className="h-16 max-desktop-lg:h-14"
                />
              </div>
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
            placeholder="Enter your Message here.."
            className="h-44 max-desktop-lg:h-28 max-mobile-xl:h-20"
          />
        </div>
        {/* fifth row */}
        <div className="flex flex-row justify-between items-center">
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
      </div>
    </section>
  );
};

export default ContactForm;
