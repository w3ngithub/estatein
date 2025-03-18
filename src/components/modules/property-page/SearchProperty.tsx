"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { type KeyboardEvent } from "react";

interface SearchPropertyProps {
  onSearch: (search: string) => void;
  handleClear: () => void;
}

const SearchProperty = ({ onSearch, handleClear }: SearchPropertyProps) => {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  // Initialize the search term from URL query
  useEffect(() => {
    const searchFromUrl = searchParams.get("search") || "";
    setSearchTerm(searchFromUrl);
  }, [searchParams]);

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-grey-shade-8 border border-grey-15 px-2 py-3 shadow-[#191919] rounded-t-lg max-mobile-xl:rounded-lg">
      <div className="flex w-full mx-auto gap-2">
        <Input
          type="text"
          placeholder="Search For A Property"
          className="flex-1 bg-transparent border-0 text-gray-300 placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
          value={searchTerm || ""}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button
          onClick={handleSearch}
          className="py-3 px-4 text-lg bg-purple-shade-60 rounded-md hover:bg-purple-shade-d60 max-desktop-2xl:text-sm h-full dark:text-white"
        >
          <div className="">
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
          <div className="block max-mobile-xl:hidden">Find Property</div>
        </Button>
        <Button
          onClick={handleClear}
          className="py-3 px-4 text-lg bg-purple-shade-60 rounded-md hover:bg-purple-shade-d60 max-desktop-2xl:text-sm h-full dark:text-white"
        >
          <div className="">
            <X />
          </div>
          <div className="block max-mobile-xl:hidden">Clear Filter</div>
        </Button>
      </div>
    </div>
  );
};

export default SearchProperty;
