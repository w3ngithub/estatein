import { MessagePlusLogo, SendIcon, ThreeStars } from "@/svgs/HomePageSvg";
import { TwitterIcon } from "@/svgs/TermsAndConditionSvg";
import Image from "next/image";
import React from "react";

const MeetTeam = () => {
  return (
    <section className="container py-10">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-3">
          {/* 3 star logo */}
          <div>
            <ThreeStars />
          </div>
          <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px]">
            Meet the Estatein Team
          </h1>
          <p className="max-w-[900px] font-medium dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
            At Estatein, our success is driven by the dedication and expertise
            of our team. Get to know the people behind our mission to make your
            real estate dreams a reality.
          </p>
        </div>
        {/* card */}
        <div className="grid grid-cols-4">
          <div className="flex flex-col p-5 border border-grey-shade-15 rounded-lg">
            <div>
              <Image
                src={`${
                  process.env.NEXT_PUBLIC_BASE_PATH +
                  "/images/about-us-team-one.png"
                }`}
                width={317}
                height={253}
                alt="profile icon"
                priority
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="border border-red-500 py-3 px-5 rounded-full">
                <TwitterIcon />
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <h2 className="font-semibold text-2xl">Max Mitchell</h2>
                <p className="text-grey-shade-60 font-medium text-lg">
                  Founder
                </p>
              </div>
            </div>
            {/* input container */}
            <div className="flex items-center gap-3 w-[85%] max-w-sm px-4 py-3 bg-[#E4E4E7] border border-grey-shade-15 dark:bg-grey-shade-8 rounded-lg max-mobile-md:w-full">
              <div>
                <MessagePlusLogo />
              </div>

              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 bg-transparent dark:text-white dark:placeholder:text-gray-400 focus:outline-none text-sm"
              />

              <div className="p-2 rounded-full">
                <SendIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;
