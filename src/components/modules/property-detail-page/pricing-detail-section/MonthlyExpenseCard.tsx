import { Button } from "@/components/ui/button";
import { MonthlyExpenses } from "@/utilityComponents/propertyDetailPage/pricingDetails";
import Link from "next/link";
import React from "react";

interface MonthlyExpenseCardProps {
  propertyTax: string;
  homeOwnersAssociationFee: string;
  propertyInsurance: string;
}

const MonthlyExpenseCard = ({
  propertyTax,
  homeOwnersAssociationFee,
  propertyInsurance,
}: MonthlyExpenseCardProps) => {
  return (
    <div className="p-5 border border-grey-shade-15 rounded-lg">
      <div className="flex flex-row items-center justify-between gap-2 py-5">
        <h2 className="text-2xl font-semibold max-desktop-lg:text-xl max-tablet-sm:text-lg">
          Monthly Expenses
        </h2>
        <Link href="/">
          <Button className="py-6 px-4 border-2 border-grey-shade-15 bg-grey-shade-10 rounded-md text-lg max-desktop-2xl:text-sm hover:bg-grey-shade-15 dark:text-white">
            Learn More
          </Button>
        </Link>
      </div>
      <div className="grid tablet-lg:grid-cols-2 border-t border-grey-shade-15 py-5">
        <div className="flex flex-col gap-3 max-tablet-lg:pb-5">
          <p className="dark:text-grey-shade-60 font-medium text-lg leading-6 max-desktop-lg:text-sm">
            Property Taxes
          </p>
          <div className="flex flex-row items-center gap-3">
            <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
              ${propertyTax}
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-3 tablet-lg:border-l border-grey-shade-15 tablet-lg:pl-5 max-tablet-lg:border-t max-tablet-lg:pt-5">
          <p className="dark:text-grey-shade-60 font-medium text-lg leading-6 max-desktop-lg:text-sm">
            Homeowners&apos; Association Fee
          </p>
          <div className="flex flex-row items-center gap-3">
            <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
              ${homeOwnersAssociationFee}
            </h1>
          </div>
        </div>
      </div>
      <div className="grid tablet-lg:grid-cols-2 border-t border-grey-shade-15 py-5">
        <div className="flex flex-col gap-3 max-tablet-lg:pb-5">
          <p className="dark:text-grey-shade-60 font-medium text-lg leading-6 max-desktop-lg:text-sm">
            Mortgage Payment
          </p>
          <div className="flex flex-row items-center gap-3">
            <h1 className="font-normal text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
              Varies based on terms and interest rate
            </h1>
            <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-15 bg-grey-shade-10 px-3 py-2 rounded-full max-mobile-lg:hidden">
              <p className="text-grey-shade-60 text-lg max-desktop-lg:text-sm">
                If applicable
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
              ${propertyInsurance}
            </h1>
            <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-15 bg-grey-shade-10 px-3 py-2 rounded-full max-mobile-md:rounded-lg">
              <p className="text-grey-shade-60 text-lg max-desktop-lg:text-sm">
                Approximate monthly cost
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyExpenseCard;
