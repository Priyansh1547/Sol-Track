"use client";
import { ProfileComponent } from "@/components/profile";
import { Button } from "@/components/ui/button/Button";
import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen dark bg-[#0E0F14]">
        <Button
          variant="ghost"
          className="absolute left-4 top-4"
          onClick={() => router.push("/dashboard")}
        >
          <ArrowBigLeft className="h-4 w-4 text-white " />
          <span className="text-white ">Back</span>
        </Button>
        <div className="py-40 text-white">
          <div className="flex justify-center items-center ">
            <ProfileComponent />
          </div>
        </div>
      </div>
    </>
  );
}
