import { ThreeStars } from "@/svgs/HomePageSvg";
import React from "react";
import InquiryForm from "./InquiryForm";

const InquiryProperty = () => {
  return (
    <div className="container py-10">
      <div className="grid tablet-lg:grid-cols-12 gap-10">
        <div className="col-span-5">
          <div className="flex flex-col gap-3">
            <div>
              <ThreeStars />
            </div>
            <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px] leading-tight">
              Inquire About Seaside Serenity Villa
            </h1>
            <p className="max-w-[900px] font-medium dark:text-grey-shade-60 text-lg leading-tight max-desktop-lg:text-base max-tablet-sm:text-sm mt-3">
              Interested in this property? Fill out the form below, and our real
              estate experts will get back to you with more details, including
              scheduling a viewing and answering any questions you may have.
            </p>
          </div>
        </div>
        <div className="col-span-7">
          <InquiryForm />
        </div>
      </div>
    </div>
  );
};

export default InquiryProperty;
