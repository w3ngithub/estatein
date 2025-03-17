"use client";
import Link from "next/link";
import React, { useState } from "react";

const HeaderBanner = () => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <>
      {showBanner && (
        <div
          style={{
            // backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/header-banner-image.png)`,
            backgroundImage: `url(/images/header-banner-image.png)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="relative py-1"
        >
          <div className="flex justify-center items-center w-full">
            <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-row gap-3 justify-center items-center dark:text-white text-lg font-medium max-desktop-2xl:text-sm max-mobile-lg:text-xs max-tablet-sm:w-full max-mobile-lg:justify-start max-mobile-lg:pl-2  max-mobile-md:gap-2">
              <p className="">✨Discover Your Dream Property with Estatein</p>
              <Link href="/property" className="underline">
                Learn More
              </Link>
            </div>
            <div className="flex justify-end w-full p-2">
              <div
                className="w-fit p-2 rounded-full bg-grey-shade-d62 cursor-pointer"
                onClick={() => setShowBanner(false)}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="max-desktop-lg:w-3 max-desktop-lg:h-3 max-mobile-lg:h-2 max-mobile-lg:w-2"
                >
                  <path
                    d="M1 13L13 1M1 1L13 13"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderBanner;
