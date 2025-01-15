import { ThreeStars } from "@/svgs/HomePageSvg";
import React from "react";
import UnlockPropertyCard from "../common/UnlockPropertyCard";

const UnlockPropertyValue = () => {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-10">
        {/* first row */}
        <div className="flex flex-col gap-3">
          <div>
            <ThreeStars />
          </div>
          <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px]">
            Unlock Property Value
          </h1>
          <p className="max-w-[900px] font-medium dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
            Selling your property should be a rewarding experience, and at
            Estatein, we make sure it is. Our Property Selling Service is
            designed to maximize the value of your property, ensuring you get
            the best deal possible. Explore the categories below to see how we
            can help you at every step of your selling journey
          </p>
        </div>
        {/* second row */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-4">
            <UnlockPropertyCard
              title="Valuation Mastery"
              description="Discover the true worth of your property with our expert valuation
        services."
              icon={
                <>
                  <svg
                    width="83"
                    height="82"
                    viewBox="0 0 83 82"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1"
                      y="0.5"
                      width="81"
                      height="81"
                      rx="40.5"
                      stroke="url(#paint0_linear_121_1892)"
                    />
                    <rect
                      x="1"
                      y="0.5"
                      width="81"
                      height="81"
                      rx="40.5"
                      stroke="url(#paint1_linear_121_1892)"
                    />
                    <rect
                      x="11"
                      y="10.5"
                      width="61"
                      height="61"
                      rx="30.5"
                      stroke="url(#paint2_linear_121_1892)"
                    />
                    <rect
                      x="11"
                      y="10.5"
                      width="61"
                      height="61"
                      rx="30.5"
                      stroke="url(#paint3_linear_121_1892)"
                    />
                    <path
                      d="M29.3937 36.1058C31.3853 38.0975 34.6145 38.0975 36.6061 36.1058C36.8509 35.8611 37.0656 35.5976 37.2502 35.3201C38.1639 36.6941 39.7261 37.5996 41.4999 37.5996C43.2739 37.5996 44.8364 36.6938 45.75 35.3196C45.9347 35.5973 46.1495 35.8609 46.3944 36.1059C48.3861 38.0975 51.6152 38.0975 53.6069 36.1059C55.5986 34.1142 55.5986 30.885 53.6069 28.8934L53.1094 28.3958C52.4718 27.7582 51.607 27.4 50.7052 27.4H32.2953C31.3936 27.4 30.5288 27.7582 29.8911 28.3958L29.3937 28.8933C27.402 30.885 27.402 34.1141 29.3937 36.1058Z"
                      fill="#A685FA"
                    />
                    <path
                      d="M29.5999 39.3548C32.0275 40.5591 34.9616 40.3947 37.2509 38.8615C38.4654 39.6741 39.9269 40.1496 41.4999 40.1496C43.073 40.1496 44.5347 39.674 45.7493 38.8612C48.0384 40.3946 50.9723 40.5592 53.3999 39.3552V52.05H53.8249C54.5291 52.05 55.0999 52.6208 55.0999 53.325C55.0999 54.0292 54.5291 54.6 53.8249 54.6H46.1749C45.4707 54.6 44.8999 54.0292 44.8999 53.325V47.375C44.8999 46.6708 44.3291 46.1 43.6249 46.1H39.3749C38.6707 46.1 38.0999 46.6708 38.0999 47.375V53.325C38.0999 54.0292 37.5291 54.6 36.8249 54.6H29.1749C28.4707 54.6 27.8999 54.0292 27.8999 53.325C27.8999 52.6208 28.4707 52.05 29.1749 52.05H29.5999V39.3548Z"
                      fill="#A685FA"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_121_1892"
                        x1="7.25"
                        y1="86.5"
                        x2="86.25"
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
                        id="paint1_linear_121_1892"
                        x1="82.25"
                        y1="-10.5"
                        x2="7.25"
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
                        id="paint2_linear_121_1892"
                        x1="3.75"
                        y1="13.5"
                        x2="72.25"
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
                        id="paint3_linear_121_1892"
                        x1="84.75"
                        y1="86"
                        x2="12.75"
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
                </>
              }
            />
            <UnlockPropertyCard
              title="Strategic Marketing"
              description="Selling a property requires more than just a listing; it demands a strategic marketing approach."
              icon={
                <>
                  <svg
                    width="83"
                    height="82"
                    viewBox="0 0 83 82"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1"
                      y="0.5"
                      width="81"
                      height="81"
                      rx="40.5"
                      stroke="url(#paint0_linear_121_1892)"
                    />
                    <rect
                      x="1"
                      y="0.5"
                      width="81"
                      height="81"
                      rx="40.5"
                      stroke="url(#paint1_linear_121_1892)"
                    />
                    <rect
                      x="11"
                      y="10.5"
                      width="61"
                      height="61"
                      rx="30.5"
                      stroke="url(#paint2_linear_121_1892)"
                    />
                    <rect
                      x="11"
                      y="10.5"
                      width="61"
                      height="61"
                      rx="30.5"
                      stroke="url(#paint3_linear_121_1892)"
                    />
                    <path
                      d="M29.3937 36.1058C31.3853 38.0975 34.6145 38.0975 36.6061 36.1058C36.8509 35.8611 37.0656 35.5976 37.2502 35.3201C38.1639 36.6941 39.7261 37.5996 41.4999 37.5996C43.2739 37.5996 44.8364 36.6938 45.75 35.3196C45.9347 35.5973 46.1495 35.8609 46.3944 36.1059C48.3861 38.0975 51.6152 38.0975 53.6069 36.1059C55.5986 34.1142 55.5986 30.885 53.6069 28.8934L53.1094 28.3958C52.4718 27.7582 51.607 27.4 50.7052 27.4H32.2953C31.3936 27.4 30.5288 27.7582 29.8911 28.3958L29.3937 28.8933C27.402 30.885 27.402 34.1141 29.3937 36.1058Z"
                      fill="#A685FA"
                    />
                    <path
                      d="M29.5999 39.3548C32.0275 40.5591 34.9616 40.3947 37.2509 38.8615C38.4654 39.6741 39.9269 40.1496 41.4999 40.1496C43.073 40.1496 44.5347 39.674 45.7493 38.8612C48.0384 40.3946 50.9723 40.5592 53.3999 39.3552V52.05H53.8249C54.5291 52.05 55.0999 52.6208 55.0999 53.325C55.0999 54.0292 54.5291 54.6 53.8249 54.6H46.1749C45.4707 54.6 44.8999 54.0292 44.8999 53.325V47.375C44.8999 46.6708 44.3291 46.1 43.6249 46.1H39.3749C38.6707 46.1 38.0999 46.6708 38.0999 47.375V53.325C38.0999 54.0292 37.5291 54.6 36.8249 54.6H29.1749C28.4707 54.6 27.8999 54.0292 27.8999 53.325C27.8999 52.6208 28.4707 52.05 29.1749 52.05H29.5999V39.3548Z"
                      fill="#A685FA"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_121_1892"
                        x1="7.25"
                        y1="86.5"
                        x2="86.25"
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
                        id="paint1_linear_121_1892"
                        x1="82.25"
                        y1="-10.5"
                        x2="7.25"
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
                        id="paint2_linear_121_1892"
                        x1="3.75"
                        y1="13.5"
                        x2="72.25"
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
                        id="paint3_linear_121_1892"
                        x1="84.75"
                        y1="86"
                        x2="12.75"
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
                </>
              }
            />
            <UnlockPropertyCard
              title="Negotiation Wizardry"
              description="Negotiating the best deal is an art, and our negotiation experts are masters of it."
              icon={
                <>
                  <svg
                    width="83"
                    height="82"
                    viewBox="0 0 83 82"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1"
                      y="0.5"
                      width="81"
                      height="81"
                      rx="40.5"
                      stroke="url(#paint0_linear_121_1892)"
                    />
                    <rect
                      x="1"
                      y="0.5"
                      width="81"
                      height="81"
                      rx="40.5"
                      stroke="url(#paint1_linear_121_1892)"
                    />
                    <rect
                      x="11"
                      y="10.5"
                      width="61"
                      height="61"
                      rx="30.5"
                      stroke="url(#paint2_linear_121_1892)"
                    />
                    <rect
                      x="11"
                      y="10.5"
                      width="61"
                      height="61"
                      rx="30.5"
                      stroke="url(#paint3_linear_121_1892)"
                    />
                    <path
                      d="M29.3937 36.1058C31.3853 38.0975 34.6145 38.0975 36.6061 36.1058C36.8509 35.8611 37.0656 35.5976 37.2502 35.3201C38.1639 36.6941 39.7261 37.5996 41.4999 37.5996C43.2739 37.5996 44.8364 36.6938 45.75 35.3196C45.9347 35.5973 46.1495 35.8609 46.3944 36.1059C48.3861 38.0975 51.6152 38.0975 53.6069 36.1059C55.5986 34.1142 55.5986 30.885 53.6069 28.8934L53.1094 28.3958C52.4718 27.7582 51.607 27.4 50.7052 27.4H32.2953C31.3936 27.4 30.5288 27.7582 29.8911 28.3958L29.3937 28.8933C27.402 30.885 27.402 34.1141 29.3937 36.1058Z"
                      fill="#A685FA"
                    />
                    <path
                      d="M29.5999 39.3548C32.0275 40.5591 34.9616 40.3947 37.2509 38.8615C38.4654 39.6741 39.9269 40.1496 41.4999 40.1496C43.073 40.1496 44.5347 39.674 45.7493 38.8612C48.0384 40.3946 50.9723 40.5592 53.3999 39.3552V52.05H53.8249C54.5291 52.05 55.0999 52.6208 55.0999 53.325C55.0999 54.0292 54.5291 54.6 53.8249 54.6H46.1749C45.4707 54.6 44.8999 54.0292 44.8999 53.325V47.375C44.8999 46.6708 44.3291 46.1 43.6249 46.1H39.3749C38.6707 46.1 38.0999 46.6708 38.0999 47.375V53.325C38.0999 54.0292 37.5291 54.6 36.8249 54.6H29.1749C28.4707 54.6 27.8999 54.0292 27.8999 53.325C27.8999 52.6208 28.4707 52.05 29.1749 52.05H29.5999V39.3548Z"
                      fill="#A685FA"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_121_1892"
                        x1="7.25"
                        y1="86.5"
                        x2="86.25"
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
                        id="paint1_linear_121_1892"
                        x1="82.25"
                        y1="-10.5"
                        x2="7.25"
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
                        id="paint2_linear_121_1892"
                        x1="3.75"
                        y1="13.5"
                        x2="72.25"
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
                        id="paint3_linear_121_1892"
                        x1="84.75"
                        y1="86"
                        x2="12.75"
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
                </>
              }
            />
          </div>
          <div>second</div>
        </div>
      </div>
    </div>
  );
};

export default UnlockPropertyValue;
