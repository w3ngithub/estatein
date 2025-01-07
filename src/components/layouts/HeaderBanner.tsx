import Link from "next/link";
import React from "react";

const HeaderBanner = () => {
  return (
    <>
      {/* <div
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/header-banner.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "",
          backgroundRepeat: "no-repeat",
        }}
        className="relative"
      > */}
      <div
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/header-banner.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative"
      >
        <div className="flex justify-center items-center w-full">
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-row gap-3 justify-center items-center text-white text-lg font-medium max-desktop-2xl:text-sm max-mobile-lg:text-xs">
            <p className="">✨Discover Your Dream Property with Estatein</p>
            <Link href="/" className="underline">
              Learn More
            </Link>
          </div>
          <div className="flex justify-end w-full p-2">
            <div className="w-fit p-2 rounded-full bg-grey-shade-d62 cursor-pointer">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
    </>
  );
};

export default HeaderBanner;
