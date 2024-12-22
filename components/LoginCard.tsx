import { LoginButton } from "@/components/ui/button/LoginButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function LoginCard() {
  return (
    <Card className="bg-[#14151B] dark">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <LoginButton />
      </CardContent>
    </Card>
  );
}
