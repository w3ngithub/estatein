"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

interface UnlockPropertyBannerProps {
  title: string;
  description: string;
  url: string;
}

const UnlockPropertyBanner = ({
  title,
  description,
  url,
}: UnlockPropertyBannerProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`${url}`);
  };

  return (
    <div className="flex flex-col gap-5 p-8 rounded-lg border dark:border-grey-shade-15 h-full border-white-d1 bg-cover bg-no-repeat bg-service-banner">
      <div className="flex flex-row justify-between items-center gap-2 max-mobile-md:flex-col max-mobile-md:gap-4">
        <h1 className="font-bold text-3xl max-desktop-lg:text-xl max-tablet-sm:text-xl">
          {title}
        </h1>
        <Button
          onClick={handleNavigation}
          className="py-6 px-4 border-2 border-grey-shade-15 bg-grey-shade-8 rounded-md text-lg max-desktop-2xl:text-sm max-mobile-md:w-full hover:bg-grey-shade-15 dark:text-white"
        >
          Learn More
        </Button>
      </div>
      <p className="dark:text-grey-shade-60 font-medium text-lg max-desktop-lg:text-base max-tablet-sm:text-sm">
        {description}
      </p>
    </div>
  );
};

export default UnlockPropertyBanner;
