"use client";
import { Button } from "@/components/ui/button";
import { Building2, Home, Settings, LogOut } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import DashboardContent from "./DashboardContent";
import PropertiesContent from "./PropertiesContent";
import SettingsContent from "./SettingsContent";
import Link from "next/link";
import { doLogout } from "@/app/actions";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import LogOutComp from "./LogOut";

const sidNavData = [
  {
    icon: <Home />,
    label: "Dashboard",
    content: <DashboardContent />,
  },
  {
    icon: <Building2 />,
    label: "Properties",
    content: <PropertiesContent />,
  },
  {
    icon: <Settings />,
    label: "Settings",
    content: <SettingsContent />,
  },
];

const Dashboard = ({ userName }: { userName: string }) => {
  // const [userName, setUserName] = useState("");
  const [activeItem, setActiveItem] = useState(sidNavData[0].label); // Set default active item
  const router = useRouter();

  // useEffect(() => {
  //   const storedUserName = localStorage.getItem("userName");
  //   if (storedUserName) {
  //     setUserName(storedUserName);
  //   }
  // }, []);

  // const handleLogOut = () => {
  //   // localStorage.clear();
  //   // router.push("/");
  // };

  const handleNavClick = (label: string) => {
    setActiveItem(label); // Update active item
  };

  const renderContent = () => {
    const activeContent = sidNavData.find((item) => item.label === activeItem);
    return activeContent?.content || null;
  };

  return (
    <div className="grid tablet-sm:grid-cols-12 min-h-screen">
      <div className="tablet-sm:col-span-3">
        {/* sidenav */}
        <div className="flex flex-col justify-between dark:bg-zinc-900 border-r dark:border-zinc-800 p-4 h-full">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Building2 className="h-8 w-8 text-blue-500" />
              <h1 className="text-xl font-bold dark:text-white">
                Estatein Admin
              </h1>
            </div>

            <nav className="space-y-2">
              {sidNavData.map((item, index) => (
                <Button
                  key={index}
                  variant={activeItem ? "secondary" : "ghost"}
                  className="w-full justify-start gap-2 desktop-lg:gap-4 desktop-lg:py-8"
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
      <div className="tablet-sm:col-span-9">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
