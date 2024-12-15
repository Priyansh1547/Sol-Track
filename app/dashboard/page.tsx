"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { TransactionList } from "@/components/TransactionList";
import { WalletButton } from "@/components/wallet/WalletButton";
import { EmptyState } from "@/components/wallet/EmptyState";
import { AppBar } from "@/components/AppBar";

export default function Home() {
  const { publicKey } = useWallet();

  return (
    <>
      <div>
        <AppBar />
      </div>
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <header className="mb-12 text-center">
            <h1 className="text-5xl font-medium text-black mb-2">
              Wallet <span className="text-blue-500">Transaction</span>
            </h1>
            <p className="flex justify-center pt-4 text-xl text-slate-500">
              Connect your wallet and view your recent transactions
            </p>
            <div className="pt-8 flex justify-center">
              <WalletButton />
            </div>
          </header>
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8 space-y-4 sm:space-y-0">
            <h2 className="text-4xl font-medium text-gray-800">
              Your <span className="text-blue-500">Transactions</span>
            </h2>
          </div>

          {publicKey ? (
            <div className="space-y-6">
              <p className="text-lg text-gray-600 mb-6">
                Connected:{" "}
                <span className="font-mono bg-gray-100 p-1 rounded">
                  {publicKey.toBase58()}
                </span>
              </p>
              <TransactionList />
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </>
  );
}
