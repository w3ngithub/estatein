import React from "react";
import { ThreeStars } from "@/svgs/HomePageSvg";
import { CapIcon, ClientIcon, StarIcon } from "@/svgs/AboutUsSvg";

const OurValues = () => {
  return (
    <div className="container py-10">
      <div className="grid desktop-md:grid-cols-12 gap-10 justify-center items-center">
        <div className="desktop-md:col-span-4">
          <div className="flex flex-col gap-2 max-mobile-md:gap-2">
            <div>
              <ThreeStars />
            </div>
            <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px] leading-tight">
              Our Values
            </h1>
            <p className="max-w-[900px] font-medium dark:text-grey-shade-60 text-lg leading-tight max-desktop-lg:text-base max-tablet-sm:text-sm mt-3">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </p>
          </div>
        </div>
        <div className="desktop-md:col-span-8">
          <div className="p-2 bg-grey-shade-d61 rounded-lg">
            <div className="mobile-xl:divide-y-2 rounded-lg">
              <div className="grid mobile-xl:grid-cols-2">
                <div className="flex flex-col gap-5 p-8 mobile-xl:border-r-2 border-white-d1 dark:bg-grey-shade-8 dark:border-grey-shade-15">
                  <div className="flex flex-row items-center gap-3">
                    <div className="flex items-center justify-center max-desktop-lg:h-[60px] max-desktop-lg:w-[60px] max-desktop-lg:gap-4">
                      <StarIcon />
                    </div>
                    <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
                      Trust
                    </h1>
                  </div>
                  <p className="dark:text-grey-shade-60 font-medium text-lg max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Trust is the cornerstone of every successful real estate
                    transaction.
                  </p>
                </div>
                {/* 2 */}
                <div className="flex flex-col gap-5 p-8 dark:bg-grey-shade-8">
                  <div className="flex flex-row items-center gap-3">
                    <div className="flex items-center justify-center max-desktop-lg:h-[60px] max-desktop-lg:w-[60px] max-desktop-lg:gap-4">
                      <CapIcon />
                    </div>
                    <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
                      Excellence
                    </h1>
                  </div>
                  <p className="dark:text-grey-shade-60 font-medium text-lg max-desktop-lg:text-base max-tablet-sm:text-sm">
                    We set the bar high for ourselves. From the properties we
                    list to the services we provide.
                  </p>
                </div>
              </div>
              <div className="grid mobile-xl:grid-cols-2">
                <div className="flex flex-col gap-5 p-8 mobile-xl:border-r-2 border-white-d1 dark:bg-grey-shade-8 dark:border-grey-shade-15">
                  <div className="flex flex-row items-center gap-3">
                    <div className="flex items-center justify-center max-desktop-lg:h-[60px] max-desktop-lg:w-[60px] max-desktop-lg:gap-4">
                      <ClientIcon />
                    </div>
                    <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
                      Client-Centric
                    </h1>
                  </div>
                  <p className="dark:text-grey-shade-60 font-medium text-lg max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Your dreams and needs are at the center of our universe. We
                    listen, understand.
                  </p>
                </div>
                {/* 2 */}
                <div className="flex flex-col gap-5 p-8 dark:bg-grey-shade-8">
                  <div className="flex flex-row items-center gap-3">
                    <div className="flex items-center justify-center max-desktop-lg:h-[60px] max-desktop-lg:w-[60px] max-desktop-lg:gap-4">
                      <StarIcon />
                    </div>
                    <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
                      Our Commitment
                    </h1>
                  </div>
                  <p className="dark:text-grey-shade-60 font-medium text-lg max-desktop-lg:text-base max-tablet-sm:text-sm">
                    We are dedicated to providing you with the highest level of
                    service, professionalism, and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
