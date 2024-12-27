import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button/Button";
import Image from "next/image";
import Logo from "@/public/Sol-track-logo.png";

export const AppBar = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-between items-center py-2 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#0F172A]">
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
              router.push("/dashboard");
            }}
          >
            Dashboard
          </Button>
        </div>
      </div>
    </>
  );
};
