import Link from "next/link";
import React from "react";

const HeaderBanner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/header-banner.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "",
          backgroundRepeat: "no-repeat",
        }}
        className="relative"
      >
        <div className="flex justify-center items-center w-full border border-red-500">
          <div className="absolute top-[50%] left-[50%]  transform -translate-x-1/2 -translate-y-1/2 flex flex-row gap-3 justify-center items-center border border-yellow-300">
            <p className="">✨Discover Your Dream Property with Estatein</p>
            <Link href="/" className="underline">
              Learn More
            </Link>
          </div>
          <div className="flex justify-end border border-red-500 w-full">
            <div className="w-fit p-2 rounded-full border border-red-500">
              X
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBanner;
