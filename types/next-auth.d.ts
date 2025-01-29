import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    userName: string;
  }

  interface Session {
    user: {
      id: string;
      userName: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      userName: string;
    };
  }
}

// types/auth.ts
export interface LoginFormValues {
  userName: string;
  password: string;
}

export interface AuthError {
  message: string;
}
