import Achievements from "@/components/modules/about-us/Achievements";
import MeetTeam from "@/components/modules/about-us/MeetTeam";
import NavigateExperience from "@/components/modules/about-us/NavigateExperience";
import OurClients from "@/components/modules/about-us/OurClients";
import OurJourney from "@/components/modules/about-us/OurJourney";
import OurValues from "@/components/modules/about-us/OurValues";
import React from "react";

const page = () => {
  return (
    <div className="bg-white-95 dark:bg-grey-shade-8">
      <OurJourney />
      <OurValues />
      <Achievements />
      <NavigateExperience />
      <MeetTeam />
      <OurClients />
    </div>
  );
};

export default page;
