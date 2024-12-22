import { PrimaryButton } from "@/components/ui/button/ButtonLanding";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Sol-track-logo.png";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
export const DashboardNavbar = () => {
  const router = useRouter();
  const session = useSession();
  return (
    <>
      <div className="flex justify-between items-center border-b-2 border-gray-200 py-2 px-6 sm:px-12 md:px-16 lg:px-24">
        <Link href={"/"}>
          <div className="flex items-center">
            <Image src={Logo} alt="logo" width={40} height={40} />
            <span className="text-xl font-bold">Sol-Track</span>
          </div>
        </Link>
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
