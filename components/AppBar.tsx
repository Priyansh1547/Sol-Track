import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Button } from "./ui/button/Button";
export const AppBar = () => {
  const router = useRouter();
  const session = useSession();
  return (
    <>
      <div className="flex justify-between items-center py-6 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="flex items-center">
          <span className="text-2xl text-white font-semibold">
            <Link href={"/"}>Sol-Track</Link>
          </span>
        </div>
        <div className="flex items-center space-x-4 dark">
          {session.data?.user && (
            <Button
              variant="default"
              className="bg-blue-400 hover:bg-blue-400/80 rounded-3xl"
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
