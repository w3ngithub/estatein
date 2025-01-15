import { Button } from "@/components/ui/button";
import { MonthlyCosts } from "@/utilityComponents/propertyDetailPage/pricingDetails";
import React from "react";

interface MonthlyCostsCardProps {
  monthlyCostData: MonthlyCosts;
}

const MonthlyCostsCard = ({ monthlyCostData }: MonthlyCostsCardProps) => {
  return (
    <div className="p-5 border border-grey-shade-15 rounded-lg">
      <div className="flex flex-row items-center justify-between gap-2 py-5">
        <h2 className="text-2xl font-semibold max-desktop-lg:text-xl max-tablet-sm:text-lg">
          Monthly Costs
        </h2>
        <Button className="py-6 px-4 border-2 border-grey-shade-15 bg-grey-shade-10 rounded-md text-lg max-desktop-2xl:text-sm hover:bg-grey-shade-15 dark:text-white">
          Learn More
        </Button>
      </div>

      <div className="grid tablet-lg:grid-cols-1">
        <div className="flex flex-col gap-3 border-t border-grey-shade-15 py-5">
          <p className="dark:text-grey-shade-60 font-medium text-lg leading-6 max-desktop-lg:text-sm">
            Property Taxes
          </p>
          <div className="flex flex-row items-center gap-3">
            <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
              ${monthlyCostData.propertyTax}
            </h1>
            <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-15 bg-grey-shade-10 px-3 py-2 rounded-full max-mobile-md:rounded-lg">
              <p className="text-grey-shade-60 text-lg max-desktop-lg:text-sm">
                Approximate monthly property tax based on the sale price and
                local rates
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-grey-shade-15 py-5">
          <p className="dark:text-grey-shade-60 font-medium text-lg leading-6 max-desktop-lg:text-sm">
            Homeowners&apos; Association Fee
          </p>
          <div className="flex flex-row items-center gap-3">
            <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
              ${monthlyCostData.homeOwnerAssociationFee}
            </h1>
            <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-15 bg-grey-shade-10 px-3 py-2 rounded-full max-mobile-md:rounded-lg">
              <p className="text-grey-shade-60 text-lg max-desktop-lg:text-sm">
                Monthly fee for common area maintenance and security
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyCostsCard;
