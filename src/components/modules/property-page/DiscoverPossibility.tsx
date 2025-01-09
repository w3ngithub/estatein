"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { carouselDataDiscoverProperty } from "@/utilityComponents/propertyPage/discoverProperty";
import { ThreeStars } from "@/svgs/HomePageSvg";
import SearchProperty from "./SearchProperty";

const DiscoveredProperty = () => {
  return (
    <div className="border border-red-500">
      <div className="container flex flex-col justify-center items-center">
        <div className="border border-red-500 w-[80%]">
          <SearchProperty />
        </div>
        <div>select field haru</div>
      </div>
      <Carousel>
        <section className="container flex flex-col gap-10 pt-5 max-mobile-md:gap-5">
          <div className="flex flex-row justify-between items-end">
            <div className="flex flex-col gap-3">
              {/* 3 star logo */}
              <div>
                <ThreeStars />
              </div>
              <h1 className="text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px] dark:text-white">
                Discover a World of Possibilities
              </h1>
              <p className="max-w-[900px] dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
                Our portfolio of properties is as diverse as your dreams.
                Explore the following categories to find the perfect property
                that resonates with your vision of home
              </p>
            </div>
          </div>
          {/* Carousel section */}
          <div className="flex justify-center items-center my-2">
            <CarouselContent>
              {carouselDataDiscoverProperty.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="mobile-lg:basis-1/2 tablet-lg:basis-1/3"
                >
                  <div className="border border-[#E4E4E7] dark:border-grey-shade-15 dark:bg-grey-shade-8 rounded-md px-4 py-5">
                    <div className="flex flex-col gap-8">
                      <div>
                        <Image
                          src={`${
                            process.env.NEXT_PUBLIC_BASE_PATH +
                            `${item.imageSrc}`
                          }`}
                          width={432}
                          height={318}
                          alt="house image"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2 flex-wrap">
                          {item.details.map((detail, idx) => {
                            return (
                              <div
                                key={idx}
                                className="flex flex-row justify-center items-center gap-1 border border-grey-shade-10 bg-grey-shade-15 px-3 py-2 rounded-full"
                              >
                                <p className="text-white text-lg max-desktop-lg:text-sm max-tablet-sm:text-sm">
                                  {detail.pillName}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                        <h2 className="text-2xl font-semibold dark:text-white max-desktop-lg:text-xl max-tablet-sm:text-lg">
                          {item.title}
                        </h2>
                        <div>
                          <span className="text-lg dark:text-grey-shade-60 max-desktop-lg:text-base max-tablet-sm:text-sm line-clamp-2">
                            {item.description}
                          </span>
                          <Link href="/">
                            <span className="underline font-medium dark:text-white text-base p-[0.5px] max-tablet-sm:text-sm">
                              Read More
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="grid grid-cols-12">
                        <div className="col-span-4">
                          <div className="flex flex-col gap-1">
                            <p className="text-lg text-grey-shade-60 max-desktop-lg:text-sm">
                              Price
                            </p>
                            <h2 className="text-2xl font-semibold dark:text-white max-desktop-lg:text-xl max-tablet-sm:text-lg">
                              ${item.price}
                            </h2>
                          </div>
                        </div>

                        <div className="col-span-8">
                          <Button className="w-full h-full text-lg font-medium bg-purple-shade-60 rounded-md hover:bg-purple-shade-d60 max-desktop-2xl:text-sm max-tablet-sm:text-sm dark:text-white">
                            View Property Details
                          </Button>
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
              <span className="dark:text-white">01</span>{" "}
              <span className="dark:text-grey-shade-60">of 10</span>
            </div>
            <div className="flex flex-row gap-3">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
          {/* for mobile screen */}
          <div className="hidden max-mobile-md:block">
            <div className="flex flex-row justify-between items-center">
              <CarouselPrevious />
              <div className="text-base font-medium">
                <span className="dark:text-white">01</span>{" "}
                <span className="dark:text-grey-shade-60">of 10</span>
              </div>
              <CarouselNext />
            </div>
          </div>
        </section>
      </Carousel>
    </div>
  );
};
export default DiscoveredProperty;
