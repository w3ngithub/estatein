import Faq from "@/components/modules/home-page/Faq";
import InquiryProperty from "@/components/modules/property-detail-page/InquiryProperty";
import PricingDetails from "@/components/modules/property-detail-page/pricing-detail-section/PricingDetails";
import PropertyDescription from "@/components/modules/property-detail-page/PropertyDescription";
import { propertyDescription } from "@/utilityComponents/propertyDetailPage/propertyDescription";
import React from "react";
import { pricingDetails } from "@/utilityComponents/propertyDetailPage/pricingDetails";
import PropertyImageCarousal from "@/components/modules/property-detail-page/PropertyImageCarousal";

// const fetchVillaDetails = async (id: string) => {
//   const res = await fetch(`/estatein/api/addProperty/${id}`, {
//     cache: "no-store", // Ensures fresh data on each request
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch villa details");
//   }

//   return res.json();
// };

const page = async ({ params }: { params: { id: string } }) => {
  // const villa = await fetchVillaDetails(params.id);
  const { id } = await params;
  console.log(id, "xxxxxxxxx");
  return (
    <div className="bg-white-95 dark:bg-grey-shade-8">
      <PropertyImageCarousal />
      <PropertyDescription propertyDescription={propertyDescription} />
      <InquiryProperty />
      <PricingDetails pricingDetails={pricingDetails[0]} />
      <Faq />
    </div>
  );
};

export default page;
