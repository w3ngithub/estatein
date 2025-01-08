"use client";
import React from "react";
import Image from "next/image";
import Rating from "../common/Rating";
import { carouselDataClientReview } from "@/utilityComponents/homePage/clientsReview";
import { ThreeStars } from "@/svgs/HomePageSvg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const ContactForm = () => {
  return (
    <section className="container flex flex-col gap-10 pt-5 max-mobile-md:gap-5">
      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-col gap-3">
          {/* 3 star logo */}
          <div>
            <ThreeStars />
          </div>
          <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px]">
            Let's Make it Happen
          </h1>
          <p className="max-w-[900px] dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
            Ready to take the first step toward your dream property? Fill out
            the form below, and our real estate wizards will work their magic to
            find your perfect match. Don't wait; let's embark on this exciting
            journey together.
          </p>
        </div>
      </div>
      {/* second section */}
      <div className="border border-grey-shade-15 p-10 rounded-md">
        {/* first row */}
        <div className="grid grid-cols-1 max-mobile-xl:space-y-3 mobile-xl:grid-cols-2 tablet-lg:grid-cols-4 gap-3">
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="firstName"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              First Name
            </Label>
            <Input
              id="firstName"
              type="text"
              placeholder="Enter First Name"
              className="h-16 max-desktop-lg:h-14"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="lastName"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              Last Name
            </Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Enter Last Name"
              className="h-16 max-desktop-lg:h-14"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="email"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your Email"
              className="h-16 max-desktop-lg:h-14"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="phone"
              className="font-semibold text-xl max-desktop-lg:text-base"
            >
              Phone
            </Label>
            <Input
              id="phone"
              type="text"
              placeholder="Enter Phone Number"
              className="h-16 max-desktop-lg:h-14"
            />
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default ContactForm;
