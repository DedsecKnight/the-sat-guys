import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

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
