import React from "react";
import { TabsDemo } from "@/components/TabsTest";
import Logo from "@/components/logo";
export default function page() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col justify-between">
      <div className=" flex w-full flex-1 items-center justify-center bg-red-500">
        <div className="flex w-full bg-blue-400 md:w-4/5">
          <div className="flex w-full flex-1 items-center justify-center bg-yellow-400"></div>
          <div className="flex w-full flex-1 flex-col justify-center p-5">
            <Logo />
            <TabsDemo />
          </div>
        </div>
      </div>
    </main>
  );
}
