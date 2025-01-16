import { ThreeStars } from "@/svgs/HomePageSvg";
import React from "react";

const steps = [
  {
    step: "Step 01",
    title: "Discover a World of Possibilities",
    description:
      "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
  },
  {
    step: "Step 02",
    title: "Tailored Recommendations",
    description:
      "Receive personalized property recommendations based on your preferences, ensuring you find the perfect match for your needs.",
  },
  {
    step: "Step 03",
    title: "Connect with Experts",
    description:
      "Work with experienced agents who provide professional advice and guidance to help you make the best decisions.",
  },
  {
    step: "Step 04",
    title: "Secure Your Future",
    description:
      "Finalize your property decisions with confidence, backed by expert support and a seamless process.",
  },
  {
    step: "Step 05",
    title: "Move in Hassle-Free",
    description:
      "Experience a smooth transition as you move into your new home, with support every step of the way.",
  },
  {
    step: "Step 06",
    title: "Ongoing Support",
    description:
      "Even after your move, enjoy continued support for any property-related needs or inquiries.",
  },
];

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
        <div className="grid grid-cols-3 justify-center items-center gap-7 space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <p className="border-l border-purple-shade-60 pl-5 py-2 font-medium text-xl max-desktop-lg:">
                {step.step}
              </p>
              <div
                className="p-8 flex flex-col gap-3 border border-grey-shade-15 rounded-lg rounded-tl-none"
                style={{
                  border: "1px solid #262626",
                  background:
                    "linear-gradient(135deg, rgba(112, 59, 274, 0.75) 0%, rgba(0, 0, 0, 0.1) 12%)",
                }}
              >
                <h2 className="font-semibold text-2xl max-desktop-lg:">
                  {step.title}
                </h2>
                <p className="text-grey-shade-60 font-medium text-lg max-desktop-lg:">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigateExperience;
