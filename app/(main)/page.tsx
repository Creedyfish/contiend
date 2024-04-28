import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerAuthSession } from "@/config/auth-config";

import Signout from "@/components/Signout";

export default async function Home() {
  const session = await getServerAuthSession();

  if (!session) redirect("/auth/login");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-center text-2xl text-white">
          {session && <div>Logged in as {session.user?.email}</div>}
          <div className="flex h-full w-full justify-center text-black">
            sdasdasdasdassdjaghsdjhsadsssssssssssssssssssss
          </div>
        </div>
        <Signout />
        {/* <Link
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
          className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        >
          {session ? "Sign out" : "Sign in"}
        </Link>
        */}
      </div>
    </main>
  );
}
