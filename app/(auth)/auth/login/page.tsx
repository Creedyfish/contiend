import React from "react";
import { TabsAuth } from "@/components/TabsAuth";
import LogoBrand from "@/components/svg/LogoBrand";
import Image from "next/image";
export default function page() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col justify-between">
      <div className=" flex w-full flex-1 items-center justify-center ">
        <div className="flex w-full justify-center overflow-hidden rounded-xl  md:w-4/5">
          {/* <div className="hidden w-full flex-1 flex-col items-center justify-center gap-10 rounded-lg bg-gradient-to-br  from-transparent to-slate-300 p-5 md:flex">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-primary to-secondary bg-clip-text text-5xl font-bold tracking-widest text-transparent ">
              <div className="flex items-center justify-center text-center">
                SHARE CONTENT
              </div>
              <div className="text-center">WITH</div>
              <div className="text-center">THE WORLD</div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative h-[25rem] w-[25rem] overflow-hidden">
                <Image
                  src={"/planet.gif"}
                  layout="fill"
                  unoptimized
                  objectFit="cover"
                  className="object-cover object-top"
                  alt="planet-gif"
                />
              </div>
              <div className="absolute top-1/2 z-50 flex items-center justify-center rounded-lg bg-opacity-20 bg-gradient-to-br from-transparent to-slate-600 p-5 text-center text-xl font-medium">
                <div className="text-black">
                  Follow your friends and community
                </div>
                <div className="absolute -z-10 h-full w-full rounded bg-white bg-opacity-25 drop-shadow-lg backdrop-blur-lg"></div>
              </div>
            </div>
          </div> */}

          <div className="flex w-full max-w-[25rem] flex-col items-center justify-center gap-10 md:w-1/2 md:min-w-[25rem] md:max-w-none md:p-5">
            <LogoBrand />
            <TabsAuth />
          </div>
        </div>
      </div>
    </main>
  );
}
