import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button/Button";
import Image from "next/image";
import Logo from "@/public/Sol-track-logo.png";
import { cn } from "@/lib/utils";

export const AppBar = ({ isDashboard }: { isDashboard: boolean }) => {
  const router = useRouter();

  return (
    <>
      <div
        className={cn(
          "flex justify-between items-center py-2 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#0F172A]",
          isDashboard && "bg-[#0E0F14]"
        )}
      >
        <Link href={"/"}>
          <div className="flex items-center">
            <Image src={Logo} alt="logo" width={40} height={40} />
            <span className="text-xl text-white font-bold">Sol-Track</span>
          </div>
        </Link>
        <div className="flex items-center space-x-4 dark">
          <Button
            variant={"greenButton"}
            onClick={() => {
              isDashboard ? router.push("/dashboard") : null;
            }}
          >
            Dashboard
          </Button>
        </div>
      </div>
    </>
  );
};
