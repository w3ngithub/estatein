import React from "react";

const GetInTouch = () => {
  return (
    <div className="dark:bg-gradient-to-r from-[#1D1D1D] via-black to-black">
      <div className="container flex items-center h-[350px]">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px] dark:text-white">
            Get in Touch with Estatein
          </h1>
          <p className="max-w-[900px] dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
            Welcome to Estatein&apos;s Contact Us page. We&apos;re here to
            assist you with any inquiries, requests, or feedback you may have.
            Whether you&apos;re looking to buy or sell a property, explore
            investment opportunities, or simply want to connect, we&apos;re just
            a message away. Reach out to us, and let&apos;s start a
            conversation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
