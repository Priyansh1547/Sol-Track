import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Sol-track-logo.png";
import { cn } from "@/lib/utils";
import { ConnectWalletButton } from "../wallet/WalletButton";

export const NavBar = () => {
  return (
    <>
      <div
        className={cn(
          "flex justify-between items-center py-2 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#0E0F14] "
        )}
      >
        <Link href={"/"}>
          <div className="flex items-center">
            <Image src={Logo} alt="logo" width={40} height={40} />
            <span className="text-xl text-white font-bold">Sol-Track</span>
          </div>
        </Link>
        <div className="flex items-center">
          <ConnectWalletButton />
        </div>
      </div>
    </>
  );
};
