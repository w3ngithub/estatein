import Faq from "@/components/modules/home-page/Faq";
import InquiryProperty from "@/components/modules/property-detail-page/InquiryProperty";
import PricingDetails from "@/components/modules/property-detail-page/pricing-detail-section/PricingDetails";
import PropertyDescription from "@/components/modules/property-detail-page/PropertyDescription";
// import { propertyDescription } from "@/utilityComponents/propertyDetailPage/propertyDescription";
import React from "react";
import { pricingDetails } from "@/utilityComponents/propertyDetailPage/pricingDetails";
import PropertyImageCarousal from "@/components/modules/property-detail-page/PropertyImageCarousal";

const fetchVillaDetails = async (id: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH || "http://localhost:3000";
  const res = await fetch(
    `http://localhost:3000/estatein/api/addProperty/${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch villa details");
  }
  const data = await res.json();

  return data;
};

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const villa = await fetchVillaDetails(id);

  return (
    <div className="bg-white-95 dark:bg-grey-shade-8">
      <PropertyImageCarousal images={villa.multipleImages} />
      <PropertyDescription
        description={villa.description}
        totalBedRoom={villa.totalBedRoom}
        totalBathRoom={villa.totalBathRoom}
        totalArea={villa.totalArea}
        areaUnit={villa.areaUnit}
        keyFeatures={villa.keyFeatures}
      />
      <InquiryProperty />
      <PricingDetails pricingDetails={pricingDetails[0]} />
      <Faq />
    </div>
  );
};

export default page;
