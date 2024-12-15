"use client";

import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { Wallet } from "lucide-react";

export function WalletButton() {
  const { setVisible } = useWalletModal();
  const { wallet, disconnect, publicKey } = useWallet();

  const handleClick = () => {
    if (!wallet) {
      setVisible(true);
    } else {
      disconnect();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center space-x-2 bg-primary text-primary-foreground duration-300 hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg  px-5 py-2.5 text-white"
    >
      <Wallet className="h-5 w-5" />
      <span className="truncate h-6 w-32">
        {publicKey ? publicKey.toString() : "Connect Wallet"}
      </span>
    </button>
  );
}
