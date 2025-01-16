import Achievements from "@/components/modules/about-us/Achievements";
import NavigateExperience from "@/components/modules/about-us/NavigateExperience";
import OurValues from "@/components/modules/about-us/OurValues";
import React from "react";

const page = () => {
  return (
    <div className="bg-white-95 dark:bg-grey-shade-8">
      <OurValues />
      <Achievements />
      <NavigateExperience />
    </div>
  );
};

export default page;
