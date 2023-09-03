import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {      
      role: string,
      name: string,
      email: string,
      image: string,
      dni: string,
      telephone: string,
      token: any
    } & DefaultSession
  }

  interface User extends DefaultUser {
    id: string,
    name: string,
    image: string,      
    token: any,
    role: string
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