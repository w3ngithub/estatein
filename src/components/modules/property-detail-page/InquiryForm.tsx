import { ThreeStars } from "@/svgs/HomePageSvg";
import React from "react";

const InquiryForm = () => {
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
          <div className="col-span-8">form</div>
        </div>
      </div>
    </>
  );
};

export default InquiryForm;
