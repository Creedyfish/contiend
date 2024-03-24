import React from "react";
import { getServerAuthSession } from "@/config/auth-config";
import { ModeToggle } from "./ThemeToggle";

export default async function Navbar() {
  const session = await getServerAuthSession();
  return (
    <div>
      {" "}
      <p className="bg-white text-center text-2xl text-black">
        Logged in as:
        {session && <span>Logged in as {session.user?.name}</span>}
        <ModeToggle />
      </p>
    </div>
  );
}
