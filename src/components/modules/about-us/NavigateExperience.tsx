import { ThreeStars } from "@/svgs/HomePageSvg";
import React from "react";

const NavigateExperience = () => {
  return (
    <section className="container py-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          {/* 3 star logo */}
          <div>
            <ThreeStars />
          </div>
          <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px]">
            Navigating the Estatein Experience
          </h1>
          <p className="max-w-[900px] font-medium dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
            At Estatein, we've designed a straightforward process to help you
            find and purchase your dream property with ease. Here's a
            step-by-step guide to how it all works.
          </p>
        </div>
        {/* card */}
        <div className="grid grid-cols-3"></div>
      </div>
    </section>
  );
};

export default NavigateExperience;
