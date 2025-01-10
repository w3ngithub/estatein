import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThreeStars } from "@/svgs/HomePageSvg";
import React from "react";
import SelectField from "../common/SelectField";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const InquiryForm = () => {
  const preferredLocation = [
    { value: "ktm", selectFieldData: "Kathmandu" },
    { value: "bkt", selectFieldData: "Bhaktapur" },
    { value: "lalit", selectFieldData: "Lalitpur" },
  ];
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <div className="flex flex-col gap-3">
              <div>
                <ThreeStars />
              </div>
              <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px] leading-tight">
                Inquire About Seaside Serenity Villa
              </h1>
              <p className="max-w-[900px] font-medium dark:text-grey-shade-60 text-lg leading-tight max-desktop-lg:text-base max-tablet-sm:text-sm mt-3">
                Interested in this property? Fill out the form below, and our
                real estate experts will get back to you with more details,
                including scheduling a viewing and answering any questions you
                may have.
              </p>
            </div>
          </div>
          <div className="col-span-8">
            <div className="flex flex-col gap-5 border border-grey-shade-15 rounded-lg p-5">
              <div className="grid grid-cols-2 gap-3">
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
                    className="h-16 max-desktop-lg:h-14 border border-grey-shade-15 dark:bg-grey-shade-10"
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
                    className="h-16 max-desktop-lg:h-14 border border-grey-shade-15 dark:bg-grey-shade-10"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
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
                    className="h-16 max-desktop-lg:h-14 border border-grey-shade-15 dark:bg-grey-shade-10"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Label
                    htmlFor="phoneNumber"
                    className="font-semibold text-xl max-desktop-lg:text-base"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="number"
                    placeholder="Enter phone Number"
                    className="h-16 max-desktop-lg:h-14 border border-grey-shade-15 dark:bg-grey-shade-10"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <Label
                  htmlFor="selectedProperty"
                  className="font-semibold text-xl max-desktop-lg:text-base"
                >
                  Preferred Location
                </Label>
                <SelectField
                  placeholder="Select Location"
                  data={preferredLocation}
                />
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
                  placeholder="Enter your Message here.."
                  className="h-44 max-desktop-lg:h-28 max-mobile-xl:h-20 border border-grey-15 dark:bg-grey-shade-10"
                />
              </div>
              <div className="flex flex-row justify-between items-center max-mobile-xl:flex-col max-mobile-xl:gap-5">
                <div className="flex flex-row items-center gap-2">
                  <div className="flex items-center">
                    <Checkbox className="border border-grey-shade-15 dark:bg-grey-shade-10" />
                  </div>
                  <p className="text-lg text-grey-shade-60 max-desktop-lg:text-base max-mobile-xl:text-sm">
                    I agree with
                    <span className="underline px-2">Terms of Use</span>
                    and
                    <span className="underline px-2">Privacy Policy</span>
                  </p>
                </div>
                <div className="max-mobile-md:w-full">
                  <Button className="bg-purple-shade-60 hover:bg-purple-shade-d60 py-6 px-4 font-medium rounded-md max-desktop-lg:text-sm max-mobile-lg:w-full dark:text-white">
                    Send Your Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InquiryForm;
