"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import LogOutComp from "../auth/LogOut";
import ThemeToggle from "../common/ThemeToggle";
import { HeaderLaptopLogo } from "@/svgs/HomePageSvg";
import { sidNavData } from "@/utilityComponents/dashboardPage/sideNavData";
import DashboardContent from "./DashboardContent";

const Dashboard = ({ userName }: { userName: string }) => {
  const [activeItem, setActiveItem] = useState(sidNavData[0].label); // Set default active item

  const handleNavClick = (label: string) => {
    setActiveItem(label); // Update active item
  };

  const navigateToSettings = () => {
    setActiveItem("Settings");
  };

  const renderContent = () => {
    const activeContent = sidNavData.find((item) => item.label === activeItem);
    if (activeContent?.label === "Dashboard") {
      return <DashboardContent onNavigateToSettings={navigateToSettings} />;
    }
    return activeContent?.content || null;
  };

  return (
    <div className="grid tablet-sm:grid-cols-10 min-h-screen">
      <div className="tablet-sm:col-span-2">
        {/* sidenav */}
        <div className="flex flex-col justify-between dark:bg-zinc-900 border-r dark:border-zinc-800 p-4 h-full">
          <div>
            <div className="flex items-center gap-2 mb-8">
              {/* <Building2 className="h-8 w-8 text-blue-500" /> */}
              <HeaderLaptopLogo />
              <h1 className="text-xl font-bold dark:text-white">
                Estatein Admin
              </h1>
              <ThemeToggle />
            </div>

            <nav className="space-y-2">
              {sidNavData.map((item, index) => (
                <Button
                  key={index}
                  variant={activeItem === item.label ? "default" : "ghost"}
                  className={`w-full justify-start gap-2 desktop-lg:gap-4 desktop-lg:py-6 ${
                    activeItem === item.label
                      ? "bg-purple-shade-60 text-white hover:bg-purple-shade-60"
                      : ""
                  }`}
                  onClick={() => handleNavClick(item.label)}
                >
                  <div className="h-4 w-4">{item.icon}</div>
                  <h1 className="desktop-lg:text-lg">{item.label}</h1>
                </Button>
              ))}
            </nav>
          </div>
          <LogOutComp userName={userName} />
        </div>
      </div>
      <div className="tablet-sm:col-span-8">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
