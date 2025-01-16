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
        <div className="grid grid-cols-3">
          <div className="flex flex-col">
            <p className="border-l border-purple-shade-60 pl-5 py-2 font-medium text-xl max-desktop-lg:">
              Step 01
            </p>
            <div
              className="p-5 flex flex-col gap-3 border border-grey-shade-15"
              style={{
                border: "1px solid #262626",
                background:
                  "linear-gradient(135deg, rgba(112, 59, 274, 1) 2%, rgba(0, 0, 0, 1) 17%)",
              }}
            >
              <h2 className="font-semibold text-2xl max-desktop-lg:">
                Discover a World of Possibilities
              </h2>
              <p className="text-grey-shade-60 font-medium text-lg max-desktop-lg:">
                Your journey begins with exploring our carefully curated
                property listings. Use our intuitive search tools to filter
                properties based on your preferences, including location, type,
                size, and budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavigateExperience;
