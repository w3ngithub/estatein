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

const Faq = () => {
  return (
    <Carousel>
      <section className="container flex flex-col gap-10 pt-5 max-mobile-md:gap-5">
        <div className="flex flex-row justify-between items-end">
          <div className="flex flex-col gap-3">
            <div>
              <svg
                width="69"
                height="30"
                viewBox="0 0 69 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_75_930)">
                  <path
                    d="M15 30.0166C23.2843 30.0166 30 23.3009 30 15.0166C30 6.73233 23.2843 0.0166836 15 0.0166836C6.71573 0.0166836 0 6.73233 0 15.0166C0 23.3009 6.71573 30.0166 15 30.0166Z"
                    fill="#666666"
                  />
                  <path
                    d="M0 45C8.28427 45 15 38.2843 15 30C15 21.7157 8.28427 15 0 15C-8.28427 15 -15 21.7157 -15 30C-15 38.2843 -8.28427 45 0 45Z"
                    fill="#141414"
                  />
                  <path
                    d="M30 45C38.2843 45 45 38.2843 45 30C45 21.7157 38.2843 15 30 15C21.7157 15 15 21.7157 15 30C15 38.2843 21.7157 45 30 45Z"
                    fill="#141414"
                  />
                  <path
                    d="M0 15C8.28427 15 15 8.28427 15 0C15 -8.28427 8.28427 -15 0 -15C-8.28427 -15 -15 -8.28427 -15 0C-15 8.28427 -8.28427 15 0 15Z"
                    fill="#141414"
                  />
                  <path
                    d="M30 15C38.2843 15 45 8.28427 45 0C45 -8.28427 38.2843 -15 30 -15C21.7157 -15 15 -8.28427 15 0C15 8.28427 21.7157 15 30 15Z"
                    fill="#141414"
                  />
                </g>
                <g clipPath="url(#clip1_75_930)">
                  <path
                    d="M45 24.01C49.9706 24.01 54 19.9805 54 15.01C54 10.0394 49.9706 6.01001 45 6.01001C40.0294 6.01001 36 10.0394 36 15.01C36 19.9805 40.0294 24.01 45 24.01Z"
                    fill="#333333"
                  />
                  <path
                    d="M36 33C40.9706 33 45 28.9706 45 24C45 19.0294 40.9706 15 36 15C31.0294 15 27 19.0294 27 24C27 28.9706 31.0294 33 36 33Z"
                    fill="#141414"
                  />
                  <path
                    d="M54 33C58.9706 33 63 28.9706 63 24C63 19.0294 58.9706 15 54 15C49.0294 15 45 19.0294 45 24C45 28.9706 49.0294 33 54 33Z"
                    fill="#141414"
                  />
                  <path
                    d="M36 15C40.9706 15 45 10.9706 45 6C45 1.02944 40.9706 -3 36 -3C31.0294 -3 27 1.02944 27 6C27 10.9706 31.0294 15 36 15Z"
                    fill="#141414"
                  />
                  <path
                    d="M54 15C58.9706 15 63 10.9706 63 6C63 1.02944 58.9706 -3 54 -3C49.0294 -3 45 1.02944 45 6C45 10.9706 49.0294 15 54 15Z"
                    fill="#141414"
                  />
                </g>
                <g clipPath="url(#clip2_75_930)">
                  <path
                    d="M64.2 19.2046C66.5196 19.2046 68.4 17.3242 68.4 15.0046C68.4 12.6851 66.5196 10.8047 64.2 10.8047C61.8804 10.8047 60 12.6851 60 15.0046C60 17.3242 61.8804 19.2046 64.2 19.2046Z"
                    fill="#333333"
                  />
                  <path
                    d="M59.9998 23.4C62.3194 23.4 64.1998 21.5196 64.1998 19.2C64.1998 16.8804 62.3194 15 59.9998 15C57.6802 15 55.7998 16.8804 55.7998 19.2C55.7998 21.5196 57.6802 23.4 59.9998 23.4Z"
                    fill="#141414"
                  />
                  <path
                    d="M68.3997 23.4C70.7193 23.4 72.5997 21.5196 72.5997 19.2C72.5997 16.8804 70.7193 15 68.3997 15C66.0801 15 64.1997 16.8804 64.1997 19.2C64.1997 21.5196 66.0801 23.4 68.3997 23.4Z"
                    fill="#141414"
                  />
                  <path
                    d="M59.9998 15C62.3194 15 64.1998 13.1196 64.1998 10.8C64.1998 8.4804 62.3194 6.6 59.9998 6.6C57.6802 6.6 55.7998 8.4804 55.7998 10.8C55.7998 13.1196 57.6802 15 59.9998 15Z"
                    fill="#141414"
                  />
                  <path
                    d="M68.3997 15C70.7193 15 72.5997 13.1196 72.5997 10.8C72.5997 8.4804 70.7193 6.6 68.3997 6.6C66.0801 6.6 64.1997 8.4804 64.1997 10.8C64.1997 13.1196 66.0801 15 68.3997 15Z"
                    fill="#141414"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_75_930">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_75_930">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(36 6)"
                    />
                  </clipPath>
                  <clipPath id="clip2_75_930">
                    <rect
                      width="8.4"
                      height="8.4"
                      fill="white"
                      transform="translate(60 10.8)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h1 className="text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px]">
              Frequently Asked Questions
            </h1>
            <p className="max-w-[900px] text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
              Find answers to common questions about Estatein's services,
              property listings, and the real estate process. We're here to
              provide clarity and assist you every step of the way.
            </p>
          </div>
          <div className="block max-mobile-xl:hidden">
            <Link href="/">
              <Button className="flex items-center justify-center text-lg py-6 px-4 font-medium border-2 border-grey-shade-15 bg-grey-shade-8 rounded-md max-desktop-lg:text-sm">
                View All FAQ's
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
                  <div className="flex flex-col gap-3 border border-grey-shade-15 bg-grey-shade-8 p-3 rounded-md max-mobile-md:p-5 h-full">
                    <h2 className="font-semibold text-2xl text-white max-desktop-lg:text-xl max-tablet-sm:text-lg">
                      {item.title}
                    </h2>
                    <p className="text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
                      {item.description}
                    </p>
                    <Button className="border-2 border-grey-shade-15 bg-grey-shade-8 rounded-md py-5 px-3 w-fit text-lg font-medium max-desktop-lg:text-sm max-mobile-md:w-full">
                      Read More
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <div className="flex flex-row justify-between mb-4 max-mobile-md:hidden border-t-[1px] border-t-grey-shade-15 bg-grey-shade-8 pt-5">
          <div className="text-base font-medium">
            <span className="text-white">01</span>{" "}
            <span className="text-grey-shade-60">
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
          <div className="flex flex-row justify-between mb-3 border-t-[1px] border-t-grey-shade-15 bg-grey-shade-8 pt-5">
            <Button className="text-sm border-2 border-grey-shade-15 bg-grey-shade-8 rounded-md px-4 py-5">
              View All FAQ's
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
