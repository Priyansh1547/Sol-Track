"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { TransactionList } from "@/components/TransactionList";
import { WalletButton } from "@/components/wallet/WalletButton";
import { EmptyState } from "@/components/wallet/EmptyState";
import { AppBar } from "@/components/AppBar";
import { useState } from "react";
import { TabButton } from "@/components/ButtonLanding";
import { PublicKey } from "@solana/web3.js";

type Tab = "transaction" | "airdrop";

const tabs: { id: Tab; name: string }[] = [
  { id: "transaction", name: "Transaction" },
  { id: "airdrop", name: "Airdrop" },
];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<Tab>("transaction");
  const { publicKey } = useWallet();
  return (
    <>
      <div>
        <AppBar />
      </div>
      <div className="pt-8 flex justify-center">
        <div className="max-w-4xl bg-white rounded-lg border border-primary/20 shadow-md w-full">
          <Greeting />
          <div className="w-full flex px-10">
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                active={tab.id === selectedTab}
                onClick={() => {
                  setSelectedTab(tab.id);
                }}
              >
                {tab.name}
              </TabButton>
            ))}
          </div>

          <div
            className={`${
              selectedTab === "transaction" ? "visible" : "hidden"
            }`}
          >
            <Transaction publicKey={publicKey} />
          </div>
          <div
            className={`${selectedTab === "airdrop" ? "visible" : "hidden"}`}
          >
            <Airdrop />
          </div>
        </div>
      </div>
    </>
  );
}

function Greeting() {
  return (
    <div className="flex justify-between items-center p-12">
      <div className="text-xl md:text-3xl lg:text-4xl sm:text-2xl font-semibold">
        Welcome to<span className="text-blue-500 pl-2">Sol-Track</span>
      </div>
      <div>
        <WalletButton />
      </div>
    </div>
  );
}

function Transaction({ publicKey }: { publicKey: PublicKey | null }) {
  return (
    <>
      <div className="">
        <div className="mx-auto px-4 py-12">
          {publicKey ? (
            <div className="space-y-6">
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

function Airdrop() {
  return (
    <div className="flex flex-col items-center justify-center h-[40vh] space-y-4">
      <h2 className="text-2xl font-bold text-center">Coming Soon</h2>
      <p className="text-gray-600 text-center max-w-md">
        We are working hard to bring AirDrop
      </p>
    </div>
  );
}
