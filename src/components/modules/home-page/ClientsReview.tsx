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
import Rating from "../common/Rating";
import { carouselDataClientReview } from "@/utilityComponents/homePage/clientsReview";
import { ThreeStars } from "@/svgs/HomePageSvg";
import { useEffect, useState } from "react";

const ClientsReview = () => {
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
              What Our Clients Say
            </h1>
            <p className="max-w-[900px] dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose Estatein for their real
              estate needs.
            </p>
          </div>
          <div className="block max-mobile-xl:hidden">
            <Link href="/">
              <Button className="flex items-center justify-center text-lg py-6 px-4 font-medium border-2 border-grey-shade-15 bg-grey-shade-8 rounded-md max-desktop-lg:text-sm hover:bg-grey-shade-15 dark:text-white">
                View All Testimonials
              </Button>
            </Link>
          </div>
        </div>
        {/* Carousel section */}
        <div className="flex justify-center items-center my-2 h-full">
          <CarouselContent>
            {carouselDataClientReview.map((item, index) => {
              return (
                <CarouselItem key={index} className="tablet-sm:basis-1/3">
                  <div className="border border-[#E4E4E7] dark:border-grey-shade-15 dark:bg-grey-shade-8 rounded-md px-4 py-5 h-full">
                    <div className="flex flex-col gap-9 p-2">
                      {/* star logo */}
                      <div className="flex flex-row gap-3">
                        <Rating rating={Number(item.star)} />
                      </div>
                      <h2 className="font-semibold text-2xl dark:text-white max-desktop-lg:text-xl max-tablet-sm:text-lg">
                        {item.title}
                      </h2>
                      <p className="dark:text-white text-lg leading-7 max-desktop-lg:text-base max-tablet-sm:text-sm">
                        {item.description}
                      </p>
                      <div className="flex flex-row gap-3">
                        <div>
                          <Image
                            src={`${
                              process.env.NEXT_PUBLIC_BASE_PATH +
                              `${item.profilePicSrc}`
                            }`}
                            width={60}
                            height={60}
                            alt="profile icon"
                            priority
                          />
                        </div>
                        <div className="flex-col gap-2">
                          <p className="dark:text-white text-xl max-desktop-lg:text-lg max-tablet-sm:text-base">
                            {item.profileName}
                          </p>
                          <p className="dark:text-grey-shade-60 text-lg max-desktop-lg:text-base max-tablet-sm:text-sm">
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
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
            <Button className="text-sm border-2 border-grey-shade-15 bg-grey-shade-8 rounded-md px-4 py-5 dark:text-white">
              View All Testimonials
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
export default ClientsReview;
