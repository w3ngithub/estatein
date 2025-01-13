import { ThunderIcon } from "@/svgs/PropertyDetailPageSvg";
import { PropertyDescriptionData } from "@/utilityComponents/propertyDetailPage/propertyDescription";
import React from "react";

interface PropertyDescriptionProps {
  propertyDescription: PropertyDescriptionData[];
}

const PropertyDescription = ({
  propertyDescription,
}: PropertyDescriptionProps) => {
  return (
    <div className="container">
      <div className="grid tablet-md:grid-cols-2 gap-4 py-10">
        {/* First Section */}
        <div className="flex flex-col gap-10 border border-white-d1 dark:border-grey-shade-15 p-8 rounded-lg h-fit">
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-2xl dark:text-white max-desktop-lg:text-xl">
              Description
            </h2>
            <p className="font-medium text-lg dark:text-grey-shade-60 max-desktop-lg:text-base">
              {propertyDescription[0]?.description}
            </p>
          </div>
          <div className="grid grid-cols-2 mobile-lg:grid-cols-3 border-t border-grey-shade-15 pt-3 max-mobile-lg:gap-5">
            {propertyDescription[0]?.details?.map((detail, index) => (
              <div
                key={index}
                className={`flex flex-col gap-3 ${
                  index > 0 ? "border-l border-grey-shade-15 pl-3" : ""
                } ${
                  index === 2
                    ? "mobile-lg:border-l max-mobile-lg:border-t max-mobile-lg:pt-3 max-mobile-lg:col-span-2 max-mobile-lg:border-l-0"
                    : ""
                }`}
              >
                <div className="flex flex-row items-center gap-1">
                  <div>{detail.icon}</div>
                  <p className="font-medium text-lg dark:text-grey-shade-60 max-desktop-lg:text-sm">
                    {detail.label}
                  </p>
                </div>
                <h1 className="font-semibold text-2xl max-desktop-lg:text-xl">
                  {detail.value}
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* Second Section */}
        <div className="border border-white-d1 dark:border-grey-shade-15 p-8 rounded-lg">
          <div className="flex flex-col gap-5">
            <h1 className="font-semibold text-2xl max-desktop-lg:text-xl">
              Key Features and Amenities
            </h1>
            {propertyDescription[0]?.features?.map((feature, index) => (
              <div
                key={index}
                className="border-l-[1.5px] border-purple-shade-60 flex flex-row items-center gap-2 pl-5 py-3 bg-gradient-to-r from-[#1D1D1D] via-black to-black max-mobile-xl:gap-3"
              >
                <div>
                  <ThunderIcon />
                </div>
                <p className="font-medium text-lg text-grey-shade-60 max-desktop-lg:text-base">
                  {feature.features}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;
