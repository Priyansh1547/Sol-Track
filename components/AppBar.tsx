import { PrimaryButton } from "@/components/ButtonLanding";
import Link from "next/link";
import { useRouter } from "next/navigation";
export const AppBar = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-between items-center border-b-2 border-gray-200 py-2 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="flex items-center">
          <span className="text-2xl font-medium text-gray-800">
            <Link href={"/"}>Sol-Track</Link>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <PrimaryButton onClick={() => router.push("/dashboard")}>
            Dashboard
          </PrimaryButton>
        </div>
      </div>
    </>
  );
};
