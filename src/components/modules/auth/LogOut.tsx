import { doLogout } from "@/app/actions";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";

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
    <div className="flex flex-col gap-8">
      <div className="flex flex-row items-center">
        {!collapsed && (
          <Label className="text-sm" htmlFor="user">
            Switch to User
          </Label>
        )}

        <Switch
          id="user"
          onCheckedChange={(checked) => {
            if (checked) {
              redirect("/");
            }
          }}
        />
      </div>

      <div className="flex flex-row gap-1 w-full">
        {!collapsed && (
          <Avatar>
            <AvatarFallback>{userName?.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        )}
        {!collapsed && (
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="w-full text-sm justify-start gap-2 dark:text-white"
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
    </div>
  );
};

export default LogOutComp;
