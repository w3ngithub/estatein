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
import { carouselDataDiscoverProperty } from "@/utilityComponents/propertyPage/discoverProperty";
import { ThreeStars } from "@/svgs/HomePageSvg";
import SearchProperty from "./SearchProperty";
import SelectFieldWithIcon from "../common/SelectFieldWithIcon";
import {
  CalenderIcon,
  CameraIcon,
  CubeIcon,
  HouseIcon,
  LocationIcon,
} from "@/svgs/PropertyPageSvg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import DoubleSlider from "../common/DoubleSlider";

const DiscoveredProperty = () => {
  //for carousal
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  //for two way slider
  const [values, setValues] = useState([10, 900]);

  //for search
  const [searchItem, setSearchTerm] = useState<string>("");
  const [filteredProperties, setFilteredProperties] = useState(
    carouselDataDiscoverProperty
  );

  const onSearch = (search: string) => {
    // console.log("first", search);
    setSearchTerm(search);
  };

  useEffect(() => {
    if (searchItem.trim() === "") {
      setFilteredProperties(carouselDataDiscoverProperty);
    } else {
      const filtered = carouselDataDiscoverProperty.filter((property) =>
        property.title.toLowerCase().includes(searchItem.toLowerCase())
      );
      setFilteredProperties(filtered);
    }
  }, [searchItem]);

  const router = useRouter();

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

  const preferredLocation = [
    { value: "ktm", selectFieldData: "Kathmandu" },
    { value: "bkt", selectFieldData: "Bhaktapur" },
    { value: "lalit", selectFieldData: "Lalitpur" },
  ];
  const propertyType = [
    { value: "rental", selectFieldData: "Rental" },
    { value: "own", selectFieldData: "Owned" },
  ];
  const pricingrange = [
    { value: "10", selectFieldData: "10k to 20k" },
    { value: "20", selectFieldData: "30k to 40k" },
  ];
  const propertySize = [
    { value: "1", selectFieldData: "1 Aana" },
    { value: "2", selectFieldData: "2 Dhur" },
  ];
  const buildYear = [
    { value: "1999", selectFieldData: "1999" },
    { value: "2000", selectFieldData: "2000" },
  ];

  const handleNavigation = (id: number) => {
    router.push(`/property/${id}`);
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="search-select-container flex flex-col gap-0 max-mobile-md:gap-5 max-mobile-md:pt-5 mobile-md:mt-[-38px]">
        {/* search property field */}
        <div className="container flex flex-col justify-center items-center">
          <div className="w-[80%] max-mobile-md:w-full max-mobile-md:p-1 p-2 dark:bg-grey-shade-10 rounded-lg">
            <SearchProperty onSearch={onSearch} />
          </div>
        </div>
        {/* select fields */}
        <div className="container">
          <div className="grid mobile-md:grid-cols-3 tablet-lg:grid-cols-5 gap-3 p-2 max-mobile-md:p-5 dark:bg-grey-shade-10 rounded-lg">
            <div>
              <SelectFieldWithIcon
                placeholder="Location"
                data={preferredLocation}
                svgIcon={<LocationIcon />}
              />
            </div>
            <div>
              {" "}
              <SelectFieldWithIcon
                placeholder="Property Type"
                data={propertyType}
                svgIcon={<HouseIcon />}
              />
            </div>
            <div>
              {" "}
              <DoubleSlider
                placeholder="Pricing Range"
                svgIcon={<CameraIcon />}
              />
            </div>
            <div>
              {" "}
              <SelectFieldWithIcon
                placeholder="Property Size"
                data={propertySize}
                svgIcon={<CubeIcon />}
              />
            </div>
            <div>
              {" "}
              <SelectFieldWithIcon
                placeholder="Build Year"
                data={buildYear}
                svgIcon={<CalenderIcon />}
              />
            </div>
          </div>
        </div>
      </div>
      <Carousel setApi={setApi}>
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
            {filteredProperties.length === 0 && (
              <div className="text-center py-10">
                <p className="text-lg dark:text-white">
                  No properties found matching your search criteria:{" "}
                  {searchItem}
                </p>
              </div>
            )}
            <CarouselContent
              className={`flex ${
                filteredProperties.length === 1 ? "justify-center" : ""
              }`}
            >
              {filteredProperties.map((item, index) => (
                <CarouselItem
                  key={index}
                  className={`${
                    filteredProperties.length === 1
                      ? "basis-[70%] max-mobile-lg:basis-full"
                      : "mobile-xl:basis-1/2 tablet-lg:basis-1/3"
                  }`}
                >
                  <div className="border border-white-d1 dark:border-grey-shade-15 dark:bg-grey-shade-8 rounded-md px-4 py-5">
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
                          className="max-mobile-xl:w-full"
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
                          <Link href={`/property/${item.id}`}>
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
                          <Button
                            className="w-full h-full text-lg font-medium bg-purple-shade-60 rounded-md hover:bg-purple-shade-d60 max-desktop-2xl:text-sm max-tablet-sm:text-sm dark:text-white"
                            onClick={() => handleNavigation(item.id)}
                          >
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
            <div className="flex flex-row justify-between items-center">
              <CarouselPrevious />
              <div className="text-base font-medium">
                <span className="dark:text-white">
                  {String(current + 1).padStart(2, "0")}
                </span>{" "}
                <span className="dark:text-grey-shade-60">
                  of {String(count).padStart(2, "0")}
                </span>
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
