import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface User {
    id: string;
    userName: string;
  }
  interface Session {
    id: string;
    userName: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    userName: string;
  }
}
