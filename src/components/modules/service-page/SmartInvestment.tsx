"use client";
import { ThreeStars } from "@/svgs/HomePageSvg";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import UnlockPropertyCard from "../common/UnlockPropertyCard";
import { BarIcon, BulbIcon, FireIcon, LegalIcon } from "@/svgs/ServicePageSvg";

const SmartInvestment = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/property");
  };

  return (
    <div className="container py-10">
      <div className="pb-3">
        <ThreeStars />
      </div>
      <div className="grid desktop-md:grid-cols-12 gap-10">
        <div className="desktop-md:col-span-4">
          <div className="flex flex-col gap-5 max-mobile-md:gap-2">
            <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px] leading-tight">
              Smart Investments, Informed Decisions
            </h1>
            <p className="max-w-[900px] font-medium dark:text-grey-shade-60 text-lg leading-tight max-desktop-lg:text-base max-tablet-sm:text-sm mt-3">
              Building a real estate portfolio requires a strategic approach.
              Estatein's Investment Advisory Service empowers you to make smart
              investments and informed decisions.
            </p>
          </div>
          <div className="pt-8">
            {/* second card */}
            <div
              className="flex flex-col gap-5 p-8 rounded-lg border dark:border-grey-shade-15 h-full border-white-d1"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/service-page-unlock-property-banner.png)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-xl">
                Unlock Your Investment Potential
              </h1>
              <p className="dark:text-grey-shade-60 font-medium text-lg max-desktop-lg:text-base max-tablet-sm:text-sm">
                Explore our Property Management Service categories and let us
                handle the complexities while you enjoy the benefits of property
                ownership.
              </p>
              <Button
                onClick={handleNavigation}
                className="py-6 px-4 border-2 border-grey-shade-15 bg-grey-shade-8 rounded-md text-lg max-desktop-2xl:text-sm max-mobile-md:w-full hover:bg-grey-shade-15 dark:text-white"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="desktop-md:col-span-8 flex justify-center items-center">
          <div className="flex flex-col gap-2  p-2 dark:bg-grey-shade-d61 rounded-lg">
            <div className="grid mobile-xl:grid-cols-2 gap-2">
              <UnlockPropertyCard
                title="Market Insight"
                description="Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions"
                icon={<BarIcon />}
              />
              <UnlockPropertyCard
                title="ROI Assessment"
                description="Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments"
                icon={<FireIcon />}
              />
            </div>
            <div className="grid mobile-xl:grid-cols-2 gap-2">
              <UnlockPropertyCard
                title="Customized Strategies"
                description="Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs"
                icon={<BulbIcon />}
              />
              <UnlockPropertyCard
                title="Diversification Mastery"
                description="Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations"
                icon={<LegalIcon />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartInvestment;
