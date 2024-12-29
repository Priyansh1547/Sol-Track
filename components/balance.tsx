import { Button } from "./ui/button/Button";
import { ArrowDown, XIcon } from "lucide-react";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerDescription,
} from "@/components/ui/drawer";
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

export function Balance() {
  const balance = "$1,850.20";
  return (
    <div className="mx-auto px-4 py-12 flex flex-col items-center space-y-6">
      <div className="text-center">
        <h1 className="font-bold text-4xl">{balance}</h1>
      </div>
      <div className="w-full">
        <TransactionButton />
      </div>
      <div className="w-full mt-6">
        <SolanaCard balance={balance} />
      </div>
    </div>
  );
}

function SolanaCard({ balance }: { balance: string }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-row gap-4">
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
          width="50"
          height="50"
          alt="Solana"
        />
        <div className="flex flex-col">
          <span className="text-lg font-medium">Solana</span>
          <span className="text-sm text-[#969FAF]">10 SOL</span>
        </div>
      </div>
      <div>
        <span className="font-medium text-sm text-greenText">{balance}</span>
      </div>
    </div>
  );
}

const TransactionButton = () => {
  const { publicKey } = useWallet();
  const [userAddress, setUserAddress] = useState("");
  useEffect(() => {
    if (publicKey === null) {
      setUserAddress("Connect wallet");
    } else {
      setUserAddress(publicKey.toString());
    }
  }, [publicKey]);

  return (
    <div className="flex flex-col items-center text-center space-y-1">
      <Drawer>
        <DrawerTrigger>
          <div className="p-2 bg-[#202127] text-accentBlue rounded-full hover:cursor-pointer hover:bg-[#202127]/[70%]">
            <ArrowDown />
          </div>
        </DrawerTrigger>
        <DrawerContent className="dark text-white">
          <DrawerHeader className="relative flex justify-center items-center p-4">
            <DrawerClose className="absolute left-4">
              <Button variant="ghost">
                <XIcon />
              </Button>
            </DrawerClose>
            <DrawerTitle>Deposit</DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col items-center justify-center p-8 mt-52 space-y-6">
            <div className="max-w-sm text-center">
              <span className="text-lg whitespace-pre-line font-semibold">{`${userAddress.slice(0,25)}\n${userAddress.slice(25)}`}</span>
            </div>
            <Button
              className="w-32 h-10"
              variant={"blueButton"}
              onClick={() => navigator.clipboard.writeText(userAddress)}
            >
              Copy address
            </Button>
          </div>
          <DrawerDescription className="text-center">
            This address can only receive
            <br />
            assets on Solana Devnet.
          </DrawerDescription>
        </DrawerContent>
      </Drawer>
      <span className="text-[#969FAF] text-sm">Receive</span>
    </div>
  );
};
