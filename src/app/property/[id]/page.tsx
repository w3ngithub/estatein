import Faq from "@/components/modules/home-page/Faq";
import InquiryProperty from "@/components/modules/property-detail-page/InquiryProperty";
import PricingDetails from "@/components/modules/property-detail-page/pricing-detail-section/PricingDetails";
import PropertyDescription from "@/components/modules/property-detail-page/PropertyDescription";
import { propertyDescription } from "@/utilityComponents/propertyDetailPage/propertyDescription";
import React from "react";
import { pricingDetails } from "@/utilityComponents/propertyDetailPage/pricingDetails";

const page = () => {
  return (
    <div className="bg-white-95 dark:bg-grey-shade-8">
      <PropertyDescription propertyDescription={propertyDescription} />
      <InquiryProperty />
      <PricingDetails pricingDetails={pricingDetails[0]} />
      <Faq />
    </div>
  );
};

export default page;
