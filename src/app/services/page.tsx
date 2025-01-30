import HeroCard from "@/components/modules/home-page/HeroCard";
import EffortlessPropertyManagement from "@/components/modules/service-page/EffortlessPropertyManagement";
import ElevateExperience from "@/components/modules/service-page/ElevateExperience";
import SmartInvestment from "@/components/modules/service-page/SmartInvestment";
import UnlockPropertyValue from "@/components/modules/service-page/UnlockPropertyValue";
import React from "react";
import { heroCard } from "@/utilityComponents/homePage/heroCard";

const page = () => {
  return (
    <div className="bg-white-95 dark:bg-grey-shade-8">
      <div id="evaluate">
        <ElevateExperience />
      </div>
      <div id="strategy">
        <HeroCard data={heroCard} />
      </div>
      <div id="negotiation">
        <UnlockPropertyValue />
      </div>
      <div id="management">
        <EffortlessPropertyManagement />
      </div>
      <div id="investment">
        <SmartInvestment />
      </div>
    </div>
  );
};

export default page;
