import React, { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Button } from "../ui/button/Button";
import { Wallet, X } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

export const ConnectWalletButton = () => {
  const [showModal, setShowModal] = useState(false);
  const { wallets, select, disconnect, publicKey, wallet } = useWallet();

  const detectedWallets = wallets.filter(
    (wallet) => wallet.readyState === "Installed"
  );

  const handleClick = () => {
    if (!wallet) {
      setShowModal(true);
    } else {
      setShowModal(false);
      disconnect();
    }
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        variant={"blueButton"}
        className="space-x-2 px-5 py-2.5"
      >
        <Wallet className="h-5 w-5" />
        <span className="truncate w-32 text-center font-mono">
          {publicKey ? publicKey.toString() : "Connect Wallet"}
        </span>
      </Button>
      {showModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-[#111314] p-6 rounded-lg shadow-md w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-white font-mono font-bold text-lg">
                  Connect Wallet
                </h2>
                <p className="text-sm text-zinc-400 font-mono">
                  You need to connect a Solana wallet
                </p>
              </div>
              <Button
                variant="ghost"
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-200"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <hr className="my-4 border-gray-700" />
            <div className="grid grid-cols-1 gap-2">
              {detectedWallets.length > 0 ? (
                detectedWallets.map((wallet) => (
                  <Button
                    key={wallet.adapter.name}
                    onClick={() => {
                      select(wallet.adapter.name);
                      setShowModal(false);
                    }}
                    variant="outline"
                    className="flex h-auto flex-col items-center gap-2 bg-[#111314] p-4 dark font-mono"
                  >
                    <div className="h-8 w-8 overflow-hidden rounded-full">
                      <Image
                        src={wallet.adapter.icon}
                        alt="wallet"
                        width={40}
                        height={40}
                        className="h-full w-full"
                      />
                    </div>
                    <span className="text-xs text-white">
                      {wallet.adapter.name}
                    </span>
                  </Button>
                ))
              ) : (
                <p className="text-sm text-zinc-400 font-mono">
                  No wallets detected
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
