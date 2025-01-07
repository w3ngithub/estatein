"use client";
import {
  BurgerIcon,
  HeaderDesktopLogo,
  HeaderLaptopLogo,
  HeaderMobileLogo,
} from "@/svgs/HomePageSvg";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type NavItem = {
  name: string;
  path: string;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const pathname = usePathname();
  const router = useRouter();

  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Properties", path: "/properties" },
    { name: "Services", path: "/services" },
  ];

  const NavLink: React.FC<{ item: NavItem }> = ({ item }) => {
    const isActive = pathname === item.path;
    return (
      <Link href={item.path}>
        <li
          className={`py-2 px-3 rounded-md dark:text-white
          ${isActive ? "border-2  border-grey-shade-15" : ""}`}
        >
          {item.name}
        </li>
      </Link>
    );
  };

  return (
    <nav className="bg-white-95 dark:bg-grey-shade-10 py-3">
      <div className="container dark:text-white">
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
            <ul className="flex flex-row gap-8 justify-center items-center font-medium text-lg max-desktop-2xl:text-sm dark:text-white ">
              {navItems.map((item) => (
                <NavLink key={item.name} item={item} />
              ))}
            </ul>
          </div>
          {/* mobile screen: burger icon*/}
          <div className="hidden max-tablet-sm:block">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="bg-grey-shade-8 px-2 py-2 rounded-lg"
            >
              <BurgerIcon />
            </button>
          </div>
          <Button
            onClick={() => router.push("/contact-us")}
            className="border border-grey-shade-15 py-2 px-3 rounded-md font-medium text-lg max-desktop-2xl:text-sm block max-tablet-sm:hidden hover:bg-grey-shade-15 dark:text-white dark:bg-grey-shade-8"
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="max-tablet-sm:block hidden dark:bg-grey-shade-8 py-4">
            <ul className="flex flex-col gap-4 font-medium text-sm dark:text-white">
              {navItems.map((item) => (
                <NavLink key={item.name} item={item} />
              ))}
              <Link href="/contact-us">
                <li className="py-2 px-3">Contact Us</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
