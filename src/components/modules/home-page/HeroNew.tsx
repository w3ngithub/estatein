import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import CustomersCard from "../common/CustomersCard";

const HeroNew = () => {
  return (
    <>
      <div className="relative w-full h-full">
        <div className="grid container tablet-lg:h-[100vh] tablet-sm:grid-cols-2 gap-2 max-tablet-sm:flex max-tablet-sm:flex-col">
          {/* left section */}
          <div className="h-full max-tablet-sm:w-full">
            <div className="h-full pt-32 max-desktop-lg:pt-10">
              <div className="flex flex-col items-start justify-center gap-8 mt-5">
                <h1 className="max-w-[610px] leading-tight font-semibold text-6xl max-desktop-2xl:text-5xl max-desktop-2xl:leading-snug max-tablet-lg:text-4xl max-tablet-lg:max-w-[350px] max-mobile-lg:text-3xl text-white">
                  Discover Your Dream Property with Estatein
                </h1>
                <p className="max-w-[610px] text-lg leading-6 max-desktop-2xl:text-base max-tablet-lg:max-w-[350px] text-grey-shade-60">
                  Your journey to finding the perfect property begins here.
                  Explore our listings to find the home that matches your
                  dreams.
                </p>
                <div className="flex flex-row items-center gap-4 max-mobile-md:flex-col max-mobile-md:w-full">
                  <Button className="border-2 border-grey-shade-15 bg-grey-shade-10 py-3 px-4 rounded-md list-none text-lg max-desktop-2xl:text-sm max-mobile-md:w-full dark:text-white">
                    Learn More
                  </Button>
                  <Button className="py-3 px-4 text-lg bg-purple-shade-60 rounded-md hover:bg-purple-shade-d60 max-desktop-2xl:text-sm h-full max-mobile-md:w-full dark:text-white">
                    Browse Properties
                  </Button>
                </div>
                <div>
                  <CustomersCard />
                </div>
              </div>
            </div>
          </div>
          {/* right section */}
          <div className="z-100 w-1/2 absolute right-0 max-tablet-sm:relative max-tablet-sm:w-full">
            <div className="w-full h-full relative overflow-hidden">
              <Image
                src={`${
                  process.env.NEXT_PUBLIC_BASE_PATH +
                  "/images/hero-building.png"
                }`}
                width={1920} // Large width to ensure high-quality scaling
                height={814} // Proportional height
                className="object-cover"
                alt="Hero icon"
                priority
              />
            </div>
            {/* logo */}
            <div className="absolute top-[20%] left-[-5%] max-mobile-md:top-[75%]">
              <Image
                src={`${
                  process.env.NEXT_PUBLIC_BASE_PATH + "/images/hero-logo.png"
                }`}
                width={129}
                height={129}
                alt="Hero Logo"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroNew;
