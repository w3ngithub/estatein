"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LocationIcon } from "@/svgs/PropertyDetailPageSvg";

// const images = [
//   "/estatein/images/carousel-one.png",
//   "/estatein/images/carousel-two.png",
//   "/estatein/images/carousel-one.png",
// ];

interface PropertyImageCarousalProps {
  images: string[];
  villaName: string;
  location: string;
  price: string;
}

export default function PropertyImageCarousal({
  images,
  villaName,
  location,
  price,
}: PropertyImageCarousalProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [mainApi, setMainApi] = React.useState<CarouselApi>();
  const [thumbApi, setThumbApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!mainApi || !thumbApi) return;

    mainApi.on("select", () => {
      setSelectedIndex(mainApi.selectedScrollSnap());
    });
  }, [mainApi, thumbApi]);

  const handleThumbClick = React.useCallback(
    (index: number) => {
      mainApi?.scrollTo(index);
      setSelectedIndex(index);
    },
    [mainApi]
  );

  return (
    <div className="container pt-10 space-y-7">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4 max-mobile-xl:flex-col max-mobile-xl:items-start">
          <h1 className="font-semibold text-2xl max-desktop-lg:text-2xl max-mobile-lg:text-xl">
            {villaName}
          </h1>
          <div className="flex flex-row items-center justify-center gap-2 border border-white-d1 dark:border-grey-shade-15 rounded-lg px-3 py-3">
            <div>
              <LocationIcon />
            </div>
            <p className="font-medium text-sm max-desktop-lg:text-sm">
              {location}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 max-mobile-xl:flex-row  max-mobile-xl:items-center max-mobile-md:mt-9">
          <p className="dark:text-grey-shade-60 font-medium text-sm">Price</p>
          <h1 className="font-semibold text-xl max-mobile-lg:text-lg">
            ${Number(price).toLocaleString()}
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4 p-5 bg-grey-shade-10 border border-grey-shade-15 w-fit rounded-lg max-mobile-lg:flex-col-reverse">
          {/* Thumbnails Carousel */}
          <Carousel
            setApi={setThumbApi}
            className="w-full max-w-4xl mx-auto"
            opts={{
              align: "start",
              dragFree: true,
            }}
          >
            <CarouselContent className="-ml-2 p-2 bg-grey-shade-8 border border-grey-shade-15">
              {images.map((src, index) => {
                return (
                  <CarouselItem key={index} className="pl-2 basis-20">
                    <div
                      className={`cursor-pointer transition-all ${
                        selectedIndex === index ? "opacity-100" : "opacity-50"
                      }`}
                      onClick={() => handleThumbClick(index)}
                    >
                      <Image
                        // src={`/estatein/uploads/${src}`}
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/uploads/${src}`}
                        alt={`Property view ${index + 1}`}
                        width={80}
                        height={60}
                        className="object-cover w-full h-16 rounded"
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          {/* Main Carousel */}
          <Carousel
            setApi={setMainApi}
            className="w-full max-w-full mx-auto"
            opts={{
              align: "start",
            }}
          >
            <CarouselContent className="-ml-2">
              {images.map((src, index) => (
                <CarouselItem key={index} className="pl-2 mobile-lg:basis-1/2">
                  <Image
                    src={`/estatein/uploads/${src}`}
                    alt={`Property view ${index + 1}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px] rounded-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex flex-row justify-center items-center gap-2 mt-4">
              <div className="flex flex-row justify-center items-center gap-2 bg-grey-shade-8 p-1 rounded-full">
                <CarouselPrevious />
                <div className="flex gap-1">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-4 h-[2px] rounded-none transition-all ${
                        Math.floor(selectedIndex / 2) === Math.floor(index / 2)
                          ? "bg-purple-shade-60"
                          : "bg-grey-shade-30"
                      }`}
                    />
                  ))}
                </div>
                <CarouselNext />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
