import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";

export default function AuthWrapper({
  children,
}: React.PropsWithChildren<any>) {
  const { status } = useSession();
  const router = useRouter();
  if (status === "unauthenticated") router.push("/api/auth/signin");
  if (status === "loading") return <div>Loading...</div>;
  if (status === "authenticated") return children;

  return <div></div>;
}
