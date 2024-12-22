import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Button } from "./ui/button/Button";
import Image from "next/image";
import Logo from "@/public/Sol-track-logo.png";
import { cn } from "@/lib/utils";

export const AppBar = ({ isDashboard }: { isDashboard: boolean }) => {
  const router = useRouter();
  const session = useSession();
  return (
    <>
      <div
        className={cn(
          "flex justify-between items-center py-2 px-6 sm:px-12 md:px-16 lg:px-24",
          { "border-b-2 border-gray-200": isDashboard }
        )}
      >
        <Link href={"/"}>
          <div className="flex items-center">
            <Image src={Logo} alt="logo" width={40} height={40} />
            <span
              className={cn("text-xl text-white font-bold", {
                "text-black": isDashboard,
              })}
            >
              Sol-Track
            </span>
          </div>
        </Link>
        <div
          className={cn("flex items-center space-x-4", !isDashboard && "dark")}
        >
          {session.data?.user && (
            <Button
              variant="default"
              className={cn(
                !isDashboard && "rounded-2xl bg-blue-400 hover:bg-blue-400/80 "
              )}
              onClick={() => signOut()}
            >
              Logout
            </Button>
          )}
          {!session.data?.user && (
            <Button
              variant="default"
              className="bg-blue-400 hover:bg-blue-400/80 rounded-3xl"
              onClick={() => router.push("/auth/login")}
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
