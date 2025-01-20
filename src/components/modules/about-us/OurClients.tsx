"use client";
import { Button } from "@/components/ui/button";
import { ClientThunderIcon, SudokuIcon } from "@/svgs/AboutUsSvg";
import { ThreeStars } from "@/svgs/HomePageSvg";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carouselDataOurValuedClients } from "@/utilityComponents/aboutUsPage/ourValuedClients";
import Link from "next/link";

const OurClients = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel setApi={setApi}>
      <section className="container flex flex-col gap-10 pt-5 max-mobile-md:gap-5">
        <div className="flex flex-row justify-between items-end">
          <div className="flex flex-col gap-3">
            {/* 3 star logo */}
            <div>
              <ThreeStars />
            </div>
            <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px]">
              Our Valued Clients
            </h1>
            <p className="max-w-[900px] font-medium dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
              At Estatein, we have had the privilege of working with a diverse
              range of clients across various industries. Here are some of the
              clients we've had the pleasure of serving
            </p>
          </div>
        </div>
        {/* Carousel section */}
        <div className="flex justify-center items-center my-2 h-full">
          <CarouselContent>
            {carouselDataOurValuedClients.map((item, index) => (
              <CarouselItem key={index} className="mobile-xl:basis-1/2">
                <div className="h-full flex-grow p-2 dark:bg-grey-shade-d61 rounded-lg">
                  <div className="dark:bg-grey-shade-8 rounded-lg h-full bg-white-90">
                    <div className="flex flex-col gap-10 p-5">
                      <div className="flex flex-col mobile-md:flex-row mobile-md:justify-between mobile-md:items-center gap-2">
                        <div className="flex flex-col gap-2">
                          <p className="dark:text-grey-shade-60 font-medium text-lg max-desktop-lg:text-base max-tablet-sm:text-sm">
                            Since {item.established}
                          </p>
                          <h1 className="font-semibold text-3xl max-desktop-lg:text-2xl max-tablet-sm:text-xl">
                            {item.companyName}
                          </h1>
                        </div>
                        <Link href={`${item.companyUrl}`}>
                          <Button className="py-6 px-4 border-2 border-grey-shade-15 bg-grey-shade-10 rounded-lg text-lg max-desktop-2xl:text-sm max-mobile-md:w-full hover:bg-grey-shade-15 dark:text-white">
                            Visit Website
                          </Button>
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {/* first  */}
                        <div className="flex flex-col gap-3 border-r dark:border-grey-shade-15">
                          <div className="flex flex-row gap-2 items-center max-desktop-lg:text-sm">
                            <div>
                              <SudokuIcon />
                            </div>
                            <p className="text-grey-shade-60 font-medium text-lg max-desktop-lg:text-sm max-tablet-sm:text-xs">
                              Domain
                            </p>
                          </div>
                          <h1 className="font-medium text-xl max-desktop-lg:text-base max-tablet-sm:text-sm">
                            {item.domain}
                          </h1>
                        </div>
                        {/* second */}
                        <div className="flex flex-col gap-3">
                          <div className="flex flex-row gap-2 items-center max-desktop-lg:text-sm">
                            <div>
                              <ClientThunderIcon />
                            </div>
                            <p className="text-grey-shade-60 font-medium text-lg max-desktop-lg:text-sm max-tablet-sm:text-xs">
                              Category
                            </p>
                          </div>
                          <h1 className="font-medium text-xl max-desktop-lg:text-base max-tablet-sm:text-sm">
                            {item.category}
                          </h1>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 border dark:border-grey-shade-15 p-5 rounded-lg">
                        <p className="text-grey-shade-60 text-lg font-medium max-desktop-lg:text-base max-tablet-sm:text-sm">
                          What They Said 🤗
                        </p>
                        <p className="font-medium text-lg max-desktop-lg:text-base max-tablet-sm:text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <div className="flex flex-row justify-between mb-4 max-mobile-md:hidden border-t-[1px] border-t-[#E4E4E7] dark:border-t-grey-shade-15 dark:bg-grey-shade-8 pt-5">
          <div className="text-base font-medium">
            <span className="dark:text-white">
              {String(current + 1).padStart(2, "0")}
            </span>{" "}
            <span className="dark:text-grey-shade-60">
              of {String(count).padStart(2, "0")}
            </span>
          </div>
          <div className="flex flex-row gap-3">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
        {/* for mobile screen */}
        <div className="hidden max-mobile-md:block">
          <div className="flex flex-row justify-between mb-3 border-t-[1px] border-t-[#E4E4E7] dark:border-t-grey-shade-15 dark:bg-grey-shade-8 pt-5">
            <div className="flex flex-row items-center justify-between gap-3 w-full">
              <CarouselPrevious />
              <div className="text-base font-medium">
                <span className="text-white">
                  {String(current + 1).padStart(2, "0")}
                </span>{" "}
                <span className="text-grey-shade-60">
                  of {String(count).padStart(2, "0")}
                </span>
              </div>
              <CarouselNext />
            </div>
          </div>
        </div>
      </section>
    </Carousel>
  );
};

export default OurClients;
