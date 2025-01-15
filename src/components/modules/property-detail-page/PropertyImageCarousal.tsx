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

const images = [
  "/estatein/images/carousel-one.png",
  "/estatein/images/carousel-two.png",
  "/estatein/images/carousel-one.png",
  "/estatein/images/carousel-two.png",
  "/estatein/images/carousel-one.png",
  "/estatein/images/carousel-two.png",
  "/estatein/images/carousel-one.png",
  "/estatein/images/carousel-two.png",
  "/estatein/images/carousel-one.png",
  "/estatein/images/carousel-two.png",
  "/estatein/images/carousel-one.png",
  "/estatein/images/carousel-two.png",
];

export default function PropertyImageCarousal() {
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
            Seaside Serenity Villa
          </h1>
          <div className="flex flex-row items-center justify-center gap-2 border border-grey-shade-15 rounded-lg px-3 py-3">
            <div>
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.53975 20.851C8.56995 20.8685 8.59369 20.8821 8.6105 20.8915L8.63843 20.9071C8.8613 21.0294 9.13776 21.0285 9.36084 20.9075L9.3895 20.8915C9.40631 20.8821 9.43005 20.8685 9.46025 20.851C9.52066 20.816 9.60697 20.765 9.7155 20.6982C9.93246 20.5646 10.2388 20.3676 10.6046 20.1091C11.3351 19.5931 12.3097 18.8274 13.2865 17.8273C15.2307 15.8368 17.25 12.8462 17.25 9C17.25 4.44365 13.5563 0.75 9 0.75C4.44365 0.75 0.75 4.44365 0.75 9C0.75 12.8462 2.76932 15.8368 4.71346 17.8273C5.69025 18.8274 6.66491 19.5931 7.39539 20.1091C7.76125 20.3676 8.06754 20.5646 8.2845 20.6982C8.39303 20.765 8.47934 20.816 8.53975 20.851ZM9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="font-medium text-sm max-desktop-lg:text-sm">
              Malibu, California
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 max-mobile-xl:flex-row  max-mobile-xl:items-center  max-mobile-md:mt-9">
          <p className="text-grey-shade-60 font-medium text-sm">Price</p>
          <h1 className="font-semibold text-xl max-mobile-lg:text-lg">
            $1,250,000
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
              {images.map((src, index) => (
                <CarouselItem key={index} className="pl-2 basis-20">
                  <div
                    className={`cursor-pointer transition-all ${
                      selectedIndex === index ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => handleThumbClick(index)}
                  >
                    <Image
                      src={src}
                      alt={`Property view ${index + 1}`}
                      width={80}
                      height={60}
                      className="object-cover w-full h-16 rounded"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Main Carousel */}
          <Carousel
            setApi={setMainApi}
            className="w-full max-w-4xl mx-auto"
            opts={{
              align: "start",
            }}
          >
            <CarouselContent className="-ml-2">
              {images.map((src, index) => (
                <CarouselItem key={index} className="pl-2 mobile-lg:basis-1/2">
                  <Image
                    src={src}
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

{
  /* <Button
      variant="outline"
      size="icon"
      className="bg-white/10 hover:bg-white/20"
      onClick={() => mainApi?.scrollPrev()}
      >
        <ChevronLeft className="w-4 h-4 text-white" />
      </Button> */
}
{
  /* <Button
      variant="outline"
      size="icon"
      className="bg-white/10 hover:bg-white/20"
      onClick={() => mainApi?.scrollNext()}
        >
          <ChevronRight className="w-4 h-4 text-white" />
      </Button> */
}
