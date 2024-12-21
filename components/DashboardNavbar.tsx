import { PrimaryButton } from "@/components/ui/button/ButtonLanding";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
export const DashboardNavbar = () => {
  const router = useRouter();
  const session = useSession();
  return (
    <>
      <div className="flex justify-between items-center border-b-2 border-gray-200 py-2 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="flex items-center">
          <span className="text-2xl font-medium text-gray-800">
            <Link href={"/"}>Sol-Track</Link>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          {session.data?.user && (
            <PrimaryButton onClick={() => signOut()}>Logout</PrimaryButton>
          )}
          {!session.data?.user && (
            <PrimaryButton onClick={() => router.push("/auth/login")}>
              Login
            </PrimaryButton>
          )}
        </div>
      </div>
    </>
  );
};
