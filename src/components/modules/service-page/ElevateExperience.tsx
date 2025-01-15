import React from "react";

const ElevateExperience = () => {
  return (
    <div className="dark:bg-gradient-to-r from-[#1D1D1D] via-black to-black">
      <div className="container flex items-center h-[350px]">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px] dark:text-white">
            Elevate Your Real Estate Experience
          </h1>
          <p className="max-w-[900px] dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
            Welcome to Estatein, where your real estate aspirations meet expert
            guidance. Explore our comprehensive range of services, each designed
            to cater to your unique needs and dreams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElevateExperience;
