import GetInTouch from "@/components/modules/contact-us/GetInTouch";
import React from "react";
import { getInTouchCardData } from "@/utilityComponents/aboutUsPage/getInTouchCardData";
import GetInTouchCard from "@/components/modules/contact-us/GetInTouchCard";
import LetsConnectForm from "@/components/modules/contact-us/LetsConnectForm";
import DiscoverLocation from "@/components/modules/contact-us/DiscoverLocation";

const page = () => {
  return (
    <div className="bg-white-95 dark:bg-grey-shade-8">
      <GetInTouch />
      <GetInTouchCard data={getInTouchCardData} />
      <LetsConnectForm />
      <DiscoverLocation />
    </div>
  );
};

export default page;
