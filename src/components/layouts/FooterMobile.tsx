import Link from "next/link";
import React from "react";

const FooterMobile = () => {
  return (
    <div className="hidden container max-tablet-sm:block">
      <div className="py-5">
        <div className="grid grid-cols-2 divide-x-2 gap-5">
          <div className="space-y-5">
            <ul className="flex flex-col gap-3 list-none ml-4 py-2 border-b border-grey-shade-15">
              <Link href="/">
                <li className="text-xl font-medium text-grey-shade-60 mb-1 max-desktop-lg:text-lg max-tablet-sm:text-base">
                  Home
                </li>
              </Link>
              <Link href="/">
                <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                  Hero Section
                </li>
              </Link>
              <Link href="/">
                <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                  Features
                </li>
              </Link>
              <Link href="/">
                <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                  Properties
                </li>
              </Link>
              <Link href="/">
                <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                  Testimonials
                </li>
              </Link>
              <Link href="/">
                <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                  FAQ's
                </li>
              </Link>
            </ul>
            <ul className="flex flex-col gap-3 list-none ml-4 py-2 border-b border-grey-shade-15">
              <Link href="/">
                <li className="text-xl font-medium text-grey-shade-60 mb-1 max-desktop-lg:text-lg max-tablet-sm:text-base">
                  Properties
                </li>
              </Link>
              <Link href="/">
                <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                  Portfolio
                </li>
              </Link>
              <Link href="/">
                <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                  Categories
                </li>
              </Link>
            </ul>
            <ul className="flex flex-col gap-3 list-none ml-4 py-2 border-b border-grey-shade-15">
              <Link href="/">
                <li className="text-xl font-medium text-grey-shade-60 mb-1 max-desktop-lg:text-lg max-tablet-sm:text-base">
                  Contact Us
                </li>
              </Link>
              <Link href="/">
                <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                  Contact Form
                </li>
              </Link>
              <Link href="/">
                <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                  Our Offices
                </li>
              </Link>
            </ul>
          </div>
          <div className="space-y-5">
            <ul className="flex flex-col gap-3 list-none ml-4 py-2 border-b border-grey-shade-15">
              <Link href="/">
                <li className="text-xl font-medium text-grey-shade-60 mb-1 max-desktop-lg:text-lg max-tablet-sm:text-base">
                  About Us
                </li>
              </Link>
              <Link href="/">
                <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                  Our Story
                </li>
              </Link>
              <Link href="/">
                <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                  Our Works
                </li>
              </Link>
              <Link href="/">
                <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                  How It Works
                </li>
              </Link>
              <Link href="/">
                <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                  Our Team
                </li>
              </Link>
              <Link href="/">
                <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                  Our Clients
                </li>
              </Link>
            </ul>
            <div className="">
              {" "}
              <ul className="flex flex-col gap-3 list-none ml-4 py-2 border-b border-grey-shade-15">
                <Link href="/">
                  <li className="text-xl font-medium text-grey-shade-60 mb-1 max-desktop-lg:text-lg max-tablet-sm:text-base">
                    Services
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Valuation Mastery
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Stategic Marketing
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Negotiation Wizardry
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Closing Success
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Property Management
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
