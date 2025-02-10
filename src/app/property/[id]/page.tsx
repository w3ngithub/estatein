import Faq from "@/components/modules/home-page/Faq";
import InquiryProperty from "@/components/modules/property-detail-page/InquiryProperty";
import PricingDetails from "@/components/modules/property-detail-page/pricing-detail-section/PricingDetails";
import PropertyDescription from "@/components/modules/property-detail-page/PropertyDescription";
import React from "react";
import PropertyImageCarousal from "@/components/modules/property-detail-page/PropertyImageCarousal";

const fetchVillaDetails = async (id: string) => {
  console.log(id, "iiiiiiiiii");
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH || "http://localhost:3000";
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
  console.log(id, "bbbbbbbbbbbb");
  const villa = await fetchVillaDetails(id);

  return (
    <div className="bg-white-95 dark:bg-grey-shade-8">
      <PropertyImageCarousal
        images={villa.multipleImages}
        villaName={villa.villaName}
        location={villa.location}
        price={villa.price}
      />
      <PropertyDescription
        description={villa.description}
        totalBedRoom={villa.totalBedRoom}
        totalBathRoom={villa.totalBathRoom}
        totalArea={villa.totalArea}
        areaUnit={villa.areaUnit}
        keyFeatures={villa.keyFeatures}
      />
      <InquiryProperty />
      <PricingDetails
        price={villa.price}
        propertyTransferTax={villa.propertyTransferTax}
        legalFees={villa.legalFees}
        homeInspectionFee={villa.homeInspectionFee}
        propertyInsurance={villa.propertyInsurance}
        propertyTax={villa.propertyTax}
        homeOwnersAssociationFee={villa.homeOwnersAssociationFee}
        additionalFee={villa.additionalFee}
        downPayment={villa.downPayment}
        mortgageFee={villa.mortgageFee}
      />
      <Faq />
    </div>
  );
};

export default page;
