import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";

import Google from "next-auth/providers/google";
import prisma from "./lib/prisma";
import {Adapter} from "next-auth/adapters"
import Resend from "next-auth/providers/resend"

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [ Google, Resend({ from: "no-reply@jblack.dev"}) ],
});