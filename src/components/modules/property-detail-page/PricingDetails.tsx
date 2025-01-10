import { ThreeStars } from "@/svgs/HomePageSvg";
import React from "react";

const PricingDetails = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-4">
        {/* first row */}
        <div className="flex flex-col gap-3">
          <div>
            <ThreeStars />
          </div>
          <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px]">
            Comprehensive Pricing Details
          </h1>
          <p className="max-w-[900px] dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
            At Estatein, transparency is key. We want you to have a clear
            understanding of all costs associated with your property investment.
            Below, we break down the pricing for Seaside Serenity Villa to help
            you make an informed decision
          </p>
        </div>
        {/* second row */}
        <div>Note:</div>
        {/* third row */}
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3">
            <p></p>
            <h1></h1>
          </div>
          <div className="col-span-9">
            <div className="flex flex-col gap-3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;
