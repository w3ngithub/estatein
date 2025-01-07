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
import { carouselDataFaq } from "@/utilityComponents/homePage/faq";
import { ThreeStars } from "@/svgs/HomePageSvg";

const Faq = () => {
  return (
    <Carousel>
      <section className="container flex flex-col gap-10 pt-5 max-mobile-md:gap-5">
        <div className="flex flex-row justify-between items-end">
          <div className="flex flex-col gap-3">
            {/* 3 star logo */}
            <div>
              <ThreeStars />
            </div>
            <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px]">
              Frequently Asked Questions
            </h1>
            <p className="max-w-[900px] dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
              Find answers to common questions about Estatein&apos;s services,
              property listings, and the real estate process. We&apos;re here to
              provide clarity and assist you every step of the way.
            </p>
          </div>
          <div className="block max-mobile-xl:hidden">
            <Link href="/">
              <Button className="flex items-center justify-center text-lg py-6 px-4 font-medium border-2 border-grey-shade-15 bg-grey-shade-8 rounded-md max-desktop-lg:text-sm hover:bg-grey-shade-15 dark:text-white">
                View All FAQ&apos;s
              </Button>
            </Link>
          </div>
        </div>
        {/* Carousel section */}
        <div className="flex justify-center items-center my-2 h-full">
          <CarouselContent>
            {carouselDataFaq.map((item) => (
              <CarouselItem key={item.id} className="mobile-xl:basis-1/3">
                <div className="h-full flex-grow">
                  <div className="flex flex-col gap-3 border border-[#E4E4E7] dark:border-grey-shade-15 dark:bg-grey-shade-8 p-5 rounded-md max-mobile-md:p-5 h-full">
                    <h2 className="font-semibold text-2xl dark:text-white max-desktop-lg:text-xl max-tablet-sm:text-lg">
                      {item.title}
                    </h2>
                    <p className="dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
                      {item.description}
                    </p>
                    <Button className="border-2 border-grey-shade-15 bg-grey-shade-8 rounded-md py-5 px-3 w-fit text-lg font-medium max-desktop-lg:text-sm max-mobile-md:w-full hover:bg-grey-shade-15 text-white">
                      Read More
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <div className="flex flex-row justify-between mb-4 max-mobile-md:hidden border-t-[1px] border-t-[#E4E4E7] dark:border-t-grey-shade-15 dark:bg-grey-shade-8 pt-5">
          <div className="text-base font-medium">
            <span className="dark:text-white">01</span>{" "}
            <span className="dark:text-grey-shade-60">
              of {carouselDataFaq.length}
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
              View All FAQ&apos;s
            </Button>
            <div className="flex flex-row items-center justify-center gap-3">
              <CarouselPrevious />
              <div className="text-base font-medium">
                <span className="text-white">01</span>{" "}
                <span className="text-grey-shade-60">
                  of {carouselDataFaq.length}
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
export default Faq;
