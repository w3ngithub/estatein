"use client";
import { auth } from "@/auth";
import LoginForm from "@/components/modules/auth/LoginForm";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await auth(); // Fetch session
        if (session?.user?.userName) {
          router.replace("/"); // Redirect if logged in
        }
      } catch (error) {
        console.error("Error fetching session:", error);
      } finally {
        setIsLoading(false); // Ensure loading stops
      }
    };
    checkSession();
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>; // Show a loader while session is being checked
  }

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default page;
