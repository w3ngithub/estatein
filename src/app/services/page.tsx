import HeroCard from "@/components/modules/home-page/HeroCard";
import EffortlessPropertyManagement from "@/components/modules/service-page/EffortlessPropertyManagement";
import ElevateExperience from "@/components/modules/service-page/ElevateExperience";
import SmartInvestment from "@/components/modules/service-page/SmartInvestment";
import UnlockPropertyValue from "@/components/modules/service-page/UnlockPropertyValue";
import React from "react";

const page = () => {
  return (
    <div className="bg-white-95 dark:bg-grey-shade-8">
      <ElevateExperience />
      <HeroCard />
      <UnlockPropertyValue />
      <EffortlessPropertyManagement />
      <SmartInvestment />
    </div>
  );
};

export default page;
