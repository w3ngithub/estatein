import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface DetailsData {
  icon: React.ReactNode;
  text: string;
}

interface LocationCardData {
  title: string;
  address: string;
  description: string;
  details: DetailsData[];
  link: string;
}

interface LocationCardProps {
  data: LocationCardData[];
}

const LocationCard = ({ data }: LocationCardProps) => {
  return (
    <div className="grid desktop-md:grid-cols-2 gap-3">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-6 border border-grey-shade-15 rounded-lg p-8 max-mobile-lg:p-5"
          >
            <p className="font-medium text-lg max-desktop-lg:text-sm">
              {item.title}
            </p>
            <h1 className="font-semibold text-3xl max-desktop-lg:text-2xl max-tablet-sm:text-xl">
              {item.address}
            </h1>
            <p className="text-grey-shade-60 font-medium text-lg max-desktop-lg:text-base max-tablet-sm:text-sm">
              {item.description}
            </p>
            <div className="flex flex-row gap-2 mt-3 max-mobile-xl:flex-wrap">
              {/* pill */}
              {item.details.map((pill, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row justify-center items-center gap-1 border border-grey-shade-10 bg-grey-shade-15 px-3 py-2 rounded-full"
                  >
                    <div className="flex flex-row justify-center gap-2 items-center">
                      <div>{pill.icon}</div>
                      <p className="text-white text-lg max-desktop-lg:text-sm">
                        {pill.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Link href={item.link}>
              <Button className="bg-purple-shade-60 rounded-lg hover:bg-purple-shade-d60 dark:text-white py-6 w-full mt-3">
                Get Direction
              </Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default LocationCard;
