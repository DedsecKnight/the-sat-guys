import { useSession } from "next-auth/react";

export default function ProfileHeader() {
  const { data: session } = useSession();
  return (
    <div>
      <h1 className="text-xl font-semibold">
        {session ? session.user?.name : "user"}
      </h1>
    </div>
  );
}
