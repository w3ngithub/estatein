import { AreaIcon, BedIcon, ShowerIcon } from "@/svgs/PropertyDetailPageSvg";
import React from "react";

const PropertyDescription = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-2 py-10">
        {/* first section */}
        <div className="flex flex-col gap-10 border border-grey-shade-15 p-5 rounded-lg">
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-2xl text-white max-desktop-lg:text-xl">
              Description
            </h2>
            <p className="font-medium text-lg text-grey-60 max-desktop-lg:text-base">
              Discover your own piece of paradise with the Seaside Serenity
              Villa. T With an open floor plan, breathtaking ocean views from
              every room, and direct access to a pristine sandy beach, this
              property is the epitome of coastal living.
            </p>
          </div>
          <div className="grid grid-cols-3">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-1">
                <div>
                  <BedIcon />
                </div>
                <p className="font-medium text-lg text-grey-shade-60 max-desktop-lg:text-sm">
                  Bedrooms
                </p>
              </div>
              <h1 className="font-semibold text-2xl max-desktop-lg:text-xl">
                04
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-1">
                <div>
                  <ShowerIcon />
                </div>
                <p className="font-medium text-lg text-grey-shade-60 max-desktop-lg:text-sm">
                  Bathrooms
                </p>
              </div>
              <h1 className="font-semibold text-2xl max-desktop-lg:text-xl">
                03
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-1">
                <div>
                  <AreaIcon />
                </div>
                <p className="font-medium text-lg text-grey-shade-60 max-desktop-lg:text-sm">
                  Area
                </p>
              </div>
              <h1 className="font-semibold text-2xl max-desktop-lg:text-xl">
                2,500 Square Feet
              </h1>
            </div>
          </div>
        </div>
        <div>second section</div>
      </div>
    </div>
  );
};

export default PropertyDescription;
