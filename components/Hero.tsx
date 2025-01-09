"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button/Button";
import Image from "next/image";
import solImage from "@/public/SolTrack-dashboard.png";

export const Hero = () => {
  const router = useRouter();

  return (
    <>
      <main>
        <section id="hero" className="relative min-h-[80vh] w-full px-4">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 py-16 md:flex-row md:py-24">
            <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
              <div className="flex flex-col gap-2 md:gap-4">
                <h1 className="text-[28px] md:text-[40px] md:leading-[44px] font-bold text-text-primary tracking-tighter">
                  Sol Track
                </h1>
                <p className="md:text-[20px] text-primary">
                  The all-in-one platform to track your solana.
                </p>
              </div>
              <div className="mt-8">
                <Button
                  className="h-10 px-8 text-base bg-black"
                  onClick={() => router.push("/dashboard")}
                >
                  Dashboard
                </Button>
              </div>
            </div>
            <div className="w-[70%] md:w-1/2">
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
