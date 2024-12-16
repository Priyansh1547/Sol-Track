import { Button } from "@/components/ui/button/Button";
import { RiGoogleFill } from "@remixicon/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function LoginButton() {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.data?.user) {
      router.push("/dashboard");
    }
  }, [session, router]);

  return (
    <div className="flex flex-col gap-2">
      <Button variant="outline" onClick={() => signIn("google")}>
        <RiGoogleFill
          className="me-3 text-[#000000] dark:text-white/60"
          size={16}
          aria-hidden="true"
        />
        Login with Google
      </Button>
    </div>
  );
}
