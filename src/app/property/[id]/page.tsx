import Faq from "@/components/modules/home-page/Faq";
import PricingDetails from "@/components/modules/property-detail-page/pricing-detail-section/PricingDetails";
import PropertyDescription from "@/components/modules/property-detail-page/PropertyDescription";
import React from "react";

const page = () => {
  return (
    <div className="bg-white-95 dark:bg-grey-shade-8">
      <PropertyDescription />
      <PricingDetails />
      <Faq />
    </div>
  );
};

export default page;
