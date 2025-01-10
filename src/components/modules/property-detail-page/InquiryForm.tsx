import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThreeStars } from "@/svgs/HomePageSvg";
import React from "react";

const InquiryForm = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-12 border border-red-500">
          <div className="col-span-4 border border-red-500">
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
          <div className="col-span-8 border border-red-500">
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
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InquiryForm;
