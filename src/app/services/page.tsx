import HeroCard from "@/components/modules/home-page/HeroCard";
import ElevateExperience from "@/components/modules/service-page/ElevateExperience";
import React from "react";

const page = () => {
  return (
    <div className="bg-white-95 dark:bg-grey-shade-8">
      <ElevateExperience />
      <HeroCard />
    </div>
  );
};

export default page;
