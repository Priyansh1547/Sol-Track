"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { TransactionList } from "@/components/TransactionList";
import { WalletButton } from "@/components/wallet/WalletButton";
import { EmptyState } from "@/components/wallet/EmptyState";
import { useEffect, useState } from "react";
import { TabButton } from "@/components/ui/button/ButtonLanding";
import { PublicKey } from "@solana/web3.js";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AppBar } from "@/components/AppBar";

type Tab = "transaction" | "airdrop";

const tabs: { id: Tab; name: string }[] = [
  { id: "transaction", name: "Transaction" },
  { id: "airdrop", name: "Airdrop" },
];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<Tab>("transaction");
  const { publicKey } = useWallet();
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session.data?.user) {
      router.push("/");
    }
    console.log(session);
  }, [session, router]);
  return (
    <>
      <div>
        <AppBar isDashboard={true} />
      </div>
      <div className="pt-8 flex justify-center">
        <div className="max-w-4xl bg-white rounded-lg border border-primary/20 shadow-md w-full">
          <Greeting
            name={session.data?.user?.name ?? "SOL"}
            image={session.data?.user?.image ?? ""}
          />
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

function Greeting({ name, image }: { name: string; image: string }) {
  return (
    <div className="flex justify-between items-center p-12">
      <div className="flex items-center">
        <Image
          src={image}
          alt="Profile"
          className="rounded-full w-14 h-14 mr-4"
          width={100}
          height={100}
        />
        <div className="text-lg md:text-2xl lg:text-3xl sm:text-xl font-semibold">
          Welcome back,<span className="text-blue-500 pl-2">{name}</span>
        </div>
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
