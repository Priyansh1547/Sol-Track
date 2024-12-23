import { Button } from "@/components/ui/button/Button";
import { RiGoogleFill } from "@remixicon/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface LoginButtonProps {
  className?: string;
  variant?:
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "blueGhost"
    | "greenButton"
    | "blueButton";
}

export function LoginButton({ className, variant }: LoginButtonProps) {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.data?.user) {
      router.push("/dashboard");
    }
  }, [session, router]);

  return (
    <div className="flex flex-col gap-2">
      <Button
        variant={variant}
        onClick={() => signIn("google")}
        className={cn(className)}
      >
        <RiGoogleFill
          className="me-3 text-[#000000]"
          size={16}
          aria-hidden="true"
        />
        Login with Google
      </Button>
    </div>
  );
}
