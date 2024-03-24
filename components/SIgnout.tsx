"use client";
import React from "react";
import { signOut } from "next-auth/react";
export default function SIgnout() {
  return (
    <button
      onClick={() =>
        signOut({
          callbackUrl: "/",
        })
      }
    >
      Sign Out
    </button>
  );
}
