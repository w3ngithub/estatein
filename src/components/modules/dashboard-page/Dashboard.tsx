"use client";
import { Button } from "@/components/ui/button";
import { Building2, Home, Settings, LogOut } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [userName, setUserName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleLogOut = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <div className="grid grid-cols-12 border border-red-500 min-h-screen">
      <div className="col-span-3 border border-green-500">
        {/* sidenav */}
        <div className="flex flex-col justify-between bg-zinc-900 border-r border-zinc-800 p-4 h-full">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Building2 className="h-8 w-8 text-blue-500" />
              <h1 className="text-xl font-bold">Estatein Admin</h1>
            </div>

            <nav className="space-y-2">
              {[
                { icon: <Home />, label: "Dashboard", active: true },
                { icon: <Building2 />, label: "Properties" },
                { icon: <Settings />, label: "Settings" },
              ].map((item) => (
                <Button
                  key={item.label}
                  variant={item.active ? "secondary" : "ghost"}
                  className="w-full justify-start gap-2"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>

          <div className="flex flex-row gap-2 p-4">
            <Avatar>
              <AvatarFallback>
                {userName.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <Button
              onClick={handleLogOut}
              variant="ghost"
              className="w-full justify-start gap-2"
            >
              Logout
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="col-span-9"></div>
    </div>
  );
};

export default Dashboard;
