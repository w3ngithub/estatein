import React from "react";

const DreamProperty = () => {
  return (
    <div className="dark:bg-gradient-to-r from-[#1D1D1D] via-black to-black">
      <div className="container flex items-center h-[350px]">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px] dark:text-white">
            Find Your Dream Property
          </h1>
          <p className="max-w-[900px] dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
            Welcome to Estatein, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey
          </p>
        </div>
      </div>
    </div>
  );
};

export default DreamProperty;
