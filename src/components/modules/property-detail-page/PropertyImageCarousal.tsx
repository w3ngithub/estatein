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
    <div className="container">
      <div>title</div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4 p-5 bg-grey-shade-10 border border-grey-shade-15 w-fit rounded-lg">
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
                <CarouselItem key={index} className="pl-2 basis-1/2">
                  <Image
                    src={src}
                    alt={`Property view ${index + 1}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px] rounded"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center items-center gap-2 mt-4">
              {/* <Button
            variant="outline"
            size="icon"
            className="bg-white/10 hover:bg-white/20"
            onClick={() => mainApi?.scrollPrev()}
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </Button> */}
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
              {/* <Button
            variant="outline"
            size="icon"
            className="bg-white/10 hover:bg-white/20"
            onClick={() => mainApi?.scrollNext()}
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </Button> */}
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
