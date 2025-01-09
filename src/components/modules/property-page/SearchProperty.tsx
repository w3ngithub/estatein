import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const SearchProperty = () => {
  return (
    <div className="bg-grey-shade-8 border border-grey-15 px-2 py-3 shadow-[#191919]">
      <div className="flex w-full mx-auto gap-2">
        <Input
          type="text"
          placeholder="Search For A Property"
          className="flex-1 bg-transparent border-0 text-gray-300 placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button className="py-3 px-4 text-lg bg-purple-shade-60 rounded-md hover:bg-purple-shade-d60 max-desktop-2xl:text-sm h-full max-mobile-md:w-full max-mobile-md:py-4 dark:text-white">
          <div>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 18L13.1694 13.6694M13.1694 13.6694C14.3004 12.5384 15 10.9759 15 9.25C15 5.79822 12.2018 3 8.75 3C5.29822 3 2.5 5.79822 2.5 9.25C2.5 12.7018 5.29822 15.5 8.75 15.5C10.4759 15.5 12.0384 14.8004 13.1694 13.6694Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>Find Property</div>
        </Button>
      </div>
    </div>
  );
};

export default SearchProperty;
