"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

export async function doLogout() {
  await signOut({ redirectTo: "/estatein" });
}

// export async function doCredentialLogin(formData: FormData) {
//   console.log("formData", formData);

//   try {
//     const response = await signIn("credentials", {
//       userName: formData.get("userName"),
//       password: formData.get("password"),
//       redirect: false,
//     });
//     return response;
//   } catch (err) {
//     throw err;
//   }
// }

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
