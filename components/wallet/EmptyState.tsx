"use client";

import { Wallet } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-[40vh] space-y-4">
      <div className="p-4 bg-primary/10 rounded-full">
        <Wallet className="h-12 w-12 text-gray-400" />
      </div>
      <h2 className="text-2xl font-bold text-center">Connect Your Wallet</h2>
      <p className="text-gray-600 text-center max-w-md">
        Connect your Solana wallet to view your recent transactions and account
        details.
      </p>
    </div>
  );
}
