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
    title: "Narrowing Down Your Choices",
    description:
      "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    step: "Step 03",
    title: "Personalized Guidance",
    description:
      "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
  {
    step: "Step 04",
    title: "See It for Yourself",
    description:
      "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
  },
  {
    step: "Step 05",
    title: "Making Informed Decisions",
    description:
      "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
  },
  {
    step: "Step 06",
    title: "Getting the Best Deal",
    description:
      "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
  },
];

const NavigateExperience = () => {
  return (
    <section className="container py-10">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-3">
          {/* 3 star logo */}
          <div>
            <ThreeStars />
          </div>
          <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px]">
            Navigating the Estatein Experience
          </h1>
          <p className="max-w-[900px] font-medium dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
            At Estatein, we&apos;ve designed a straightforward process to help
            you find and purchase your dream property with ease. Here&apos;s a
            step-by-step guide to how it all works.
          </p>
        </div>
        {/* card */}
        <div className="grid tablet-lg:grid-cols-3 justify-center items-center gap-x-7 gap-y-14">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col h-full">
              <h1 className="border-l border-purple-shade-60 pl-5 py-2 font-medium text-xl max-desktop-lg:text-base max-tablet-sm:text-base">
                {step.step}
              </h1>
              <div className="p-8 flex flex-col gap-3 border border-grey-shade-15 rounded-lg rounded-tl-none h-full bg-custom-gradient-purple">
                <h2 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
                  {step.title}
                </h2>
                <p className="text-grey-shade-60 font-medium text-lg max-desktop-lg:text-base max-tablet-sm:text-sm">
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
