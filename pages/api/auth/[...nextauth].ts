import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
import { TypeORMLegacyAdapter } from "@next-auth/typeorm-legacy-adapter";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export default NextAuth({
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID!!,
      clientSecret: process.env.COGNITO_CLIENT_SECRET!!,
      issuer: process.env.COGNITO_ISSUER,
      idToken: true,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: TypeORMLegacyAdapter({
    type: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    namingStrategy: new SnakeNamingStrategy(),
  }),
  callbacks: {
    async jwt({ token, account, user }) {
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }

      if (account?.id_token) {
        token.idToken = account.id_token;
      }

      if (account?.refresh_token) {
        token.refreshToken = account.refresh_token;
      }

      if (user?.role) {
        token.role = user.role;
      }

      return token;
    },
    async session({ session, token: tokenObj }) {
      const { email, name, picture, role, sub, ...token } = tokenObj;
      return {
        ...session,
        token,
        user: {
          ...session.user,
          id: sub,
          role: role,
        },
      };
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
});
