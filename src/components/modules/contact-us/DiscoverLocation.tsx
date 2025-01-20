import { ThreeStars } from "@/svgs/HomePageSvg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Button } from "@/components/ui/button";

const DiscoverLocation = () => {
  return (
    <section className="container flex flex-col gap-10 py-10 max-mobile-md:gap-5 max-mobile-md:pb-8">
      {/* first section */}
      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-col gap-3">
          {/* 3 star logo */}
          <div>
            <ThreeStars />
          </div>
          <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px]">
            Discover Our Office Locations
          </h1>
          <p className="max-w-[900px] dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
            Estatein is here to serve you across multiple locations. Whether
            you're looking to meet our team, discuss real estate opportunities,
            or simply drop by for a chat, we have offices conveniently located
            to serve your needs. Explore the categories below to find the
            Estatein office nearest to you
          </p>
        </div>
      </div>
      {/* second section */}
      <div className="bg-grey-shade-d61 w-fit p-2 rounded-lg">
        <div className="flex flex-row gap-2">
          <Button className="py-6 px-10 border-2 border-grey-shade-15 bg-grey-shade-10 rounded-md text-lg max-desktop-2xl:text-sm hover:bg-grey-shade-15 dark:text-white">
            All
          </Button>
          <Button className="py-6 px-8 border-2 border-grey-shade-15 bg-grey-shade-10 rounded-md text-lg max-desktop-2xl:text-sm hover:bg-grey-shade-15 dark:text-white">
            Regional
          </Button>
          <Button className="py-6 px-8 border-2 border-grey-shade-15 bg-grey-shade-10 rounded-md text-lg max-desktop-2xl:text-sm hover:bg-grey-shade-15 dark:text-white">
            International
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverLocation;
