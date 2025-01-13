import { Button } from "@/components/ui/button";
import { TotalInitialCosts } from "@/utilityComponents/propertyDetailPage/pricingDetails";
import React from "react";

interface TotalInitialCostCardProps {
  totalInitialCostData: TotalInitialCosts;
}

const TotalInitialCostCard = ({
  totalInitialCostData,
}: TotalInitialCostCardProps) => {
  return (
    <div className="p-5 border border-grey-shade-15 rounded-lg">
      <div className="flex flex-row items-center justify-between gap-2 py-5">
        <h2 className="text-2xl font-semibold max-desktop-lg:text-xl max-tablet-sm:text-lg">
          Total Initial Costs
        </h2>
        <Button className="py-6 px-4 border-2 border-grey-shade-15 bg-grey-shade-10 rounded-md text-lg max-desktop-2xl:text-sm hover:bg-grey-shade-15 dark:text-white">
          Learn More
        </Button>
      </div>
      <div className="grid tablet-lg:grid-cols-2 border-t border-grey-shade-15 py-5">
        <div className="flex flex-col gap-3 max-tablet-lg:pb-5">
          <p className="dark:text-grey-shade-60 font-medium text-lg leading-6 max-desktop-lg:text-sm">
            Listing Price
          </p>
          <div className="flex flex-row items-center gap-3">
            <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
              ${totalInitialCostData.listingPrice}
            </h1>
            {/* pills */}
            {/* <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-15 bg-grey-shade-10 px-3 py-2 rounded-full max-mobile-md:rounded-lg">
            <p className="text-grey-shade-60 text-lg max-desktop-lg:text-sm">
              Based on the sale price and local regulations
            </p>
          </div> */}
          </div>
        </div>
        <div className="flex flex-col gap-3 tablet-lg:border-l border-grey-shade-15 tablet-lg:pl-5 max-tablet-lg:border-t max-tablet-lg:pt-5">
          <p className="dark:text-grey-shade-60 font-medium text-lg leading-6 max-desktop-lg:text-sm">
            Additional Fees
          </p>
          <div className="flex flex-row items-center gap-3">
            <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
              ${totalInitialCostData.additionalFees}
            </h1>
            <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-15 bg-grey-shade-10 px-3 py-2 rounded-full max-mobile-md:rounded-lg">
              <p className="text-grey-shade-60 text-lg max-desktop-lg:text-sm">
                Property transfer tax, legal fees, inspection, insurance
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid tablet-lg:grid-cols-2 border-t border-grey-shade-15 py-5">
        <div className="flex flex-col gap-3 max-tablet-lg:pb-5">
          <p className="dark:text-grey-shade-60 font-medium text-lg leading-6 max-desktop-lg:text-sm">
            Down Payment
          </p>
          <div className="flex flex-row items-center gap-3">
            <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
              ${totalInitialCostData.downPayment}
            </h1>
            <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-15 bg-grey-shade-10 px-3 py-2 rounded-full">
              <p className="text-grey-shade-60 text-lg max-desktop-lg:text-sm">
                20%
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 tablet-lg:border-l border-grey-shade-15 tablet-lg:pl-5 max-tablet-lg:border-t max-tablet-lg:pt-5">
          <p className="dark:text-grey-shade-60 font-medium text-lg leading-6 max-desktop-lg:text-sm">
            Mortgage Amount
          </p>
          <div className="flex flex-row items-center gap-3">
            <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
              ${totalInitialCostData.mortgageAmount}
            </h1>
            <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-15 bg-grey-shade-10 px-3 py-2 rounded-full max-mobile-md:rounded-lg">
              <p className="text-grey-shade-60 text-lg max-desktop-lg:text-sm">
                If applicable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalInitialCostCard;
