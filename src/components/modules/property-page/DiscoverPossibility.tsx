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
import carouselDataDiscoverProperty from "@/utilityComponents/dashboardPage/discoverProperty.json";
import { ThreeStars } from "@/svgs/HomePageSvg";
import SearchProperty from "./SearchProperty";
import SelectFieldWithIcon from "../common/SelectFieldWithIcon";
import {
  CameraIcon,
  CubeIcon,
  HouseIcon,
  LocationIcon,
} from "@/svgs/PropertyPageSvg";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import DoubleSlider from "../common/DoubleSlider";
import { CustomCalendar } from "../common/CustomCalender";
import propertyType from "@/utilityComponents/dashboardPage/propertyTypeData.json";
import propertySizeType from "@/utilityComponents/dashboardPage/propertySizeTypeData.json";

const DiscoveredProperty = () => {
  //filtering properties
  const [filteredProperties, setFilteredProperties] = useState(
    carouselDataDiscoverProperty
  );
  const [locations, setLocations] = useState<
    { value: string; selectFieldData: string }[]
  >([]);

  //for carousal
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  // State for filters
  const [searchItemFilter, setSearchTermFilter] = useState(
    searchParams.get("search") || ""
  );
  const [locationFilter, setLocationFilter] = useState(
    searchParams.get("location") || ""
  );
  const [propertyTypeFilter, setPropertyTypeFilter] = useState(
    searchParams.get("propertyType") || ""
  );
  const [priceRange, setPriceRange] = useState(
    searchParams.get("priceRange") || ""
  );
  const [propertySizeFilter, setPropertySizeFilter] = useState(
    searchParams.get("propertySize") || ""
  );
  const [buildDateFilter, setBuildDateFilter] = useState(
    searchParams.get("buildDate") || ""
  );

  // Function to update URL with selected filters
  const updateUrlParams = (filterKey: string, value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (value) {
      current.set(filterKey, value);
    } else {
      current.delete(filterKey);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`, { scroll: false });
  };

  //taking unique locations from json file
  useEffect(() => {
    const uniqueLocations = Array.from(
      new Set(carouselDataDiscoverProperty.map((property) => property.location))
    ).map((location) => ({
      value: location,
      selectFieldData: location,
    }));
    setLocations(uniqueLocations);
  }, []);

  // Filter effect
  useEffect(() => {
    let result = carouselDataDiscoverProperty;

    // Apply search filter
    if (searchItemFilter.trim()) {
      result = result.filter((property) =>
        property.villaName
          .toLowerCase()
          .includes(searchItemFilter.toLowerCase())
      );
    }

    // Apply location filter
    if (locationFilter) {
      result = result.filter((property) =>
        property.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    // Apply property type filter
    if (propertyTypeFilter) {
      result = result.filter((property) =>
        property.propertyType
          .toLowerCase()
          .includes(propertyTypeFilter.toLowerCase())
      );
    }

    // Apply price range filter
    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split("-").map(Number);
      result = result.filter((property) => {
        const price = parseFloat(property.price.replace("$", ""));
        return price >= minPrice && price <= maxPrice;
      });
    }
    if (propertySizeFilter) {
      result = result.filter((property) =>
        property.areaUnit
          .toLowerCase()
          .includes(propertySizeFilter.toLowerCase())
      );
    }

    // Apply build date filter
    if (buildDateFilter) {
      const filterYear = new Date(buildDateFilter).getFullYear();
      result = result.filter((property) => {
        // Assuming we have a buildYear property in your property data
        const propertyBuildYear = Number(property.buildYear);
        return propertyBuildYear === filterYear;
      });
    }

    // Ensure some results are always shown if no specific filters are applied
    // setFilteredProperties(
    //   result.length > 0 ? result : carouselDataDiscoverProperty
    // );
    setFilteredProperties(result);
  }, [
    searchItemFilter,
    locationFilter,
    propertyTypeFilter,
    buildDateFilter,
    priceRange,
    propertySizeFilter,
  ]);

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

  const handleNavigation = (id: string) => {
    window.open(`/estatein/property/${id}`, "_blank");
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="search-select-container flex flex-col gap-0 max-mobile-md:gap-5 max-mobile-md:pt-5 mobile-md:mt-[-38px]">
        {/* search property field */}
        <div className="container flex flex-col justify-center items-center">
          <div className="w-[80%] max-mobile-md:w-full max-mobile-md:p-1 p-2 dark:bg-grey-shade-10 rounded-lg">
            <SearchProperty
              onSearch={(search) => {
                setSearchTermFilter(search);
                updateUrlParams("search", search);
              }}
            />
          </div>
        </div>
        {/* select fields */}
        <div className="container">
          <div className="grid mobile-md:grid-cols-3 tablet-lg:grid-cols-5 gap-3 p-2 max-mobile-md:p-5 dark:bg-grey-shade-10 rounded-lg">
            <div>
              <SelectFieldWithIcon
                placeholder="Location"
                data={locations}
                svgIcon={<LocationIcon />}
                value={locationFilter}
                onChange={(value) => {
                  setLocationFilter(value);
                  updateUrlParams("location", value);
                }}
              />
            </div>
            <div>
              {" "}
              <SelectFieldWithIcon
                placeholder="Property Type"
                data={propertyType}
                svgIcon={<HouseIcon />}
                value={propertyTypeFilter}
                onChange={(value) => {
                  setPropertyTypeFilter(value);
                  updateUrlParams("propertyType", value);
                }}
              />
            </div>
            <div>
              {" "}
              <DoubleSlider
                placeholder="Pricing Range"
                svgIcon={<CameraIcon />}
                value={priceRange}
                onChange={(value) => {
                  setPriceRange(value);
                  updateUrlParams("priceRange", value);
                }}
              />
            </div>
            <div>
              {" "}
              <SelectFieldWithIcon
                placeholder="Property Size"
                data={propertySizeType}
                svgIcon={<CubeIcon />}
                value={propertySizeFilter}
                onChange={(value) => {
                  setPropertySizeFilter(value);
                  updateUrlParams("propertySize", value);
                }}
              />
            </div>
            <div>
              {" "}
              <CustomCalendar
                value={buildDateFilter}
                onChange={(newDate) => {
                  setBuildDateFilter(newDate || "");
                  updateUrlParams("buildDate", newDate || ""); // Update the URL
                }}
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
              <div className="text-center py-10 w-full">
                <p className="text-base text-red-500">
                  No Data Found Matching Your Requirement
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
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={`${
                            process.env.NEXT_PUBLIC_BASE_PATH +
                            `${item.coverImage}`
                          }`}
                          width={432}
                          height={318}
                          alt="house image"
                          className="object-cover rounded-md max-mobile-xl:w-full"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2 flex-wrap">
                          <div className="flex flex-row justify-center items-center gap-1 border border-grey-shade-10 bg-grey-shade-15 px-3 py-2 rounded-full">
                            <p className="text-white text-lg max-desktop-lg:text-sm max-tablet-sm:text-sm">
                              {item.pillName}
                            </p>
                          </div>
                        </div>
                        <h2 className="text-2xl font-semibold dark:text-white max-desktop-lg:text-xl max-tablet-sm:text-lg">
                          {item.villaName}
                        </h2>
                        <div>
                          <span className="text-lg dark:text-grey-shade-60 max-desktop-lg:text-base max-tablet-sm:text-sm line-clamp-2 max-w-[600px] border-border-red-500">
                            {item.description}
                          </span>
                          <Link href={`/property/${Number(item.id)}`}>
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
                              ${Number(item.price).toLocaleString()}
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
