import { ThreeStars } from "@/svgs/HomePageSvg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import LocationCard from "./LocationCard";
import {
  allLocationData,
  allRegionalData,
  allInternationalData,
} from "@/utilityComponents/contactUsPage/discoverLocation";

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
      <Tabs defaultValue="all" className="w-full flex flex-col gap-10">
        {/* tabs list */}
        <TabsList className="bg-grey-shade-d61 grid grid-cols-3 w-fit h-full">
          <TabsTrigger value="all" className="bg-grey-shade-d61 text-lg">
            All
          </TabsTrigger>
          <TabsTrigger value="regional" className="bg-grey-shade-d61 text-lg">
            Regional
          </TabsTrigger>
          <TabsTrigger
            value="international"
            className="bg-grey-shade-d61 text-lg"
          >
            International
          </TabsTrigger>
        </TabsList>

        {/* tabs content */}
        <TabsContent value="all">
          <LocationCard data={allLocationData} />
        </TabsContent>
        <TabsContent value="regional">
          <LocationCard data={allRegionalData} />
        </TabsContent>
        <TabsContent value="international">
          <LocationCard data={allInternationalData} />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default DiscoverLocation;
