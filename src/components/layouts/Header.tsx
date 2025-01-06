"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-grey-shade-10 py-3">
      <div className="container text-white">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            {/* desktop logo */}
            <div className="block max-desktop-2xl:hidden">
              <svg
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 48.5C10.7467 48.5 0 37.7533 0 24.5H24V48.5Z"
                  fill="#703BF7"
                />
                <path
                  d="M0 0.5C13.2533 0.5 24 11.2467 24 24.5H0V0.5Z"
                  fill="#703BF7"
                />
                <path
                  d="M24 48.5C37.2533 48.5 48 37.7533 48 24.5H24V48.5Z"
                  fill="#703BF7"
                />
                <path
                  d="M48 24.5C48 11.2467 37.2533 0.5 24 0.5V24.5H48Z"
                  fill="#703BF7"
                />
              </svg>
            </div>
            {/* laptop logo */}
            <div className="hidden max-tablet-sm:hidden max-desktop-2xl:block ">
              <svg
                width="34"
                height="35"
                viewBox="0 0 34 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 34.5C7.61222 34.5 0 26.8878 0 17.5H17V34.5Z"
                  fill="#703BF7"
                />
                <path
                  d="M0 0.5C9.38778 0.5 17 8.11222 17 17.5H0V0.5Z"
                  fill="#703BF7"
                />
                <path
                  d="M17 34.5C26.3878 34.5 34 26.8878 34 17.5H17V34.5Z"
                  fill="#703BF7"
                />
                <path
                  d="M34 17.5C34 8.11222 26.3878 0.5 17 0.5V17.5H34Z"
                  fill="#703BF7"
                />
              </svg>
            </div>
            {/* mobile logo */}
            <div className="hidden max-tablet-sm:block">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 28C6.26889 28 0 21.7311 0 14H14V28Z"
                  fill="#703BF7"
                />
                <path d="M0 0C7.73111 0 14 6.26889 14 14H0V0Z" fill="#703BF7" />
                <path
                  d="M14 28C21.7311 28 28 21.7311 28 14H14V28Z"
                  fill="#703BF7"
                />
                <path
                  d="M28 14C28 6.26889 21.7311 0 14 0V14H28Z"
                  fill="#703BF7"
                />
              </svg>
            </div>

            <h1 className="font-medium text-2xl max-tablet-sm:text-xl">
              Estatein
            </h1>
          </div>
          <div className="block max-tablet-sm:hidden">
            <ul className="flex flex-row gap-8 text-white justify-center items-center font-medium text-lg max-desktop-2xl:text-sm">
              <Link href="/">
                <li className="border-2 border-grey-shade-15 bg-grey-shade-8 py-2 px-3 rounded-md hover:bg-grey-shade-15 dark:text-white">
                  Home
                </li>
              </Link>
              <Link href="/">
                <li className="hover:bg-grey-shade-15 dark:text-white">
                  About Us
                </li>
              </Link>
              <Link href="/">
                <li>Properties</li>
              </Link>
              <Link href="/">
                <li>Services</li>
              </Link>
            </ul>
          </div>
          {/* mobile screen: burger icon*/}
          <div className="hidden max-tablet-sm:block">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 4.75C2 4.33579 2.33579 4 2.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75ZM9 15.25C9 14.8358 9.33579 14.5 9.75 14.5H17.25C17.6642 14.5 18 14.8358 18 15.25C18 15.6642 17.6642 16 17.25 16H9.75C9.33579 16 9 15.6642 9 15.25Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 10C2 9.58579 2.33579 9.25 2.75 9.25H17.25C17.6642 9.25 18 9.58579 18 10C18 10.4142 17.6642 10.75 17.25 10.75H2.75C2.33579 10.75 2 10.4142 2 10Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="border border-grey-shade-15 bg-grey-shade-8 py-2 px-3 rounded-md font-medium text-lg max-desktop-2xl:text-sm block max-tablet-sm:hidden hover:bg-grey-shade-15 dark:text-white">
            Contact Us
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="max-tablet-sm:block hidden bg-grey-shade-8 py-4">
            <ul className="flex flex-col gap-4 text-white font-medium text-sm">
              <Link href="/">
                <li className="border-2 border-grey-shade-15 bg-grey-shade-10 py-2 px-3 rounded-md">
                  Home
                </li>
              </Link>
              <Link href="/">
                <li className="py-2 px-3">About Us</li>
              </Link>
              <Link href="/">
                <li className="py-2 px-3">Properties</li>
              </Link>
              <Link href="/">
                <li className="py-2 px-3">Services</li>
              </Link>
              <li className="py-2 px-3">Contact Us</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Header;
