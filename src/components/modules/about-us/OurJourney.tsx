import { ThreeStars } from "@/svgs/HomePageSvg";
import React from "react";
import CustomersCard from "../common/CustomersCard";
import Image from "next/image";

const OurJourney = () => {
  return (
    <div className="container py-10 h-[80vh]">
      <div className="grid grid-cols-2">
        {/* first section */}
        <div className="flex flex-col justify-center gap-20">
          <div className="flex flex-col gap-2">
            <div>
              <ThreeStars />
            </div>
            <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px] leading-tight">
              Our Journey
            </h1>
            <p className="max-w-[900px] font-medium dark:text-grey-shade-60 text-lg leading-tight max-desktop-lg:text-base max-tablet-sm:text-sm mt-3">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary. Over the years, we've
              expanded our reach, forged valuable partnerships, and gained the
              trust of countless clients.
            </p>
          </div>
          <div className="max-mobile-extra-md:w-full">
            <CustomersCard />
          </div>
        </div>
        {/* second section */}
        <div>
          <Image
            src={`${
              process.env.NEXT_PUBLIC_BASE_PATH +
              "/images/about-us-journey-house.png"
            }`}
            width={1920} // Large width to ensure high-quality scaling
            height={814} // Proportional height
            className="object-cover max-mobile-md:rounded-lg"
            alt="Journey image"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
