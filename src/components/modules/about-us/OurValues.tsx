import React from "react";
import UnlockPropertyCard from "../common/UnlockPropertyCard";
import { ThreeStars } from "@/svgs/HomePageSvg";
import { BarIcon, BulbIcon, FireIcon, LegalIcon } from "@/svgs/ServicePageSvg";

const OurValues = () => {
  return (
    <div className="container py-10">
      <div className="pb-3">
        <ThreeStars />
      </div>
      <div className="grid desktop-md:grid-cols-12 gap-10">
        <div className="desktop-md:col-span-4">
          <div className="flex flex-col gap-5 max-mobile-md:gap-2">
            <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px] leading-tight">
              Our Values
            </h1>
            <p className="max-w-[900px] font-medium dark:text-grey-shade-60 text-lg leading-tight max-desktop-lg:text-base max-tablet-sm:text-sm mt-3">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </p>
          </div>
        </div>
        <div className="desktop-md:col-span-8 divide-y-2 pb-4">
          <div className="grid grid-cols-2 py-5">
            <div className="flex flex-col gap-5 p-8  border-r-2 border-white-d1 dark:bg-grey-shade-8 dark:border-grey-shade-15">
              <div className="flex flex-row items-center gap-3">
                <div className="flex items-center justify-center max-desktop-lg:h-[60px] max-desktop-lg:w-[60px] max-desktop-lg:gap-4">
                  <svg
                    width="82"
                    height="82"
                    viewBox="0 0 82 82"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="81"
                      height="81"
                      rx="40.5"
                      stroke="url(#paint0_linear_104_11601)"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="81"
                      height="81"
                      rx="40.5"
                      stroke="url(#paint1_linear_104_11601)"
                    />
                    <rect
                      x="10.5"
                      y="10.5"
                      width="61"
                      height="61"
                      rx="30.5"
                      stroke="url(#paint2_linear_104_11601)"
                    />
                    <rect
                      x="10.5"
                      y="10.5"
                      width="61"
                      height="61"
                      rx="30.5"
                      stroke="url(#paint3_linear_104_11601)"
                    />
                    <path
                      d="M32.5 28.25C30.1528 28.25 28.25 30.1528 28.25 32.5V35.6875C28.25 38.0347 30.1528 39.9375 32.5 39.9375H35.6875C38.0347 39.9375 39.9375 38.0347 39.9375 35.6875V32.5C39.9375 30.1528 38.0347 28.25 35.6875 28.25H32.5Z"
                      fill="#A685FA"
                    />
                    <path
                      d="M46.3125 28.25C43.9653 28.25 42.0625 30.1528 42.0625 32.5V35.6875C42.0625 38.0347 43.9653 39.9375 46.3125 39.9375H49.5C51.8472 39.9375 53.75 38.0347 53.75 35.6875V32.5C53.75 30.1528 51.8472 28.25 49.5 28.25H46.3125Z"
                      fill="#A685FA"
                    />
                    <path
                      d="M32.5 42.0625C30.1528 42.0625 28.25 43.9653 28.25 46.3125V49.5C28.25 51.8472 30.1528 53.75 32.5 53.75H35.6875C38.0347 53.75 39.9375 51.8472 39.9375 49.5V46.3125C39.9375 43.9653 38.0347 42.0625 35.6875 42.0625H32.5Z"
                      fill="#A685FA"
                    />
                    <path
                      d="M48.9688 43.125C48.9688 42.5382 48.4931 42.0625 47.9062 42.0625C47.3194 42.0625 46.8438 42.5382 46.8438 43.125V46.8438H43.125C42.5382 46.8438 42.0625 47.3194 42.0625 47.9062C42.0625 48.4931 42.5382 48.9688 43.125 48.9688H46.8438V52.6875C46.8438 53.2743 47.3194 53.75 47.9062 53.75C48.4931 53.75 48.9688 53.2743 48.9688 52.6875V48.9688H52.6875C53.2743 48.9688 53.75 48.4931 53.75 47.9062C53.75 47.3194 53.2743 46.8438 52.6875 46.8438H48.9688V43.125Z"
                      fill="#A685FA"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_104_11601"
                        x1="6.75"
                        y1="86.5"
                        x2="85.75"
                        y2="-5.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#A685FA" />
                        <stop
                          offset="0.323723"
                          stopColor="#A685FA"
                          stopOpacity="0"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_104_11601"
                        x1="81.75"
                        y1="-10.5"
                        x2="6.75"
                        y2="82"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#A685FA" />
                        <stop
                          offset="0.576615"
                          stopColor="#A685FA"
                          stopOpacity="0"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_104_11601"
                        x1="3.25"
                        y1="13.5"
                        x2="71.75"
                        y2="72"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#A685FA" />
                        <stop
                          offset="0.323723"
                          stopColor="#A685FA"
                          stopOpacity="0"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_104_11601"
                        x1="84.25"
                        y1="86"
                        x2="12.25"
                        y2="35"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#A685FA" />
                        <stop
                          offset="0.576615"
                          stopColor="#A685FA"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
                  Trust
                </h1>
              </div>
              <p className="dark:text-grey-shade-60 font-medium text-lg max-desktop-lg:text-base max-tablet-sm:text-sm">
                Trust is the cornerstone of every successful real estate
                transaction.
              </p>
            </div>
            {/* 2 */}
            <div className="flex flex-col gap-5 p-8">
              <div className="flex flex-row items-center gap-3">
                <div className="flex items-center justify-center max-desktop-lg:h-[60px] max-desktop-lg:w-[60px] max-desktop-lg:gap-4">
                  <svg
                    width="82"
                    height="82"
                    viewBox="0 0 82 82"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="81"
                      height="81"
                      rx="40.5"
                      stroke="url(#paint0_linear_104_11601)"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="81"
                      height="81"
                      rx="40.5"
                      stroke="url(#paint1_linear_104_11601)"
                    />
                    <rect
                      x="10.5"
                      y="10.5"
                      width="61"
                      height="61"
                      rx="30.5"
                      stroke="url(#paint2_linear_104_11601)"
                    />
                    <rect
                      x="10.5"
                      y="10.5"
                      width="61"
                      height="61"
                      rx="30.5"
                      stroke="url(#paint3_linear_104_11601)"
                    />
                    <path
                      d="M32.5 28.25C30.1528 28.25 28.25 30.1528 28.25 32.5V35.6875C28.25 38.0347 30.1528 39.9375 32.5 39.9375H35.6875C38.0347 39.9375 39.9375 38.0347 39.9375 35.6875V32.5C39.9375 30.1528 38.0347 28.25 35.6875 28.25H32.5Z"
                      fill="#A685FA"
                    />
                    <path
                      d="M46.3125 28.25C43.9653 28.25 42.0625 30.1528 42.0625 32.5V35.6875C42.0625 38.0347 43.9653 39.9375 46.3125 39.9375H49.5C51.8472 39.9375 53.75 38.0347 53.75 35.6875V32.5C53.75 30.1528 51.8472 28.25 49.5 28.25H46.3125Z"
                      fill="#A685FA"
                    />
                    <path
                      d="M32.5 42.0625C30.1528 42.0625 28.25 43.9653 28.25 46.3125V49.5C28.25 51.8472 30.1528 53.75 32.5 53.75H35.6875C38.0347 53.75 39.9375 51.8472 39.9375 49.5V46.3125C39.9375 43.9653 38.0347 42.0625 35.6875 42.0625H32.5Z"
                      fill="#A685FA"
                    />
                    <path
                      d="M48.9688 43.125C48.9688 42.5382 48.4931 42.0625 47.9062 42.0625C47.3194 42.0625 46.8438 42.5382 46.8438 43.125V46.8438H43.125C42.5382 46.8438 42.0625 47.3194 42.0625 47.9062C42.0625 48.4931 42.5382 48.9688 43.125 48.9688H46.8438V52.6875C46.8438 53.2743 47.3194 53.75 47.9062 53.75C48.4931 53.75 48.9688 53.2743 48.9688 52.6875V48.9688H52.6875C53.2743 48.9688 53.75 48.4931 53.75 47.9062C53.75 47.3194 53.2743 46.8438 52.6875 46.8438H48.9688V43.125Z"
                      fill="#A685FA"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_104_11601"
                        x1="6.75"
                        y1="86.5"
                        x2="85.75"
                        y2="-5.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#A685FA" />
                        <stop
                          offset="0.323723"
                          stopColor="#A685FA"
                          stopOpacity="0"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_104_11601"
                        x1="81.75"
                        y1="-10.5"
                        x2="6.75"
                        y2="82"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#A685FA" />
                        <stop
                          offset="0.576615"
                          stopColor="#A685FA"
                          stopOpacity="0"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_104_11601"
                        x1="3.25"
                        y1="13.5"
                        x2="71.75"
                        y2="72"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#A685FA" />
                        <stop
                          offset="0.323723"
                          stopColor="#A685FA"
                          stopOpacity="0"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_104_11601"
                        x1="84.25"
                        y1="86"
                        x2="12.25"
                        y2="35"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#A685FA" />
                        <stop
                          offset="0.576615"
                          stopColor="#A685FA"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
                  Trust
                </h1>
              </div>
              <p className="dark:text-grey-shade-60 font-medium text-lg max-desktop-lg:text-base max-tablet-sm:text-sm">
                Trust is the cornerstone of every successful real estate
                transaction.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 py-5">
            {/* border-r-2 border-white-d1 dark:bg-grey-shade-8 dark:border-grey-shade-15 */}
            <div className="flex flex-col gap-5 p-8  border-r-2 border-white-d1 dark:bg-grey-shade-8 dark:border-grey-shade-15">
              <div className="flex flex-row items-center gap-3">
                <div className="flex items-center justify-center max-desktop-lg:h-[60px] max-desktop-lg:w-[60px] max-desktop-lg:gap-4">
                  <svg
                    width="82"
                    height="82"
                    viewBox="0 0 82 82"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="81"
                      height="81"
                      rx="40.5"
                      stroke="url(#paint0_linear_104_11601)"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="81"
                      height="81"
                      rx="40.5"
                      stroke="url(#paint1_linear_104_11601)"
                    />
                    <rect
                      x="10.5"
                      y="10.5"
                      width="61"
                      height="61"
                      rx="30.5"
                      stroke="url(#paint2_linear_104_11601)"
                    />
                    <rect
                      x="10.5"
                      y="10.5"
                      width="61"
                      height="61"
                      rx="30.5"
                      stroke="url(#paint3_linear_104_11601)"
                    />
                    <path
                      d="M32.5 28.25C30.1528 28.25 28.25 30.1528 28.25 32.5V35.6875C28.25 38.0347 30.1528 39.9375 32.5 39.9375H35.6875C38.0347 39.9375 39.9375 38.0347 39.9375 35.6875V32.5C39.9375 30.1528 38.0347 28.25 35.6875 28.25H32.5Z"
                      fill="#A685FA"
                    />
                    <path
                      d="M46.3125 28.25C43.9653 28.25 42.0625 30.1528 42.0625 32.5V35.6875C42.0625 38.0347 43.9653 39.9375 46.3125 39.9375H49.5C51.8472 39.9375 53.75 38.0347 53.75 35.6875V32.5C53.75 30.1528 51.8472 28.25 49.5 28.25H46.3125Z"
                      fill="#A685FA"
                    />
                    <path
                      d="M32.5 42.0625C30.1528 42.0625 28.25 43.9653 28.25 46.3125V49.5C28.25 51.8472 30.1528 53.75 32.5 53.75H35.6875C38.0347 53.75 39.9375 51.8472 39.9375 49.5V46.3125C39.9375 43.9653 38.0347 42.0625 35.6875 42.0625H32.5Z"
                      fill="#A685FA"
                    />
                    <path
                      d="M48.9688 43.125C48.9688 42.5382 48.4931 42.0625 47.9062 42.0625C47.3194 42.0625 46.8438 42.5382 46.8438 43.125V46.8438H43.125C42.5382 46.8438 42.0625 47.3194 42.0625 47.9062C42.0625 48.4931 42.5382 48.9688 43.125 48.9688H46.8438V52.6875C46.8438 53.2743 47.3194 53.75 47.9062 53.75C48.4931 53.75 48.9688 53.2743 48.9688 52.6875V48.9688H52.6875C53.2743 48.9688 53.75 48.4931 53.75 47.9062C53.75 47.3194 53.2743 46.8438 52.6875 46.8438H48.9688V43.125Z"
                      fill="#A685FA"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_104_11601"
                        x1="6.75"
                        y1="86.5"
                        x2="85.75"
                        y2="-5.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#A685FA" />
                        <stop
                          offset="0.323723"
                          stopColor="#A685FA"
                          stopOpacity="0"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_104_11601"
                        x1="81.75"
                        y1="-10.5"
                        x2="6.75"
                        y2="82"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#A685FA" />
                        <stop
                          offset="0.576615"
                          stopColor="#A685FA"
                          stopOpacity="0"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_104_11601"
                        x1="3.25"
                        y1="13.5"
                        x2="71.75"
                        y2="72"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#A685FA" />
                        <stop
                          offset="0.323723"
                          stopColor="#A685FA"
                          stopOpacity="0"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_104_11601"
                        x1="84.25"
                        y1="86"
                        x2="12.25"
                        y2="35"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#A685FA" />
                        <stop
                          offset="0.576615"
                          stopColor="#A685FA"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
                  Trust
                </h1>
              </div>
              <p className="dark:text-grey-shade-60 font-medium text-lg max-desktop-lg:text-base max-tablet-sm:text-sm">
                Trust is the cornerstone of every successful real estate
                transaction.
              </p>
            </div>
            {/* 2 */}
            <div className="flex flex-col gap-5 p-8">
              <div className="flex flex-row items-center gap-3">
                <div className="flex items-center justify-center max-desktop-lg:h-[60px] max-desktop-lg:w-[60px] max-desktop-lg:gap-4">
                  <svg
                    width="82"
                    height="82"
                    viewBox="0 0 82 82"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="81"
                      height="81"
                      rx="40.5"
                      stroke="url(#paint0_linear_104_11601)"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="81"
                      height="81"
                      rx="40.5"
                      stroke="url(#paint1_linear_104_11601)"
                    />
                    <rect
                      x="10.5"
                      y="10.5"
                      width="61"
                      height="61"
                      rx="30.5"
                      stroke="url(#paint2_linear_104_11601)"
                    />
                    <rect
                      x="10.5"
                      y="10.5"
                      width="61"
                      height="61"
                      rx="30.5"
                      stroke="url(#paint3_linear_104_11601)"
                    />
                    <path
                      d="M32.5 28.25C30.1528 28.25 28.25 30.1528 28.25 32.5V35.6875C28.25 38.0347 30.1528 39.9375 32.5 39.9375H35.6875C38.0347 39.9375 39.9375 38.0347 39.9375 35.6875V32.5C39.9375 30.1528 38.0347 28.25 35.6875 28.25H32.5Z"
                      fill="#A685FA"
                    />
                    <path
                      d="M46.3125 28.25C43.9653 28.25 42.0625 30.1528 42.0625 32.5V35.6875C42.0625 38.0347 43.9653 39.9375 46.3125 39.9375H49.5C51.8472 39.9375 53.75 38.0347 53.75 35.6875V32.5C53.75 30.1528 51.8472 28.25 49.5 28.25H46.3125Z"
                      fill="#A685FA"
                    />
                    <path
                      d="M32.5 42.0625C30.1528 42.0625 28.25 43.9653 28.25 46.3125V49.5C28.25 51.8472 30.1528 53.75 32.5 53.75H35.6875C38.0347 53.75 39.9375 51.8472 39.9375 49.5V46.3125C39.9375 43.9653 38.0347 42.0625 35.6875 42.0625H32.5Z"
                      fill="#A685FA"
                    />
                    <path
                      d="M48.9688 43.125C48.9688 42.5382 48.4931 42.0625 47.9062 42.0625C47.3194 42.0625 46.8438 42.5382 46.8438 43.125V46.8438H43.125C42.5382 46.8438 42.0625 47.3194 42.0625 47.9062C42.0625 48.4931 42.5382 48.9688 43.125 48.9688H46.8438V52.6875C46.8438 53.2743 47.3194 53.75 47.9062 53.75C48.4931 53.75 48.9688 53.2743 48.9688 52.6875V48.9688H52.6875C53.2743 48.9688 53.75 48.4931 53.75 47.9062C53.75 47.3194 53.2743 46.8438 52.6875 46.8438H48.9688V43.125Z"
                      fill="#A685FA"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_104_11601"
                        x1="6.75"
                        y1="86.5"
                        x2="85.75"
                        y2="-5.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#A685FA" />
                        <stop
                          offset="0.323723"
                          stopColor="#A685FA"
                          stopOpacity="0"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_104_11601"
                        x1="81.75"
                        y1="-10.5"
                        x2="6.75"
                        y2="82"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#A685FA" />
                        <stop
                          offset="0.576615"
                          stopColor="#A685FA"
                          stopOpacity="0"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_104_11601"
                        x1="3.25"
                        y1="13.5"
                        x2="71.75"
                        y2="72"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#A685FA" />
                        <stop
                          offset="0.323723"
                          stopColor="#A685FA"
                          stopOpacity="0"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_104_11601"
                        x1="84.25"
                        y1="86"
                        x2="12.25"
                        y2="35"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#A685FA" />
                        <stop
                          offset="0.576615"
                          stopColor="#A685FA"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
                  Trust
                </h1>
              </div>
              <p className="dark:text-grey-shade-60 font-medium text-lg max-desktop-lg:text-base max-tablet-sm:text-sm">
                Trust is the cornerstone of every successful real estate
                transaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
