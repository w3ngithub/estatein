"use client";
import {
  BurgerIcon,
  HeaderDesktopLogo,
  HeaderLaptopLogo,
  HeaderMobileLogo,
} from "@/svgs/HomePageSvg";
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
              <HeaderDesktopLogo />
            </div>
            {/* laptop logo */}
            <div className="hidden max-tablet-sm:hidden max-desktop-2xl:block ">
              <HeaderLaptopLogo />
            </div>
            {/* mobile logo */}
            <div className="hidden max-tablet-sm:block">
              <HeaderMobileLogo />
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
                <li className="border-2 border-grey-shade-15 bg-grey-shade-8 py-2 px-3 rounded-md hover:bg-grey-shade-15 dark:text-white">
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
              <BurgerIcon />
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
