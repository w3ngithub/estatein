import { ThreeStars } from "@/svgs/HomePageSvg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DiscoverLocationIcon,
  DiscoverMsgIcon,
  DiscoverPhoneIcon,
} from "@/svgs/ContactUsSvg";
import Link from "next/link";

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
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-6 border border-grey-shade-15 rounded-lg p-8">
              <p className="font-medium text-lg max-desktop-lg:text-sm">
                Main Headquarters
              </p>
              <h1 className="font-semibold text-3xl max-desktop-lg:text-2xl max-tablet-sm:text-xl">
                123 Estatein Plaza, City Center, Metropolis
              </h1>
              <p className="text-grey-shade-60 font-medium text-lg max-desktop-lg:text-base max-tablet-sm:text-sm">
                Our main headquarters serve as the heart of Estatein. Located in
                the bustling city center, this is where our core team of experts
                operates, driving the excellence and innovation that define us.
              </p>
              <div className="flex flex-row gap-2 mt-3">
                {/* 1st pill */}
                <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-10 bg-grey-shade-15 px-3 py-2 rounded-full">
                  <div className="flex flex-row justify-center gap-1 items-center">
                    <div>
                      <DiscoverMsgIcon />
                    </div>
                    <p className="text-white text-lg max-desktop-lg:text-sm">
                      info@estatein.com
                    </p>
                  </div>
                </div>
                {/* 2 */}
                <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-10 bg-grey-shade-15 px-3 py-2 rounded-full">
                  <div className="flex flex-row justify-center gap-1 items-center">
                    <div>
                      <DiscoverPhoneIcon />
                    </div>
                    <p className="text-white text-lg max-desktop-lg:text-sm">
                      +1 (123) 456-7890
                    </p>
                  </div>
                </div>
                {/* 3 */}
                <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-10 bg-grey-shade-15 px-3 py-2 rounded-full">
                  <div className="flex flex-row justify-center gap-1 items-center">
                    <div>
                      <DiscoverLocationIcon />
                    </div>
                    <p className="text-white text-lg max-desktop-lg:text-sm">
                      Metropolis
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/">
                <Button className="bg-purple-shade-60 rounded-lg hover:bg-purple-shade-d60 dark:text-white py-6 w-full mt-3">
                  Get Direction
                </Button>
              </Link>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="regional">Regional content here</TabsContent>
        <TabsContent value="international">international here.</TabsContent>
      </Tabs>
    </section>
  );
};

export default DiscoverLocation;
