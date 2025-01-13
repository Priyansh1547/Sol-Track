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
        <section
          id="hero"
          className="relative min-h-[80vh] w-full px-4 text-white"
        >
          <div className="flex flex-col items-center">
            <div className="max-w-4xl mx-auto px-4 pt-16 pb-24 text-center">
              <h1 className="text-5xl font-medium tracking-tight mb-6">
                The All in One
                <br />
                Solana Tracker
              </h1>

              <p className="text-xl text-gray-200 mb-4">
                Track your Solana transactions
                <br />
                balances, and airdrops in one.
              </p>
              <div className="flex justify-center gap-4 mb-12">
                <Button
                  variant="ghost"
                  className="rounded-2xl font-semibold text-black bg-[#F4F4F4] px-6"
                  onClick={() => router.push("/dashboard")}
                >
                  Dashboard
                </Button>
              </div>
            </div>
            <div className="lg:pl-8 xl:pl-12">
              <div className="rounded-2xl overflow-hidden border-4 border-[#25252A] relative">
                <Image
                  src={solImage}
                  alt="Dashboard Preview"
                  className="object-cover"
                  width={1000}
                  height={1000}
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

{
  /* <Image
src={solImage}
alt="Dashboard Preview"
fill
className="object-cover"
priority
/> */
}
