"use client";

import { Wallet } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-[40vh] space-y-4">
      <div className="p-4 rounded-full">
        <Wallet className="h-12 w-12 text-black" />
      </div>
      <h2 className="text-2xl font-bold text-center text-black">
        Connect Your Wallet
      </h2>
      <p className=" text-center max-w-md md:text-[20px] text-primary">
        Connect your Solana wallet to view your recent transactions and account
        details.
      </p>
    </div>
  );
}
