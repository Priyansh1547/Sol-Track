"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Button } from "./ui/button/Button";
import Image from "next/image";
import solImage from "@/public/sol-track.png";

export const Hero = () => {
  const router = useRouter();
  const session = useSession();

  return (
    <>
      <main>
        <section className="md:py-24 py-14 md:px-12 px-6 lg:px-24 dark">
          <div className="text-white dark max-w-8xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold mb-8 md:text-5xl text-white">
                The All-in-One
                <br />
                <span>Crypto Tracker</span>
              </h1>
              <div className="space-y-2">
                {session.data?.user && (
                  <Button
                    variant="default"
                    onClick={() => router.push("/dashboard")}
                  >
                    Go to Dashboard
                  </Button>
                )}
                {!session.data?.user && (
                  <Button
                    variant="default"
                    className="w-24"
                    onClick={() => router.push("/auth/login")}
                  >
                    Login
                  </Button>
                )}
              </div>
            </div>

            <div className="relative size-full">
              <Image
                src={solImage}
                alt="sol-track"
                className="w-full rounded-xl border-4 border-[24252A] object-cover size-full"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
