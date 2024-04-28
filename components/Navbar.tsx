import React from "react";
import { getServerAuthSession } from "@/config/auth-config";
import { ModeToggle } from "./ThemeToggle";

export default async function Navbar() {
  const session = await getServerAuthSession();
  return (
    <div>
      <p className="bg-white text-center text-2xl text-black">
        {session && <span>Logged in as {session.user?.email}</span>}
        <ModeToggle />
      </p>
    </div>
  );
}
