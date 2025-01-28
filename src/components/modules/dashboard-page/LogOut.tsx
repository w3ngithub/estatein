import { doLogout } from "@/app/actions";
import { auth } from "@/auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

const LogOutComp = async () => {
  const session = await auth();
  //   if (!session?.user) redirect("/");
  return (
    <div className="flex flex-row gap-2 p-4">
      <Avatar>
        <AvatarFallback>
          {/* {userName.charAt(0).toUpperCase()} */}
        </AvatarFallback>
      </Avatar>
      <Button
        onClick={() => doLogout}
        variant="ghost"
        className="w-full justify-start gap-2 dark:text-white"
      >
        Logout
        <LogOut className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default LogOutComp;
