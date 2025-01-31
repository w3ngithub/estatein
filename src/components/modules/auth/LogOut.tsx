import { doLogout } from "@/app/actions";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import React from "react";

const LogOutComp = ({
  userName,
  collapsed,
}: {
  userName: string;
  collapsed: boolean;
}) => {
  const handleLogout = async () => {
    try {
      await doLogout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <div className="flex flex-row gap-2 p-4">
      {!collapsed && (
        <Avatar>
          <AvatarFallback>{userName?.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
      )}
      {!collapsed && (
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="w-full justify-start gap-2 dark:text-white"
        >
          Logout
          <LogOut className="h-4 w-4" />
        </Button>
      )}
      {collapsed && (
        <div className="flex justify-center items-center w-full">
          <Button onClick={handleLogout} variant="ghost">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default LogOutComp;
