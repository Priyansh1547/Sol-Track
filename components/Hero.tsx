"use client";

import { SecondaryButton } from "@/components/ui/button/ButtonLanding";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export const Hero = () => {
  const router = useRouter();
  const session = useSession();

  return (
    <>
      <div className="p-6 sm:p-12 md:p-16 lg:p-14">
        <div className="text-4xl sm:text-5xl md:text-6xl font-medium text-center">
          <span>Track Solana Transactions</span>
          <span className="text-blue-500 pl-2 sm:pl-4">Sol-Track</span>
        </div>
        <div className="flex justify-center pt-4 text-xl sm:text-2xl text-slate-500 text-center">
          View your recent transactions in Solana blockchain
        </div>
        <div className="flex justify-center pt-2 text-xl sm:text-2xl text-slate-500 text-center">
          Connect your wallet and you are good to go
        </div>
        <div className="pt-8 flex justify-center">
          {session.data?.user && (
            <SecondaryButton onClick={() => router.push("/dashboard")}>
              Go to Dashboard
            </SecondaryButton>
          )}
          {!session.data?.user && (
            <SecondaryButton onClick={() => router.push("/auth/login")}>
              Login
            </SecondaryButton>
          )}
        </div>
      </div>
    </>
  );
};
