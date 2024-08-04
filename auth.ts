import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";

import Google from "next-auth/providers/google";
import prisma from "./lib/prisma";
import {Adapter} from "next-auth/adapters"
import Resend from "next-auth/providers/resend"

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [ Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          access_type: 'offline',
          prompt: 'consent',
          scope: "openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar",
        },
      },
    }),] //Resend({ from: "no-reply@jblack.dev"}) ]
    , 
    callbacks: {
      async session({ session, user }) {
        const [googleAccount] = await prisma.account.findMany({
          where: { userId: user.id, provider: "google" },
        })
        if (googleAccount.expires_at * 1000 < Date.now()) {
          // If the access token has expired, try to refresh it
          try {
            // https://accounts.google.com/.well-known/openid-configuration
            // We need the `token_endpoint`.
            const response = await fetch("https://oauth2.googleapis.com/token", {
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: new URLSearchParams({
                client_id: process.env.AUTH_GOOGLE_ID!,
                client_secret: process.env.AUTH_GOOGLE_SECRET!,
                grant_type: "refresh_token",
                refresh_token: googleAccount.refresh_token,
              }),
              method: "POST",
            })
   
            const responseTokens = await response.json()
   
            if (!response.ok) throw responseTokens
   
            await prisma.account.update({
              data: {
                access_token: responseTokens.access_token,
                expires_at: Math.floor(
                  Date.now() / 1000 + responseTokens.expires_in
                ),
                refresh_token:
                  responseTokens.refresh_token ?? googleAccount.refresh_token,
              },
              where: {
                provider_providerAccountId: {
                  provider: "google",
                  providerAccountId: googleAccount.providerAccountId,
                },
              },
            })
          } catch (error) {
            console.error("Error refreshing access token", error)
            // The error property can be used client-side to handle the refresh token error
            
          }
        }
        return session
      },
    },
    });