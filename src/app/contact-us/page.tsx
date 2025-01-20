import GetInTouch from "@/components/modules/contact-us/GetInTouch";
import HeroCard from "@/components/modules/home-page/HeroCard";
import React from "react";
import { getInTouchCardData } from "@/utilityComponents/aboutUsPage/getInTouchCardData";
import GetInTouchCard from "@/components/modules/contact-us/GetInTouchCard";

const page = () => {
  return (
    <div className="bg-white-95 dark:bg-grey-shade-8">
      <GetInTouch />
      {/* <HeroCard data={getInTouchCardData} /> */}
      <GetInTouchCard data={getInTouchCardData} />
    </div>
  );
};

export default page;
