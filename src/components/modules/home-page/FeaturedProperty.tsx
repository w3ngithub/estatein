"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { carouselDataFeaturedProperty } from "@/utilityComponents/homePage/featuredProperty";
import { ThreeStars } from "@/svgs/HomePageSvg";
import { useEffect, useState } from "react";

const FeaturedProperty = () => {
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
            <h1 className="text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px] dark:text-white">
              Featured Properties
            </h1>
            <p className="max-w-[900px] dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein. Click &quot;View Details&quot; for
              more information.
            </p>
          </div>
          <div className="block max-mobile-xl:hidden">
            <Link href="/">
              <Button className="flex items-center justify-center text-lg py-6 px-4 font-medium border-2 border-grey-shade-15 bg-grey-shade-8 rounded-md max-desktop-lg:text-sm hover:bg-grey-shade-15 dark:text-white">
                View All Properties
              </Button>
            </Link>
          </div>
        </div>
        {/* Carousel section */}
        <div className="flex justify-center items-center my-2">
          <CarouselContent>
            {carouselDataFeaturedProperty.map((item, index) => (
              <CarouselItem
                key={index}
                className="mobile-lg:basis-1/2 tablet-lg:basis-1/3"
              >
                <div className="border border-[#E4E4E7] dark:border-grey-shade-15 dark:bg-grey-shade-8 rounded-md px-4 py-5">
                  <div className="flex flex-col gap-8">
                    <div>
                      <Image
                        src={`${
                          process.env.NEXT_PUBLIC_BASE_PATH + `${item.imageSrc}`
                        }`}
                        width={432}
                        height={318}
                        alt="house image"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
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
                    <div className="flex flex-row gap-2 flex-wrap">
                      {item.details.map((detail, idx) => {
                        return (
                          <div
                            key={idx}
                            className="flex flex-row justify-center items-center gap-1 border border-grey-shade-10 bg-grey-shade-15 px-3 py-2 rounded-full"
                          >
                            <div>{detail.pillIcon}</div>
                            <p className="text-white text-lg max-desktop-lg:text-sm max-tablet-sm:text-sm">
                              {detail.pillName}
                            </p>
                          </div>
                        );
                      })}
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
          <div className="flex flex-row justify-between mb-3 border-t-[1px] border-t-[#E4E4E7] dark:border-t-grey-shade-15 darl:bg-grey-shade-8 pt-5">
            <Button className="text-sm border-2 border-grey-shade-15 bg-grey-shade-8 rounded-md px-4 py-5 dark:text-white">
              View All Properties
            </Button>
            <div className="flex flex-row items-center justify-center gap-3">
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
export default FeaturedProperty;
