import NextAuth, { Awaitable, NextAuthOptions } from 'next-auth';
import { User } from 'next-auth/core/types';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google';

const { GOOGLE_ID, GOOGLE_SECRET } = process.env;

if (!GOOGLE_ID) {
  throw new Error("Google GOOGLE_ID");
}

if (!GOOGLE_SECRET) {
  throw new Error("Google GOOGLE_SECRET.");
}

export const handler: NextAuthOptions = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      profile(profile: GoogleProfile): Awaitable<User> {
        const { role = 'user', token = '', picture, sub, email, name, ...params } = profile;
        
        return {
          id: sub,
          name,
          role,
          email,
          image: picture,
          token
        }
      },
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Tu correo electronico"
        },
        password:{
          label: "Password",
          type: "password",
          placeholder: "Tu pass"
        }
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.apiUrl}/panel/login`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 
            'Content-Type': 'application/json' 
          }
        })
        const user = await res.json();

        return user.ok ? user : null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if(!user) {
        return { ...token }
      }
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    }
  },
  pages: {
    signIn: '/users/login',
  },
  session:{
    strategy: 'jwt',
    maxAge: 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  jwt: {
    maxAge: 24 * 60 * 60
  },
  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };