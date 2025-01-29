import { auth } from "@/auth";
import Dashboard from "@/components/modules/dashboard-page/Dashboard";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();
  // console.log(session, "ssssssss");

  if (!session?.user?.userName) redirect("/");

  return (
    <div>
      <Dashboard userName={session?.user?.userName} />
    </div>
  );
};

export default page;
