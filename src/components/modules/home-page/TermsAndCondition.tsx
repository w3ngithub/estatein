import {
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/svgs/TermsAndConditionSvg";
import Link from "next/link";
import React from "react";

const TermsAndCondition = () => {
  return (
    <div className="container">
      <div className="flex flex-row justify-between items-center flex-wrap max-mobile-xl:justify-center max-mobile-xl:gap-5">
        <div className="flex flex-row gap-6 max-mobile-md:flex-col max-mobile-md:justify-center max-mobile-md:items-center max-mobile-md:order-last max-mobile-md:gap-4">
          <p className="text-lg font-medium max-desktop-lg:text-sm">
            @2023 Estatein. All Rights Reserved.
          </p>
          <p className="text-lg font-medium max-desktop-lg:text-sm">
            Terms & Conditions
          </p>
        </div>
        <div className="flex flex-row gap-5">
          <Link href="/facebook">
            <div className="bg-grey-shade-8 rounded-full px-4 py-3">
              <FacebookIcon />
            </div>
          </Link>
          <Link href="/linkedin">
            <div className="bg-grey-shade-8 rounded-full px-3 py-3">
              <LinkedInIcon />
            </div>
          </Link>

          <Link href="/twitter">
            <div className="bg-grey-shade-8 rounded-full px-4 py-4">
              <TwitterIcon />
            </div>
          </Link>

          <Link href="/youtube">
            <div className="bg-grey-shade-8 rounded-full px-3 py-4">
              <YoutubeIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
