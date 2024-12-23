import { LoginButton } from "@/components/ui/button/LoginButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "./ui/input";
import Logo from "@/public/Sol-track-logo.png";
import Image from "next/image";

export function LoginCard() {
  return (
    <Card className="bg-[#14151B] dark">
      <CardHeader className="flex flex-col justify-between items-center gap-2">
        <Image src={Logo} alt="logo" width={70} height={70} />
        <CardTitle>Sign in</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <p className="text-sm text-center">or</p>
          <LoginButton className="h-10" variant="default" />
        </div>
      </CardContent>
    </Card>
  );
}
