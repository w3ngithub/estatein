import Link from "next/link";
import FooterMobile from "./FooterMobile";
import { EstateinLogo, MessagePlusLogo, SendIcon } from "@/svgs/HomePageSvg";
import { useState } from "react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await fetch("/estatein/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      toast.success("Message successfully sent");
      setEmail("");
    } catch (err) {
      console.error(err);

      toast.error("Error, please try resubmitting the form");
    }
  }

  return (
    <div className="container py-12">
      <div className="grid desktop-md:grid-cols-12 gap-10 max-desktop-md:space-y-5">
        <div className="desktop-md:col-span-4">
          <div className="flex flex-col gap-5">
            <form className="flex flex-row gap-2">
              <div>
                <EstateinLogo />
              </div>
              <h1 className="font-medium text-2xl max-tablet-sm:text-xl">
                Estatein
              </h1>
            </form>
            {/* input field container */}
            <div className="flex items-center gap-3 w-[85%] max-w-sm px-4 py-3 bg-[#E4E4E7] border border-grey-shade-15 dark:bg-grey-shade-8 rounded-lg max-mobile-md:w-full">
              <div>
                <MessagePlusLogo />
              </div>

              <input
                type="email"
                name="email"
                id="email"
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="flex-1 bg-transparent dark:text-white dark:placeholder:text-gray-400 focus:outline-none text-sm"
                required
              />

              <button
                onClick={handleSubmit}
                className="p-2 rounded-full cursor-pointer"
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
        {/* second section: big screen */}
        <div className="block desktop-md:col-span-8 max-tablet-sm:hidden">
          <div className="grid grid-cols-2 tablet-sm:grid-cols-12">
            <div className="tablet-sm:col-span-2">
              <ul className="flex flex-col gap-3 list-none">
                <Link href="/">
                  <li className="text-xl font-medium dark:text-grey-shade-60 mb-1 max-desktop-lg:text-lg max-tablet-sm:text-base">
                    Home
                  </li>
                </Link>
                <Link href="/#hero">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Hero Section
                  </li>
                </Link>
                <Link href="/#features">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Features
                  </li>
                </Link>
                <Link href="/#features">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Properties
                  </li>
                </Link>
                <Link href="/#testimonials">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Testimonials
                  </li>
                </Link>
                <Link href="/#faqs">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    FAQ&apos;s
                  </li>
                </Link>
              </ul>
            </div>
            <div className="tablet-sm:col-span-2">
              <ul className="flex flex-col gap-3 list-none">
                <Link href="/about-us">
                  <li className="text-xl font-medium dark:text-grey-shade-60 mb-1 max-desktop-lg:text-lg max-tablet-sm:text-base">
                    About Us
                  </li>
                </Link>
                <Link href="/about-us/#journey">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Our Story
                  </li>
                </Link>
                <Link href="/about-us/#ourValues">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Our Works
                  </li>
                </Link>
                <Link href="/about-us/#experience">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    How It Works
                  </li>
                </Link>
                <Link href="/about-us/#team">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Our Team
                  </li>
                </Link>
                <Link href="/about-us/#clients">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Our Clients
                  </li>
                </Link>
              </ul>
            </div>
            <div className="tablet-sm:col-span-2">
              <ul className="flex flex-col gap-3 list-none">
                <Link href="/property">
                  <li className="text-xl font-medium dark:text-grey-shade-60 mb-1 max-desktop-lg:text-lg max-tablet-sm:text-base">
                    Properties
                  </li>
                </Link>
                <Link href="/property/#portfolio">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Portfolio
                  </li>
                </Link>
                <Link href="/property/#category">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Categories
                  </li>
                </Link>
              </ul>
            </div>
            <div className="tablet-sm:col-span-4">
              <ul className="flex flex-col gap-3 list-none">
                <Link href="/services">
                  <li className="text-xl font-medium dark:text-grey-shade-60 mb-1 max-desktop-lg:text-lg max-tablet-sm:text-base">
                    Services
                  </li>
                </Link>
                <Link href="/services#evaluate">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Valuation Mastery
                  </li>
                </Link>
                <Link href="/services#strategy">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Strategic Marketing
                  </li>
                </Link>
                <Link href="/services#negotiation">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Negotiation Wizardry
                  </li>
                </Link>
                <Link href="/services#investment">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Closing Success
                  </li>
                </Link>
                <Link href="/services#management">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Property Management
                  </li>
                </Link>
              </ul>
            </div>
            <div className="tablet-sm:col-span-2">
              <ul className="flex flex-col gap-3 list-none">
                <Link href="/contact-us">
                  <li className="text-xl font-medium dark:text-grey-shade-60 mb-1 max-desktop-lg:text-lg max-tablet-sm:text-base">
                    Contact Us
                  </li>
                </Link>
                <Link href="/contact-us#contactForm">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Contact Form
                  </li>
                </Link>
                <Link href="/contact-us#location">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Our Offices
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        {/* second section: small screen */}
        <FooterMobile />
      </div>
    </div>
  );
};
export default Footer;
