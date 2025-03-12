import LoginForm from "@/components/modules/auth/LoginForm";
import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  // If the user is logged in, redirect to the dashboard and can not access /login page
  if (session?.user?.userName) {
    redirect("/admin/dashboard");
  }

  return <LoginForm />;
};

export default page;
