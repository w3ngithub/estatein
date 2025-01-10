import { Button } from "@/components/ui/button";
import { ThreeStars } from "@/svgs/HomePageSvg";
import React from "react";

const PricingDetails = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-10">
        {/* first row */}
        <div className="flex flex-col gap-3">
          <div>
            <ThreeStars />
          </div>
          <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px]">
            Comprehensive Pricing Details
          </h1>
          <p className="max-w-[900px] font-medium dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
            At Estatein, transparency is key. We want you to have a clear
            understanding of all costs associated with your property investment.
            Below, we break down the pricing for Seaside Serenity Villa to help
            you make an informed decision
          </p>
        </div>
        {/* second row */}
        <div className="border border-grey-shade-15 dark:bg-grey-shade-10 p-5 rounded-lg">
          <div className="flex flex-row items-center gap-4 max-mobile-md:gap-2 max-mobile-md:flex-col">
            <h2 className="text-2xl font-semibold max-desktop-lg:text-xl max-tablet-sm:text-lg mobile-md:border-r max-mobile-md:text-left max-mobile-md:w-full border-grey-shade-15 pr-5">
              Note
            </h2>
            <p className="dark:text-grey-shade-60 font-medium text-lg leading-6  max-mobile-md:border-t max-mobile-md:pt-4 border-grey-shade-15 max-desktop-lg:text-sm">
              The figures provided above are estimates and may vary depending on
              the property, location, and individual circumstances.
            </p>
          </div>
        </div>
        {/* third row */}
        <div className="grid grid-cols-12 gap-2">
          {/* 1st section */}
          <div className="col-span-2 space-y-3">
            <p className="dark:text-grey-shade-60 font-medium text-xl leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
              Listing Price
            </p>
            <h1 className="font-semibold text-4xl max-desktop-lg:text-3xl max-tablet-sm:text-2xl">
              $1,250,000
            </h1>
          </div>
          {/* 2nd section */}
          <div className="col-span-10">
            <div className="flex flex-col gap-3">
              {/* 1st card */}
              <div className="p-5 border border-grey-shade-15 rounded-lg">
                {/* 1st card: first row */}
                <div className="flex flex-row items-center justify-between gap-2 py-5">
                  <h2 className="text-2xl font-semibold max-desktop-lg:text-xl max-tablet-sm:text-lg">
                    Additional Fees
                  </h2>
                  <Button className="py-6 px-4 border-2 border-grey-shade-15 bg-grey-shade-10 rounded-md text-lg max-desktop-2xl:text-sm hover:bg-grey-shade-15 dark:text-white">
                    Learn More
                  </Button>
                </div>
                {/* 1st card: second row */}
                <div className="grid grid-cols-2 border-t border-grey-shade-15 py-5">
                  <div className="flex flex-col gap-3">
                    <p className="dark:text-grey-shade-60 font-medium text-lg leading-6 max-desktop-lg:text-sm">
                      Property Transfer Tax
                    </p>
                    <div className="flex flex-row items-center gap-3">
                      <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
                        $25,000
                      </h1>
                      <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-15 bg-grey-shade-10 px-3 py-2 rounded-full">
                        <p className="text-grey-shade-60 text-lg max-desktop-lg:text-sm">
                          Based on the sale price and local regulations
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 border-l border-grey-shade-15 pl-5">
                    <p className="dark:text-grey-shade-60 font-medium text-lg leading-6 max-desktop-lg:text-sm">
                      Legal Fees
                    </p>
                    <div className="flex flex-row items-center gap-3">
                      <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
                        $3,000
                      </h1>
                      <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-15 bg-grey-shade-10 px-3 py-2 rounded-full">
                        <p className="text-grey-shade-60 text-lg max-desktop-lg:text-sm">
                          Approximate cost for legal services, including title
                          transfer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="grid grid-cols-2 border-t border-grey-shade-15 py-5">
                  <div className="flex flex-col gap-3">
                    <p className="dark:text-grey-shade-60 font-medium text-lg leading-6 max-desktop-lg:text-sm">
                      Home Inspection
                    </p>
                    <div className="flex flex-row items-center gap-3">
                      <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
                        $500
                      </h1>
                      <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-15 bg-grey-shade-10 px-3 py-2 rounded-full">
                        <p className="text-grey-shade-60 text-lg max-desktop-lg:text-sm">
                          Recommended for due diligence
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 border-l border-grey-shade-15 pl-5">
                    <p className="dark:text-grey-shade-60 font-medium text-lg leading-6 max-desktop-lg:text-sm">
                      Property Insurance
                    </p>
                    <div className="flex flex-row items-center gap-3">
                      <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
                        $1,200
                      </h1>
                      <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-15 bg-grey-shade-10 px-3 py-2 rounded-full">
                        <p className="text-grey-shade-60 text-lg max-desktop-lg:text-sm">
                          Annual cost for comprehensive property insurance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div className="grid grid-cols-2 border-t border-grey-shade-15 py-5">
                  <div className="flex flex-col gap-3">
                    <p className="dark:text-grey-shade-60 font-medium text-lg leading-6 max-desktop-lg:text-sm">
                      Mortgage Fees
                    </p>
                    <div className="flex flex-row items-center gap-3">
                      <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
                        Varies
                      </h1>
                      <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-15 bg-grey-shade-10 px-3 py-2 rounded-full">
                        <p className="text-grey-shade-60 text-lg max-desktop-lg:text-sm">
                          If applicable, consult with your lender for specific
                          details
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2nd 3rd card */}
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
