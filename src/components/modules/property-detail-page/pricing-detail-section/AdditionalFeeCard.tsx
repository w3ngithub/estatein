import { Button } from "@/components/ui/button";
import { AdditionalFees } from "@/utilityComponents/propertyDetailPage/pricingDetails";

import React from "react";

interface AdditionalFeeCardProps {
  additionalFeeData: AdditionalFees;
}

const AdditionalFeeCard = ({ additionalFeeData }: AdditionalFeeCardProps) => {
  return (
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
      <div className="grid tablet-lg:grid-cols-2 border-t border-grey-shade-15 py-5">
        <div className="flex flex-col gap-3 max-tablet-lg:pb-5">
          <p className="dark:text-grey-shade-60 font-medium text-lg leading-6 max-desktop-lg:text-sm">
            Property Transfer Tax
          </p>
          <div className="flex flex-row items-center gap-3">
            <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
              ${additionalFeeData.propertyTransferTax}
            </h1>
            <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-15 bg-grey-shade-10 px-3 py-2 rounded-full max-mobile-md:rounded-lg">
              <p className="text-grey-shade-60 text-lg max-desktop-lg:text-sm">
                Based on the sale price and local regulations
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 tablet-lg:border-l border-grey-shade-15 tablet-lg:pl-5 max-tablet-lg:border-t max-tablet-lg:pt-5">
          <p className="dark:text-grey-shade-60 font-medium text-lg leading-6 max-desktop-lg:text-sm">
            Legal Fees
          </p>
          <div className="flex flex-row items-center gap-3">
            <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
              ${additionalFeeData.legalFees}
            </h1>
            <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-15 bg-grey-shade-10 px-3 py-2 rounded-full max-mobile-md:rounded-lg">
              <p className="text-grey-shade-60 text-lg max-desktop-lg:text-sm">
                Approximate cost for legal services, including title transfer
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 1st card: third row */}
      <div className="grid tablet-lg:grid-cols-2 border-t border-grey-shade-15 py-5">
        <div className="flex flex-col gap-3 max-tablet-lg:pb-5">
          <p className="dark:text-grey-shade-60 font-medium text-lg leading-6 max-desktop-lg:text-sm">
            Home Inspection
          </p>
          <div className="flex flex-row items-center gap-3">
            <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
              ${additionalFeeData.homeInspection}
            </h1>
            <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-15 bg-grey-shade-10 px-3 py-2 rounded-full">
              <p className="text-grey-shade-60 text-lg max-desktop-lg:text-sm">
                Recommended for due diligence
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 tablet-lg:border-l border-grey-shade-15 tablet-lg:pl-5 max-tablet-lg:border-t max-tablet-lg:pt-5">
          <p className="dark:text-grey-shade-60 font-medium text-lg leading-6 max-desktop-lg:text-sm">
            Property Insurance
          </p>
          <div className="flex flex-row items-center gap-3">
            <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
              ${additionalFeeData.propertyInsurance}
            </h1>
            <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-15 bg-grey-shade-10 px-3 py-2 rounded-full max-mobile-md:rounded-lg">
              <p className="text-grey-shade-60 text-lg max-desktop-lg:text-sm">
                Annual cost for comprehensive property insurance
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 4 row */}
      <div className="grid tablet-lg:grid-cols-2 border-t border-grey-shade-15 py-5">
        <div className="flex flex-col gap-3">
          <p className="dark:text-grey-shade-60 font-medium text-lg leading-6 max-desktop-lg:text-sm">
            Mortgage Fees
          </p>
          <div className="flex flex-row items-center gap-3">
            <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
              {additionalFeeData.mortgageFees}
            </h1>
            <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-15 bg-grey-shade-10 px-3 py-2 rounded-full max-mobile-md:rounded-lg">
              <p className="text-grey-shade-60 text-lg max-desktop-lg:text-sm">
                If applicable, consult with your lender for specific details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalFeeCard;
