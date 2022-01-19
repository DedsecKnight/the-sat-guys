import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    refreshToken?: string;
    accessToken?: string;
    idToken?: string;
    role?: string;
  }
}

declare module "next-auth" {
  interface Session {
    token: JWT;
    user:
      | {
          name?: string | null | undefined;
          email?: string | null | undefined;
          image?: string | null | undefined;
          id?: string | null | undefined;
          role?: string | null | undefined;
        }
      | undefined;
  }

  interface User {
    role: string;
    id: string;
  }
}
