import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      ok: boolean,
      firstName: string,
      email: string,
      image:string,
      token: any
    }
  }

  interface User {
    id: number,
    name: string,
    image: string,      
    token: any
  }

  interface JWT {
     id: any; 
     name: string; 
     image: string; 
     accessToken: string; 
  }

}