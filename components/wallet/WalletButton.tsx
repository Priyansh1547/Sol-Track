"use client";

import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button/Button";
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
    <Button
      onClick={handleClick}
      variant={"blueButton"}
      className="space-x-2 px-5 py-2.5"
    >
      <Wallet className="h-5 w-5" />
      <span className="truncate w-32 text-center">
        {publicKey ? publicKey.toString() : "Connect Wallet"}
      </span>
    </Button>
  );
}
