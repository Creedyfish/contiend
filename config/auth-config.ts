import NextAuth from "next-auth";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/config/db";
import bcrypt from 'bcrypt'


declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}
export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
    
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials || typeof credentials.email !== 'string' || typeof credentials.password !== 'string') {
          // If credentials are not provided or are not strings, return null
          return null;
        }
      
        // Look up the user from the credentials supplied
        const user = await db.user.findUnique({
          where: { email: credentials.email },
        });
      
        if (user && user.password) {
          // Validate the password
          const isValid = await bcrypt.compare(credentials.password, user.password);
      
          if (isValid) {
            console.log("valid")
            // Any object returned will be saved in `user` property of the JWT
            return user;
          }
        }
      
        // If you return null then an error will be displayed advising the user to check their details.
        return null;
      }
    }),
    GoogleProvider({
      clientId:
        process.env.GOOGLE_ID ??
        (() => {
          throw new Error("GOOGLE_ID is not set in .env file");
        })(),
      clientSecret:
        process.env.GOOGLE_SECRET ??
        (() => {
          throw new Error("GOOGLE_ClIENT is not set in .env file");
        })(),
    }),
    // ...add more providers here
  ],
  adapter: PrismaAdapter(db) as Adapter,
  session: {
		strategy: "database",
		maxAge: 30 * 24 * 60 * 60
	},
  pages: {signIn: '/auth/login',},
};


export const getServerAuthSession = () => getServerSession(authOptions);

