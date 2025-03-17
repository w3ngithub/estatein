"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

export async function doLogout() {
  await signOut({ redirectTo: "/estatein" });
}

export async function handleCredentialsSignin({
  userName,
  password,
}: {
  userName: string;
  password: string;
}) {
  try {
    await signIn("credentials", {
      userName,
      password,
      redirectTo: "/estatein/admin/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            message: "Invalid credentials",
          };
        default:
          return {
            message: "Something went wrong.",
          };
      }
    }
    throw error;
  }
}
