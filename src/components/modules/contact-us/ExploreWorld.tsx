import { ThreeStars } from "@/svgs/HomePageSvg";
import Image from "next/image";
import React from "react";

const ExploreWorld = () => {
  return (
    <div className="container py-10">
      <div className="p-8 bg-cover bg-no-repeat bg-explore-world h-full border border-grey-shade-15 rounded-lg max-mobile-lg:p-5">
        <div className="flex flex-col gap-3">
          {/* 1st row */}
          <div className="grid grid-cols-2 gap-3">
            {/* 1st image */}
            <div>
              <Image
                src={`${
                  process.env.NEXT_PUBLIC_BASE_PATH +
                  "/images/contact-us-explore-world-one.png"
                }`}
                width={1920}
                height={814}
                alt="desk"
                className="object-cover rounded-lg"
              />
            </div>
            {/* 2 */}
            <div>
              <Image
                src={`${
                  process.env.NEXT_PUBLIC_BASE_PATH +
                  "/images/contact-us-explore-world-two.png"
                }`}
                width={1920}
                height={814}
                alt="team"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          {/* 2nd row */}
          <div className="grid grid-cols-12 gap-3">
            {/* 3 */}
            <div className="col-span-6">
              <Image
                src={`${
                  process.env.NEXT_PUBLIC_BASE_PATH +
                  "/images/contact-us-explore-world-three.png"
                }`}
                width={1920}
                height={814}
                alt="team"
                className="object-cover rounded-lg"
              />
            </div>
            <div className="col-span-6">
              <div className="grid grid-cols-2 gap-3">
                {/* 4 */}
                <div>
                  <Image
                    src={`${
                      process.env.NEXT_PUBLIC_BASE_PATH +
                      "/images/contact-us-explore-world-four.png"
                    }`}
                    width={1920}
                    height={814}
                    alt="team"
                    className="object-cover rounded-lg"
                  />
                </div>
                {/* 5 */}
                <div>
                  <Image
                    src={`${
                      process.env.NEXT_PUBLIC_BASE_PATH +
                      "/images/contact-us-explore-world-five.png"
                    }`}
                    width={1920}
                    height={814}
                    alt="team"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* 3rd row */}
          <div className="grid tablet-lg:grid-cols-2 gap-3 max-tablet-lg:gap-10">
            <div className="pt-5">
              <div className="flex flex-col gap-3">
                {/* 3 star logo */}
                <div>
                  <ThreeStars />
                </div>
                <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px]">
                  Explore Estatein&apos;s World
                </h1>
                <p className="max-w-[900px] dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
                  Step inside the world of Estatein, where professionalism meets
                  warmth, and expertise meets passion. Our gallery offers a
                  glimpse into our team and workspaces, inviting you to get to
                  know us better.
                </p>
              </div>
            </div>
            <div>
              <Image
                src={`${
                  process.env.NEXT_PUBLIC_BASE_PATH +
                  "/images/contact-us-explore-world-six.png"
                }`}
                width={1920}
                height={814}
                alt="team"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreWorld;
