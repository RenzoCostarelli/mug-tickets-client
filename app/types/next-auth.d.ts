import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import type { Session, Account,JWT } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    token?: accessToken;
    user: {      
      role: string,
      name: string,
      email: string,
      image: string,
      dni: string,
      telephone: string,
      token?: accessToken,
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    id: string,
    name: string,
    image: string,      
    token: any,
    role: string
  } 

  interface Account {
    access_token: accessToken;
    user: {
      token?: accessToken;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string, 
    name: string, 
    image: string, 
    token: string,
    role: string
  }
  
}