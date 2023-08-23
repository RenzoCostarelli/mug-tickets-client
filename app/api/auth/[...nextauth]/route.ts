import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

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
            "Content-Type": "application/json" 
          }
        })
        const user = await res.json();

        return user.ok ? user : null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      
      return {
        ...token,
        ...user
      }
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    }
  },
  pages: {
    signIn: '/admin/login',
  },
  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };