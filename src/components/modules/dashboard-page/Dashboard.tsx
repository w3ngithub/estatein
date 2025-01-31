"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import LogOutComp from "../auth/LogOut";
import ThemeToggle from "../common/ThemeToggle";
import { HeaderLaptopLogo } from "@/svgs/HomePageSvg";
import { sidNavData } from "@/utilityComponents/dashboardPage/sideNavData";
import DashboardContent from "./DashboardContent";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Dashboard = ({ userName }: { userName: string }) => {
  const [activeItem, setActiveItem] = useState(sidNavData[0].label); // Set default active item
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

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
    <div className="grid tablet-md:grid-cols-10 min-h-screen">
      {/* <div className="tablet-md:col-span-2"> */}
      <div
        className={`${
          collapsed ? "tablet-md:w-[80px]" : "tablet-md:col-span-2"
        } transition-all duration-300 relative`}
      >
        {/* sidenav */}
        <div className="flex flex-col justify-between dark:bg-zinc-900 border-r dark:border-zinc-800 p-4 h-full">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <HeaderLaptopLogo />
              {!collapsed && (
                <h1 className="text-xl font-bold dark:text-white">Admin</h1>
              )}
              {!collapsed && <ThemeToggle />}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="absolute top-0 right-[-10px] hover:text-inherit hover:bg-inherit focus:ring-0 active:scale-100 block max-tablet-md:hidden"
            >
              {collapsed ? <ChevronRight /> : <ChevronLeft />}
            </Button>

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
                  {!collapsed && (
                    <h1 className="desktop-lg:text-lg">{item.label}</h1>
                  )}
                </Button>
              ))}
            </nav>
          </div>
          <LogOutComp collapsed={collapsed} userName={userName} />
        </div>
      </div>
      <div className="tablet-md:col-span-8">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
