"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Button } from "./ui/button/Button";
import Image from "next/image";
import solImage from "@/public/SolTrack-dashboard.png";

export const Hero = () => {
  const router = useRouter();
  const session = useSession();

  return (
    <>
      <main>
        <section className="relative min-h-[80vh] w-full px-4">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 py-16 md:flex-row md:py-24">
            <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                The All-in-One
                <br />
                Crypto Tracker
              </h1>
              <div className="mt-8">
                <Button
                  className="h-12 px-8 text-base dark"
                  onClick={() =>
                    router.push(session ? "/dashboard" : "/auth/login")
                  }
                >
                  {session ? "Go to Dashboard" : "Login"}
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative aspect-[16/9] w-full max-w-xl overflow-hidden rounded-xl border-2 border-[#26272B] shadow-xl">
                <Image
                  src={solImage}
                  alt="Dashboard Preview"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
