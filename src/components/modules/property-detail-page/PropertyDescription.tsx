import {
  AreaIcon,
  BedIcon,
  ShowerIcon,
  ThunderIcon,
} from "@/svgs/PropertyDetailPageSvg";
import React from "react";

const PropertyDescription = () => {
  const keyFeatures = [
    {
      id: 1,
      features: "Expansive oceanfront terrace for outdoor entertaining",
    },
    { id: 2, features: "Gourmet kitchen with top-of-the-line appliances" },
    {
      id: 3,
      features: "Private beach access for morning strolls and sunset views",
    },
    {
      id: 4,
      features:
        "Master suite with a spa-inspired bathroom and ocean-facing balcony",
    },
    { id: 5, features: "Private garage and ample storage space" },
  ];

  return (
    <div className="container">
      <div className="grid tablet-md:grid-cols-2 gap-4 py-10">
        {/* first section */}
        <div className="flex flex-col gap-10 border border-grey-shade-15 p-8 rounded-lg h-fit">
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-2xl text-white max-desktop-lg:text-xl">
              Description
            </h2>
            <p className="font-medium text-lg text-grey-shade-60 max-desktop-lg:text-base">
              Discover your own piece of paradise with the Seaside Serenity
              Villa. T With an open floor plan, breathtaking ocean views from
              every room, and direct access to a pristine sandy beach, this
              property is the epitome of coastal living.
            </p>
          </div>
          <div className="grid grid-cols-2 mobile-lg:grid-cols-3 border-t border-grey-shade-15 pt-3 max-mobile-lg:gap-5">
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
            <div className="flex flex-col gap-3 border-l border-grey-shade-15 pl-3">
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
            <div className="flex flex-col gap-3 mobile-lg:border-l border-grey-shade-15 pl-3 max-mobile-lg:pl-0  max-mobile-lg:border-t max-mobile-lg:pt-3 max-mobile-lg:col-span-2">
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
        {/* second section */}
        <div className="border border-grey-shade-15 p-8 rounded-lg">
          <div className="flex flex-col gap-5">
            <h1 className="font-semibold text-2xl max-desktop-lg:text-xl">
              Key Features and Amenities
            </h1>
            {/* first feature */}
            <div className="border-l-[1.5px] border-purple-shade-60 flex flex-row gap-2 pl-5 py-3 dark:bg-gradient-to-r from-[#1D1D1D] via-black to-black">
              <div>
                <ThunderIcon />
              </div>
              <p className="font-medium text-lg text-grey-shade-60 max-desktop-lg:text-base">
                Expansive oceanfront terrace for outdoor entertaining
              </p>
            </div>
            <div className="border-l-[1.5px] border-purple-shade-60 flex flex-row gap-2 pl-5 py-3 dark:bg-gradient-to-r from-[#1D1D1D] via-black to-black">
              <div>
                <ThunderIcon />
              </div>
              <p className="font-medium text-lg text-grey-shade-60 max-desktop-lg:text-base">
                Gourmet kitchen with top-of-the-line appliances
              </p>
            </div>
            <div className="border-l-[1.5px] border-purple-shade-60 flex flex-row gap-2 pl-5 py-3 dark:bg-gradient-to-r from-[#1D1D1D] via-black to-black">
              <div>
                <ThunderIcon />
              </div>
              <p className="font-medium text-lg text-grey-shade-60 max-desktop-lg:text-base">
                Private beach access for morning strolls and sunset views
              </p>
            </div>
            <div className="border-l-[1.5px] border-purple-shade-60 flex flex-row gap-2 pl-5 py-3 dark:bg-gradient-to-r from-[#1D1D1D] via-black to-black">
              <div>
                <ThunderIcon />
              </div>
              <p className="font-medium text-lg text-grey-shade-60 max-desktop-lg:text-base">
                Master suite with a spa-inspired bathroom and ocean-facing
                balcony
              </p>
            </div>
            <div className="border-l-[1.5px] border-purple-shade-60 flex flex-row gap-2 pl-5 py-3 dark:bg-gradient-to-r from-[#1D1D1D] via-black to-black">
              <div>
                <ThunderIcon />
              </div>
              <p className="font-medium text-lg text-grey-shade-60 max-desktop-lg:text-base">
                Private garage and ample storage space
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;
