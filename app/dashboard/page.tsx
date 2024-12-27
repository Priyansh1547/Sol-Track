"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { TransactionList } from "@/components/TransactionList";
import { EmptyState } from "@/components/wallet/EmptyState";
import { useState } from "react";
import { TabButton } from "@/components/ui/button/ButtonLanding";
import { PublicKey } from "@solana/web3.js";
import { NavBar } from "@/components/navbar/NavBar";

type Tab = "transaction" | "airdrop" | "balance";

const tabs: { id: Tab; name: string }[] = [
  { id: "transaction", name: "Transaction" },
  { id: "balance", name: "Balance" },
  { id: "airdrop", name: "Airdrop" },
];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<Tab>("transaction");
  const { publicKey } = useWallet();

  return (
    <>
      <main className="bg-[#0E0F14] min-h-screen ">
        <div className="sticky top-0">
          <NavBar />
        </div>
        <div className="pt-8 flex justify-center">
          <div className="max-w-4xl rounded-lg text-white shadow-md w-full">
            <div className="w-full flex px-10 pt-10">
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
              className={`${
                selectedTab === "airdrop" || selectedTab === "balance"
                  ? "visible"
                  : "hidden"
              }`}
            >
              <CommingSoon />
            </div>
          </div>
        </div>
      </main>
    </>
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

function CommingSoon() {
  return (
    <div className="flex flex-col items-center justify-center h-[40vh] space-y-4">
      <h2 className="text-2xl font-bold text-center">Coming Soon</h2>
      <p className="text-gray-600 text-center max-w-md">
        We are working hard to bring this feature
      </p>
    </div>
  );
}
