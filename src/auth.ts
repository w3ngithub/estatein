import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByUserName } from "./data/users";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        userName: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials === null) return null;

        try {
          const userName = credentials.userName as string;
          const user = getUserByUserName(userName);
          if (user) {
            const isMatch = user?.password === credentials.password;

            if (isMatch) {
              return {
                id: user.userName, // Use userName as id
                userName: user.userName,
              };
            } else {
              throw new Error("User Name or Password is not correct");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Attach user information to the token
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      // Attach additional properties to the session
      if (token.user) {
        //@ts-ignore
        session.user = token.user;
      }
      console.log(session, "jjjjjjjjjjjjj");
      return session;
    },
  },
});
