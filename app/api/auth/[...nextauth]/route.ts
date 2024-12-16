import prisma from "@/db/db";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;

      try {
        await prisma.user.upsert({
          where: {
            email: user.email,
          },
          update: {},
          create: {
            email: user.email,
            name: user.name,
            provider: "Google",
          },
        });
        return true;
      } catch (error) {
        console.error("Error saving user:", error);
        return true;
      }
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
