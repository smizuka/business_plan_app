import NextAuth, { AuthOptions } from "next-auth";
import CognitoProvider from 'next-auth/providers/cognito'
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from '@/app/lib/prisma'

const authOptions: AuthOptions  = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt"
  },
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID ?? '',
      clientSecret: process.env.COGNITO_CLIENT_SECRET ?? '',
      issuer: process.env.COGNITO_ISSUER ?? '',
      checks: 'nonce',
    }),
  ]
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }