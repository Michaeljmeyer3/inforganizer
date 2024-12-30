import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(process.env.db),
  session: { strategy: "jwt" },
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.AITH_GITHUB_SECRET as string
    }),
    Credentials({

    })
  ]
})