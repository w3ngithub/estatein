import { ThreeStars } from "@/svgs/HomePageSvg";
import React from "react";
import UnlockPropertyCard from "../common/UnlockPropertyCard";
import {
  BarIcon,
  PieIcon,
  SpeakerIcon,
  StackIcon,
} from "@/svgs/ServicePageSvg";
import { Button } from "@/components/ui/button";

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
              description="Discover the true worth of your property with our expert valuation services."
              icon={<BarIcon />}
            />
            <UnlockPropertyCard
              title="Strategic Marketing"
              description="Selling a property requires more than just a listing; it demands a strategic marketing approach."
              icon={<PieIcon />}
            />
            <UnlockPropertyCard
              title="Negotiation Wizardry"
              description="Negotiating the best deal is an art, and our negotiation experts are masters of it."
              icon={<StackIcon />}
            />
          </div>
          {/* third row */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <UnlockPropertyCard
                title="Closing Success"
                description="A successful sale is not complete until the closing. We guide you through the intricate closing process."
                icon={<SpeakerIcon />}
              />
            </div>
            <div className="col-span-2">
              <div
                className="flex flex-col gap-5 p-8 rounded-lg border border-grey-shade-15 h-full"
                style={{
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/service-page-unlock-property-banner.png)`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="flex flex-row justify-between items-center">
                  <h1 className="font-bold text-3xl max-desktop-lg:text-xl max-tablet-sm:text-xl">
                    Unlock the Value of Your Property Today
                  </h1>
                  <Button className="py-6 px-4 border-2 border-grey-shade-15 bg-grey-shade-10 rounded-md text-lg max-desktop-2xl:text-sm max-mobile-md:w-full hover:bg-grey-shade-15 dark:text-white">
                    Learn More
                  </Button>
                </div>
                <p className="text-grey-shade-60 font-medium text-lg max-desktop-lg:text-base max-tablet-sm:text-sm">
                  Ready to unlock the true value of your property? Explore our
                  Property Selling Service categories and let us help you
                  achieve the best deal possible for your valuable asset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockPropertyValue;
