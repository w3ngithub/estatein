import { Button } from "@/components/ui/button";
import {
  DiscoverLocationIcon,
  DiscoverMsgIcon,
  DiscoverPhoneIcon,
} from "@/svgs/ContactUsSvg";
import Link from "next/link";
import React from "react";

const AllLocation = () => {
  return (
    <>
      {/* first card */}
      <div className="flex flex-col gap-6 border border-grey-shade-15 rounded-lg p-8">
        <p className="font-medium text-lg max-desktop-lg:text-sm">
          Main Headquarters
        </p>
        <h1 className="font-semibold text-3xl max-desktop-lg:text-2xl max-tablet-sm:text-xl">
          123 Estatein Plaza, City Center, Metropolis
        </h1>
        <p className="text-grey-shade-60 font-medium text-lg max-desktop-lg:text-base max-tablet-sm:text-sm">
          Our main headquarters serve as the heart of Estatein. Located in the
          bustling city center, this is where our core team of experts operates,
          driving the excellence and innovation that define us.
        </p>
        <div className="flex flex-row gap-2 mt-3 max-mobile-xl:flex-wrap">
          {/* 1st pill */}
          <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-10 bg-grey-shade-15 px-3 py-2 rounded-full">
            <div className="flex flex-row justify-center gap-2 items-center">
              <div>
                <DiscoverMsgIcon />
              </div>
              <p className="text-white text-lg max-desktop-lg:text-sm">
                info@estatein.com
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-10 bg-grey-shade-15 px-3 py-2 rounded-full">
            <div className="flex flex-row justify-center gap-2 items-center">
              <div>
                <DiscoverPhoneIcon />
              </div>
              <p className="text-white text-lg max-desktop-lg:text-sm">
                +1 (123) 456-7890
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-10 bg-grey-shade-15 px-3 py-2 rounded-full">
            <div className="flex flex-row justify-center gap-2 items-center">
              <div>
                <DiscoverLocationIcon />
              </div>
              <p className="text-white text-lg max-desktop-lg:text-sm">
                Metropolis
              </p>
            </div>
          </div>
        </div>
        <Link href="/">
          <Button className="bg-purple-shade-60 rounded-lg hover:bg-purple-shade-d60 dark:text-white py-6 w-full mt-3">
            Get Direction
          </Button>
        </Link>
      </div>
      {/* second card */}
      <div className="flex flex-col gap-6 border border-grey-shade-15 rounded-lg p-8">
        <p className="font-medium text-lg max-desktop-lg:text-sm">
          Regional Offices
        </p>
        <h1 className="font-semibold text-3xl max-desktop-lg:text-2xl max-tablet-sm:text-xl">
          456 Urban Avenue, Downtown District, Metropolis
        </h1>
        <p className="text-grey-shade-60 font-medium text-lg max-desktop-lg:text-base max-tablet-sm:text-sm">
          Estatein's presence extends to multiple regions, each with its own
          dynamic real estate landscape. Discover our regional offices, staffed
          by local experts who understand the nuances of their respective
          markets.
        </p>
        <div className="flex flex-row gap-2 mt-3 max-mobile-xl:flex-wrap">
          {/* 1st pill */}
          <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-10 bg-grey-shade-15 px-3 py-2 rounded-full">
            <div className="flex flex-row justify-center gap-2 items-center">
              <div>
                <DiscoverMsgIcon />
              </div>
              <p className="text-white text-lg max-desktop-lg:text-sm">
                info@estatein.com
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-10 bg-grey-shade-15 px-3 py-2 rounded-full">
            <div className="flex flex-row justify-center gap-2 items-center">
              <div>
                <DiscoverPhoneIcon />
              </div>
              <p className="text-white text-lg max-desktop-lg:text-sm">
                +1 (123) 628-7890
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-10 bg-grey-shade-15 px-3 py-2 rounded-full">
            <div className="flex flex-row justify-center gap-2 items-center">
              <div>
                <DiscoverLocationIcon />
              </div>
              <p className="text-white text-lg max-desktop-lg:text-sm">
                Metropolis
              </p>
            </div>
          </div>
        </div>
        <Link href="/">
          <Button className="bg-purple-shade-60 rounded-lg hover:bg-purple-shade-d60 dark:text-white py-6 w-full mt-3">
            Get Direction
          </Button>
        </Link>
      </div>
    </>
  );
};

export default AllLocation;
