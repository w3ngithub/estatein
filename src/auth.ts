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
          const user = getUserByUserName(credentials?.userName);
          console.log(user, "uuuuuuuuuuuuuu");
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
          throw new Error(error);
        }
      },
      //   async authorize(credentials) {
      //     if (credentials === null) return null;
      //     // Validate credentials
      //     const user = await getUserByUserName(credentials?.userName);
      //     if (user) {
      //       // Return user object
      //       return { userName: user.userName, password: user.password };
      //     } else {
      //       throw new Error("Invalid credentials");
      //     }
      //   },
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
        session.user = token.user;
      }
      console.log(session, "jjjjjjjjjjjjj");
      return session;
    },
  },
});
